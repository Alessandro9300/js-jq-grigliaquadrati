// creo 64 div in js a random gli dico di crearne 15 col background rosso quando clicco mentre tutti gli altri tutti verdi


$(document).ready(function(){

  var myArray = [];

   for (var i = 0; i < 15; i++) {
     numeroRandom = Math.floor(Math.random() * (63 - 1 + 1) + 1);

     if (myArray.indexOf(numeroRandom) == -1){
       myArray.push(numeroRandom)
     } else {
       i--
     }
   }


  for (var i = 0; i < 64; i++) {
    var contentPrec = $(".container").html();
    var outHtml = $(".container");
    outHtml.html(contentPrec + "<div class='quadrato'>" + "</div>");

  }

    while (myArray.length > 0){
     console.log("il mio array è " + myArray);
    ;
    var spliced = myArray.splice(0,1);
    var numSplice = spliced[0];

    $(".quadrato").eq(numSplice).addClass("color-red");


    }











})
