let number = 1 

function incrementNumber() {
    number++;
    document.getElementById("numberDisplay").innerText = number;
}

function decrementNumber() {
    number--;
    if (number < 0) {
        number = 0; // Prevent the number from going below 0
    }
    document.getElementById("numberDisplay").innerText = number;
}