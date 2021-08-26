// LIST OF SURNAME

// 1. Create surname array
let surnames = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
// 2. Ask user surname (capitalize) and push in the array
let userSurname = prompt("What's your surname?");
// 2.1 Capitalize the surname
userSurneme = userSurname[0].toUpperCase + userSurname.slice(1).toLowerCase;
surnames.push(userSurname);
// 3. Sort and print array
surnames.sort();
console.log(surnames);
// 5. Search and store user position(+1) in the array
// let userIndex = surnames.indexOf(userSurname) + 1;


// 5.1 Binary Search
// Translation from python, I found the code in the book "Grokking Algorithms"
const binarySearch = (array, string) => {
    console.log(array)
    let firstIndex = 0;
    console.log(firstIndex);
    let lastIndex = array.length - 1;
    console.log(lastIndex);
    // exclude array of 1 or 0
    if ( array.length <= 1 ) {
        return array
    }

    while ( firstIndex <= lastIndex ) {
        // middle index of each iteration
        let midIndex = Math.ceil(( firstIndex + lastIndex ) / 2);
        console.log(midIndex);
        let guess = array[midIndex];
        if (guess === string) {
            return midIndex + 1;
        } else if (guess > string) {
            // if the guess is to high search in the half before
            lastIndex = midIndex - 1;
        } else if (guess < string) {
            // if the guess is to low search in the half after
            firstIndex = midIndex + 1;
        }
    }
}

let userIndex = binarySearch(surnames, userSurname);



// 6. Print user position
console.log("You are in position: " + userIndex);
