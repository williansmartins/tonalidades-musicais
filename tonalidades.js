(function (globalScope, factory) {
    if (typeof module === "object" && module.exports) {
        module.exports = factory();
        return;
    }

    globalScope.Tonalidades = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
    const acidentesSustenidos = ["F#", "C#", "G#", "D#", "A#", "E#", "B#"];
    const acidentesBemois = ["Bb", "Eb", "Ab", "Db", "Gb", "Cb", "Fb"];

    const nomeDasTonalidadesSustenidos = ["G", "D", "A", "E", "G#", "F#", "C#"];
    const nomeDasTonalidadesBemois = ["F", "Bb", "Eb", "Ab", "Db", "Gb", "Cb"];

    function obterInfoTonalidade(tonalidade) {
        if (tonalidade === "C") {
            return {
                tonalidade,
                tipo: "natural",
                quantidade: 0,
                acidentes: [],
            };
        }

        const indexBemol = nomeDasTonalidadesBemois.indexOf(tonalidade);
        if (indexBemol >= 0) {
            const acidentes = acidentesBemois.slice(0, indexBemol + 1);
            return {
                tonalidade,
                tipo: "bemol",
                quantidade: acidentes.length,
                acidentes,
            };
        }

        const indexSustenido = nomeDasTonalidadesSustenidos.indexOf(tonalidade);
        if (indexSustenido >= 0) {
            const acidentes = acidentesSustenidos.slice(0, indexSustenido + 1);
            return {
                tonalidade,
                tipo: "sustenido",
                quantidade: acidentes.length,
                acidentes,
            };
        }

        throw new Error("Tonalidade invalida: " + tonalidade);
    }

    function listarTonalidades() {
        return ["C", ...nomeDasTonalidadesSustenidos, ...nomeDasTonalidadesBemois];
    }

    return {
        acidentesSustenidos,
        acidentesBemois,
        nomeDasTonalidadesSustenidos,
        nomeDasTonalidadesBemois,
        obterInfoTonalidade,
        listarTonalidades,
    };
});
