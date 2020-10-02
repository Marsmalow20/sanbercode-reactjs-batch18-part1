// soal 1
console.log("Soal 1");
function halo() {
    return "Halo!"
}

console.log(halo());

//soal 2
console.log("\nSoal 2");
var num1 = 12;
var num2 = 4;

function kalikan() {
    return num1*num2;
}

var hasilKali = kalikan (num1, num2);
console.log("Hasil 12 * 4 = "+hasilKali);

//soal 3
console.log("\nSoal 3");

var name = "John";
var age = 30;
var address = "2 Willow Creek";
var hobby = "Gaming"

function introduce(name, age, address, hobby) {
    return "Nama saya "+name+", umur saya "+age+" tahun, alamat saya di "+address+", dan saya punya hobi yaitu "+hobby+"!";
}

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);

// soal 4
console.log("\nSoal 4");
var arrayDaftarPeserta = ["Asep", "laki laki", "baca buku", 1992];
var objDaftarPeserta = {
    nama : arrayDaftarPeserta[0],
    jenis_kelamin : arrayDaftarPeserta[1],
    hobi : arrayDaftarPeserta[2],
    tahun_lahir : arrayDaftarPeserta[3]
}

console.log(objDaftarPeserta.nama);
console.log(objDaftarPeserta.jenis_kelamin);
console.log(objDaftarPeserta.hobi);
console.log(objDaftarPeserta.tahun_lahir);

// soal 5
console.log("\nSoal 5");
var buah = [{nama: 'strawberry', warna: 'merah', biji: 'tidak ada', harga: '9000'}, {nama: 'jeruk', warna: 'oranye', biji: 'ada', harga: '8000'}, {nama: 'semangka', warna: 'hijau & merah', biji: 'ada', harga: '10000'}, {nama: 'pisang', warna: 'kuning', biji: 'tidak ada', harga: '5000'}];

// buah.forEach(function(item){
//     console.log("\nBuah");
//     console.log('  Nama   : '+item.nama);
//     console.log('  Warna  : '+item.warna);
//     console.log('  Biji   : '+item.biji);
//     console.log('  Harga  : '+item.harga);
// });

console.log(buah[0]);

// soal 6
console.log("\nSoal 6");
var dataFilm = [];
console.log("Obj dataFilm kosong :")
console.log(dataFilm);
function tambahFilm(namabaru, durasibaru, genrebaru, tahunbaru){
    dataFilm.push({nama:namabaru, durasi:durasibaru, genre: genrebaru, tahun: tahunbaru});
    return dataFilm;
}

console.log("\nObj dataFilm setelah ditambah : ")
var filmBaru = tambahFilm("Batman", 100, "Action", 2020);
var filmBaru = tambahFilm("Superman", 110, "Adventure", 2021);
console.log(filmBaru);
