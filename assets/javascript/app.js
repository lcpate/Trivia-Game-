
$("#start").on("click", function(){
	$("#start").remove();
	game.loadQuestion();
})





var storedCorrect = [];
var storedIncorrect = [];
var storedUnAnswered = [];

var questions = [{
		questionAsked:'Actress Gal Gadot starred in what american superhero film released in 2017?',
		answers:["Wonder Woman", "Avengers", "Ant Man", "Suicide Squad"],
		correctAnswer: "Wonder Woman"
	}, {

		questionAsked:'Who played the female lead in the thriller "V for Vendetta"?',
		answers: ["Selma Hayek", "Keira Knightley", "Natalie Portman", "Amy Schumer"],
		correctAnswer: "Natalie Portman"
	}, {  
		questionAsked:'Tyler Durden is a fictional character appearing as the central protagonist and antagonist in what 1999 American Film?',
		answers:["Boondock Saints", "Fight Club", "Zoolander", "Mrs. Doubtfire"],
		correctAnswer: "Fight Club"
	}, {
		questionAsked:"In Disney's 'The Litte Mermaid' what is the name of the human Ariel fell in love with?",
		answers: ["John Smith", "Prince Charming", "Prince Eric", "Prince Philip"],
		correctAnswer: "Prince Eric"
	}, {
		questionAsked:'In movie ratings what do the letters "PG" stand for?',
		answers: ["Parental Gossip", "Pretty Good", "Powerfully Great", "Parental Guidance"],
		correctAnswer: "Parental Guidance"
	}, {
		questionAsked:"The first movie of the Fast and the Furious franchise was released in what year?",
		answers: ["2001", "1999", "2002", "2000"],
		correctAnswer: "2001"
	}, {
		questionAsked:"In the 2016 american fantasy adventure file 'The Jungle Book', what is the name of the orphaned human boy?",
		answers: ["Shere Khan", "Mowli", "Baloo", "Akela",
		correctAnswer: "Mowli"
	}, {
		questionAsked:"In the movie 'The Wizard of Oz', what did the scarecrow want from the wizard?",
		answers: ["Courage", "A soul", "A heart", "A brain",
		correctAnswer: "A brain"
	}];


		
	



$(document).ready(function(){

// 	$("#start").on("click", function(){
// 		$("#wrapper").load("index.html");

// });


// });

$("#question").html(question1.questionAsked);

	
	$(".btn-block1").html(["question1"] ["answer"] ["answer1"]["answerText"]);
	// $(".btn-block2").html(answer1[1]);
	// $(".btn-block3").html(answer1[2]);
	// $(".btn-block4").html(answer1[3]);

	// console.log(answer1[0]);

 });








