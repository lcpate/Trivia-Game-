var storedCorrect = [];
var storedIncorrect = [];
var storedUnAnswered = [];

var questions = {
		question1:'Actress Gal Gadot starred in what american superhero film released in 2017?',
			
		question2:'Who played the female lead in the thriller "V for Vendetta"?',
		
		question3:'Tyler Durden is a fictional character appearing as the central protagonist and antagonist in what 1999 American Film?',
		
		question4:"In Disney's 'The Litte Mermaid' what is the name of the human Ariel fell in love with?",
		
		question5:'In movie ratings what do the letters "PG" stand for?',
		
		question6:"The first movie of the Fast and the Furious franchise was released in what year?",
			
		question7:"In the 2016 american fantasy adventure file 'The Jungle Book', what is the name of the orphaned human boy?",
		
		question8:"In the movie 'The Wizard of Oz', what did the scarecrow want from the wizard?"
	
		};

var answer1 = [
		"Wonder Woman",
		"Avengers",
		"Ant Man",
		"Suicide Squad"
	];

var answer2 = [
		"Selma Hayek",
		"Keira Knightley",
		"Natalie Portman",
		"Amy Schumer"
	];

var answer3 = [
		"Boondock Saints",
		"Fight Club",
		"Zoolander",
		"Mrs. Doubtfire"
	];

var answer4 = [
		"John Smith",
		"Prince Charming",
		"Prince Eric",
		"Prince Philip"
	];

var answer5 = [
		"Parental Gossip",
		"Pretty Good",
		"Powerfully Great",
		"Parental Guidance"
	];

var answer6 = [
		"2001",
		"1999",
		"2002",
		"2000"
	];

var answer7 = [
		"Shere Khan",
		"Mowgli",
		"Baloo",
		"Akela"
	];

var answer8 = [
		"Courage",
		"A soul",
		"A heart",
		"A brain"
	];


$(document).ready(function(){

$("#question").html(questions.question1);

	
	$(".btn-block1").html(answer1[0]);
	$(".btn-block2").html(answer1[1]);
	$(".btn-block3").html(answer1[2]);
	$(".btn-block4").html(answer1[3]);

	console.log(answer1[0]);

});








