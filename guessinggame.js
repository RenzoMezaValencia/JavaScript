var number = Math.round(Math.random()*100+1);
var guess = prompt("Guess a number between 1 and 100: ");

while(guess!=number){
	if (guess<number){
		var tip=number-guess;
		alert("Muy bajooooo!, sigue intentando "+tip);
		guess = prompt("Guess again a number between 1 and 100: ");
	}else{
		var tip=guess-number;
		alert("Muy aaaaltooo!,sigue intentando "+tip);
		guess = prompt("Guess again a number between 1 and 100: ");
	}

}

if (guess == number){ 
	var name = prompt("Whats your name?");
	var times = prompt("Give me a number: ");

	for(var i=0;i<times;i++){
		document.writeln("Lo hiciste "+name+"!!! Felicitaciones");
	}
}