const inputs = document.querySelectorAll('.angle-input');
const isTriangleButton = document.querySelector('#is-triangle-btn');
const outputEL = document.querySelector('#output');

function calculateSumOfAngles(angle1, angle2, angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle() {
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if(sumOfAngles === 180){
        outputEL.innerText = "Yes, the angles form a triangle";
    }
    else{
        outputEL.innerText = "Oh no, angles don't form a triangle";
    }
}

isTriangleButton.addEventListener("click", isTriangle);
