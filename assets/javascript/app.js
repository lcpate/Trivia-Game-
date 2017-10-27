
$(document).ready(function(){
	
	var counter = 45;
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0; 
	var intervalId;

	$(".panel-default1").hide();
	// $("#timeLeft").hide();
	// $(".content").hide();
	// $("#submit").hide();
	$(".panel-default2").hide();
	// $("#results").hide();
	// $("#restart").hide();

// show the questions when start is clicked/ start clock
	$("#start").on("click", function(){
	 	// $("#start").hide();
	 	$(".panel-default").hide();
	 	run();
	 	$(".panel-default1").show();
	 // 	$("#timeLeft").show();
		// $(".content").show();
		// $("#submit").show();
		
		
	})

// show results when submit is clicked
   $("#submit").on("click", function(){
   		$(".panel-default1").hide();
		// $(".content").hide();
		// $("#submit").hide();
		$(".panel-default2").show();
		// $("#results").show();
		// $("#restart").show();
		stop();

	})
	

	function run() {
      intervalId = setInterval(decrement, 1000);
    }

     function decrement() {
      counter--;
      $("#timeLeft").html("<h3> Time Remaining: " + counter + "</h3>");

      if (counter === 0) {
        stop();
      }
    }

	function stop() {
      clearInterval(intervalId);
	   
	   	$(".panel-default1").hide();
		// $(".content").hide();
		// $("#submit").hide();
		$(".panel-default2").show();
		// $("#results").show();
		// $("#restart").show();
    }

    $('input[name=radio]').on("change", function(){
    	correct = $("input[value=true]:checked").length;
		incorrect = $("input[value=false]:checked").length;
		unanswered = (8 - (correct + incorrect));

		$("#correct").html("Number Correct: " + correct);
		$("#incorrect").html("Number Incorrect: " + incorrect);
		$("#unanswered").html("Unsnswered Questions: " + unanswered);
    })

    $("#restart").on("click", function(){
    	$(".panel-default").hide();
    	// $("#start").hide();
    	// $("#timeLeft").show();
    	$(".panel-default1").show();
		// $(".content").show();
		// $("#submit").show();
		$(".panel-default2").hide();
		// $("#results").hide();
		// $("#restart").hide();
		$("input:checked").removeAttr("checked");

		var counter = 45;
		var correct = 0;
		var incorrect = 0;
		var unanswered = 0;
	})



});




