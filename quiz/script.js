// Selecionando os elementos do DOM
var startButton = document.querySelector("#start-btn");
var restartButton = document.querySelector("#restart-btn");
var mainLayout = document.querySelector(".main");
var startLayout = document.querySelector(".start-screen");
var overLayout = document.querySelector(".game-over");
var activeBar = document.querySelector("#timer");
var livesCount = document.querySelector("#lives");
var questionText = document.querySelector("#question");
var choiceButtons = document.querySelectorAll(".choice");
var scoreLabel = document.querySelector("#score");

var sfxRight = new Audio("https://sndup.net/tmhq/d");
var sfxWrong = new Audio("https://sndup.net/vmg6/d");

var questions = [
  {
    question: "1) Qual é a principal justificativa econômica para a ocorrência de queimadas em áreas florestais tropicais?",
    choices: ["Expansão da fronteira agrícola", "Produção de biocombustíveis ", "Extração de minérios", "Criação de áreas de turismo"],
    correct: 0
  },
  {
    question: "O que caracteriza a técnica de queima controlada em áreas florestais?",
    choices: [" Queima de grandes áreas sem monitoramento", "Uso de fogo para controlar pragas e regenerar a vegetação", "Queima de resíduos urbanos", "Queima de biomassa para geração de energia"],
    correct: 1
  },
  {
    question: "Qual das seguintes afirmações descreve corretamente a relação entre queimadas e biodiversidade?",
    choices: ["Queimadas aumentam a biodiversidade ao criar novos habitats.", "Queimadas têm um impacto neutro na biodiversidade.", "Queimadas reduzem a biodiversidade, especialmente de espécies vulneráveis.", "Queimadas favorecem apenas espécies de crescimento rápido."],
    correct: 2
  },
  {
    question: "Que fenômeno climático é frequentemente exacerbado por queimadas em grandes escalas?",
    choices: ["Resfriamento global", "El Niño", "Intensificação do efeito estufa", "Desvio de correntes oceânicas"],
    correct: 2
  },
  {
    question: "Quais gases de efeito estufa são majoritariamente emitidos durante as queimadas?",
    choices: ["Metano e óxido nitroso", "Dióxido de carbono e metano", " Dióxido de carbono e óxido nitroso", "Metano e vapor d’água"],
    correct: 2
  }


  // Adicione mais perguntas conforme necessário
];

var score = 0;
var currentQuestionIndex = 0;
var lives = 5;

// Função para carregar uma nova pergunta e atualizar as opções
function loadQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  questionText.innerHTML = currentQuestion.question;

  choiceButtons.forEach((btn, index) => {
    btn.innerHTML = currentQuestion.choices[index];
    btn.onclick = () => checkAnswer(index);
  });

  resetTimer();  // Reinicia o timer para a nova pergunta
}

// Função para verificar a resposta do jogador
function checkAnswer(selectedIndex) {
  let correctIndex = questions[currentQuestionIndex].correct;
  if (selectedIndex === correctIndex) {
    rightAnswer();
  } else {
    wrongAnswer();
  }
}

// Função para começar o jogo
function startGame() {
  // Defina aqui o tempo do timer dinamicamente em segundos
  let timerDuration = 10; // Altere o valor para o tempo desejado (em segundos)
  
  // Ajusta a duração da animação via JavaScript
  document.documentElement.style.setProperty('--timing', `${timerDuration}s`);

  // Continue o restante do código
  score = 0;
  currentQuestionIndex = 0;
  lives = 5;

  startLayout.classList.add("hidden");
  overLayout.classList.add("hidden");
  mainLayout.classList.remove("hidden");

  livesCount.innerHTML = lives;

  loadQuestion();  // Carrega a primeira pergunta
}


// Função para resposta correta
function rightAnswer() {
  sfxRight.play();
  score++;
  currentQuestionIndex++;
  if (currentQuestionIndex >= questions.length) {
    endGame();
  } else {
    loadQuestion();
  }
}

// Função para resposta errada
function wrongAnswer() {
  sfxWrong.play();
  lives--;
  livesCount.innerHTML = lives;

  if (lives <= 0) {
    endGame();
  } else {
    loadQuestion();  // Carrega a próxima pergunta
  }
}

// Função para encerrar o jogo
function endGame() {
  // Exibe o número de acertos no final do jogo
  scoreLabel.innerHTML = `Você acertou ${score} perguntas!`;
  mainLayout.classList.add("hidden");
  overLayout.classList.remove("hidden");
}

// Função para resetar o timer
function resetTimer() {
  activeBar.classList.remove("timer-anim");
  setTimeout(() => {
    activeBar.classList.add("timer-anim");
  }, 20);  // Reinicia a animação do timer após uma pausa
}

// Event Listener para iniciar o jogo
startButton.addEventListener("click", () => {
  startGame();
});

// Event Listener para reiniciar o jogo
restartButton.addEventListener("click", () => {
  startLayout.classList.remove("hidden");
  overLayout.classList.add("hidden");
  mainLayout.classList.add("hidden");
});

// Event Listener para quando o timer acabar (fim da animação)
activeBar.addEventListener("animationend", () => {
  // O que acontece quando o tempo acaba: passa para a próxima pergunta
  wrongAnswer();  // Conta como uma resposta errada e carrega a próxima pergunta
});


const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

/**NAV */
$(document).ready(function() {
    $(window).on("scroll", function() {
      var header = $("#header");
      if ($(window).scrollTop() > 300) {
        header.addClass("scrolled");
      } else {
        header.removeClass("scrolled");
      }
    });
  });


