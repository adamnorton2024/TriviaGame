$(document).ready(function() {

    var questions = [{q: "what?", ca: "yes", ia1: "no", ia2: "probably", ia3: "what?"}, {q: "how?", ca: "nope", ia1: "who cares", ia2: "wft?", ia3: "omg?"}, {q: "when?", ca: "true", ia1: "false"}];

    var correct = 0;
    var incorrect = 0;
    
    var timer = 11;

    function startTimer (){
        setTimeout(countDown, 1000);

        function countDown() {
            timer--;
            if (timer > 0) {
                setTimeout(countDown, 1000);
            };
            
            if(timer < 10){
                $('#timer').text("0" + timer);
            } else {
                $('#timer').text(timer);
                console.log(timer);
            };
            
        };
    };

    startTimer();

 });



