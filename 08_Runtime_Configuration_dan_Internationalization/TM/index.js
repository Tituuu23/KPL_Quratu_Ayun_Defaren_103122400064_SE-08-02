require('dotenv').config({ quiet: true }); // biar ga muncul "injected"

const axios = require('axios');

const API_URL = process.env.BASE_API;

console.log("API_URL:", API_URL);

// function format rupiah
function formatRupiah(angka) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(angka);
}

// function format tanggal
function formatTanggal(date) {
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date);
}

// function format angka biasa
function formatAngka(angka) {
  return new Intl.NumberFormat('id-ID', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(angka);
}

async function getKurs(jumlah) {
  try {
    const res = await axios.get(API_URL);

    const rates = res.data.idr;
    const tanggal = new Date(res.data.date);

    const cnh = jumlah * rates.CNH;
    const eur = jumlah * rates.EUR;

    console.log(
      `Kurs ${formatRupiah(jumlah)} pada ${formatTanggal(tanggal)} adalah CNH ${formatAngka(cnh)} dan ${formatAngka(eur)} €`
    );

  } catch (err) {
    console.error("Error ambil data:", err.message);
  }
}

// TEST
getKurs(25000);
getKurs(50000);
getKurs(100000);