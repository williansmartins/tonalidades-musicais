const test = require("node:test");
const assert = require("node:assert/strict");

const { obterInfoTonalidade, listarTonalidades } = require("../app");

test("retorna tom natural para C", () => {
    const info = obterInfoTonalidade("C");

    assert.equal(info.tipo, "natural");
    assert.equal(info.quantidade, 0);
    assert.deepEqual(info.acidentes, []);
});

test("retorna acidentes de sustenido para D", () => {
    const info = obterInfoTonalidade("D");

    assert.equal(info.tipo, "sustenido");
    assert.equal(info.quantidade, 2);
    assert.deepEqual(info.acidentes, ["F#", "C#"]);
});

test("retorna acidentes de bemol para Db", () => {
    const info = obterInfoTonalidade("Db");

    assert.equal(info.tipo, "bemol");
    assert.equal(info.quantidade, 5);
    assert.deepEqual(info.acidentes, ["Bb", "Eb", "Ab", "Db", "Gb"]);
});

test("retorna 1 bemol para F", () => {
    const info = obterInfoTonalidade("F");

    assert.equal(info.tipo, "bemol");
    assert.equal(info.quantidade, 1);
    assert.deepEqual(info.acidentes, ["Bb"]);
});

test("lista todas as tonalidades na ordem esperada", () => {
    assert.deepEqual(listarTonalidades(), [
        "C",
        "G",
        "D",
        "A",
        "E",
        "G#",
        "F#",
        "C#",
        "F",
        "Bb",
        "Eb",
        "Ab",
        "Db",
        "Gb",
        "Cb",
    ]);
});

test("lanca erro para tonalidade invalida", () => {
    assert.throws(() => obterInfoTonalidade("H"), /Tonalidade invalida/);
});
