$(document).ready(function() {
	//Purplize!
	$("#nein").click(function() {
		alert("'Lavender' is my favorite color");
		$("#neinbox").css("background-color", "#8904B1");
		$("#header").css("background", "linear-gradient(purple, violet, purple)");
		$("#body").css("background-color", "#380B61");
		$("#txt").css("background-color", "#6A0888");
		$("#nein").attr("src", "https://db.tt/BA2vHPxL");
	});
	$("#aboot").click(function() {
		alert("THIS BUTTONE DOES ABSOLUTELY NOTHING!");
	});
	//Ping! Pong! Ping! Pong!...
	$("#ping").click(function() {
		pong();
	});
	//Quacker
	$("#quacker").click(function() {
		var duck = confirm("Duck");
		var goose = false;
		while(goose === false) {
			var gooseChance = Math.floor(Math.random() * (5 - 1 + 1)) + min;
			if(duck) {
				if(gooseChance = 5) {
					alert("Goose!");
					goose = true;
					return 0;
				} else {
					duck = confirm("Duck");
				}
			} else {
				return 0;
			}
		};
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
