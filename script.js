// let flashcards = {
//     datacenter: [
//         { 
//             pergunta: "Qual é a estratégia mais adequada para implementação de segurança física em um datacenter Tier III?",
//             resposta: "Autenticação multifatorial, antecâmaras de segurança (mantraps) e sistema de monitoramento remoto operacional 24/7."
//         }
//     ]
// };

// let currentMateria = "datacenter";
// let currentCardIndex = 0;
// let isFlipped = false;

// const flashcardElement = document.querySelector('.flashcard');
// const perguntaElement = document.getElementById('pergunta');
// const respostaElement = document.getElementById('resposta');
// const materiaSelect = document.getElementById('materiaSelect');
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');
// const cardCounter = document.getElementById('cardCounter');
// const newCardBtn = document.getElementById('newCardBtn');
// const modal = document.getElementById('.close');
// const cardForm = document.getElementById('cardForm');

// function updateFlashcard() {
//     const cards = flashcards[currentMateria];
//     if (cards.lenght === 0) {
//         perguntaElement.textContent = "Nenhum card nesta matéria.";
//         respostaElement.textContent = "";
//         cardCounter.textContent = "0/0";
//         return;
//     }

//     const card = cards[currentCardIndex];
//     perguntaElement.textContent = card.pergunta;
//     respostaElement.textContent = card.resposta;
//     cardCounter.textContent = `${currentCardIndex + 1}/${cards.lenght}`;

//     if (isFlipped) {
//         flashcardElement.classList.remove('flipped');
//         isFlipped = false;
//     }
// }

// function flipCard() {
//     flashcardElement.classList.toggle('flipped');
//     isFlipped = !isFlipped;
// }

// function changeMateria() {
//     currentMateria = materiaSelect.value;
//     currentCardIndex = 0;
//     updateFlashcard();
// }

// //event Listeners
// materiaSelect.addEventListener('change', changeMateria);

// prevBtn.addEventListener('click', () => {
//     const cards = flashcards[currentMateria];
//     if (cards.lenght === 0)
//         return;

//     currentCardIndex = (currentCardIndex - 1 + cards.lenght) % cards.lenght;
//     updateFlashcard();
// });

// nextBtn.addEventListener('click', () => {
//     const cards = flashcards[currentMateria];
//     if (cards.lenght === 0) return;

//     currentCardIndex = (currentCardIndex + 1) % cards.lenght;
//     updateFlashcard();
// });

// newCardBtn.addEventListener('click', () => {
//     modal.style.display = "block";
//   });
  
//   closeModal.addEventListener('click', () => {
//     modal.style.display = "none";
//   });
  
//   cardForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const materia = document.getElementById('materia').value;
//     const pergunta = document.getElementById('perguntaInput').value;
//     const resposta = document.getElementById('respostaInput').value;
  
//     if (!flashcards[materia]) flashcards[materia] = [];
//     flashcards[materia].push({ pergunta, resposta });
  
//     // Atualiza o localStorage (persistência)
//     localStorage.setItem('flashcards', JSON.stringify(flashcards));
  
//     // Reseta o formulário
//     cardForm.reset();
//     modal.style.display = "none";
  
//     // Se a matéria for a mesma, atualiza o card
//     if (materia === currentMateria) {
//       currentCardIndex = flashcards[materia].length - 1;
//       updateFlashcard();
//     }
//   });
  
//   // Carrega dados do localStorage ao iniciar
//   document.addEventListener('DOMContentLoaded', () => {
//     const savedFlashcards = localStorage.getItem('flashcards');
//     if (savedFlashcards) {
//       flashcards = JSON.parse(savedFlashcards);
//     }
//     updateFlashcard();
//   });

// Dados iniciais (simulando um banco de dados)
let flashcards = {
    testes: [
      { pergunta: "O que é caixa branca?", resposta: "Serve para fazer testes com funcionamento da aplicação" },
      { pergunta: "Qual a raiz quadrada de 16?", resposta: "4" }
    ],
    historia: [
      { pergunta: "Quem descobriu o Brasil?", resposta: "Pedro Álvares Cabral" }
    ],
    biologia: []
  };
  
  // Variáveis de controle
  let currentMateria = "matematica";
  let currentCardIndex = 0;
  let isFlipped = false;
  
  // Elementos do DOM
  const flashcardElement = document.querySelector('.flashcard');
  const perguntaElement = document.getElementById('pergunta');
  const respostaElement = document.getElementById('resposta');
  const materiaSelect = document.getElementById('materiaSelect');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const cardCounter = document.getElementById('cardCounter');
  const newCardBtn = document.getElementById('newCardBtn');
  const modal = document.getElementById('modal');
  const closeModal = document.querySelector('.close');
  const cardForm = document.getElementById('cardForm');
  
  // Funções
  function updateFlashcard() {
    const cards = flashcards[currentMateria];
    if (cards.length === 0) {
      perguntaElement.textContent = "Nenhum card nesta matéria.";
      respostaElement.textContent = "";
      cardCounter.textContent = "0/0";
      return;
    }
  
    const card = cards[currentCardIndex];
    perguntaElement.textContent = card.pergunta;
    respostaElement.textContent = card.resposta;
    cardCounter.textContent = `${currentCardIndex + 1}/${cards.length}`;
  
    // Resetar animação se estiver virado
    if (isFlipped) {
      flashcardElement.classList.remove('flipped');
      isFlipped = false;
    }
  }
  
  function flipCard() {
    flashcardElement.classList.toggle('flipped');
    isFlipped = !isFlipped;
  }
  
  function changeMateria() {
    currentMateria = materiaSelect.value;
    currentCardIndex = 0;
    updateFlashcard();
  }
  
  // Event Listeners
  materiaSelect.addEventListener('change', changeMateria);
  
  prevBtn.addEventListener('click', () => {
    const cards = flashcards[currentMateria];
    if (cards.length === 0) return;
  
    currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
    updateFlashcard();
  });
  
  nextBtn.addEventListener('click', () => {
    const cards = flashcards[currentMateria];
    if (cards.length === 0) return;
  
    currentCardIndex = (currentCardIndex + 1) % cards.length;
    updateFlashcard();
  });
  
  newCardBtn.addEventListener('click', () => {
    modal.style.display = "block";
  });
  
  closeModal.addEventListener('click', () => {
    modal.style.display = "none";
  });
  
  cardForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const materia = document.getElementById('materia').value;
    const pergunta = document.getElementById('perguntaInput').value;
    const resposta = document.getElementById('respostaInput').value;
  
    if (!flashcards[materia]) flashcards[materia] = [];
    flashcards[materia].push({ pergunta, resposta });
  
    // Atualiza o localStorage (persistência)
    localStorage.setItem('flashcards', JSON.stringify(flashcards));
  
    // Reseta o formulário
    cardForm.reset();
    modal.style.display = "none";
  
    // Se a matéria for a mesma, atualiza o card
    if (materia === currentMateria) {
      currentCardIndex = flashcards[materia].length - 1;
      updateFlashcard();
    }
  });
  
  // Carrega dados do localStorage ao iniciar
  document.addEventListener('DOMContentLoaded', () => {
    const savedFlashcards = localStorage.getItem('flashcards');
    if (savedFlashcards) {
      flashcards = JSON.parse(savedFlashcards);
    }
    updateFlashcard();
  });