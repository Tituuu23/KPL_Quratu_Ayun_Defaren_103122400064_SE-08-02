const tanggal = new Date();

const formatter = new Intl.DateTimeFormat('id-ID', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

console.log(formatter.format(tanggal));