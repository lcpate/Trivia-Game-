
$(document).ready(function(){
	
	var counter = 60;
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;
	var clockRunning = false; 
	var intervalId;


	$("#timeLeft").hide();
	$(".content").hide();
	$("#submit").hide();
	$("#results").hide();
	$("#restart").hide();

// show the questions when start is clicked
	$("#start").on("click", function(){
	 	$("#start").hide();
	 	run();
	 	$("#timeLeft").show();
		$(".content").show();
		$("#submit").show();
		
		
	})

// show results when submit is clicked
   $("#submit").on("click", function(){
		$(".content").hide();
		$("#submit").hide();
		$("#results").show();
		$("#restart").show();
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
	   
		$(".content").hide();
		$("#submit").hide();
		$("#results").show();
		$("#restart").show();
    }

 //    $("#submit").on("click" function(){
	// 	$(".content").hide();
	// 	$("#submit").hide();
	// 	$("#results").show();
	// 	$("#restart").show();

	// })


});




