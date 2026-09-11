// First class citizen itu => function yang dapat ditulis layaknya variable
const umurMultiply = function (umur) {
    return umur * 2;
}

function multiply(numA, numB){
    return numA * numB;
}

function calculate(operation, num) {
    return operation(num) / 2; // return adalah eksekusi sebuah fungsi
}

const result = calculate(umurMultiply, 3);
console.log(result);

// console.log(calculate(umurMultiply(21,2)));// error karena argumen operasi diisi dengan
// console.log(calculate(multiply(2,2), 3));

function calculateMultiply(funct, numA, numB)  {
    return funct(numA, numB);
}

//contoh lain
function sapa(){
    return"Hello World"
}

function sapaGhazali(fungsi, nama){
    return fungsi() + nama
}

alert("NIGAR")