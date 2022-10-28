const quizFormValue = document.querySelector('.quiz-form');
const submitAnswerButton = document.querySelector('#submit-answer-btn');
const outputScore = document.querySelector('#output');

const correctAnswer = [90, "Right Angled"];

function calculateScore() {
    let score = 0;
    let i = 0;
    const formResults = new FormData(quizFormValue);

    for (let value of formResults.values()) {
        if(value === correctAnswer[i]){
            score++;
        }
        i++;
    }
    outputScore.innerText = "Your Score is : " + score;
}

submitAnswerButton.addEventListener("click", calculateScore);
