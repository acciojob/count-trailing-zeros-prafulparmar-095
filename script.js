function trailingZeros(n) {
            if (n < 0) {
                return 0; // Trailing zeros is not defined for negative factorials.
            }
            if (n === 0) {
                return 0; // 0! = 1, which has 0 trailing zeros.
            }

            let count = 0;
            // Loop for factors of 5, 25, 125, etc.
            for (let i = 5; Math.floor(n / i) >= 1; i *= 5) {
                count += Math.floor(n / i);
            }
            return count;
        }

        function calculateTrailingZeros() {
            const numberInput = document.getElementById('numberInput');
            const resultDisplay = document.getElementById('result');
            const errorMessageDisplay = document.getElementById('errorMessage');
            
            errorMessageDisplay.textContent = '';
            resultDisplay.textContent = '';

            const num = parseInt(numberInput.value);

                if (isNaN(num)) {
                errorMessageDisplay.textContent = 'Please enter a valid number.';
                return;
            }
            if (num < 0) {
                errorMessageDisplay.textContent = 'Please enter a non-negative number.';
                return;
            }
            if (num > 10000) {
                errorMessageDisplay.textContent = 'Number too large. Please enter a number up to 10000.';
                return;
            }

            const zeros = trailingZeros(num);
            resultDisplay.textContent = `The number of trailing zeros in ${num}! is: ${zeros}`;
        }