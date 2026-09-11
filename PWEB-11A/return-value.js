//Return Value

function jumlah (a, b) {
    const result = a + b;
    return result;
    // Return untuk mengembalikan hasil dari function
}


function sapaAkuBang() {
    return "Halo Bang"; // return sudah di eksekusi sehingga kode di bawahnya tidak
    console.log("Halo Juga Bang"); // tidak pernah di eksekusi
    
}

function luasPersegi(sisi) {
    const result = sisi * sisi
    return result;
}

function sapaByZona(waktu) {
    let result = "" ;
    if (waktu === "Pagi") {
        result = "Selamat Pagi";
    } else if (waktu === "siang") {
        result = "Selamat siang";
    } else if (waktu === "Sore") {
        result = "Selamat Sore";
    } else if (waktu === "Malam") {
        result = "Selamat Malam";
    } else {
        result = " Waktu tidak valid";
    }

   return result;
}

function sapaByZonaRingkas(waktu){
    return "Selamat" + waktu;
}
console.info("ZONA DENGAN KONDISI");
console.log(sapaByZona("Malam")); //Selamat malam
console.log(sapaByZona("Tengah Malam")); //Waktu Tidak Solid

console.info("ZONA TANPA KONDISI");
console.log(sapaByZonaRingkas("Malam"));










console.log("2 + 8: ", jumlah(2, 8));
console.log(luasPersegi(19));
