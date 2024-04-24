// QUESTIONS

const questions = [
    {
      "question": "What role do you take in a group?",
      "answer1": "The Leader",
      "answer1Total": "1",
      "answer2": "The Listener",
      "answer2Total": "2",
      "answer3": "The Alien",
      "answer3Total": "3",
      "answer4": "The Clutz",
      "answer4Total": "4",
      "answer5": "The Clown",
      "answer5Total": "5"
    },
    {
      "question": "What would you do on a Friday night?",
      "answer1": "Nothing",
      "answer1Total": "1",
      "answer2": "Shopping",
      "answer2Total": "2",
      "answer3": "Learning a new hobby",
      "answer3Total": "3",
      "answer4": "Adventure park",
      "answer4Total": "4",
      "answer5": "Go to a party",
      "answer5Total": "5"
    },
    {
        "question": "I get angry easily",
        "answer1": "Strongly Disagree",
        "answer1Total": "1",
        "answer2": "Disagree",
        "answer2Total": "2",
        "answer3": "Neutral",
        "answer3Total": "3",
        "answer4": "Agree",
        "answer4Total": "4",
        "answer5": "Strongly Agree",
        "answer5Total": "5"
    },
    {
        "question": "I feel insecure about many things",
        "answer1": "Strongly Disagree",
        "answer1Total": "5",
        "answer2": "Disagree",
        "answer2Total": "4",
        "answer3": "Neutral",
        "answer3Total": "3",
        "answer4": "Agree",
        "answer4Total": "2",
        "answer5": "Strongly Agree",
        "answer5Total": "1"
    },
    {
        "question": "What kind of music do you like to listen to?",
        "answer1": "Pop",
        "answer1Total": "1",
        "answer2": "Ballads",
        "answer2Total": "2",
        "answer3": "EDM",
        "answer3Total": "3",
        "answer4": "Hip-hop/Rap",
        "answer4Total": "4",
        "answer5": "RnB/Blues",
        "answer5Total": "5"
    },
    {
      "question": "What's your spirit animal?",
      "answer1": "Lion",
      "answer1Total": "1",
      "answer2": "Cat",
      "answer2Total": "2",
      "answer3": "Dinosaur",
      "answer3Total": "3",
      "answer4": "Mole",
      "answer4Total": "4",
      "answer5": "Dolphin",
      "answer5Total": "5"
    },
    {
      "question": "I like to follow the rules",
      "answer1": "Strongly Disagree",
      "answer1Total": "5",
      "answer2": "Disagree",
      "answer2Total": "4",
      "answer3": "Neutral",
      "answer3Total": "3",
      "answer4": "Agree",
      "answer4Total": "2",
      "answer5": "Strongly Agree",
      "answer5Total": "1"
    }
  ]
  
  
  let currentQuestion = 0;
  let score = [];
  let selectedAnswersData = [];
  const totalQuestions =questions.length;

  let totalScore = 0;
  
  const container = document.querySelector('.quiz-container');
  const questionEl = document.querySelector('.question');
  const option1 = document.querySelector('.option1');
  const option2 = document.querySelector('.option2');
  const option3 = document.querySelector('.option3');
  const option4 = document.querySelector('.option4');
  const option5 = document.querySelector('.option5');
  const nextButton = document.querySelector('.next');
  const previousButton = document.querySelector('.previous');
  const restartButton = document.querySelector('.restart');
  const result = document.querySelector('.result');
  
  function generateQuestions (index) {
      const question = questions[index];
      const option1Total = questions[index].answer1Total;
      const option2Total = questions[index].answer2Total;
      const option3Total = questions[index].answer3Total;
      const option4Total = questions[index].answer4Total;
      const option5Total = questions[index].answer5Total;
      questionEl.innerHTML = `${index + 1}. ${question.question}`
      option1.setAttribute('data-total', `${option1Total}`);
      option2.setAttribute('data-total', `${option2Total}`);
      option3.setAttribute('data-total', `${option3Total}`);
      option4.setAttribute('data-total', `${option4Total}`);
      option5.setAttribute('data-total', `${option5Total}`);
      option1.innerHTML = `${question.answer1}`
      option2.innerHTML = `${question.answer2}`
      option3.innerHTML = `${question.answer3}`
      option4.innerHTML = `${question.answer4}`
      option5.innerHTML = `${question.answer5}`
  }
  
  
  function loadNextQuestion () {
      const selectedOption = document.querySelector('input[type="radio"]:checked');
      if(!selectedOption) {
          alert('Please select your answer!');
          return;
      }
      const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));
  
      score.push(answerScore);
  
      selectedAnswersData.push()
      
  
      totalScore = score.reduce((total, currentNum) => total + currentNum);
  
      currentQuestion++;
  
          
          selectedOption.checked = false;
    
      if(currentQuestion == totalQuestions - 1) {
          nextButton.textContent = 'Finish';
      }
      
      if(currentQuestion == totalQuestions) {
          result.innerHTML = 
           `<h2 class = "finish">Your score: ${totalScore}</h2>
           <div class = "summary">
           <h3>Click the character matching your score!</h3>
           <p>7~13: <a href = "ryan.html">Ryan</a></p>
           <p>14~20: <a href = "apeach.html">Apeach</a></p>
           <p>21~27: <a href = "muzi.html">Muzi</a></p>
           <p>28~34: <a href = "jay-g.html">Jay-G</a></p>
           <p>35~41: <a href = "tube.html">Tube</a></p>
           <p>42~47: <a href = "con.html">Con</a></p>
           <p>48~50: <a href = "neo.html">Neo</a></p>
           <p>51~55: <a href = "frodo.html">Frodo</a></p>
          <div class = restart-button"><button class="restart">Restart Quiz</button></div>
          </div>
           `;
          return;
      }
      generateQuestions(currentQuestion);
  }
  
  function loadPreviousQuestion() {
      currentQuestion--;
      score.pop();
      generateQuestions(currentQuestion);
  }
  
  function restartQuiz(e) {
      if(e.target.matches('button')) {
      currentQuestion = 0;
      score = [];
      location.reload();
      }
  
  }
  
  
  generateQuestions(currentQuestion);
  nextButton.addEventListener('click', loadNextQuestion);
  previousButton.addEventListener('click',loadPreviousQuestion);
  result.addEventListener('click',restartQuiz);