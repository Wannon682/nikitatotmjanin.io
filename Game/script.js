 var scorePC=0
 var scorePlayer=0

 var nomerPC=0
 var nomerPlayer=0

 function stone() {
 	document.getElementById("player").style.backgroundImage="url(img/stone.png)"
 	document.getElementById("player").style.backgroundPosition="50% 50%"
 	document.getElementById("player").style.backgroundSize="100% "
 	nomerPlayer=0 
 	game();
 }
  function noj() {
 	document.getElementById("player").style.backgroundImage="url(img/noj.png)"
 	document.getElementById("player").style.backgroundPosition="50% 50%"
 	document.getElementById("player").style.backgroundSize="100% "
 	nomerPlayer=1
 	game();
 }
  function paper() {
 	document.getElementById("player").style.backgroundImage="url(img/paper.png)"
 	document.getElementById("player").style.backgroundPosition="50% 50%"
 	document.getElementById("player").style.backgroundSize="90% "
 	nomerPlayer=2
 	game();
 }
 function game() {
 	nomerPC=getrandomint(3);
 	if(nomerPC==0) {
 		document.getElementById("PC").style.backgroundImage="url(img/stone.png)"
 	document.getElementById("PC").style.backgroundPosition="50% 50%"
 	document.getElementById("PC").style.backgroundSize="100% "
 	} 
 	if(nomerPC==1){
 		document.getElementById("PC").style.backgroundImage="url(img/noj.png)"
 	document.getElementById("PC").style.backgroundPosition="50% 50%"
 	document.getElementById("PC").style.backgroundSize="100% "
 	}
 	if(nomerPC==2) {
 		document.getElementById("PC").style.backgroundImage="url(img/paper.png)"
 	document.getElementById("PC").style.backgroundPosition="50% 50%"
 	document.getElementById("PC").style.backgroundSize="90% "

 	}
 	 	if((nomerPlayer==0 && nomerPC==1) || (nomerPlayer==1 && nomerPC==2 ) || (nomerPlayer==2 && nomerPC==0)) {
 	 		scorePlayer++
 	 		document.getElementById("score").textContent="Score player: "+ scorePlayer;

 	 	}
 	 	else if(nomerPlayer==nomerPC){

 	 	}
 	 	else {
 	 		scorePC++
 	 		document.getElementById("score2").textContent="Score PC: "+ scorePC;

 	 	}
 	}

 function getrandomint(max) {
 	return Math.floor(Math.random()* Math.floor(max));
 }

 function start() {
   document.getElementById("start1").disabled=true;
    document.getElementById("kamen").disabled=false;
     document.getElementById("nojnitsi").disabled=false;
      document.getElementById("bumaga").disabled=false;
       document.getElementById("finish1").disabled=false;
        document.getElementById("retry1").disabled=true;

 }

 function finish() {
 		document.getElementById("kamen").disabled=true;
     document.getElementById("nojnitsi").disabled=true;
      document.getElementById("bumaga").disabled=true;
       document.getElementById("finish1").disabled=true;
        document.getElementById("retry1").disabled=false;
        if(scorePlayer>scorePC) {
        	alert("Вы победили со счётом "+scorePlayer+":"+scorePC)
        }
        if(scorePlayer<scorePC) {
        	alert("Вы проиграли со счётом "+scorePlayer+":"+scorePC)
        }
        if(scorePlayer==scorePC) {
        	alert("Ничья! "+scorePlayer+":"+scorePC)
        }


 }

 function retry() {
 document.getElementById("start1").disabled=false;
 document.getElementById("retry1").disabled=true;
 	scorePlayer=0
 	scorePC=0
   document.getElementById("score2").textContent="Score PC: "+ scorePC;
    document.getElementById("score").textContent="Score player: "+ scorePlayer;;
 }