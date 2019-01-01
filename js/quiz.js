
	$(document).ready(function(){

		console.log("Good");



		//q1
		$('#btnQuiz').on('click',function(){
			
			console.log("Button click");

		
			var ans = $("input[name='sugar']:checked").val();

			console.log(ans);  
			var silentdisease = "Diabetes is often a silent disease. You may feel just fine even though chronically high blood sugar levels are doing serious damage to your body. When it comes to monitoring diabetes, dont rely on how you feel. Dont wait until its advanced enough to cause symptoms.";          




		    
			if(ans == 'true'){

				total = "Wrong answer.<br/><br/>";

			}

			else{

				total = "Correct answer.<br/><br/>";
			}



			//output results
			$('#quizans').html(" "+total+" "+silentdisease);




		});// close btnQuiz




				//q2
		$('#btnQuiz1').on('click',function(){
			
			console.log("Button click");

		
			var ans1 = $("input[name='fruits']:checked").val();

			console.log(ans1);  
			var nofruit = "Yes. Fruits are a key part of a healthy diet. But fruits do contain carbs -- some more than others -- and eating too many carbs could cause your blood sugar to get high. As with any food, pay attention to the amount you're eating.";          




		    
			if(ans1 == 'true1'){

				total = "Wrong answer.<br/><br/>";

			}

			else{

				total = "Correct answer.<br/><br/>";
			}



			//output results
			$('#quizans1').html(" "+total+" "+nofruit);




		});// close btnQuiz





				//q3
		$('#btnQuiz2').on('click',function(){
			
			console.log("Button click");

		
			var ans2 = $("input[name='candy']:checked").val();

			console.log(ans2);  
			var nocandy = "People with diabetes can eat sagary foods like cupcakes or apple pie -- but the portion should be highly reasonable...";          




		    
			if(ans2 == 'true2'){

				total = "Wrong answer.<br/><br/>";

			}

			else{

				total = "Correct answer.<br/><br/>";
			}



			//output results
			$('#quizans2').html(" "+total+" "+nocandy);




		});// close btnQuiz











						//q4
		$('#btnQuiz3').on('click',function(){
			
			console.log("Button click");

		
			var ans3 = $("input[name='pregnant']:checked").val();

			console.log(ans3);  
			var nopregnant = "Long ago,it was adviced to avoid pregnancy to woman with diabetes. But its not the case anymore. With good medical care diabetic women can have a normal pregnancy and a health baby.  ";          




		    
			if(ans3 == 'true3'){

				total = "Wrong answer.<br/><br/>";

			}

			else{

				total = "Correct answer.<br/><br/>";
			}



			//output results
			$('#quizans3').html(" "+total+" "+nopregnant);




		});// close btnQuiz




});//doc ready

