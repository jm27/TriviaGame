//Variables 
var clickButton;
var imgUrl = "https://i.imgur.com/s9bPVaK.gif";

// Object with 10 trivia questions, correct answers and incorrect answers
var results = [
    {



        question: 'Which of the following is not the name of a &quot;Bond Girl&quot;? ',
        correct_answer: 'Vanessa Kensington',
        incorrect_answers: [
            'Pam Bouvier',
            'Mary Goodnight',
            'Wai Lin'
        ]
    },
    {



        question: 'Which movie released in 2016 features Superman and Batman fighting?',
        correct_answer: 'Batman v Superman: Dawn of Justice',
        incorrect_answers: [
            'Batman v Superman: Superapocalypse',
            'Batman v Superman: Black of Knight',
            'Batman v Superman: Knightfall'
        ]
    },
    {



        question: 'Daniel Radcliffe became a global star in the film industry due to his performance in which film franchise?',
        correct_answer: 'Harry Potter',
        incorrect_answers: [
            'Ted',
            'Spy Kids',
            'Pirates of the Caribbean '
        ]
    },
    {



        question: 'Which movie contains the quote, &quot;Say hello to my little friend!&quot;?',
        correct_answer: 'Scarface',
        incorrect_answers: [
            'Reservoir Dogs',
            'Heat',
            'Goodfellas'
        ]
    },
    {



        question: 'What was the title of the first Bond movie, released in 1962?',
        correct_answer: 'Dr. No',
        incorrect_answers: [
            'From Russia with Love',
            'Goldfinger',
            'Thunderball'
        ]
    },
    {



        question: 'What is the orange and white bot&#039;s name in &quot;Star Wars: The Force Awakens&quot;?',
        correct_answer: 'BB-8',
        incorrect_answers: [
            'BB-3',
            'AA-A',
            'R2-D2'
        ]
    },
    {



        question: 'Who is the main protagonist in, the 1985 film, Back to the Future?',
        correct_answer: 'Marty McFly',
        incorrect_answers: [
            'Emmett &quot;Doc&quot; Brown',
            'Biff Tannen',
            'George McFly'
        ]
    },
    {



        question: 'Who in Pulp Fiction says &quot;No, they got the metric system there, they wouldn&#039;t know what the fuck a Quarter Pounder is.&quot;',
        correct_answer: 'Vincent Vega',
        incorrect_answers: [
            'Jules Winnfield',
            'Jimmie Dimmick',
            'Butch Coolidge'
        ]
    },
    {



        question: 'In the 2012 film, &quot;The Lorax&quot;, who is the antagonist?',
        correct_answer: 'Aloysius O&#039;Hare',
        incorrect_answers: [
            'Ted Wiggins',
            'The Once-Ler',
            'Grammy Norma'
        ]
    },
    {



        question: 'What was Bruce Campbell&#039;s iconic one-liner after getting a chainsaw hand in Evil Dead 2?',
        correct_answer: 'Groovy.',
        incorrect_answers: [
            'Gnarly.',
            'Perfect.',
            'Nice.'
        ]
    }
]
// This code will run as soon as the page loads
window.onload = function () {
    $("#singlebutton").on("click", start);
};

//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;
var time = 60;
var lap = 1;

function reset() {

    time = 60;



}
function start() {

    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    }

}
function stop() {

    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
}


function count() {

    // Decrease time by 1
    time--;

    // DONE: Get the current time, pass that into the timeConverter function,
    //       and save the result in a variable.
    var converted = timeConverter(time);
    console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $(".lead").attr("id", "timer");
    $("#timer").text(converted);


}
function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
   // stop clock and switch to last screen statement
    if (seconds === 0) {
        //Run stop Function
        stop();
        // Empty jumbotron
        $(".jumbotron").empty();
        // Create new div
        var newDiv = $("<div>");
        // Add id stop to new div
        $(newDiv).attr("id", "stop");
        // Append newDiv to jumbotron
        $(".jumbotron").append(newDiv);
        // Display time is up
        var timesUp = $("<h1>" + "TIME IS UP!!" + "</h1>");
        $(newDiv).append(timesUp);
        // Create image element and store in variable
        var imageFinish = $("<img>");
        // Give new variable attribute to link image
        imageFinish.attr("src", imgUrl);
        $("#stop").append(imageFinish);
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }


    return minutes + ":" + seconds;
}



// When  start button is clicked
clickButton = $("#singlebutton").on("click", function () {
    // Log 
    console.log("i've been clicked");
    // Change body background and jumbotron color
    $(".bg").css('background-image', "url('assets/images/movies2.jpg')");
    $(".jumbotron").css('background-color', "#9f003c");
    // Position title near the top
    $("#row1").css('top', "-130px");
    // Remove start button
    $(".button").empty();
    // Questions loop and console
    for (i = 0; i < results.length; i++) {
        console.log(results[i]);
        $(".rowQ").attr('id', 'questions');
        //Store question inside variable
        var questions = results[i].question;
        console.log(questions);
        //Store answers with radio input inside a variable and console
        var answersOne = ($("<input type=\"radio\"> " + results[i].correct_answer + " </input>"));
        var incorrectOne = ($("<input type=\"radio\"> " + results[i].incorrect_answers[0] + " </input>"));
        var incorrectTwo = ($("<input type=\"radio\"> " + results[i].incorrect_answers[1] + " </input>"));
        var incorrectThree = ($("<input type=\"radio\"> " + results[i].incorrect_answers[2] + " </input>"));
        console.log(incorrectOne);
        console.log(answersOne);
        //Variable for new div
        var QuestionDiv = $("<div>");
        //Variable for h3 element to store questions
        var newQuestion = $("<h3>");
        //Variable for h5 element to store answers
        var answers = $("<h5>");
        //Add class answers to h5 element
        $(answers).addClass("answers");
        //Append question to h3 element
        $(newQuestion).append(questions);
        //Append answers to h5 element
        $(answers).append(answersOne, incorrectOne, incorrectTwo, incorrectThree);
        //Append h3 question h5 answers to new div
        $(QuestionDiv).append(newQuestion, answers);
        //Append div to row with questions id
        $("#questions").append(QuestionDiv);
        //$("#questions").append;

    }

    $("#questions").css('top', "-100px");




    console.log(questions);
});


