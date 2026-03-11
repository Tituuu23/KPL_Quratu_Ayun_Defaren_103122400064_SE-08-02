const array = [8, 9, 32, 75, 84];

function fizzBuzz(arr){
    const result = [];

    for (let i = 0; i < arr.length; i++){
        const num = arr[i];

        if (num % 14 === 0){
            result.push("FizzBuzz");
        } else if (num % 2 === 0){
            result.push("Fizz");
        } else if (num % 7 === 0){
            result.push("Buzz");
        } else {
            result.push(num);
        }
    }

    return result;
}

console.log(fizzBuzz(array)); 