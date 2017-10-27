
$(document).ready(function(){
	$(".panel-default1").hide();

	$(".panel-default2").hide();
	
	var counter = 45;
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0; 
	var intervalId;

// show the questions when start is clicked/ start clock
	$("#start").on("click", function(){
	 	$(".panel-default").hide();
	 	run();
	 	$(".panel-default1").show();
	
	});

// show results when submit is clicked
   $("#submit").on("click", function(){
   		$(".panel-default1").hide();
		$(".panel-default2").show();
		stop();
		$("timeLeft").html("<h3> Time Remaining: " + counter + "</h3>");
		answers();
	});
	

	function run() {
      intervalId = setInterval(decrement, 1000);
    }


    function decrement() {
      counter--;
      $("#timeLeft").html("<h3> Time Remaining: " + counter + "</h3>");

      	if (counter === 0) {
        	stop();
        	$(".panel-default1").hide();
			$(".panel-default2").show();
			results();
      	}
    }


	function stop() {
      clearInterval(intervalId);
	   
    }

// collect radio button input
    $('input[name=radio]').on("change", function(){
    	correct = $("input[value=true]:checked").length;
		incorrect = $("input[value=false]:checked").length;
		unanswered = (8 - (correct + incorrect));
	  });

// print to page	
	function answers (){
		$("#correct").html("Number Correct: " + correct);
		$("#incorrect").html("Number Incorrect: " + incorrect);
		$("#unanswered").html("Unsnswered Questions: " + unanswered);
    };

// resetting the game
    $("#restart").on("click", function(){
    	$(".panel-default").show();
    	$(".panel-default1").hide();
		$(".panel-default2").hide();
		$("input:checked").prop("checked", false);
		stop();

		counter = 45;
		correct = 0;
		incorrect = 0;
		unanswered = 0; 
		
	});



});




