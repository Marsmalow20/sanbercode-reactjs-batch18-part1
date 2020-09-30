var nama = "Kristoforus David Renaldy\n";
console.log(nama);

// soal 1
var kataPertama = "saya ";
var kataKedua = "senang ";
var kataKetiga = "belajar ";
var kataKeempat = "javascript";

var kataKedua = kataKedua.charAt(0).toUpperCase() + kataKedua.slice(1);
var kataKeempat = kataKeempat.toUpperCase();

console.log('Soal 1');
console.log(kataPertama.concat(kataKedua.concat(kataKetiga.concat(kataKeempat)))+"\n");

// soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var hasil = (Number(kataPertama)+Number(kataKedua)+Number(kataKetiga)+Number(kataKeempat));

console.log('Soal 2');
console.log(kataPertama+"+"+kataKedua+"+"+kataKetiga+"+"+kataKeempat+" = "+hasil+"\n");

// soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4,14); // do your own! 
var kataKetiga = kalimat.substring(15,18); // do your own! 
var kataKeempat = kalimat.substring(19,24); // do your own! 
var kataKelima = kalimat.substring(25,31); // do your own! 

console.log('Soal 3');
console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima+"\n");

// soal 4
var nilai = 55;
var huruf;

if (nilai >= 80){
    huruf = 'A';
} else if (nilai>=70){
    huruf = 'B';
} else if (nilai>= 60){
    huruf = 'C';
} else if (nilai>=50){
    huruf = 'D';
} else {
    huruf = 'E';
}

console.log('Soal 4');
console.log('Nilai = '+nilai);
console.log('Index = '+huruf+"\n");

// soal 5
var tanggal = 20;
var bulan = 1;
var tahun = 2013;

switch(bulan) {
    case 1 :   { text = "Januari"; break; }
    case 2 :   { text = "Februari"; break; }
    case 3 :   { text = "Maret"; break; }
    case 4 :   { text = "April"; break; }
    case 5 :   { text = "Mei"; break; }
    case 6 :   { text = "Juni"; break; }
    case 7 :   { text = "Juli"; break; }
    case 8 :   { text = "Agustus"; break; }
    case 9 :   { text = "September"; break; }
    case 10:   { text = "Oktober"; break; }
    case 11:   { text = "November"; break; }
    case 12:   { text = "Desember"; break; }
    default:  { text = "~Anda ngaco!~"; }
}

console.log('Soal 5');
console.log(tanggal+" "+text+" "+tahun);