
//define global variables
var questions = [{ q: "What fruit is a cross between a blackberry and a rasberry?", ca: "Tayberry", ia1: "Mango", ia2: "Grape", ia3: "Blueberry" }, { q: "What is fear of the color purple know as?", ca: "Porphyrophobia", ia1: "Acrophobia", ia2: "Arachniphobia", ia3: "Claustrophobia" }, { q: "What is another name for a prairie wolf?", ca: "Coyote", ia1: "Hyena", ia2: "Jackel", ia3: "Anubis" }, { q: "Which is the largest whale?", ca: "Blue Whale", ia1: "Humpback Whale", ia2: "Minke Whale", ia3: "Moby Dick" }, { q: "What is the only mammal with 4 forward facing knees?", ca: "Elephant", ia1: "Hippo", ia2: "Rhino", ia3: "Dog" }, { q: "When standing in the sunlight, what vitamin does our body synthesize?", ca: "Vitamin D", ia1: "Vitamin C", ia2: "Vitamin B", ia3: "Calcium" }, { q: "What planet is named after the God of Love?", ca: "Venus", ia1: "Aphrodite", ia2: "Mercury", ia3: "Saturn" }, { q: "What gas is exhaled by humans?", ca: "Carbon Dioxide", ia1: "Methane", ia2: "Helium", ia3: "Oxygen" }, { q: "What is the heaviest internal organ in the human body?", ca: "Liver", ia1: "Heart", ia2: "Spleen", ia3: "Gallbladder" }, { q: "What is added to bread to make it swell?", ca: "Yeast", ia1: "Almond", ia2: "Cashew", ia3: "Tomato" }];

var correct = 0;
var incorrect = 0;
var unanswered = 0;

var buttonClicked = true;

var resetResultTimer = 3;
var resetQuestionTimer = 15;
var timer;
var intervalQuestionId;
var intervalResultId;
var clockRunning = false;


var questionNumber = 0;
var answersArr = [];
var randomizedAnswers = [];

// document ready function
$(document).ready(function() {

    
    $(".answer").css("visibility", "hidden");
    $('#timer').text("Click Here to Play! ");

    $('#timer').on("click", function() {
        $(".answer").css("visibility", "visible");
        nextQuestion();
    })

 });

 
$('.answer').on("click", function() {
    if(!buttonClicked){
        stopTimer();
        if ($(this).text() === questions[questionNumber].ca) {
            console.log("Correct!");
            correct++;
            console.log(correct);
            $(this).addClass("correct-answer");
            $('#timer').text("Correct!");
            //event.stopImmediatePropagation();
        } else {
            console.log("Wrong");
            incorrect++;
            console.log(incorrect);
            $(this).addClass("wrong-answer");
            $('#timer').text("Correct Answer: " + questions[questionNumber].ca);
            //event.stopImmediatePropagation();
        }
        buttonClicked = true;
        // $('.answer').addClass("no-clicks-allowed");
        // $('.no-clicks-allowed').removeClass("answer");
        startResultTimer();
    }
    

});


function reset(){
    console.log("reset");

    correct = 0;
    incorrect = 0;
    unanswered = 0;

    buttonClicked = true;

    resetResultTimer = 3;
    resetQuestionTimer = 15;
    timer;
    intervalQuestionId;
    intervalResultId;
    clockRunning = false;

    questionNumber = 0;
    answersArr = [];
    randomizedAnswers = [];

    $("#btn-reset").remove();
    
    $(".answer").css("visibility", "visible");
    $('#timer').css("visibility", "visible");
    nextQuestion();
    
};



 function nextQuestion() {

     $('#timer').text("Time Remaining: ");
    // print current answer to HTML element
    startQuestionTimer();
    $('#question-div').text(questions[questionNumber].q);

    // push answers to answersArr
     answersArr.push(questions[questionNumber].ca);
     answersArr.push(questions[questionNumber].ia1);
     answersArr.push(questions[questionNumber].ia2);
     answersArr.push(questions[questionNumber].ia3);
     //console.log(answersArr);

     // randomize answers so they don't always appear in the same order
     for (var i = 0; i < 4; i++) {
         var randomNumber = Math.floor(Math.random() * answersArr.length);
         randomizedAnswers.push(answersArr[randomNumber]);
         answersArr.splice(randomNumber, 1);
         //console.log(answersArr);
     };

     //print answers to HTML elements
     for (var j = 0; j < randomizedAnswers.length; j++){
         //console.log("j = " + j);
         $("#text-answer-" + j).text(randomizedAnswers[j]);
         //console.log(randomizedAnswers[j]);
     }

     buttonClicked = false;
     //startQuestionTimer();

    
 };




function startQuestionTimer(){
    
        timer = resetQuestionTimer;
    
    if(!clockRunning){
        intervalQuestionId = setInterval(countQuestion, 1000);
        clockRunning = true;
    };
};

function startResultTimer() {

    timer = resetResultTimer;

    if (!clockRunning) {
        intervalResultId = setInterval(countResult, 1000);
        clockRunning = true;
    };
};

function stopTimer(){
    clearInterval(intervalQuestionId);
    clearInterval(intervalResultId);
    clockRunning = false;
}

function countQuestion(){
    timer--;
    //console.log("Question: " + timer);

        if (timer < 10) {
            $('#timer').text("Time Remaining: 0" + timer);
           // console.log(timer);
            if (timer === 0){
                stopTimer();
                outOfTime();
            }
        } else {
            $('#timer').text("Time Remaining: " + timer);
            //console.log(timer);
        };
};

function countResult() {
    timer--;
    //console.log("Results Timer: " + timer);

    if(timer === 0){
        questionNumber++;
        //reset arrays to empty to ready for Next Question Function.
        answersArr = [];
        randomizedAnswers = []
        $('.correct-answer').removeClass("correct-answer");
        $('.wrong-answer').removeClass("wrong-answer");
        if(questionNumber < 10){
            stopTimer();
            nextQuestion();
        } else {
            gameOver();
        }
    }
};

function outOfTime() {
    unanswered++;
    $('#timer').text("Correct Answer: " + questions[questionNumber].ca);
    startResultTimer();
};

function gameOver(){
    stopTimer();
    console.log("Game Over");
    $('#timer').empty();
    $('#timer').css("visibility", "hidden");
    $("#question-div").empty();
    $("#text-answer-0").text("Game Over" );
    $("#text-answer-1").text("Correct Answers: " + correct );
    $("#text-answer-2").text("Incorrect Answers: " + incorrect );
    $("#text-answer-3").text("Unanswered: " + unanswered );
    $("#answers-div").append("<div class='text answer' id='btn-reset' onClick='reset()'>Try Again!</div>");
    
};






