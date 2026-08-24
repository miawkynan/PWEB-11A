//konversi eksplisit = konversi langsung dari javascript
const age = 40;
const message = 'umur anda:' + age;
const jumlah = '40' + 40 ;

console.info('konversi implisit');
console.log(message);
console.log(age);
console.log(jumlah);
console.log(Number(jumlah));

//konversi implisit Boolean dan String
const boolean = true;
const nomor = 10;
const result = boolean + nomor;

console.info('konversi implisit Boolean dan String');
console.log(result);

const pertanyaan = jumlah + boolean;
console.info('konversi implisit Boolean dan String');
console.log(pertanyaan);

const gabungan = jumlah + boolean + nomor;
console.log(gabungan);


