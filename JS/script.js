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
        let redditoTassatoInps = this.getRedditoAnnuoLordo * this.tasseLavoratoreInps.getAliquotaInps;
        return redditoTassatoInps;
    }
    getTasseIrpef() {
        let redditoTassatoIrpef = this.getRedditoAnnuoLordo * this.tasseLavoratoreIrpef.getAliquotaIrpef;
        return redditoTassatoIrpef;
    }
    getRedditoAnnuoNetto(redditoAnnuoLordo, redditoTassatoInps, redditoTassatoIrpef) {
        let redditoAnnuoNetto = redditoAnnuoLordo - redditoTassatoInps - redditoTassatoIrpef;
        return redditoAnnuoNetto;
    }
}
let tasseLavoratoreInps = new TasseInps(aliquoteInps.aliquotaCassa);
let tasseLavoratoreIrpef = new TasseIrpef(aliquoteIrpef.aliquota1);
let lavoratore = new Lavoratore(10000, tasseLavoratoreInps, tasseLavoratoreIrpef);
let lavoratoreLordo = lavoratore.getRedditoAnnuoLordo;
console.log(lavoratoreLordo);
console.log(lavoratore.getTasseInps);
console.log(lavoratore.getTasseIrpef);
console.log(lavoratore.getRedditoAnnuoNetto);
