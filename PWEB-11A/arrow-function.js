const hitungNilai = (nama, nilaiTugas, nilaiUjian) => {
    const a = nilaiTugas * 0.4;
    const b = nilaiUjian * 0.6;
    const nilaiAkhir = a + b;

    if (nilaiAkhir >= 75){
        console.log("Selamat " + nama + " lulus dengan nilai " + nilaiAkhir);
    } else {
        console.log("Mohon maaf, " + nama + " tidak lolos dengan nilai akhir " + nilaiAkhir);
    }
}

hitungNilai(" Rizky " ,20 ,50);
