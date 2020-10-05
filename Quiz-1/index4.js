var sisi = 4;
var alas = 6;
var tinggi = 5;
var r = 7;
var phi = 3.14;

function luasPersegi(sisi) {
    var luasp = sisi*sisi;
    return luasp;
}

function luasSegitiga(alas, tinggi) {
    var luass = (alas*tinggi)/2;
    return luass;
}

function luasLingkaran(r) {
    var luasl = phi*r*r;
    return luasl;
}

var hitungPersegi = luasPersegi(sisi);
var hitungSegitiga = luasSegitiga(alas, tinggi);
var hitungLingkarang = luasLingkaran(r);

console.log("Luas Persegi = "+sisi+" * " +sisi+" = "+hitungPersegi);
console.log("Luas Segitiga = "+alas+" * "+tinggi+ " / 2 = " +hitungSegitiga);
console.log("Luas Lingkaran = "+phi+" * "+r+" * "+r+" = " +hitungLingkarang);