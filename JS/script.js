"use strict";
var aliquoteInps;
(function (aliquoteInps) {
    aliquoteInps[aliquoteInps["aliquotaCassa"] = 0.33] = "aliquotaCassa";
    aliquoteInps[aliquoteInps["aliquotaSenzaCassa"] = 0.25] = "aliquotaSenzaCassa";
})(aliquoteInps || (aliquoteInps = {}));
var aliquoteIrpef;
(function (aliquoteIrpef) {
    aliquoteIrpef[aliquoteIrpef["aliquota1"] = 0.23] = "aliquota1";
    aliquoteIrpef[aliquoteIrpef["aliquota2"] = 0.25] = "aliquota2";
    aliquoteIrpef[aliquoteIrpef["aliquota3"] = 0.35] = "aliquota3";
    aliquoteIrpef[aliquoteIrpef["aliquota4"] = 0.43] = "aliquota4";
})(aliquoteIrpef || (aliquoteIrpef = {}));
class TasseInps {
    constructor(aliquotaInps) {
        this.aliquotaInps = aliquotaInps;
    }
    get getAliquotaInps() {
        return this.aliquotaInps;
    }
}
class TasseIrpef {
    constructor(aliquotaIrpef) {
        this.aliquotaIrpef = aliquotaIrpef;
    }
    get getAliquotaIrpef() {
        return this.aliquotaIrpef;
    }
}
class Lavoratore {
    //   constructor(redditoAnnuoLordo: number, tasseLavoratoreInps: TasseInps["getAliquotaInps"], tasseLavoratoreIrpef: TasseIrpef["getAliquotaIrpef"]) {
    constructor(redditoAnnuoLordo, tasseLavoratoreInps, tasseLavoratoreIrpef) {
        // this.codredd = codredd;
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.tasseLavoratoreInps = tasseLavoratoreInps;
        this.tasseLavoratoreIrpef = tasseLavoratoreIrpef;
    }
    get getRedditoAnnuoLordo() {
        return this.redditoAnnuoLordo;
    }
    getTasseInps() {
        let redditoTassatoInps = this.getRedditoAnnuoLordo * this.tasseLavoratoreInps;
        return redditoTassatoInps;
    }
    getTasseIrpef() {
        let redditoTassatoIrpef = this.getRedditoAnnuoLordo * this.tasseLavoratoreIrpef;
        return redditoTassatoIrpef;
    }
    getRedditoAnnuoNetto(redditoAnnuoLordo, redditoTassatoInps, redditoTassatoIrpef) {
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
