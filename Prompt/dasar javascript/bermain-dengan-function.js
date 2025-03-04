//TODO:
//1. Buatlah sebuah fungsi bernama `hello` yang menerima 2 argumen: `name` dan `origin`. */
//3. Argumen `origin` boleh kosong dengan nilai default adalah "Bandung".*/

function hello(name, origin = 'Bandung') {

// 2. Kembalikan fungsi tersebut dengan nilai string dengan templat:
// "Halo! Nama saya (name). Saya tinggal di (origin)."
// Contoh: Jika `name` bernilai 'Fulan' dan `origin` bernilai 'Jakarta', fungsi harus mengembalikan:
// "Halo! Nama saya Fulan. Saya tinggal di Jakarta.".

    return `Halo! Nama saya ${name}. Saya tinggal di ${origin}.`;
}
// 4. Buatlah variabel bernama `rahmat` yang menampung nilai dari hasil pemanggilan fungsi `hello`
//   yang diberikan argumen name = 'Rahmat' dan origin = 'Semarang'.
// 5. Buatlah variabel bernama `indra` yang menampung nilai dari hasil pemanggilan fungsi `hello`
//   yang diberikan argumen name = 'Indra' tanpa memberikan nilai origin.

var rahmat = hello('Rahmat', 'Semarang');
var indra = hello('Indra');

console.log(rahmat);
console.log(indra);