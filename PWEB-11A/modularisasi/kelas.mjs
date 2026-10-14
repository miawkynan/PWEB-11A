export function cekStatusKelas(kelas) {
  let status = "";
  if (kelas == "10A") {
    status = "Kelas 10A adalah kelas RPL";
  } else if (kelas == "10B") {
    status = "Kelas 10B adala kelas BD";
  } else {
    status = "KElas Tidak Ditemukan";
  }
  return console.log(status);
}

export default function multiplyTwo(num) {
  return console.log(num * 2);
}

// export default = function deafault