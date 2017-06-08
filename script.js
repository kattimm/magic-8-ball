// jQuery wrapper
$(document).ready(function(){

    // define object
    var magic8Ball = {};
    magic8Ball.answers = ["Future hazy... Try later.", "The secret is too great to tell.", "You must wait and see.", "I'm sorry? Ask again.", "Absolutely, yes.", "I do believe so.", "The heavens favor it.", "Without a doubt, yes.", "Outlook is negative.", "It cannot be.", "Not now, not ever.", "Definitely not."];
    // hides answer text on page load
    $("#answer").hide();


    // function for 8 ball to answer
    magic8Ball.use = function (question) {
        // chooses random item from answers array:
        // (chooses random number between 0 and 1, 
        // then multiplies it by however many items are in the array, 
        // and rounds it down to whole number.
        // that item at that index in array is assigned as chosenAnswer.)
        magic8Ball.chosenAnswer = magic8Ball.answers[Math.floor(Math.random() * magic8Ball.answers.length)]; 
        
        // sets timeout before turning ball around
        setTimeout(
            function() {
                // changes image to backside of 8 ball
                $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png")}, 1000);
        
        // shakes 8 ball
        $("#8ball").effect("shake");
        
        // replaces displayed text with chosen answer 
        $("#answer").text(magic8Ball.chosenAnswer);
        
        // sets timeout before displaying answer
        setTimeout(
            function() {
                // answer fades in
                $("#answer").fadeIn(4000)}, 2000);
        
        // sets timeout for new button text
        setTimeout(
            function() {
                //sets new text on button
                $("#questionButton").text("ASK ANOTHER?")}, 6000);
    }; 

    // function for user to click button and ask question
    var askQuestion = function() {
        
        // hides previous answer (???)
        $("#answer").hide();
        
        // resets image to front of 8 ball
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
        
        // sets timeout before prompt
        setTimeout(
            function() {
                // prompts question from user
                var question = prompt("What is your yes or no question?")}, 500);
        

        // sets timeout before 8 ball answers
        setTimeout(
            function() {
            // asks 8 ball to provide answer
            magic8Ball.use()}, 1800);
       
    };
    
    // event listener for question button
    $("#questionButton").click(askQuestion);
    
 

    
/* ORIGINAL PLAIN JAVASCRIPT LOGIC
var magic8Ball = {};

magic8Ball.question;

magic8Ball.thinking = [" Hmm! Interesting question.", "Ooh, a wise query indeed.", "I knew you would ask that.", "Funny you should ask that.", "Truly, feeble minds are concerned with trivialities.", "I've wondered the same thing myself.", "You know what?"];

magic8Ball.answers = ["The future is hazy. Try again later.", "This is too great a secret to share.", "You'll just have to wait and see.", "Can you ask that in a different way?", "Yes, absolutely.", "I do believe so.", "The heavens are in favor of it.", "Without a doubt, yes.", "Outlook is negative.", "It cannot be.", "Not now, and not ever.", "Definitely not."];

magic8Ball.use = function (question)
{
    magic8Ball.chosenThinking = magic8Ball.thinking[Math.floor(Math.random() * magic8Ball.thinking.length)]; // choose random wise comment 
    magic8Ball.chosenAnswer = magic8Ball.answers[Math.floor(Math.random() * magic8Ball.answers.length)]; // choose random wise answer
    console.log("You asked: " + question); //console log question
    console.log("The Magic 8 Ball says: " + this.chosenThinking + " " + this.chosenAnswer); // console log answer
}; 

magic8Ball.use(""); // <- your question here! 
*/
    
    
});
