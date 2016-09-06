var p2state = 1;

function Toggle() {
	if (p2state == 1) {
		document.getElementById("text").style.display = "none";
		document.getElementById("showText").innerHTML = "Visa"
		p2state = 0;
	}
	else {
		document.getElementById("text").style.display = "inline";
		document.getElementById("showText").innerHTML = "Dölj"
		p2state = 1;
	}
}