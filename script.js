// javascript fundamental Kalkulator sederhana
function kalkulator(angka1, angka2, operasi) {
  switch (operasi) {
      case '+':
          return angka1 + angka2;
      case '-':
          return angka1 - angka2;
      case '*':
          return angka1 * angka2;
      case '/':
          return angka2 !== 0 ? angka1 / angka2 : "Tidak bisa membagi dengan nol";
      default:
          return "Operasi tidak valid";
  }
}

console.log(kalkulator(10, 5, '+')); 
console.log(kalkulator(10, 5, '-')); 
console.log(kalkulator(10, 5, '*')); 
console.log(kalkulator(10, 0, '/')); 


//Javascript Function Fungsi menghitung luas dan keliling lingkaran
const hitungLuasLingkaran = (radius) => Math.PI * radius * radius;
const hitungKelilingLingkaran = (radius) => 2 * Math.PI * radius;

const radius = 7;
console.log("Luas lingkaran:", hitungLuasLingkaran(radius)); 
console.log("Keliling lingkaran:", hitungKelilingLingkaran(radius));

// Control Flow mencetak bilangan ganjil hingga angka tertentu
function cetakGanjil(max) {
  for (let i = 1; i <= max; i += 2) {
      console.log(i);
  }
}

cetakGanjil(10);

// Javascript Exception (Case) Fungsi pembagian 
function bagi(angka1, angka2) {
  try {
      if (angka2 === 0) {
          throw new Error("Tidak bisa membagi dengan nol");
      }
      return angka1 / angka2;
  } catch (error) {
      return error.message;
  } finally {
      console.log("Operasi pembagian selesai.");
  }
}

console.log(bagi(10, 2)); 
console.log(bagi(10, 3)); 
