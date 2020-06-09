const chooseDifficulty = document.getElementById("chooseDifficulty");
const easyGame = document.getElementById("easy");
const mediumGame = document.getElementById("medium");
const hardGame = document.getElementById("hard");
const quiz = document.getElementById("game-container");
const question = document.getElementById("question");
const questionImage = document.getElementById("questionImage");
const answerA = document.getElementById("A");
const answerB = document.getElementById("B");
const answerC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const timeGauge2 = document.getElementById("btimeGauge");
const progress = document.getElementById("progress");
const score = document.getElementById("score");
const playerUsername = document.getElementById("playerUsername");
const skipQuestion = document.getElementById("skipQuestion");
const restartQuizBtn = document.getElementById("restartQuiz");

// Retrieving Details of Logged In User
const name = sessionStorage.getItem("loggedInName");
const username = sessionStorage.getItem("loggedInUsername");
const age = sessionStorage.getItem("loggedInAge");
const nationality = sessionStorage.getItem("loggedInNationality");

// Array of Objects for questions
let questions = [
    {
        question: "When was the first gas-driven car made?",
        imageSource: "web-assets/images/firstEngine.jpg",
        answerA: "1885",
        answerB: "1890",
        answerC: "1902",
        correctAns: "A"
    },
    {
        question: "When was the first official motor race held?",
        imageSource: "web-assets/images/firstRace.jpg",
        answerA: "1886",
        answerB: "1895",
        answerC: "1890",
        correctAns : "B"
    },
    {
        question: "What is the smallest car ever made?",
        imageSource: "web-assets/images/peelP50.jpg",
        answerA: "Smart Car",
        answerB: "Ford Focus",
        answerC: "Peel P50",
        correctAns: "C"
    },
    {
        question: "Name this car",
        imageSource: "web-assets/images/1959-bmw-507.png",
        answerA: "BMW E30",
        answerB: "BMW 507",
        answerC: "BMW Alpina",
        correctAns : "B"
    },
    {
        question: "How many proyotypes exist of the Porsche 916?",
        imageSource: "web-assets/images/porsche-916.jpg",
        answerA: "11",
        answerB: "15",
        answerC: "19",
        correctAns: "A"
    },
    {
        question: "When was Ford Mustang's first unveiling?",
        imageSource: "web-assets/images/ford-mustang-1964.png",
        answerA: "April 1966",
        answerB: "January 1961",
        answerC: "March 1964",
        correctAns: "C"
    },
    {
        question: "How many convertibles of the Plymouth Hemi Cuda were ever manufactured?",
        imageSource: "web-assets/images/plymouth-hemi-cuda.jpg",
        answerA: "12",
        answerB: "7",
        answerC: "15",
        correctAns: "B"
    },
    {
        question: "When was the company Rolls-Royce Ltd established?",
        imageSource: "web-assets/images/Rolls-Royce.jpg",
        answerA: "1902",
        answerB: "1906",
        answerC: "1908",
        correctAns: "B"
    },
    {
        question: "Which was the first car to have the power steering feature?",
        imageSource: "web-assets/images/chrysler-imperial.jpg",
        answerA: "Chrysler Imperial",
        answerB: "Chevrolet Z16",
        answerC: "Dodge Charger",
        correctAns: "A"
    },
    {
        question: "Name this car",
        imageSource: "web-assets/images/1969-dodge-charger.jpg",
        answerA: "Dodge Charger",
        answerB: "Dodge Challenger",
        answerC: "Ford F100",
        correctAns: "A"
    }
]

let questionsMedium = [
    {
        question: "In what year was the first Pontiac GTO Released?",
        imageSource: "web-assets/images/pontiac-gto.jpg",
        answerA: "1960",
        answerB: "1962",
        answerC: "1964",
        correctAns: "C"
    },
    {
        question: "What Car is this?",
        imageSource: "web-assets/images/alfa-romeo-spider.jpg",
        answerA: "Alfa Romeo Spider",
        answerB: "Dodge Charger",
        answerC: "Ferrari F40",
        correctAns: "A"
    },
    {
        question: "What Was the First Turbocharged Car",
        imageSource: "web-assets/images/oldsmobile-jetfire.jpg",
        answerA: "Dodge Daytona",
        answerB: "Ford Consul",
        answerC: "Oldsmobile Jetfire",
        correctAns: "C"
    },
    {
        question: "Chrysler's 426 Hemi engine is known as what?",
        imageSource: "web-assets/images/chrysler-hemi.jpg",
        answerA: "Elephant",
        answerB: "Mammoth",
        answerC: "Monster",
        correctAns: "A"
    },
    {
        question: "What was the first Aston Martin that James Bond drove?",
        imageSource: "web-assets/images/aston-martin-db5.jpg",
        answerA: "DB4",
        answerB: "DB5",
        answerC: "DB8",
        correctAns: "B"
    },
    {
        question: "What was the first car with 4 Wheel Drive?",
        imageSource: "web-assets/images/jensen-ff.jpg",
        answerA: "Jensen FF",
        answerB: "Jensen Interceptor",
        answerC: "Jensen C-V8",
        correctAns: "A"
    },
    {
        question: "Name this car",
        imageSource: "web-assets/images/maserati-ghibli.jpg",
        answerA: "Maserati Ghibli",
        answerB: "Maserati Indi",
        answerC: "Maserati Merak",
        correctAns: "A"
    },
    {
        question: "What is the 1937 Ford Cabriolet's Nickname?",
        imageSource: "web-assets/images/1937-ford-cabriolet.jpg",
        answerA: "White Horse",
        answerB: "Vanilla Shake",
        answerC: "Light Monster",
        correctAns: "B"
    },
    {
        question: "What is the size of 1965 Ford Mustang's Engine?",
        imageSource: "web-assets/images/1965-mustang-engine.jpg",
        answerA: "4 litres",
        answerB: "4.5 litres",
        answerC: "4.7 litres",
        correctAns: "C"
    },
    {
        question: "What is the size of 1958 Ford Thunderbird's Engine?",
        imageSource: "web-assets/images/ford-thunderbird-engine.jpg",
        answerA: "4.7 litres",
        answerB: "5.2 litres",
        answerC: "5.8 litres",
        correctAns: "C"
    }
]

let questionsHard = [
    {
        question: "In which years was the Dodge Dart Swinger available?",
        imageSource: "web-assets/images/dodge-dart-swinger.jpg",
        answerA: "1967-1968",
        answerB: "1968-1969",
        answerC: "1969-1970",
        correctAns: "C"
    },
    {
        question: "What does the Horse in Ferrari's Logo Represent?",
        imageSource: "web-assets/images/ferrari-logo.jpg",
        answerA: "Horsepower",
        answerB: "WWI Flying Ace",
        answerC: "WWII Flying Ace",
        correctAns: "B"
    },
    {
        question: "How much horsepower did the first car have?",
        imageSource: "web-assets/images/first-merc.jpg",
        answerA: "0.8HP",
        answerB: "0.9HP",
        answerC: "1.1HP",
        correctAns: "B"
    },
    {
        question: "What was the first BMW?",
        imageSource: "web-assets/images/bmw-dixi.jpg",
        answerA: "BMW Dixi",
        answerB: "BMW Alpina",
        answerC: "BMW E18",
        correctAns: "A"
    },
    {
        question: "In what year was the fist fully automatic transmission car created?",
        imageSource: "web-assets/images/first-auto-car.jpg",
        answerA: "1937",
        answerB: "1940",
        answerC: "1944",
        correctAns: "B"
    },
    {
        question: "BMW was nearly Purchased by Mercedes in what year?",
        imageSource: "web-assets/images/bmw-logo.jpg",
        answerA: "1956",
        answerB: "1957",
        answerC: "1959",
        correctAns: "C"
    },
    {
        question: "When was the first Audi produced?",
        imageSource: "web-assets/images/first-audi.jpg",
        answerA: "1906",
        answerB: "1909",
        answerC: "1910",
        correctAns: "C"
    },
    {
        question: "When did Audi Quattro debut as a competition car?",
        imageSource: "web-assets/images/audi-quattro.jpg",
        answerA: "1978",
        answerB: "1980",
        answerC: "1981",
        correctAns: "B"
    },
    {
        question: "What period of time was known as the 'Vintage Era' for car manufacturing?",
        imageSource: "web-assets/images/vintage-era.jpg",
        answerA: "1918-1930",
        answerB: "1920-1930",
        answerC: "1921-1930",
        correctAns: "A"
    },
    {
        question: "What was the first car to have an independent front suspension?",
        imageSource: "web-assets/images/lancia-lambda.jpg",
        answerA: "Lancia Flaminia",
        answerB: "Lancia Lambda",
        answerC: "Lancia Fulvia",
        correctAns: "B"
    }
]

// Variables
const lastQuestion = questions.length - 1;
const questionTime = 10; // 11 seconds to answer a question
const gaugeWidth = 9.375; // 9.375em
const gaugeUnit = gaugeWidth / questionTime;
let currentQuestion = 0;
let timeCounter = 0;
let timeLeft;
let scoreCounter = 0;
let gameDifficultyCounter = 0; 

// Displaying a question - Easy
function displayQuestion(){
    let q = questions[currentQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>"; // Displaying question
    questionImage.innerHTML = "<img src="+ q.imageSource +">"; // Displaying image of question

    // Displaying Choices
    answerA.innerHTML = q.answerA; 
    answerB.innerHTML = q.answerB;
    answerC.innerHTML = q.answerC;
}

// Displaying a question - Medium
function displayQuestionMedium(){ ///////
    let qMedium = questionsMedium[currentQuestion];

    question.innerHTML = "<p>"+ qMedium.question +"</p>"; // Displaying question
    questionImage.innerHTML = "<img src="+ qMedium.imageSource +">"; // Displaying image of question

    // Displaying Choices
    answerA.innerHTML = qMedium.answerA; 
    answerB.innerHTML = qMedium.answerB;
    answerC.innerHTML = qMedium.answerC;
}

// Displaying a question - Hard
function displayQuestionHard(){ //////
    let qHard = questionsHard[currentQuestion];

    question.innerHTML = "<p>"+ qHard.question +"</p>"; // Displaying question
    questionImage.innerHTML = "<img src="+ qHard.imageSource +">"; // Displaying image of question

    // Displaying Choices
    answerA.innerHTML = qHard.answerA; 
    answerB.innerHTML = qHard.answerB;
    answerC.innerHTML = qHard.answerC;
}

// Checking Difficulty Selection
easyGame.addEventListener("click",startQuizEasy);
mediumGame.addEventListener("click",startQuizMedium);
hardGame.addEventListener("click",startQuizHard);

// Starting the quiz - Easy
function startQuizEasy(){
    gameDifficultyCounter = 1; // Easy Difficulty

    easyGame.style.display = "none";
    mediumGame.style.display = "none";
    hardGame.style.display = "none";
    chooseDifficulty.style.display = "none";
    displayQuestion();
    quiz.style.display = "grid"; // Displaying Quiz
    displayProgress();
    displayCounter();
    displayDetails();
    timeLeft = setInterval(displayCounter, 1000); // 1000ms = time counter + 1 in Easy Difficulty
}

// Starting the quiz - Medium
function startQuizMedium(){
    gameDifficultyCounter = 2; // Medium Difficulty

    easyGame.style.display = "none";
    mediumGame.style.display = "none";
    hardGame.style.display = "none";
    chooseDifficulty.style.display = "none";
    displayQuestionMedium();
    quiz.style.display = "grid"; // Displaying Quiz
    displayProgress();
    displayCounter();
    displayDetails();
    timeLeft = setInterval(displayCounter, 850); // 850ms = time counter + 1 in Medium Difficulty
}

// Starting the quiz - Hard
function startQuizHard(){
    gameDifficultyCounter = 3; // Hard Difficulty

    easyGame.style.display = "none";
    mediumGame.style.display = "none";
    hardGame.style.display = "none";
    chooseDifficulty.style.display = "none";
    displayQuestionHard();
    quiz.style.display = "grid"; // Displaying Quiz
    displayProgress();
    displayCounter();
    displayDetails();
    timeLeft = setInterval(displayCounter, 750); // 750ms = time counter + 1 in Hard Difficulty
}

// Displaying The Details Of The Logged In User
function displayDetails(){
    playerName.innerHTML = "<p> Name: "+ name +"</p>";
    playerUsername.innerHTML = "<p> Username: "+ username +"</p>";
    playerAge.innerHTML = "<p> Age: "+ age +"</p>";
    playerNation.innerHTML = "<p> Nationality: "+ nationality +"</p>";
}

// Displaying the Progress Bar
function displayProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// Function to show Timer Counter
function displayCounter(){
    if(timeCounter<= questionTime){
        counter.innerHTML = timeCounter;
        timeGauge.style.width = timeCounter* gaugeUnit + "em";
        timeCounter++;
        // Changing color of time gauge depending on the time left
        if(timeCounter < 3){
            timeGauge.style.background = "#28f785";
        }else if(timeCounter > 4 && timeCounter < 7){
            timeGauge.style.background = "#f74502";
        }else if(timeCounter > 7){
            timeGauge.style.background = "red";
        }
    }else{
        timeCounter = 0;
        // Changing progress color to red
        answerIsWrong();
        if(currentQuestion < lastQuestion){
            currentQuestion++;
            displayQuestion();
        }else{
            // Ending the quiz
            clearInterval(timeLeft);
        }
    }
}

// Function to check whether answer is correct or not
function checkAnswer(answer){
    if (gameDifficultyCounter === 1){
        // If Answer is Correct
        if(answer == questions[currentQuestion].correctAns){
            scoreCounter++;
            answerIsCorrect(); // Progress color turns green
        }else{
            // Answer is Wrong
            answerIsWrong(); // Progress color turns red
        }
        timeCounter= 0;
        if(currentQuestion < lastQuestion){
            currentQuestion++;
            displayQuestion();
        }else{
            // Ending Quiz, Hiding Quiz and Saving Score
            clearInterval(timeLeft);
            hideQuiz();
            saveHighScore();
            window.location.href = 'leaderboards.php';
        }
    }else if (gameDifficultyCounter === 2){
        if(answer == questionsMedium[currentQuestion].correctAns){
            scoreCounter++;
            answerIsCorrect(); // Progress color turns green
        }else{
            answerIsWrong(); // Progress color turns red
        }
        timeCounter= 0;
        if(currentQuestion < lastQuestion){
            currentQuestion++;
            displayQuestionMedium();
        }else{
            // Ending Quiz, Hiding Quiz and Saving Score
            clearInterval(timeLeft);
            hideQuiz();
            saveHighScore();
            window.location.href = 'leaderboards.php'; // Navigating to Leaderboards Page
        }
    }else if (gameDifficultyCounter === 3){
        if(answer == questionsHard[currentQuestion].correctAns){
            scoreCounter++;
            answerIsCorrect(); // Progress color turns green
        }else{
            // Answer is Incorrect
            answerIsWrong(); // Progress color turns red
        }
        timeCounter= 0;
        if(currentQuestion < lastQuestion){
            currentQuestion++;
            displayQuestionHard();
        }else{
            // Hiding Quiz and Saving Score
            clearInterval(timeLeft);
            hideQuiz();
            saveHighScore();
            window.location.href = 'leaderboards.php';
        }
    }
}

// Restarting the Quiz
function restartQuiz(){
    window.location.href = 'game.php';
}

// Hiding Quiz once Game is finished
function hideQuiz(){
    timeGauge.style.display = "none";
    timeGauge2.style.display = "none";
    counter.style.display = "none";
    progress.style.display = "none";
    answerA.style.display = "none";
    answerB.style.display = "none";
    answerC.style.display = "none";
    question.style.display = "none";
    questionImage.style.display = "none";
    skipQuestion.style.display = "none";
    restartQuizBtn.style.display = "none";
}

// Saving the Score
function saveHighScore(){
    // Array of Objects to Store all Scores since an Array by itself would Overwrite Every Score
    var allHighScores = JSON.parse(localStorage.getItem('highScores')) || []; // Placing the High Scores Array into a Variable   
    let gameDifficulty; // Variable to store game difficulty since game counter is an integer

    // Turning the game difficulty counter into a string
    if (gameDifficultyCounter == 1){
        gameDifficulty = "Easy";
    }else if (gameDifficultyCounter == 2){
        gameDifficulty = "Medium";
    }else if (gameDifficultyCounter == 3){
        gameDifficulty = "Hard";
    }

    // Object Containing User Details Previously Extracted From Session Storage
    var highScore = {};
    highScore.name = name;
    highScore.username = username;
    highScore.age = age;
    highScore.difficulty = gameDifficulty;
    highScore.score = scoreCounter;
    highScore.nation = nationality;

    allHighScores.push(highScore); // Pushing The Object Into The Array Of High Scores
    localStorage.setItem('highScores', JSON.stringify(allHighScores)); // Saving the High Scores Array to Local Storage
}

// Progress- Answer turns green if answered correctly
function answerIsCorrect(){
    document.getElementById(currentQuestion).style.backgroundColor = "#0f0";
}

// Progress- Answer turns red if answered incorrectly
function answerIsWrong(){
    document.getElementById(currentQuestion).style.backgroundColor = "#f00";
}
