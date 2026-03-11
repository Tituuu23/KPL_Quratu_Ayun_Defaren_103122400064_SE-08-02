/**
 * tulislah sebuah fungsi yang menerima bilangn N dan mencetak penjumlahan dari 1 hingga N. contohnya, jika N adalah 5, maka fungsi akan mencetak 15 (1 + 2 + 3)
 */

function sumValues(N){
    result = 0;
    for (let i = 0; i <= N; i = i + 1) {
           result = result + i;
    } return result
}
const arr1Result = sumValues(1000);
console.log(arr1Result); ///untuk ngeprint dalam pemograman javascript
