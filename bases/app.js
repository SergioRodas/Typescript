"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let FuerzaSuperHeroes;
    (function (FuerzaSuperHeroes) {
        FuerzaSuperHeroes[FuerzaSuperHeroes["acuaman"] = 0] = "acuaman";
        FuerzaSuperHeroes[FuerzaSuperHeroes["batman"] = 1] = "batman";
        FuerzaSuperHeroes[FuerzaSuperHeroes["flash"] = 5] = "flash";
        FuerzaSuperHeroes[FuerzaSuperHeroes["superman"] = 100] = "superman";
    })(FuerzaSuperHeroes || (FuerzaSuperHeroes = {}));
    ;
    const fuerzaFlash = FuerzaSuperHeroes.flash;
    const fuerzaSuperman = FuerzaSuperHeroes.superman;
    const fuerzaBatman = FuerzaSuperHeroes.batman;
    const fuerzaAcuaman = FuerzaSuperHeroes.acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
