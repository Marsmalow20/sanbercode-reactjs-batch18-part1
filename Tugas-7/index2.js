class Buah {
    constructor (nama, warna, rasa = 'enak') {
        this._nama = nama;
        this._warna = warna;
        this._rasa = rasa;
    }

    get nama() {
        return this._nama;
    }

    get warna() {
        return this._warna;
    }

    get rasa() {
        return this._rasa;
    }

    set nama(x) {
        this._nama = x;
    }

    set warna(x) {
        this._warna = x;
    }

    set rasa(x) {
        this._rasa = x;
    }
}

var Apel = new Buah('Apel', 'Merah', 'Manis');
console.log(Apel.nama);
console.log(Apel.warna);
console.log(Apel.rasa);
Apel.nama = 'Mangga';
console.log(Apel.nama);