const sideInput = document.querySelectorAll('.side-input');
const hypotenuseButton = document.querySelector('#hypotenuse-btn');
const outputAnswer = document.querySelector('#output');

function calculateSumOfSquares(a, b) {
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenuse() {
    const sumOfSquares = calculateSumOfSquares(Number(sideInput[0].value), Number(sideInput[1].value));
    const hypotenuse = Math.sqrt(sumOfSquares);
    outputAnswer.innerText = "Hypotenuse is : " + hypotenuse;
}

hypotenuseButton.addEventListener('click', calculateHypotenuse)
