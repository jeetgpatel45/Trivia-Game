$(document).ready(function () {

    var questions = [
        {
            question: "WHAT ARE THE 3 MAIN LANGUAGES TO CREATE A FRONT END WEBPAGE?",
            options: ["HTML/CSS/NODE.JS", "CSS/PHP/RUBY", "HTML/CSS/JAVASCRIPT", "RUBY/PHP/PHYTHON"],
            answer: "HTML/CSS/JAVASCRIPT"
        },

        {
            question: "WHAT IS J-QUERY?",
            options: ["JS FILE NAME", "CSS PROPERTY", "JS LIBRARY", "NONE"],
            answer: "JS LIBRARY"
        },

        {
            question: "WHAT ARE THE WAYS TO LINK CSS FILE?",
            options: ["INLINE", "INTERNAL", "EXTERNAL", "ALL OF THE ABOVE"],
            answer: "ALL OF THE ABOVE"
        },

        {
            question: "WHAT FUNCTION DO WE CALL FOR THE USER TO PUT THE INPUT?",
            options: ["ALERT", "PROMPT", "CALL", "ALL OF THE ABOVE"],
            answer: "PROMPT"
        },

        {
            question: "WHAT GOES INSIDE AN ARRAY?",
            options: ["STRINGS", "NUMBERS", "BOOLEANS", "ALL OF THE ABOVE"],
            answer: "ALL OF THE ABOVE"
        },
    ]
    // console.log(questions[0].options1[2])
    $("#button").on("click", function () {
        $("#start").remove();
        
        var game = {
            correct: 0,
            incorrect: 0,
            counter: 60,
            
            countdown: function () {
                game.counter--;
                $("#timer").html("Time Left:" + " " + game.counter + " " + "Seconds");
                if (game.counter <= 0) {
                    game.done();
                } 
            },
            
            start: function () {
                timer = setInterval(game.countdown, 1000);
                for (var i = 0; i < questions.length; i++) {
                    $(".data").append("<h2>" + questions[i].question + "</h2>");
                    // console.log(questions[i].question)
                    
                    // THIS LOOP IS FOR THE OPTIONS TO APPEAR
                    for (var j = 0; j < questions[i].options.length; j++) {
                        $(".data").append("<input type = 'radio' name='question-" + i + "'value='" + questions[i].options[j] + "'>" + " " + questions[i].options[j] + "<br>")
                        console.log(questions[i].options[j])
                    }
                }
            },
            
            done: function () {
                $.each($('input[name = "question-0"]:checked'), function () {
                    if ($(this).val() === questions[0].answer) {
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });
                
                $.each($('input[name = "question-1"]:checked'), function () {
                    if ($(this).val() === questions[1].answer) {
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });
                
                $.each($('input[name = "question-2"]:checked'), function () {
                    if ($(this).val() === questions[2].answer) {
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });
                
                $.each($('input[name = "question-3"]:checked'), function () {
                    if ($(this).val() === questions[3].answer) {
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });
                
                $.each($('input[name = "question-4"]:checked'), function () {
                    if ($(this).val() === questions[4].answer) {
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });
                this.result();                
            },
            
            result: function () {
                clearInterval(timer);
                $("#timer").remove();
                $(".data").remove();
                
                $(".data2").append("Correct: " + this.correct + "<br>");
                $(".data2").append("Incorrect: " + this.incorrect + "<br>");
                $(".data2").append("Unanswered: " + (questions.length - (this.incorrect + this.correct) + "<br>"));
            }
        }
        game.start();
    })

})