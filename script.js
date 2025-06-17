function trailingZeros(n) {
  let count = 0;
  for (let i = 5; n / i >= 1; i *= 5) {
    count += Math.floor(n / i);
  }
  return count;
}

const input = prompt("Enter a non-negative integer:");
const number = parseInt(input);

if (isNaN(number) || number < 0) {
  alert("Please enter a valid non-negative integer.");
} else {
  const result = trailingZeros(number);
  alert(`Number of trailing zeros in ${number}! is: ${result}`);
}
