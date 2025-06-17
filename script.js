function trailingZeros(n) {
    let count = 0;
    let factor = 5;

    while (n >= factor) {
        count += Math.floor(n / factor);
        factor *= 5;
    }

    return count;
}

const input = prompt("Enter a non-negative integer:");
const number = parseInt(input);

if (!isNaN(number) && number >= 0) {
    const result = trailingZeros(number);
    alert(`The number of trailing zeros in ${number}! is ${result}.`);
} else {
    alert("Please enter a valid non-negative integer.");
}
