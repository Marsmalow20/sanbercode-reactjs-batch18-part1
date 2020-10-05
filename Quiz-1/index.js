var daftarNama = [];

function tambahNama(tambahnama, tambahjk) {
    var pgl;
    if(tambahjk == "Laki-laki") {
        pgl = "Bapak";
    } else {
        pgl = "Ibu";
    }
    daftarNama.push({nama: tambahnama, jk: tambahjk, panggilan: pgl});
    return daftarNama;
}

var namaBaru = tambahNama('Asep', 'Laki-laki');
var namaBaru = tambahNama('Siti', 'Perempuan');
var namaBaru = tambahNama('Yeni', 'Perempuan');
var namaBaru = tambahNama('Rudi', 'Laki-laki');
var namaBaru = tambahNama('Adit', 'Laki-laki');

daftarNama.forEach(function(item){
    console.log("- "+item.panggilan + " " +item.nama)
});