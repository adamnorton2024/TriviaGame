
//define global variables
var questions = [{ q: "What fruit is a cross between a blackberry and a rasberry?", ca: "Tayberry", ia1: "Mango", ia2: "Grape", ia3: "Blueberry" }, { q: "What is fear of the color purple know as?", ca: "Porphyrophobia", ia1: "Acrophobia", ia2: "Arachniphobia", ia3: "Claustrophobia" }, { q: "What is another name for a prarie wolf?", ca: "Coyote", ia1: "Hyena", ia2: "Jackel", ia3: "Anubis" }, { q: "Which is the largest whale?", ca: "Blue Whale", ia1: "Humpback Whale", ia2: "Minke Whale", ia3: "Moby Dick" }, { q: "What is the only mammal with 4 forward facing knees?", ca: "Elephant", ia1: "Hippo", ia2: "Rhino", is3: "Dog" }, { q: "When standing in the sunlight, what vitamin does our body synthesize?", ca: "Vitamin D", ia1: "Vitamin C", ia2: "Vitamin B", ia3: "Calcium" }, { q: "What planet is named after the God of Love?", ca: "Venus", ia1: "Aphrodite", ia2: "Mercury", ia3: "Saturn" }, { q: "What gas is exhaled by humans?", ca: "Carbon Dioxide", ia1: "Methane", ia2: "Helium", ia3: "Oxygen" }, { q: "What is the heaviest internal organ in the human body?", ca: "Liver", ia1: "Heart", ia2: "Spleen", ia3: "Gallbladder" }, { q: "What is added to bread to make it swell?", ca: "Yeast", ia1: "Almond", ia2: "Cashew", ia3: "Tomato" }];

var correct = 0;
var incorrect = 0;

var resetTimer = 11;
var timer;
var intervalId;
var clockRunning = false;

var questionNumber = 0;
var answersArr = [];
var randomizedAnswers = [];

// document ready function
$(document).ready(function() {

    nextQuestion();

    $('text-start-game').on("click", startGame);
    $('.answer').on("click", checkAnswer);

 });

 function startGame(){

    $('#question-div').text(questions[questionNumber].q);

 };

 function nextQuestion() {

    // print current answer to HTML element
    $('#question-div').text(questions[questionNumber].q);

    // push answers to answersArr
     answersArr.push(questions[questionNumber].ca);
     answersArr.push(questions[questionNumber].ia1);
     answersArr.push(questions[questionNumber].ia2);
     answersArr.push(questions[questionNumber].ia3);
     //console.log(answersArr);

     // randomize answers so they always appear in the same order
     for (var i = 0; i < 4; i++) {
         var randomNumber = Math.floor(Math.random() * answersArr.length);
         randomizedAnswers.push(answersArr[randomNumber]);
         answersArr.splice(randomNumber, 1);
         //console.log(answersArr);
     };

     //print answers to HTML elements
     for (var j = 0; j < randomizedAnswers.length; j++){
         console.log("j = " + j);
         $("#text-answer-" + j).text(randomizedAnswers[j]);
         console.log(randomizedAnswers[j]);
     }

     startTimer();

 };

 function checkAnswer(){
    stopTimer();
    if($(this).text() === questions[questionNumber].ca){
        console.log("Correct!");
        correct++;
    } else {
        console.log("Wrong");
        incorrect++;
    }
    questionNumber++;
    //reset arrays to empty to ready for Next Question Function.
    answersArr = [];
    randomizedAnswers = []
    if(questionNumber < 10){
        nextQuestion();
    } else {
        console.log("Game Over!");
    }
    
 };

function startTimer(){
    timer = resetTimer;
    if(!clockRunning){
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    };
};

function stopTimer(){
    clearInterval(intervalId);
    clockRunning = false;
}

function count(){
    timer--;

        if (timer < 10) {
            $('#timer').text("Time Remaining: 0" + timer);
            if (timer === 0){
                stopTimer();
                $('#timer').text("Times Up!").css("color", "red");
            }
        } else {
            $('#timer').text("Time Remaining:" + timer);
            console.log(timer);
        };
};
