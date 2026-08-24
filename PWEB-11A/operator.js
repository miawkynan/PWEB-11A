// jenis-jenis operator
// 1. Unary
// 2. Binary
// 3. Ternary

//Unari => operator yang hanya satu operan
typeof 'Dicoding';


//Binery => operator yang memiliki 2 operan
1 + 2;
1 * 2;
1 % 2;
1 / 2;


//Ternary => operator yang memiliki 3 operan
let inputAge = 20;
let maxAge = 18;
if(inputAge <= maxAge){
    console.log('maaf anda belum layak menonton');
} else {
    console.log('silahkan nonton');
}

// Menggunakan ternary operator
(inputAge <= maxAge) ? "maaf anda belum layak menonton" : "silahkan nonton"

// assignment Operator '=' : menginisiasi nilai dan memperbarui nilai
console.info("operator assignment")
var variable = 90;
console.log(variable);//90
variable = 40;
console.log(variable);//40

//operator aritmatika (sedikit tambahan)
// increment (++)
var x = 50;
console.info('Operator aritmetika: increment'); //untuk menambah 1 nilai dari variable
console.log(x++);
console.log(x++);
console.log(x++);
console.log(x++);
console.log(x++);
console.log(x++);

//decrement (--)
var z = 100;
console.info('Operator aritmetika decrement'); //untuk mengurangi 1 nilai dari variable
console.log(z--);
console.log(z--);

console.log(--z);
console.log(--z);

//eksponensial (**)
var c = 4;

console.info('Eksponensail');
console.log(c ** 2); // 16
console.log(c ** c); // 256

//operasi comparison / operasi perbandingan => membandingkan 2 nilai dan mengembalikan 2 nilai (true or false)
// sama (==) => untuk membandingkan ke dua operand apakah nilainya sama tanpa membandingkan tipe datanya 
let a = 10;
let b = "10";
let isAEqualB = a == b; //true
console.info("sama dengan")
console.log(isAEqualB);
// Tidak sama (!=) => Untuk membandingkan kedua operand apakah nilainya tidak sama tapi tidak dengan tipe datanya
let isANotEqualB = a != b;
console.info("tidak sama dengan")
console.log(isANotEqualB); //false

// Identik (===) => Untuk membandingkan ke dua operan dan tipe datanya.
let d = 10;
let e = '10';
let isDEqualE = d === e;
console.info("identik")
console.log(isDEqualE);


// Tidak indentik (!==) => Untuk membandingkan kedua operan dan tipe datanya
let isDNotEqualE = d !== e;
console.info("tidak identik")
console.log(isDNotEqualE);

//////////////////////////////////
let umur1 = 20; 
let umur2 = 15;

// > Lebih besar
console.info("Lebih besar")
console.log(umur1 > umur2);

// < Lebih kecil
console.info("Lebih kecil")
console.log(umur1 < umur2);

// >= Lebih besar atau sama dengan
console.info("lebih besar atau sama dengan")
console.log(umur1 >= umur2);

// <= Lebih kecil atau sama dengan
console.info("lebih kecil atau sama dengan")
console.log(umur1 <= umur2);

//Operator Logika
console.info("Operator Logika")
// AND
console.info("AND")
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false
console.log((5 === 5) && (3 < 5)); // true
// OR
console.info("OR")
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false
console.log((5 === 5) || (3 > 5)); // true
// NOT
console.info("NOT")
console.log(!true); // false
console.log(!false); // true

//STRING OPERATOR
console.info('STRING OPERATOR')
const kata1 = 'Hello';
const kata2 = 'Word';

const kataKata = kata1 + kata2 ; 
console.log(kataKata);
