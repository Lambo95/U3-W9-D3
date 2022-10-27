enum aliquoteInps {
  aliquotaCassa = 0.33,
  aliquotaSenzaCassa = 0.25,
}

enum aliquoteIrpef {
  aliquota1 = 0.23,
  aliquota2 = 0.25,
  aliquota3 = 0.35,
  aliquota4 = 0.43,
}

class TasseInps {
  private aliquotaInps: aliquoteInps;

  constructor(aliquotaInps: aliquoteInps) {
    this.aliquotaInps = aliquotaInps;
  }

  public get getAliquotaInps() {
    return this.aliquotaInps;
  }
}

class TasseIrpef {
  private aliquotaIrpef: aliquoteIrpef;

  constructor(aliquotaIrpef: aliquoteIrpef) {
    this.aliquotaIrpef = aliquotaIrpef;
  }

  public get getAliquotaIrpef() {
    return this.aliquotaIrpef;
  }
}
class Lavoratore {
  //   private codredd: number;
  private redditoAnnuoLordo: number;
  private tasseLavoratoreInps: TasseInps;
  private tasseLavoratoreIrpef: TasseIrpef;

  //   constructor(redditoAnnuoLordo: number, tasseLavoratoreInps: TasseInps["getAliquotaInps"], tasseLavoratoreIrpef: TasseIrpef["getAliquotaIrpef"]) {

  constructor(redditoAnnuoLordo: number, tasseLavoratoreInps: TasseInps, tasseLavoratoreIrpef: TasseIrpef) {
    // this.codredd = codredd;
    this.redditoAnnuoLordo = redditoAnnuoLordo;
    this.tasseLavoratoreInps = tasseLavoratoreInps;
    this.tasseLavoratoreIrpef = tasseLavoratoreIrpef;
  }

  public get getRedditoAnnuoLordo() {
    return this.redditoAnnuoLordo;
  }

  getTasseInps() {
    let redditoTassatoInps = this.getRedditoAnnuoLordo * this.tasseLavoratoreInps.getAliquotaInps;
    return redditoTassatoInps;
  }

  getTasseIrpef() {
    let redditoTassatoIrpef = this.getRedditoAnnuoLordo * this.tasseLavoratoreIrpef.getAliquotaIrpef;
    return redditoTassatoIrpef;
  }

  getRedditoAnnuoNetto(redditoAnnuoLordo: number, redditoTassatoInps: number, redditoTassatoIrpef: number) {
    let redditoAnnuoNetto = redditoAnnuoLordo - redditoTassatoInps - redditoTassatoIrpef;
    return redditoAnnuoNetto;
  }
}
let tasseLavoratoreInps = new TasseInps(aliquoteInps.aliquotaCassa);
let tasseLavoratoreIrpef = new TasseIrpef(aliquoteIrpef.aliquota1);
let lavoratore = new Lavoratore(10000, tasseLavoratoreInps, tasseLavoratoreIrpef);

let lavoratoreLordo = lavoratore.getRedditoAnnuoLordo;
console.log(lavoratoreLordo);

console.log(lavoratore.getTasseInps());
console.log(lavoratore.getTasseIrpef());
console.log(lavoratore.getRedditoAnnuoNetto(10000, lavoratore.getTasseInps(), lavoratore.getTasseIrpef()));
