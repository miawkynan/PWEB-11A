//  SISTEM PENENTUAN GAJI KARYAWAN
//  WAJIB PAKAI ARROW FUNCTION 
//  satu function dengan nama hitungGaji yang memiliki 3 parameter (nama, gajiPokok, jumlahJamLembur)
//  ketentuannya sebagai berikut:
//  - Setiap jam lembur (per jam) mendapatkan tambahan Rp25.000
//  - Hitung total uang lembur (jumlahJamLembur * 25)
//  - Hitung gaji pokok sebelum bonus (gajiPokok + uangLembur)
//  - Karyawan mendapatkan bonus berdasarkan gaji sebelum bonus dengan ketentuan:
//  Jika gaji >= 5.000.000 -> bonus 10%
//  Jika gaji >= 3.000.000 -> bonus 5%
//  Jika kurang dari 3.000.000 -> tidak dapat bonus
//   - Hitung gaji akhir (gajiSebelumBonus + bonus)
//   - Gunakan ternary operator untuk menentukan status:
//  Gaji akhir >= 5.000.000 -> "Gaji nama lumayan tinggi"
//  Gaji akhir selain itu -> "Gaji nama standar"
//  Return value functionnya harus string
// Contoh output yang diharapkan: "nama mendapatkan gaji totalGaji dengan status Gaji sesuai dengan status"
const hitungGaji = (nama, gajiPokok, jumlahJamLembur) => {
    const bonusLemburPerJam = 25000;
    const totalUangLembur = bonusLemburPerJam * jumlahJamLembur
    const gajiPokokSebelumBonus = gajiPokok + totalUangLembur;
    let bonus;
    if(gajiPokokSebelumBonus >= 5000000){
        bonus * 0.1;
    } else if (gajiPokokSebelumBonus >= 3000000){
        bonus * 0.05
    } else{
        0
    }
    
    const gajiAkhir = gajiPokokSebelumBonus + bonus;
    return hitungGaji;
}

hitungGaji("Rizky ", 2000000, 9)
