// Data Siswa 
const siswa2 = {
    nama: "Budi",
    kelas: "11A",
    nilai: [80, 85, 55, 95, 60]
};

// Function Utama
function prosesNilai(siswa) {
    // 1. Update Nilai (Manipulasi array via index)
    siswa.nilai[2] = 70; // UTS
    siswa.nilai[4] = 85; // Project

    // Ambil tiap komponen nilai
    const tugas = siswa.nilai[0];
    const quiz = siswa.nilai[1];
    const uts = siswa.nilai[2];
    const uas = siswa.nilai[3];
    const project = siswa.nilai[4];

    // 2. Hitung Total Nilai (Tanpa looping)
    const total = tugas + quiz + uts + uas + project;

    // 3. Hitung Rata-Rata
    const rataRata = total / siswa.nilai.length;

    // 4. Tentukan Predikat (Menggunakan Ternary Operator)
    const predikat = rataRata >= 90 ? "A" :
                     rataRata >= 80 ? "B" :
                     rataRata >= 70 ? "C" :
                     rataRata >= 60 ? "D" : "E";

    // 5. Tentukan Status (Menggunakan Ternary Operator)
    const status = (rataRata >= 75 && uts >= 60 && uas >= 60) ? "LULUS" : "TIDAK LULUS";

    // 6. Tentukan Keterangan (Menggunakan Ternary Operator)
    const keterangan = predikat === "A" ? "Sangat Baik" :
                       predikat === "B" ? "Baik" :
                       predikat === "C" ? "Cukup" : "Perlu Perbaikan";

    // 7. Tampilkan Hasil Akhir (Menggunakan backtick ` `)
    console.log("===== HASIL PENILAIAN =====");
    console.log("");
    console.log(`Nama       : ${siswa.nama}`);
    console.log(`Kelas      : ${siswa.kelas}`);
    console.log("");
    console.log(`Tugas      : ${tugas}`);
    console.log(`Quiz       : ${quiz}`);
    console.log(`UTS        : ${uts}`);
    console.log(`UAS        : ${uas}`);
    console.log(`Project    : ${project}`);
    console.log("");
    console.log(`Total      : ${total}`);
    console.log(`Rata-rata  : ${rataRata}`);
    console.log(`Predikat   : ${predikat}`);
    console.log(`Status     : ${status}`);
    console.log(`Keterangan : ${keterangan}`);
}

// Panggil fungsi
prosesNilai(siswa2);