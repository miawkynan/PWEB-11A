// Object adalah kumpulan pasangan key value dan bukan merupakan tipe data yang bukan primitif.
// Object dapat menyimpan berbagi tipe data, termasuk tipe data primitif dan non-primitif tidak dapat diubah setelah dibuat
// contoh tipe data primitif adalah: String, number, boolean, null, undefined, dan Symbol

// tipe data primitif

// contoh Object literal
const objectLiteral = {}; // di dalam tanda kurung disebut dengan properti, properi terdiri dari key dan value
const products = {
    name: "Laptop", // nama adalah key dan Laptop adalah value
    price: 4500000, // price adalah key dan 4500000 adalah value
    category: "Electronics", // category adalah key dan Electronics adalah value
    "stok": 10, // stok adalah key dan 10 adalah value
    "isAvailable": true, // isAvailable adalah key dan true adalah value
};

// cara mengakses properti pada object
// 1. menggunakan dot notation (.)
console.info("Mengakses property pada object menggunakan dot notation")
console.log(products.name);
console.log(products.isAvailable);
console.log(products.price);

// Kekurangan dari dot notation adalah nama key yang ingin diakses harus valid;
// tidak boleh mengandung spasi;
// tidak boleh diawali angka;
// dan tidak boleh mengandung spesial karakter.

// 2. Menggunakan Square Braket
console.info("Mengakses property menggunakan Square Bracket");
const isProductAvailable = products['isAvailable']; // menyimpan property didalam variable lain
const namaProduct = 
console.log(isProductAvailable);

// 3. Menggunakan Object Destructuring
const kelas = {
    "totalMeja": 21,
    totalSiswa: 20,
    isClean: false 
};

// Destructuring dalam Javascript merupakan sintaksis yang dapat mengeluarkan nilai dari properti object
// ke dalam satuan yang lebih kecil (variable)
const {isClean, totalSiswa} = kelas;
console.info("Mengakses property pada object menggunakan object destructuring");
console.log(isClean);
console.log(totalSiswa);

// Detructuring object yang key-nya tidak ada akan mengembalikan nilai undefined. Oleh karena itu, kita bisa memanfaatkan default value ketika destructuring obejct seperti berikut ini agar nilainya tidak undefined
const {isTvMerdeka} = kelas; //return undefined karena tidak ada key nya di object kelas.
console.log(isTvMerdeka);

const {totalSiswaHasLaptop = 18} = kelas // kita kasih default value pada key yang tidak ada di dalam property object
console.log(totalSiswaHasLaptop);

// Contoh lain
const user = {
    id: 24,
    email: "assalamualaikum@gmail.com",
    nama: "Rizky",
    nickname: "Bro",
    username: "rizky123",
    password: "rahasia",
};
// sangat memudahkan untuk mengambil beberapa properti dari object sekaligus tanpa harus menulisnya satu per satu
const {nama, password} = user;
console.log(user);

// Mengubah value property pada object

const account = {
    username: 'Rizky',
    password: 'rahasia',
    isActive: true,
    isBanned: false
}

account.isBanned = true; // mengubah value property isBanned


