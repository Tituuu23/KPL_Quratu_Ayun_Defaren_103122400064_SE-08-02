function processData(data) {
  const str = String(data).toLowerCase();

  const num = Number(str);

  if (!isNaN(num)) {
    return `Number: ${num * 2}`;
  }

  return `Teks: ${str} (panjangnya: ${str.length})`;
}

module.exports = processData;