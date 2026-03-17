const buttonLightElement = document.getElementById("tombol-terang");
const buttonDarkElement = document.getElementById("tombol-gelap");
const teks = document.getElementById("teks");

buttonLightElement.addEventListener("click", (event) => {
    document.documentElement.classList.remove("dark-mode");
});

buttonDarkElement.addEventListener("click", (event) => {
    document.documentElement.classList.add("dark-mode");
});

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
