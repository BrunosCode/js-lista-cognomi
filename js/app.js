// LIST OF SURNAME

// 1. Create surname array
let surnames = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
// 2. Ask user surname (lowercase) and push in the array
let userSurname = prompt("What's your surname?").toLowerCase();
surnames.push(userSurname);
// 3. Sort and print array
surnames.sort();
console.log(surnames);
// 5. Search and print user position(+1) in the array
console.log(`You are in position: ${surnames.indexOf(userSurname) + 1}`);
