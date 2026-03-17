const teks = document.getElementById("teks");

teks.addEventListener("input", hitungHuruf);

function hitungHuruf(){

let isi = teks.value;

let total = isi.length;

let besar = (isi.match(/[A-Z]/g) || []).length;

let kecil = (isi.match(/[a-z]/g) || []).length;

document.getElementById("jumlahHuruf").textContent = total;
document.getElementById("hurufBesar").textContent = besar;
document.getElementById("hurufKecil").textContent = kecil;

}

function besar(){
teks.value = teks.value.toUpperCase();
hitungHuruf();
}

function kecil(){
teks.value = teks.value.toLowerCase();
hitungHuruf();
}

function paragraf(){
let kalimat = teks.value.toLowerCase();
teks.value = kalimat.replace(/\b\w/g, c => c.toUpperCase());
hitungHuruf();
}