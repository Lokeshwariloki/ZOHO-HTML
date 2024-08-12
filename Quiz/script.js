const questions=[
      {
        "question": "What is the capital of France?",
        "options": ["Berlin", "Madrid", "Paris", "Rome"],
        "answer": "Paris"
      },
      {
        "question": "Which planet is known as the Red Planet?",
        "options": ["Earth", "Mars", "Jupiter", "Saturn"],
        "answer": "Mars"
      },
      {
        "question": "What is the largest ocean on Earth?",
        "options": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        "answer": "Pacific Ocean"
      },
      {
        "question": "Who wrote 'Romeo and Juliet'?",
        "options": ["Mark Twain", "William Shakespeare", "Charles Dickens", "Jane Austen"],
        "answer": "William Shakespeare"
      },
      {
        "question": "What is the smallest prime number?",
        "options": ["0", "1", "2", "3"],
        "answer": "2"
      },
      {
        "question": "What is the chemical symbol for gold?",
        "options": ["Au", "Ag", "Pb", "Fe"],
        "answer": "Au"
      },
      {
        "question": "In which year did the Titanic sink?",
        "options": ["1912", "1916", "1905", "1920"],
        "answer": "1912"
      },
      {
        "question": "Which country is known as the Land of the Rising Sun?",
        "options": ["China", "Japan", "Thailand", "Vietnam"],
        "answer": "Japan"
      },
      {
        "question": "How many continents are there on Earth?",
        "options": ["5", "6", "7", "8"],
        "answer": "7"
      },
      {
        "question": "Who painted the Mona Lisa?",
        "options": ["Vincent van Gogh", "Claude Monet", "Pablo Picasso", "Leonardo da Vinci"],
        "answer": "Leonardo da Vinci"
      }
    ]

function startQuiz(){
    document.getElementById('start').style.display='none';
    document.getElementById('quiz').style.display='block';
    Questions();
}
function Questions(){
    const questionContainer=document.getElementById('question-container');
    questionContainer.innerHTML='';

    questions.forEach((questionData,index)=> {
        const questionDiv =document.createElement('div');
        questionDiv.classList.add('question-block');

        
        const questionTitle = document.createElement('h1');
        questionTitle.classList.add('ques');
        questionTitle.textContent = `${index + 1}. ${questionData.question}`;
        questionDiv.appendChild(questionTitle);

    
        questionData.options.forEach(option => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            label.classList.add('op');
            input.type = 'radio';
            input.name = `question${index}`; // Group options by question
            input.value = option;

            label.appendChild(input);
            label.appendChild(document.createTextNode(option));
            questionDiv.appendChild(label);
            questionDiv.appendChild(document.createElement('br'));
        });

        questionContainer.appendChild(questionDiv);
    });

    document.getElementById('submit-btn').style.display = 'inline';
}

function submitQuiz() {
    let score = 0;

    questions.forEach((questionData, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === questionData.answer) {
            score++;
        }
    });
    
    const scoreContainer = document.getElementById('question-container');
    scoreContainer.classList.add("score");

    scoreContainer.innerHTML = `<h1>Your score is ${score}/${questions.length}</h1>`;
    
    
    document.getElementById("submit-btn").style.display='none';

}