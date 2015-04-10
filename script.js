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
	//Dropdown Menu Test
	$("#menutest").slideUp(1);
	$("#testmenu").mouseenter(function() {
		$("#menutest").slideDown(1);
		$("#testmenu").mouseleave(function() {
			$("#menutest").slideUp(1);
		});
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
