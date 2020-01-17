alert("welcome to shruti kapoors's piano press enter to enjoy playing piano with beautiful music");
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);


});


function makeSound(key) {

  switch (key) {
    case "s":
      var tom1 = new Audio("sound/a.wav");
      tom1.play();
      break;

    case "h":

      var tom2 = new Audio("sound/b.wav");
      tom2.play();
      break;

    case "r":

      var tom3 = new Audio('sound/c.wav');
      tom3.play();
      break;

    case "u":

      var tom4 = new Audio('sound/d.wav');
      tom4.play();
      break;

    case "t":

      var snare = new Audio('sound/e.wav');
      snare.play();
      break;

    case "i":

      var crash = new Audio('sound/f.wav');
      crash.play();
      break;

    case "k":
      var kick = new Audio('sound/g.wav');
      kick.play();
      break;
      case "a":
       var ok=new Audio('sound/h.wav');
       ok.play();
       break;
       case "p":
         var kick = new Audio('sound/i.wav');
         kick.play();
         break;
         case "o":
           var kick = new Audio('sound/a.wav');
           kick.play();
           break;
           case "o":
             var kick = new Audio('sound/b.wav');
             kick.play();
             break;
             case "r":
               var kick = new Audio('sound/c.wav');
               kick.play();
               break;




    default: console.log(key);

  }
}
