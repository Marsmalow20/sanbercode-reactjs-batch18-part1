// soal 1
console.log('Soal 1')
console.log('LOOPING PERTAMA');
var i = 0
while (i<20) {
    i+=2;
    console.log(i + " -  I love coding");
}

console.log('LOOPING Kedua');
while (i>=0) {
    console.log(i + " -  I will become a frontend developer");
    i-=2;
}

// soal 2
console.log('\nSoal 2');
for (i=1; i<=20; i++) {
    if (i%3 == 0 && i%2 != 0) {
        console.log(i + ' - I love Coding');
    } else if (i%2 != 0) {
        console.log(i + ' - Santai');
    } else if (i%2 == 0) {
        console.log(i + ' - Berkualitas');
    } else {
        console.log('ABC');
    }
}

// soal 3
console.log('\nSoal 3');
for(i=1; i<=7; i++){
    console.log("*".repeat(i));
 }

 //soal 4
 console.log('\nSoal 4');
 var kalimat = "saya sangat senang belajar javascript";
 var arr = kalimat.split(" ");
 console.log(arr);

//  soal 5
console.log('\nSoal 5');
var daftarBuah = ['2. Apel', '5. Jeruk', '3. Anggur', '4. Semangka', '1. Mangga'];
daftarBuah.sort();
console.log(daftarBuah[0]);
console.log(daftarBuah[1]);
console.log(daftarBuah[2]);
console.log(daftarBuah[3]);
console.log(daftarBuah[4]);