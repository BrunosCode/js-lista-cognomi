// LIST OF SURNAME

// 1. Create surname array
let surnames = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
// 1.1 Inject list elements as li
const printList = (newMember) => {
    document.getElementById("surname-list").innerHTML = "";
    for (let i = 0; i < surnames.length; i++) {
        if (surnames[i] === newMember) {
            document.getElementById("surname-list").innerHTML += `<li><strong>${surnames[i]}</strong></li>`;
        } else {
            document.getElementById("surname-list").innerHTML += `<li>${surnames[i]}</li>`;
        }
    }
}
printList();

const joinTeam = () => {
    // 2. Ask user surname (capitalize) and push in the array
    let userSurname = document.getElementById("user-surname").value;
    // 2.1 Capitalize the surname
    userSurname = userSurname[0].toUpperCase() + userSurname.slice(1).toLowerCase();
    surnames.push(userSurname);
    // 3. Sort array
    surnames.sort();
    // 5. Search and store user position(+1) in the array
    // let userIndex = surnames.indexOf(userSurname) + 1;
    let userIndex = binarySearch(surnames, userSurname) + 1;
    // 6. Print list and user position
    printList(userSurname);
    document.getElementById("user-position").innerText = "You are in position: " + userIndex;
}


// 5.1 Binary Search
// Translation from python, I found the code in the book "Grokking Algorithms"
const binarySearch = (array, string) => {
    let firstIndex = 0;
    let lastIndex = array.length - 1;
    // exclude array of 1 or 0
    if ( array.length <= 1 ) { return array }
    // Untill the guess is equal to the surname, keep search in right half of the array
    while ( firstIndex <= lastIndex ) {
        // middle index of each iteration
        let midIndex = Math.ceil(( firstIndex + lastIndex ) / 2);
        let guess = array[midIndex];
        if ( guess === string ) {
            return midIndex;
        } else if ( guess > string ) {
            // if the guess is to high search in the half before
            lastIndex = midIndex - 1;
        } else if ( guess < string ) {
            // if the guess is to low search in the half after
            firstIndex = midIndex + 1;
        }
    }
}

// Event Listener on the button
document.getElementById("join-btn").addEventListener("click", joinTeam);