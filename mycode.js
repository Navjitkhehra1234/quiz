function Question(text, choices, answer) {
    this.text= text;
    this.choices= choices;
    this.answer= answer;
}
Question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;

} 





function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionIndex;

}
Quiz.prototype.guess = function(answer) {
    this.questionIndex++;

    if(this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;

    }
    
}





















function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        var element  = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choices" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
};
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }

};
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var elememt = document.getElementById(progress);
    element.innerHTML = "Question " + currentQuestionNumber + "of " + quiz.question.length;

}


function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 'id=score'>Your Score: " + quiz.score +  "</h2>";
    var elememt = document.getElementById("quiz");
    elememt.innerHTML = gameOverHtml; 
}

var questions = [
    new Question("Which one is not object programming language ?", ["Java", "C", "C++", "C#"], "C"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("There are _____ main components of object oriented programming ?", ["1", "6", "2", "4"], "4"),
    new Question("Which language is used for web pages ?", ["PHP", "Python", "Javascript", "All"], "All"),
    new Question("MVC is a _______.", ["Language", "Library", "Framework", "All"], "Framework"),
];

var quiz = new Quiz(questions);
populate ();