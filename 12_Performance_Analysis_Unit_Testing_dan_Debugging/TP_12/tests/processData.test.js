const processData = require("../src/processData");

test("string angka", () => {
  expect(processData("123")).toBe("Number: 246");
});

test("number", () => {
  expect(processData(456)).toBe("Number: 912");
});

test("text", () => {
  expect(processData("hello"))
    .toBe("Teks: hello (panjangnya: 5)");
});

test("boolean", () => {
  expect(processData(true))
    .toBe("Teks: true (panjangnya: 4)");
});