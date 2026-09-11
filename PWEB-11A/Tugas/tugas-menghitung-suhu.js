const dataSuhu2 = [
    100, // Elemen 1: Nilai Celcius
    212, // Elemen 2: Nilai Fahrenheit

    // Elemen 3: Function konversi Celcius (elemen 1) ke Fahrenheit
    function() {
        return (this[0] * 9 / 5) + 32;
    },

    // Elemen 4: Function konversi Fahrenheit (elemen 2) ke Celcius
    function() {
        return (this[1] - 32) * 5 / 9;
    }
];

// Output (Menggunakan backtick ` untuk template literals)
console.log("=== CONTOH 2 ===");
console.log(`Nilai Awal Celcius    : ${dataSuhu2[0]}°C`);
console.log(`Nilai Awal Fahrenheit : ${dataSuhu2[1]}°F`);
console.log(`Hasil C -> F (Elemen 3): ${dataSuhu2[2]()}°F`);
console.log(`Hasil F -> C (Elemen 4): ${dataSuhu2[3]()}°C`);