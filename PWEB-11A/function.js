//Kenapa Function ada Untuk menghindari pekerjaan yang redundan (repetitif) 
// Identifier = nama fungsi
// () parentheses=> parameter
// {} curly braces => isi dari fungsi yang akan berjalan
// Untuk mengembalikan atau memberikan output dari fungsi nya
// Argumen adalah nilai yang diberikan didalam parentheses atau () saat pemanggilan dan pembuatan function
// 
//
//
//
//
//
function greetWorld(){
    console.log("Hello World");
}

function convertCelciusToFahrenheit(temperature){
    const temperatureInFahrenheit = 9/5 * temperature + 32;

    console.log('Hasil Konverensi Celcius Ke fahrenheit ' + temperatureInFahrenheit);
    
}
convertCelciusToFahrenheit(20); // Contoh menggunakan ekspresi langsung = 68
convertCelciusToFahrenheit(10); // -- hasilnya = 50

console.log(convertCelciusToFahrenheit(30));
console.log(convertCelciusToFahrenheit);

const temperatureInFahrenheit = 50 ;
convertCelciusToFahrenheit(temperatureInFahrenheit); // contoh menggunalan variable di parameter = 22


// Salah satu kelebihan JavaScript => "hoisting" yakni memungkinkan kita menulis kode pemanggilan sebelum pendeklarasian function

doubleTwo(4) // 8
fullName('Abdullah', 'Ahmad', 'Irsyad');
doubleTwo();//undefined
fullName();//undefined

function doubleTwo(number) {
    if (number == NaN){
        console.log('Parameter kosong');
    } else {
    console.log(number * 2);
    }
    
}

function doubleTwo(number = 2) {
    console.log(number * 2);
    
}

function fullName(namaPertama, namaKedua, namaKetiga){
    console.log(namaPertama + ' ' + namaKedua + ' ' + namaKetiga);
    
}

// contoh tidak pakai default parameter
kaliTiga();
kaliTiga(3);

function kaliTiga(number) {
    if (number != NaN || number != undefined){
        console.log(number * 3);
    } else {
    console.log('Not a Number');
    }
    
}



