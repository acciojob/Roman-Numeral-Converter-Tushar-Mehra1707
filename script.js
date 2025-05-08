// script.js

// The Roman numerals chart with corresponding values
const romanSymbols = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
];

// Function to convert a number to Roman numeral
function toRoman(num) {
    if (num < 1 || num > 100000) {
        return "Number out of range (1-100000)";
    }

    let roman = '';
    // Iterate over the romanSymbols array
    for (let i = 0; i < romanSymbols.length; i++) {
        while (num >= romanSymbols[i][1]) {
            roman += romanSymbols[i][0];
            num -= romanSymbols[i][1];
        }
    }

    return roman;
}

// Adding event listener to the button to trigger conversion
document.getElementById("convertButton").addEventListener("click", function () {
    const num = parseInt(document.getElementById("numberInput").value);
    const roman = toRoman(num);
    document.getElementById("romanResult").innerText = roman;
});
