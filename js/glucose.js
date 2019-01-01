	
	$(document).ready(function(){

		console.log("Good");


		//Non diabetic range

		$('#btnCal1').on('click',function(){
			
			console.log("Button click");

			var num1 = parseFloat($('#num1').val());

			var unit1 = $('#unit1').val();

            

            //check isNAN
			if ((!isNaN(num1))){
			



		    //for mmol
			if(unit1 == 'mmol1' && num1 < 4.0){

				total = 'Note that your blood glucose is lower than the normal range (hypoglycemia state) as it is less than 4.0 Mmol/L. Please have something that has at least 15 grams (g) of carbohydrates. For examples: a fruit or one cup of tea';

			}

			else if(unit1 == 'mmol1' && num1 >= 4.0 && num1 <= 7.8 ){

				total = 'Your blood glucose is in the normal range as it is between 4mmol/L & 7.8mmol/L';
			}

			else if (unit1 == 'mmol1' && num1 > 7.8 ){

				total = 'Your blood glucose is higher than the normal range as it is greater than 7.8mmol/L at least 90mins after your meal. We advice you to consult a doctor please.';
			}


			//for mgdl

			else if(unit1 == 'mgdl1' && num1 <= 70 ){

				total = 'Note that your blood glucose is lower than the normal range (hypoglycemia state) as it is less than 70 mg/dL. Please have something that has at least 15 grams (g) of carbohydrates. For examples: a fruit or one cup of tea';
			}


			else if(unit1 == 'mgdl1' && num1 > 70 && num1 <= 140 ){

				total = 'Your blood glucose is in the normal range as it is between 70 mg/dL & 140 mg/dL';
			}


			else if (unit1 == 'mgdl1' && num1 > 140 ){

				total = 'Your blood glucose is higher than the normal range as it is greater than 140 mg/dL at least 90mins after your meal. We advice you to consult a doctor please.';
			}







			//output results
			$('#result1').html(" "+total+" ");

		}//close isNan


		else{

			$('#result1').html("Enter your Number and only numbers accepted");
		}





		});// close btnCal1

















		//Non diabetic range before meal calculation

		$('#btnCal2').on('click',function(){
			
			console.log("Button click");

			var num2 = parseFloat($('#num2').val());

			var unit2 = $('#unit2').val();

            

            //check isNAN
			if (!isNaN(num2)){
			



		    //for mmol
			if(unit2 == 'mmol2' && num2 < 4.0){

				total = 'Note that your blood glucose is lower than the normal range (hypoglycemia state) as it is less than 4.0 Mmol/L. Please have something that has at least 15 grams (g) of carbohydrates. For examples: a fruit or one cup of tea';

			}

			else if(unit2 == 'mmol2' && num2 >= 4.0 && num2 <= 5.9 ){

				total = 'Your blood glucose is in the normal range as it is between 4mmol/L & 5.9 mmol/L';
			}



			else if (unit2 == 'mmol2' && num2 > 5.9 ){

				total = 'Your blood glucose is higher than the normal range as it is greater than 5.9mmol/L. We advice you to consult a doctor please.';
			}




			//for mgdl

			else if(unit2 == 'mgdl2' && num2 <= 70 ){

				total = 'Note that your blood glucose is lower than the normal range (hypoglycemia state) as it is less than 70 mg/dL. Please have something that has at least 15 grams (g) of carbohydrates. For examples: a fruit or one cup of tea';
			}


			else if(unit2 == 'mgdl2' && num2 > 70 && num2 <= 105 ){

				total = 'Your blood glucose is in the normal range as it is between 70 mg/dL & 105 mg/dL';
			}


			else if (unit2 == 'mgdl2' && num2 > 105 ){

				total = 'Your blood glucose is higher than the normal range as it is greater than 105 mg/dL at least 90mins after your meal. We advice you to consult a doctor please.';
			}







			//output results
			$('#result2').html(" "+total+" ");

		}//close isNan


		else{

			$('#result2').html("Enter your Number and only numbers accepted");
		}





		});// close btnCal2












		
		// diabetic range

		$('#btnCal3').on('click',function(){
			
			console.log("Button click");

			var num3 = parseFloat($('#num3').val());

			var unit3 = $('#unit3').val();

            

            //check isNAN
			if (!isNaN(num3)){
			



		    //for mmol
			if(unit3 == 'mmol3' && num3 < 4.0){

				total = 'Note that your blood glucose is lower than the normal range (hypoglycemia state) for a diabetic person, as it is less than 4.0 Mmol/L. Please have something that has at least 15 grams (g) of carbohydrates. For examples: a fruit or one cup of tea';

			}

			else if(unit3 == 'mmol3' && num3 >= 4.0 && num3 <= 8.5 ){

				total = 'Your blood glucose is in the normal range as it is between 4mmol/L & 8.5mmol/L for a diabetic person';
			}

			else if (unit3 == 'mmol3' && num3 > 8.5 ){

				total = 'Your blood glucose is higher than the normal range for a diabetic person, as it is greater than 8.5mmol/L at least 90mins after your meal.';
			}


			//for mgdl

			else if(unit3 == 'mgdl3' && num3 <= 70 ){

				total = 'Note that your blood glucose is lower than the normal range (hypoglycemia state) for a diabetic person, as it is less than 70 mg/dL. Please have something that has at least 15 grams (g) of carbohydrates. For examples: a fruit or one cup of tea';
			}


			else if(unit3 == 'mgdl3' && num3 > 70 && num3 <= 185 ){

				total = 'Your blood glucose is in the normal range for a diabetic person as it is between 70 mg/dL & 185 mg/dL';
			}


			else if (unit3 == 'mgdl3' && num3 > 185 ){

				total = 'Your blood glucose is higher than the normal range for a diabetic person, as it is greater than 185 mg/dL at least 90mins after your meal.';
			}







			//output results
			$('#result3').html(" "+total+" ");

		}//close isNan


		else{

			$('#result3').html("Enter your Number and only numbers accepted");
		}





		});// close btnCal3

















		// diabetic range before meal calculation

		$('#btnCal4').on('click',function(){
			
			console.log("Button click");

			var num4 = parseFloat($('#num4').val());

			var unit4 = $('#unit4').val();

            

            //check isNAN
			if (!isNaN(num4)){
			



		    //for mmol
			if(unit4 == 'mmol4' && num4 < 4.0){

				total = 'Note that your blood glucose is lower than the normal range (hypoglycemia state) for a diabetic person as it is less than 4.0 Mmol/L. Please have something that has at least 15 grams (g) of carbohydrates. For example: a fruit or one cup of tea.';

			}

			else if(unit4 == 'mmol4' && num4 >= 4.0 && num4 <= 7.0 ){

				total = 'Your blood glucose is in the normal range as it is between 4 mmol/L & 7.0 mmol/L for a diabetic person.';
			}



			else if (unit4 == 'mmol4' && num4 > 7.0 ){

				total = 'Your blood glucose is higher than the normal range as it is greater than 7.0 mmol/L for a diabetic person.';
			}




			//for mgdl

			else if(unit4 == 'mgdl4' && num4 <= 70 ){

				total = 'Note that your blood glucose is lower than the normal range (hypoglycemia state) as it is less than 70 mg/dL. Please have something that has at least 15 grams (g) of carbohydrates. For examples: a fruit or one cup of tea';
			}


			else if(unit4 == 'mgdl4' && num4 > 70 && num4 <= 125 ){

				total = 'Your blood glucose is in the normal range as it is between 70 mg/dL & 125 mg/dL fro a diabetic person.';
			}


			else if (unit4 == 'mgdl4' && num4 > 125 ){

				total = 'Your blood glucose is higher than the normal range for a diabetic person, as it is greater than 125 mg/dL. ';
			}







			//output results
			$('#result4').html(" "+total+" ");

		}//close isNan


		else{

			$('#result4').html("Enter your Number and only numbers accepted");
		}





		});// close btnCal4








		
		// children diabetic range

		$('#btnCal5').on('click',function(){
			
			console.log("Button click");

			var num5 = parseFloat($('#num5').val());

			var unit5 = $('#unit5').val();

            

            //check isNAN
			if (!isNaN(num5)){
			



		    //for mmol
			if(unit5 == 'mmol5' && num5 < 5.0){

				total = 'Note that the glucose level is lower than the normal range (hypoglycemia state), as it is less than 4.0 Mmol/L. Please have something that has at least 15 grams (g) of carbohydrates. For examples: a fruit or one cup of tea.';

			}

			else if(unit5 == 'mmol5' && num5 >= 5.0 && num5 <= 9.0 ){

				total = 'The blood glucose is in the normal range as it is between 4 mmol/L & 9.0 mmol/L for a diabetic children.';
			}

			else if (unit5 == 'mmol5' && num5 > 9.0 ){

				total = 'The blood glucose is higher than the normal range for a diabetic children, as it is greater than 9.0 mmol/L at least 90mins after meal.';
			}


			//for mgdl

			else if(unit5 == 'mgdl5' && num5 <= 90 ){

				total = 'Note that the glucose level is lower than the normal range (hypoglycemia state), as it is less than 90 mg/dL. Please have something that has at least 15 grams (g) of carbohydrates. For examples: a fruit or one cup of tea.';
			}


			else if(unit5 == 'mgdl5' && num5 > 90 && num5 <= 160 ){

				total = 'The blood glucose is in the normal range as it is between 90 mg/dL & 160 mg/dL for a diabetic children.';
			}


			else if (unit5 == 'mgdl5' && num5 > 160 ){

				total = 'The blood glucose is higher than the normal range for a diabetic children, as it is greater than 160 mg/dL at least 90mins after meal.';
			}







			//output results
			$('#result5').html(" "+total+" ");

		}//close isNan


		else{

			$('#result5').html("Enter your Number and only numbers accepted");
		}





		});// close btnCal5

















		// diabetic range before meal calculation

		$('#btnCal6').on('click',function(){
			
			console.log("Button click");

			var num6 = parseFloat($('#num6').val());

			var unit6 = $('#unit6').val();

            

            //check isNAN
			if (!isNaN(num6)){
			



		    //for mmol
			if(unit6 == 'mmol6' && num6 < 4.0){

				total = 'Note that the glucose level is lower than the normal range (hypoglycemia state), as it is less than 4.0 Mmol/L. Please have something that has at least 15 grams (g) of carbohydrates. For examples: a fruit or one cup of tea';

			}

			else if(unit6 == 'mmol6' && num6 >= 4.0 && num6 <= 7.0 ){

				total = 'The blood glucose is in the normal range as it is between 4 mmol/L & 7.0 mmol/L for a diabetic children.';
			}



			else if (unit6 == 'mmol6' && num6 > 7.0 ){

				total = 'Your blood glucose is higher than the normal range as it is greater than 7.0 mmol/L for a diabetic Children.';
			}




			//for mgdl

			else if(unit6 == 'mgdl6' && num6 <= 70 ){

				total = 'Note that the blood glucose is lower than the normal range (hypoglycemia state) as it is less than 70 mg/dL. Please have something that has at least 15 grams (g) of carbohydrates. For examples: a fruit or one cup of tea';
			}


			else if(unit6 == 'mgdl6' && num6 > 70 && num6 <= 125 ){

				total = 'Your blood glucose is in the normal range as it is between 70 mg/dL & 125 mg/dL fro a diabetic children.';
			}


			else if (unit6 == 'mgdl6' && num6 > 125 ){

				total = 'The blood glucose is higher than the normal range for a diabetic children, as it is greater than 125 mg/dL. ';
			}







			//output results
			$('#result6').html(" "+total+" ");

		}//close isNan


		else{

			$('#result6').html("Enter your Number and only numbers accepted");
		}





		});// close btnCal6









		$('#bmiCal').on('click',function(){
			
			console.log("Button click");

			var weight = parseFloat($('#weight').val());

			console.log(weight);
			var height = parseFloat($('#height').val());
			


			if((isNaN(weight)) || (isNaN(height))){
			
				$('#bmiresult').html("Complete correctly all informations and only Numbers accepted");

			}

			else {


				var h = height/100;

				var bmi = weight/((h*h));

				//var bmi = bmi.toFixed(1);

				var underweight = '<br/>Tips For You<br/><br/> *  Drink plenty of water.<br/><br/>*  High calorie high protein diet is recommended.<br/><br/>* Consume your food in frequent small meals and eat at a regular interval of 2 hours.<br/><br/>* Include nuts like almonds, walnuts, cashews, raisins, coconut etc.<br/><br/>* Use high calorie items e.g. peanut butter cheese, coconut chutney.<br/><br/>* Increase consumption of potatoes, sweet potatoes, colocasia beans, and other vegetables.<br/><br/>* If you are anemic include pomegranate, watermelon, spinach and beetroot in your diet.<br/><br/>* Include eggs, Chicken, Fish.<br/><br/>* Include high calorie fruits like banana, mango, grapes, custard apple etc.<br/><br/>* Use full cream milk and its products, milk shake, banana shake, protein shakes etc.<br/><br/>* Exercises and yoga are not only meant for weight reduction it also helps you increase your body stamina, so include some workout accordingly.';


				var normal = '<br/>Tips For You<br/><br/> Though you are in Good Shape...<br/><br/>* Include more of high fiber foods, leafy vegetables, carrots, cucumber, beetroot, broccoli, bitter gourd, pumpkin, tomatoes in your diet. <br/><br/> * Include more of high fiber fruits like apples, orange, guava, watermelon, Muskmelon, papaya etc. Try to avoid all kind of packaged and canned drinks and foods.<br/><br/>* Use healthy cooking methods like boiling, stewing, baking and grilling instead of deep frying. <br/><br/> * Include almonds, walnuts and Flax seeds in your diet. Lower consumption of salt and sugar & Drink plenty of water. <br/><br/>* Do 30-45 minutes exercise or yoga or brisk walk daily.';
				
				var overweight = '<br/>Tips For You<br/><br/> * Drink plenty of water especially start your day with 2 glasses of water.<br/><br/>*  Include high fiber, low calorie food items in your diet.<br/><br/>*  Avoid excess intake tea and coffee; instead choose for herbal and green tea.<br/><br/>*  Avoid all kind of bottled beverages and canned food items.<br/><br/>* Avoid all kind of sweets and desserts.<br/><br/>* Include high fiber rich vegetables, fruits and avoid potatoes, sweet potatoes yam and lower intake of mango, banana and other sugar rich fruits.<br/><br/>* Avoid all kind of sauces, pickles, cheese and butter etc.<br/><br/>* Avoid all kind of refined wheat flour preparations e.g. noodles, pastas, rolls etc.<br/><br/>* Use Multigrain flour, husked or wholegrain pulses and cereals. <br/><br/>* Do regular exercise for about 30-45 minutes a day.';
				

				var obesity = '<br/>Tips For You<br/><br/> * Remember there is no easy way to lose weight so set a goal and encourage yourself. <br/><br/>* Generally obese people are more proned to be attacked by seroius like Blood Pressure, Cardiac problems and also Diabetic problems so get your health check up to figure out. <br/><br/>* Strickly follow no fat and very low calory diet plan. Exercise is must, thought it is very difficult. <br/><br/>* No sugar and very low salt is recommended. <br/><br/>* Try to consume only hearth healthy oil. <br/><br/>* Drinks lots of liquid like water, Coconut water lime water. <br/><br/>* Eat raw boil and baked vegetables, leafy vegetables. <br/><br/>* Include more of high fiber fruits like apples, orange, guava, watermelon, papaya in your diet. <br/><br/>* A strict no to junk food, bottled and packaged drinks & beverages, chipos , snacks, sweets... etc';

				

				var bmi = parseFloat(bmi);

			
				if(bmi < 18.5){


				$('#bmiresult').html("Your BMI is "+bmi.toFixed(2)+ " Kilogram per square meters. You are underweight as its less than 18.5. "+"<br/><br/>"+underweight);

				}

				else if(bmi >= 18.5 && bmi < 25){

				$('#bmiresult').html("Your BMI is "+bmi.toFixed(2)+ " Kilogram per square meters. You are in the normal range as its 18.5 and 25. "+normal);

				}

				else if(bmi >=25 && bmi < 30){

				$('#bmiresult').html("Your BMI is "+bmi.toFixed(2)+ " Kilogram per square meters. You are in the overweight range as it is greater 25. "+overweight);

				}

				else if(bmi >= 30 ){

				$('#bmiresult').html("Your BMI is "+bmi.toFixed(2)+ " Kilogram per square meters. You are in the obesity range as it is greater 30. "+obesity);
				}





			}//close else part

		




		});// close bmiCal




















	

	});// close document function

