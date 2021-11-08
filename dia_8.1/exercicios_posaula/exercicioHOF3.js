const amountCorrectAnswers = (gabarito, respostas, callback) => {
  let count = 0;
  for (let index = 0; index < gabarito.length; index += 1) { // Nesse caso o número de questões e de respostas deve ser o mesmo.
    const callCheckIfIsRight = callback(gabarito[index], respostas[index])
    count += callCheckIfIsRight;
  }
  return `Resultado final: ${count} respostas corretas`;
}

const checkIfIsRight = (answerRight, answerStudent) => { 
  if (answerRight === answerStudent){
    return 1;
  }
  if (answerStudent === 'N.A') {
    return 0;
  }
  return -0.5;
};

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(amountCorrectAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, checkIfIsRight ))