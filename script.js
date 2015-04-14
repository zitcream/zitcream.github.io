$(document).ready(function() {
	//Purplize!
	var purple = false;
	$("#nein").click(function() {
		function purplize() {
			if(purple) {
				alert("much colors are very wow");
				$("#neinbox").css("background", "repeating-linear-gradient(to bottom right, red, orange, yellow, green, blue, indigo, violet)");
				$("#header").css("background", "repeating-linear-gradient(red, orange, yellow, green, blue, indigo, violet)");
				$("#body").css("background", "repeating-linear-gradient(to top, red, orange, yellow, green, blue, indigo, violet)");
				$("#txt").css("background", "repeating-linear-gradient(to bottom left, red, orange, yellow, green, blue, indigo, violet");
				$("#nein").attr("src", "https://db.tt/ma9olSoZ");
				$("#nein").attr("width", "300");
				$("#nein").attr("height", "300");
				$(".linktxt").css("font-family", "Comic Sans MS, monospace");
				$(".linktxt:visited").css("font-family", "Comic Sans MS, monospace");
				$("#txt").css("font-family", "Comic Sans MS, monospace");
				purple = false;
			} else {
				alert("'Lavender' is my favorite color");
				$("#neinbox").css("background", "#8904B1");
				$("#header").css("background", "linear-gradient(purple, violet, purple)");
				$("#body").css("background", "#380B61");
				$("#txt").css("background", "#6A0888");
				$("#nein").attr("src", "https://db.tt/BA2vHPxL");
				$("#nein").attr("width", "299.5");
				$("#nein").attr("height", "205");
				$(".linktxt").css("font-family", "Monaco, monospace");
				$(".linktxt:visited").css("font-family", "Monaco, monospace");
				$("#txt").css("font-family", "Monaco, monospace");
				purple = true;
			}
		}
		purplize();
	});
	$("#aboot").click(function() {
		alert("THIS BUTTONE DOES ABSOLUTELY NOTHING!");
	});
	//Ping! Pong! Ping! Pong!...
	$("#ping").click(function() {
		pong();
	});
	//ILLUMINATI CONFIRMED
	function illuminate() {
		alert("Confirmed");
		$("#nein").attr("src", "https://db.tt/OHGBBA1M");
		$("#nein").attr("width", "300");
		$("#nein").attr("height", "300");
	};
	//Super Secret Code Entering
	$("#codez").click(function() {
		var code = prompt("Enter your super secret code:");
		switch(code) {
			case "illuminati":
				illuminate();
				break;
			default:
				alert("Code invalid.");
		}
	});
});

function pong () {
	if(confirm("Ping!")) {
		if(confirm("Pong!")) {
			pong();
		} else {
			return;
		}
	} else {
		return;
	}
}

function alphabet() {
    var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k","l","m","n", "o", "p", "q", "r", "s", "t" , "u", "v", "w", "x", "y", "z"];
    for(i = 0; i < 26; i++) {
        alert(alpha[i].toUpperCase());
    }
}
