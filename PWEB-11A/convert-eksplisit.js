//konversi eksplisit

// 1. konversi ke string

let angka = 100;
let isFauzanMarried = false;
let floatNumber = 3.14;

// String(parameter); param -> variable atau ekspresi yang ingin dikonversi ke string 
const angkaToString = String(angka);
const isFauzanMarriedToString = String(isFauzanMarried);
const floatNumberToString = String(floatNumber);

console.info("konversi ke string: menggunakan string param")
console.log(angkaToString);
console.log(isFauzanMarriedToString);
console.log(floatNumberToString);

// .toString(); tanpa param, deklarasi setelah variable atau ekspresi
const angkaToString2 = angkaToString .toString();
const isFauzanMarriedToString2 = isFauzanMarried .toString();
const floatNumberToString2 =floatNumber .toString();

console.info("Konversi ke string: menggunakan .toString()")
console.log(angkaToString2);
console.log(isFauzanMarriedToString2);
console.log(floatNumberToString2);

//konversi ke number
let strNumber = '123';
let strFloat = '3.14';
let isFulanAbsent = true;


//Number(param): param -> variable atau ekspresi yang ingin di konversi

const numFromString = Number(strNumber);
const floatFromString = Number(strFloat);
const numFromBoolean = Number(isFulanAbsent);

console.info("konversi ke number menggunakan Number(param)")
console.log(numFromString);
console.log(floatFromString);
console.log(numFromBoolean);

//parseInt(param);
const cm = '20cm';
const px = '64px';

const intFromCM = parseInt(cm);
const intFrompx = parseInt(px);

console.info('parseInt')
console.log(intFromCM);
console.log(intFrompx);

//parseFloat(param);
let phi = '3.14Phi';
let tegangan = '20.5Volt';

const floatFromPhi = parseFloat(phi);
const floatFromTegangan = parseFloat(tegangan);

console.info('parsefloat');
console.log(floatFromPhi);
console.log(floatFromTegangan);

//convert to boolean
const number = 123 ;
const string = 'string';
const empty = null;

const numberToBoolean = Boolean(number);
const stringToBoolean = Boolean(string);
const emptyToBoolean =Boolean(empty);

console.info('konversi ke boolean menggunakan Boolean(param);')
console.log(numberToBoolean);
console.log(stringToBoolean);
console.log(emptyToBoolean);


//atau bisa menggunakan
console.info('langsung di console.log(Boolean(param))')
console.log(Boolean(number));
console.log(Boolean(string));
console.log(Boolean(empty));
