function recipe() {
	var x = document.getElementById('batch').value;
	document.getElementById("butter").innerHTML = (x*150) + " gram smör eller margarin";
	document.getElementById("suger").innerHTML = (x*3) + " dl socker";
	document.getElementById("cacao").innerHTML = (x*1) + " dl kakao";
	document.getElementById("vanillaSugar").innerHTML = (x*1) + " tsk vaniljsocker";
	document.getElementById("egg").innerHTML = (x*2) + " st ägg";
	document.getElementById("flour").innerHTML = (x*2) + " dl vetemjöl";
}

function updateRate(){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function () {
		if(this.readyState == 4 && this.status == 200) {
			var jsonList = JSON.parse(this.responseText);
			document.getElementById('ratingMeanValue').innerHTML = jsonList.rating + "/5 av " + jsonList.votes + " röster";
		}
	}
	xmlhttp.open("GET", "https://edu.oscarb.se/sjk15/api/recipe/?api_key=122d97072c38e22e&recipe=kladdkaka",true);
	xmlhttp.send();
}

function rateOne() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "https://edu.oscarb.se/sjk15/api/recipe/?api_key=122d97072c38e22e&recipe=kladdkaka&rating=1",true);
	xmlhttp.send();
  console.log("1");
}

function rateTwo() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "https://edu.oscarb.se/sjk15/api/recipe/?api_key=122d97072c38e22e&recipe=kladdkaka&rating=2",true);
	xmlhttp.send();
  console.log("2");
}

function rateThree() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "https://edu.oscarb.se/sjk15/api/recipe/?api_key=122d97072c38e22e&recipe=kladdkaka&rating=3",true);
	xmlhttp.send();
  console.log("3");
}

function rateFour() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "https://edu.oscarb.se/sjk15/api/recipe/?api_key=122d97072c38e22e&recipe=kladdkaka&rating=4",true);
	xmlhttp.send();
  console.log("4");
}

function rateFive() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "https://edu.oscarb.se/sjk15/api/recipe/?api_key=122d97072c38e22e&recipe=kladdkaka&rating=5",true);
	xmlhttp.send();
  console.log("5");
}

/*
function rate() {
	var xmlhttp = new XMLHttpRequest();
	var test = xmlhttp.open("GET", "https://edu.oscarb.se/sjk15/api/recipe/?api_key=122d97072c38e22e&recipe=kladdkaka");
	xmlhttp.send();

	if(document.getElementById('star1').checked) {
		xmlhttp.open("GET", "https://edu.oscarb.se/sjk15/api/recipe/?api_key=122d97072c38e22e&recipe=kladdkaka&rating=1");
		xmlhttp.send();
		console.log("1");
	}
	else if(document.getElementById('star2').checked) {
		xmlhttp.open("GET", "https://edu.oscarb.se/sjk15/api/recipe/?api_key=122d97072c38e22e&recipe=kladdkaka&rating=2");
		xmlhttp.send();
		console.log("2");
	}
	else if(document.getElementById('star3').checked) {
		xmlhttp.open("GET", "https://edu.oscarb.se/sjk15/api/recipe/?api_key=122d97072c38e22e&recipe=kladdkaka&rating=3");
		xmlhttp.send();
		console.log("3");
	}
	else if(document.getElementById('star4').checked) {
		xmlhttp.open("GET", "https://edu.oscarb.se/sjk15/api/recipe/?api_key=122d97072c38e22e&recipe=kladdkaka&rating=4");
		xmlhttp.send();
		console.log("4");
	}
	else if(document.getElementById('star5').checked) {
		xmlhttp.open("GET", "https://edu.oscarb.se/sjk15/api/recipe/?api_key=122d97072c38e22e&recipe=kladdkaka&rating=5");
		xmlhttp.send();
		console.log("5");
	}
	document.getElementById('ratingMeanValue').innerHTML = "-/5";
}
*/
