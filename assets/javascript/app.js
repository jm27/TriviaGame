//Variables 
var clickButton;
var question1 = "<h2>" + "hola"+"</h2>";

// When button is clicked
clickButton = $("#singlebutton").on("click", function () {
    // Log 
    console.log("i've been clicked");
    // Change body background and jumbotron color
    $(".bg").css('background-image', "url('assets/images/movies2.jpg')");
    $(".jumbotron").css('background-color', "#9f003c");
    // Position title near the top
    $("#row1").css('top', "-130px");
    // Remove start button
    $("button").hide();
});