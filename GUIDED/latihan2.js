/**
 * buatlah sebuah array berisi 3 minuman fav kalian
 * dan simpan dalam variabel bernama listMinum. 
 * Setelah itu ubah 2 elemen pertama mengggunakan notasi kurung dan penugasan. 
 * Terakhir, tambahkan minuman baru di depan array
 */

const listMinum = ["air putih", "kopi", "matcha"];

listMinum[0] = "jus mangga";
listMinum[1] = "americano";

console.log(listMinum);

listMinum.unshift("green tea");

console.log(listMinum);