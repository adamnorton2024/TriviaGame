
//define global variables
var questions = [{ q: "What fruit is a cross between a blackberry and a rasberry?", ca: "Tayberry", ia1: "Mango", ia2: "Grape", ia3: "Blueberry?" }, { q: "What is fear of the color purple know as?", ca: "Porphyrophobia", ia1: "Acrophobia", ia2: "Arachniphobia", ia3: "Claustrophobia" }, { q: "What is another name for a prarie wolf?", ca: "Coyote", ia1: "Hyena", ia2: "Jackel", ia3: "Anubis" }, { q: "Which is the largest whale?", ca: "Blue Whale", ia1: "Humpback Whale", ia2: "Minke Whale", ia3: "Moby Dick" }, { q: "What is the only mammal with 4 forward facing knees?", ca: "Elephant", ia1: "Hippo", ia2: "Rhino", is3: "Dog" }, { q: "When standing in the sunlight, what vitamin does our body synthesize?", ca: "Vitamin D", ia1: "Vitamin C", ia2: "Vitamin B", ia3: "Calcium" }, { q: "What planet is named after the God of Love?", ca: "Venus", ia1: "Aphrodite", ia2: "Mercury", ia3: "Saturn" }, { q: "What gas is exhaled by humans?", ca: "Carbon Dioxide", ia1: "Methane", ia2: "Helium", ia3: "Oxygen" }, { q: "What is the heaviest internal organ in the human body?", ca: "Liver", ia1: "Heart", ia2: "Spleen", ia3: "Gallbladder" }, { q: "What is added to bread to make it swell?", ca: "Peanut", ia1: "Almond", ia2: "Cashew", ia3: "Tomato" }];

var correct = 0;
var incorrect = 0;

var timer = 11;

// document ready function
$(document).ready(function() {

    $('text-start-game').on("click", startGame);
    $('answer-correct').on("click", startGame);
    $('answer-ia1').on("click", startGame);
    $('answer-ia2').on("click", startGame);
    $('answer-ia3').on("click", startGame);

    

    startTimer();

 });

function startTimer() {
    setTimeout(countDown, 1000);

};

function countDown() {
    timer--;
    if (timer > 0) {
        setTimeout(countDown, 1000);
    };

    if (timer < 10) {
        $('#timer').text("0" + timer);
    } else {
        $('#timer').text(timer);
        console.log(timer);
    };

};




