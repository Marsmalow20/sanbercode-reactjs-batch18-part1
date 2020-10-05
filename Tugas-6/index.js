//Soal 1
console.log('Soal 1');
let r = 7;
let phi = 3.14;

const luasLingkaran = () => {
    var luas = phi*r*r;
    console.log("Luas Lingkaran = "+phi+" * "+r+" * "+r+" = "+luas);
}

const kelilingLingkaran = () => {
    var keliling = phi * (r+r);
    console.log("Keliling Lingkaran = "+phi+" * ("+r+" + "+r+") = "+keliling);
}

luasLingkaran();
kelilingLingkaran();

//Soal 2
console.log('\nSoal 2');

const first = 'saya'
const second = 'adalah'
const third = 'seorang'
const fourth = 'frontend'
const fifth = 'developer'
 
const kalimat = `${first} ${second} ${third} ${fourth} ${fifth}`;
 
console.log(kalimat);

// Soal 3
console.log('\nSoal 3');

const newFunction = (firstName, lastName) => {
    console.log(firstName + " " + lastName);
}

newFunction("William", "Shakespeare");

// Soal 4
console.log('\nSoal 4');

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const {firstName, lastName, destination, occupation, spell} = newObject;
console.log(firstName, lastName, destination, occupation, spell);

// Soal 5
console.log('\nSoal 5');

const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];

console.log(combined);