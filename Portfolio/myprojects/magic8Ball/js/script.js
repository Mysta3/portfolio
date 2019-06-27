$(document).ready(function(){
    var magic8Ball = {
        listOfAnswers : ["yes", "no", "maybe", "It is certain", "I mean...if you want to", "why not?", "YOLO", "YAAAAS", "Uhhhh no..., YOU REALLY THINK THAT'S SMART", "YOU ARE BETTER", "STOP"],
    
        answer : function (question){
    $("#8ball").effect( "shake" ); 	
    $("#answer").fadeIn(4000);
    
    var randomNumber = Math.random();
    var randomNumberArray = randomNumber * 		 		this.listOfAnswers.length;
    var randomIndex = Math.floor(randomNumberArray);
    
        var randomAnswer = 	this.listOfAnswers[randomIndex];
    $("#answer").text( randomAnswer );
    console.log(randomAnswer);
    
    }
    }; 
    
    $("#answer").hide();
    
    var onClick = function() {
    $("#answer").hide();

    setTimeout( function(){
    $("#8ball").fadeIn(3000);
    $("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
    
    }, 2000);

    setTimeout( function(){
    var question = prompt("Ask me a question?");
    magic8Ball.answer(question);
    },1000);
    };
    
    $("#questionButton").click( onClick );
    });