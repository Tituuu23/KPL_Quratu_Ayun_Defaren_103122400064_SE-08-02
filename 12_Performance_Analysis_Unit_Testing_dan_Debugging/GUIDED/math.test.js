import test from 'node:test';
import assert from 'node:assert';

test.describe("Operasi matematika", () => {

    test.it("1 sama dengan 1", () => {
        assert.strictEqual(1, 1);
    });

    test.it("1 tidak sama dengan dua", () => {
        assert.notStrictEqual(1, 2);
    });

    test.it("1 tambah 2 sama dengan 3", () => {
        assert.strictEqual(1 + 2, 3);
    });

});

test.describe("float", () => {
    test.it("0.1 + 0.2 should equal 0.3", () => {
        assert.ok(
            Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON
        );
    });
});

test.it("pecahan desimal", () => {
    assert.strictEqual(1.1 + 2, 3.1);
});

math.test.js