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
  private aliquotaInps: Enumerator<number>;

  constructor(aliquotaInps: Enumerator<number>) {
    this.aliquotaInps = aliquotaInps;
  }

  public get getAliquotaInps() {
    return this.aliquotaInps;
  }
}

class TasseIrpef {
  private aliquotaIrpef: Enumerator<number>;

  constructor(aliquotaIrpef: Enumerator<number>) {
    this.aliquotaIrpef = aliquotaIrpef;
  }

  public get getAliquotaIrpef() {
    return this.aliquotaIrpef;
  }
}
class Lavoratore {
  //   private codredd: number;
  private redditoAnnuoLordo: number;
  private tasseLavoratoreInps: TasseInps["getAliquotaInps"];
  private tasseLavoratoreIrpef: TasseIrpef["getAliquotaIrpef"];

  //   constructor(redditoAnnuoLordo: number, tasseLavoratoreInps: TasseInps["getAliquotaInps"], tasseLavoratoreIrpef: TasseIrpef["getAliquotaIrpef"]) {

  constructor(redditoAnnuoLordo: number, tasseLavoratoreInps: TasseInps["getAliquotaInps"], tasseLavoratoreIrpef: TasseIrpef["getAliquotaIrpef"]) {
    // this.codredd = codredd;
    this.redditoAnnuoLordo = redditoAnnuoLordo;
    this.tasseLavoratoreInps = tasseLavoratoreInps;
    this.tasseLavoratoreIrpef = tasseLavoratoreIrpef;
  }

  public get getRedditoAnnuoLordo() {
    return this.redditoAnnuoLordo;
  }

  getTasseInps() {
    let redditoTassatoInps = this.getRedditoAnnuoLordo * <number>(<unknown>this.tasseLavoratoreInps);
    return redditoTassatoInps;
  }

  getTasseIrpef() {
    let redditoTassatoIrpef = this.getRedditoAnnuoLordo * <number>(<unknown>this.tasseLavoratoreIrpef);
    return redditoTassatoIrpef;
  }

  getRedditoAnnuoNetto(redditoAnnuoLordo: number, redditoTassatoInps: number, redditoTassatoIrpef: number) {
    let redditoAnnuoNetto = redditoAnnuoLordo - redditoTassatoInps - redditoTassatoIrpef;
    return redditoAnnuoNetto;
  }
}

let lavoratore = new Lavoratore(10000, aliquoteInps.aliquotaCassa, aliquoteIrpef.aliquota1);

//   class Lavoratore {
//     //   private codredd: number;
//     private redditoAnnuoLordo: number;
//     private tasseLavoratoreInps = new TasseInps();
//     private tasseLavoratoreIrpef= new TasseIrpef();

//     //   constructor(redditoAnnuoLordo: number, tasseLavoratoreInps: TasseInps["getAliquotaInps"], tasseLavoratoreIrpef: TasseIrpef["getAliquotaIrpef"]) {

//     constructor(redditoAnnuoLordo: number, tasseLavoratoreInps: TasseInps["getAliquotaInps"], tasseLavoratoreIrpef: TasseIrpef["getAliquotaIrpef"]) {
//       // this.codredd = codredd;
//       this.redditoAnnuoLordo = redditoAnnuoLordo;
//       this.tasseLavoratoreInps = tasseLavoratoreInps;
//       this.tasseLavoratoreIrpef = tasseLavoratoreIrpef;
//     }

//     public get getRedditoAnnuoLordo() {
//       return this.redditoAnnuoLordo;
//     }

//     public set setRedditoAnnuoLordo(reddito: number) {
//       this.redditoAnnuoLordo = reddito;
//     }

//     getTasseInps() {
//       let redditoTassatoInps = this.getRedditoAnnuoLordo * <number>(<unknown>this.tasseLavoratoreInps);
//       return redditoTassatoInps;
//     }

//     getTasseIrpef() {
//       let redditoTassatoIrpef = this.getRedditoAnnuoLordo * <number>(<unknown>this.tasseLavoratoreIrpef);
//       return redditoTassatoIrpef;
//     }

//     getRedditoAnnuoNetto(redditoAnnuoLordo: number, redditoTassatoInps: number, redditoTassatoIrpef: number) {
//       let redditoAnnuoNetto = redditoAnnuoLordo - redditoTassatoInps - redditoTassatoIrpef;
//       return redditoAnnuoNetto;
//     }
//   }

//   let lavoratore = new Lavoratore(10000, TasseInps., aliquoteIrpef.aliquota1);
