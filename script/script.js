// creo 64 div in js a random gli dico di crearne 15 col background rosso quando clicco mentre tutti gli altri tutti verdi

// (ho messo più quadrati rossi sennò era troppo facile vincere)

$(document).ready(function(){

  // asseggno all'array creato 15 numeri random che non si ripetono

  var myArray = [];

   for (var i = 0; i < 25; i++) {
     numeroRandom = Math.floor(Math.random() * (64) + 1);

     if (myArray.indexOf(numeroRandom) == -1){
       myArray.push(numeroRandom)
     } else {
       i--
     }
   }

   // creo 64 div con classo .quadrato nell'HTML

  for (var i = 0; i < 64; i++) {
    var contentPrec = $(".cont-cub").html();
    var outHtml = $(".cont-cub");
    outHtml.html(contentPrec + "<div class='quadrato'>" + "</div>");

  }

  // Faccio ciclo while per assegnare classi a indici random

  while (myArray.length > 0){
  var spliced = myArray.splice(0,1);
  var numSplice = spliced[0];
  $(".quadrato").eq(numSplice).addClass("color-red");
  }

  // creo funzione al click
  var punteggioRosso = 0;
  var punteggioVerde = 0;
  var cheatPoints = 0;

  console.log(punteggioRosso);
  console.log(punteggioVerde);
  $(".quadrato").click(function(){


    if ($(this).hasClass("already")){
      cheatPoints++;
      console.log(cheatPoints);
    } else if ($(this).hasClass("color-red")){
        $(this).css("background","red")
        punteggioRosso++;
        $(".prosso").html(punteggioRosso)
        $(this).addClass("already");
        console.log(punteggioRosso);
    } else if (!$(this).hasClass("color-red")){
      $(this).css("background","green")
      punteggioVerde++;
      $(".pverde").html(punteggioVerde);
      $(this).addClass("already");
    }

    if (cheatPoints >= 4) {
      alert("STOP CHEAT!!!")
      window.location.reload()
    } else if (punteggioVerde == 10) {
      alert("YOU WIN!!!!")
      window.location.reload()
    } else if (punteggioRosso == 5){
      alert("YOU LOST!!!!");
      window.location.reload()


    }
  })











})
