/*Elev: Takeyoshi Murase*/

//Funktion som kontrollerar om ett personnummer är giltigt eller inte.
function validSocialSecurityNumber() {
	var userInputValue = document.getElementById('SocialSecurityNumberInput').value; //Hämtar indatan i skrivfältet.
	var evenIndex = 0; //En variabel som håller summan av alla ensiffriga tal mulitplicerade med 2 (och siffersumman av de tvåsiffriga talen).
	var oddIndex = 0; //En variabel som håller summan av alla ensiffriga tal mulitplicerade med 1.
	var sumEvenAndOdd = 0; //En variabel som håller summan av evenIndex och oddIndex.
	var digit = 0; //En variabel som håller en enskild siffra av ett personnummer under ett tillfälle för att addera det till evenIndex eller oddIndex summan.
	if(userInputValue.length == 10) { //Kollar om indatans längd är 10 siffror, isåfall ... : 
		for(var i=0;  i<10; i++) {
			if((i%2)==0){ //Kollar om en siffras index i ett personnummer är jämt, isåfall ... :
				var char = userInputValue.charAt(i); //Plockar ut varje enskild jämn siffra ur ett personnummer.
				digit = parseInt(char); //Omvandlar från en string till ett number.
				if(digit>4){ //Kollar om siffran är större än 4, dvs. siffran multiplicering med 2 likamed ett tvåsiffrigt tal. Måste därför bryta ner det till ensiffriga tal och addera.
					digit = digit*2;
					var digitString = digit.toString();
					evenIndex = evenIndex + parseInt(digitString.charAt(0)) + parseInt(digitString.charAt(1)); //Var tvungen att gör på detta sätt. När jag använde mig av en for loop så höll den på i oändlighet, vet inte varför.
					/*
					for (var i=0; i<digitString.length; i++) {
						evenIndex = evenIndex + parseInt(digitString.charAt(i));
					}
					*/
				}
				else {
					evenIndex = evenIndex + digit*2; //Multiplicerar varje jämnt index siffra med 2 och summerar siffersumman av alla jämna (index) ensiffriga tal.
				}
			}
			if((i%2)==1){ //Kollar om en siffras index i ett personnummer är ojämt, isåfall ... :
				var char2 = userInputValue.charAt(i); //Plockar ut varje enskild ojämn siffra ur ett personnummer.
				digit = parseInt(char2); //Omvandlar från en string till ett number.
				oddIndex = oddIndex + digit*1; //Siffersumman av alla ojämna (index) ensiffriga tal. 
			}
		}
		sum = evenIndex + oddIndex; //Adderar den jämna (index) siffersumman med den ojämna (index) siffersumman.
		console.log(sum);
		if((sum%10)==0) { //Kollar om den totala siffersumman av ett personnummer är jämnt delbart med 10, isåfall ... :
			document.getElementById('validOrNotResult').innerHTML = "Giltigt personnummer."; //Ändrar resultatet till "Giltigt personnummer"
		}
		else {
			document.getElementById('validOrNotResult').innerHTML = "Ogiltigt personnummer."; //Ändrar resultatet till "Ogiltigt personnummer"
		}
	}
	else if(userInputValue.length == 12) { //Kollar om indatans längd är 12 siffror, isåfall ... :
		for(var i=2;  i<12; i++) { //Samma princip gäller här, skillnaden är bara att det är ett 12 siffrigt personnummer isället för 10. for loopen hoppar över dem två första siffrorna och börjar på index 2.
			if((i%2)==0){
				var char = userInputValue.charAt(i);
				digit = parseInt(char);
				if(digit>4){
					digit = digit*2;
					var digitString = digit.toString();
					evenIndex = evenIndex + parseInt(digitString.charAt(0)) + parseInt(digitString.charAt(1));
				}
				else {
					evenIndex = evenIndex + digit*2;
				}
			}
			if((i%2)==1){
				var char2 = userInputValue.charAt(i);
				digit = parseInt(char2);
				oddIndex = oddIndex + digit*1; 
			}
		}
		sum = evenIndex + oddIndex;
		console.log(sum);
		if((sum%10)==0) {
			document.getElementById('validOrNotResult').innerHTML = "Giltigt personnummer.";	
		}
		else {
			document.getElementById('validOrNotResult').innerHTML = "Ogiltigt personnummer.";
		}
	}
	else {
		document.getElementById('validOrNotResult').innerHTML = "Felaktig inmatning, vänligen skriv in ett 10 eller 12 siffrigt personnummer utan bindesträck.";
	}
}

//Funktion som kontrollerar om ett årtal är skottår eller inte.
function leapYear() {
	var userInputValue = document.getElementById('leapYearInput').value; //Hämtar indatan i skrivfältet.
	if((userInputValue%4)==0){ //Kollar om årtalet är jämnt delbart med 4.
		if((userInputValue%100)==0){ //Kollar om årtalet är jämnt delbart med 100.
			if((userInputValue%400)==0){ //Kollar om årtalet är jämnt delbart med 400.
				document.getElementById('leapYearOrNotResult').innerHTML = "Året är ett skottår.";
			}
			else{
				document.getElementById('leapYearOrNotResult').innerHTML = "Året är inte ett skottår.";
			}
		}
		else{
			document.getElementById('leapYearOrNotResult').innerHTML = "Året är ett skottår.";
		}
	}
	else{
		document.getElementById('leapYearOrNotResult').innerHTML = "Året är inte ett skottår.";
	}
}

//Funktion som kontrollerar om ett årtal är skottår eller inte.
function digitSum() { //Funktion som returnerar siffersumman av ett tal.
	var userInputValue = document.getElementById('figureInput').value; //Hämtar indatan i skrivfältet.
	var char = null;
	var digit = 0;
	var sum = 0;
	for (var i=0; i<userInputValue.length; i++) { //En for loop som går igenom varje enskild siffra i ett tal och adderar samman alla.
		char = userInputValue.charAt(i);
		digit = parseInt(char);
		sum = sum + digit;
	}
	document.getElementById('digitSumResult').innerHTML = "Siffersumman av talet blir: " + sum;
}
