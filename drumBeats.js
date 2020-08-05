function toggleFunction() {
   document.getElementById('drumsPage').style.display = 'block';
   document.getElementById('homePage').style.display='none';
}

let selectDrumClassLength = document.getElementsByClassName('selectDrum').length;
for (let i = 0; i < selectDrumClassLength; i++) {
   document.getElementsByClassName("selectDrum")[i].addEventListener("click", function(){
      var innerHTMLvalue = this.innerHTML;
      drumKit(innerHTMLvalue);
   });

   document.getElementsByClassName("selectDrum")[i].addEventListener("keypress",function(event){
      var innerTextvalue = event.key;
      drumKit(innerTextvalue);
   })
}
function drumKit(text) {
   
   switch (text) {
      case 'w':
         let bass = new Audio('sounds/bass.wav');
         bass.play();
         break;

      case 'a':
         let snare = new Audio('sounds/snare.wav');
         snare.play();
         break;

      case 'd':
         let toms = new Audio('sounds/toms.wav');
         toms.play();
         break;

      case 'j':
         let cymbals = new Audio('sounds/cymbals.wav');
         cymbals.play();
         break;

      case 'l':
         let splashcymbals = new Audio('sounds/splashcymbals.mp3');
         splashcymbals.play();
         break;

      default:
         console.log('Error');
         break;
   }
}
