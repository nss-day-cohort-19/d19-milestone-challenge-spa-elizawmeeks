var CarLot = (function (oldCarLot) {
var inventory = CarLot.getInventory();
var cardEvent = document.getElementsByClassName("event");
var input = document.getElementById("descInput");
  // Makes the Event Listeners for the cards, is called in CarLot.loadInventory(); on carlot.js.
  oldCarLot.activateEvents = function (){
    for (var i = 0; i < cardEvent.length; i++){
      cardEvent.item(i).addEventListener("click", function(event){
        console.log('hi');
        var element = event.target.closest("div.event");
        var blu = "#80DEEA";
        console.log('element', element);
        CarLot.clickedStyles(element, blu);
        input.focus();
        
        input.addEventListener("keyup", function(event){
          const keyname = event.keyCode;

          if (keyname === 13) {
            console.log("i hit enter");
            var newDescr = input.value;
            element.querySelector("p").innerHTML = newDescr;
            input.value = "";   
            CarLot.resetStyles(element);
            element = "";
          } else {
            element.querySelector("p").innerHTML = input.value;
          }

            
        });
      });
    }
  }

  return oldCarLot;

})(CarLot || {});