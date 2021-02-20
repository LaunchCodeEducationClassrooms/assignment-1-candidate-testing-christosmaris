const input = require('readline-sync');

let candidateName = '';
let question = 'Who was the first American woman in space? ';
let correctAnswer = 'Sally Ride';
let candidateAnswer = '';
let questions = [
  'Who was the first American woman in space? ',
  'True or false: 5 kilometer == 5000 meters? ',
  '(5 + 3)/2 * 10 = ? ',
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  'What is the minimum crew size for the ISS? ',
];
let correctAnswers = [
  'Sally Ride',
  'true',
  '40',
  'Trajectory',
  '3',
];
let candidateAnswers = [];


function askForName() {
  candidateName = input.question('Candidate Name: ');
}

function askQuestion() {
  questions.forEach((question, index) => {
    console.log(`${index + 1}) ${question}`);
    candidateAnswers.push(input.question('Your answer: '));
    console.log(`Correct Answer: ${correctAnswers[index]}\n`);
  });
}

function gradeQuiz(candidateAnswers) {
  let grade;
  let counter = 0;

  for (let i = 0; i < 5; i += 1) {
    const correctAnswer = correctAnswers[i].trim().toLowerCase();
    const candidateAnswer = candidateAnswers[i].trim().toLowerCase();

    counter += (correctAnswer === candidateAnswer);
  }

  // Calc grade percentage.
  grade = (counter / 5) * 100;

  // Convey the grade to the user.
  console.log(`>>> Overall Grade: ${grade}% (${counter} of 5 responses correct) <<<`);
  console.log(`>>> Status: ${grade < 80 ? 'FAILED' : 'PASSED'} <<<`);

  return grade;
}

function runProgram() {
  askForName();
  console.log(`Hey there ${candidateName} 👋\n`);
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};