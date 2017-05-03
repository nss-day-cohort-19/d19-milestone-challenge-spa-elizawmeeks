var CarLot = (function (oldCarLot) {
  var inventory = CarLot.getInventory();

  oldCarLot.activateEvents = function (){
    var cardEvent = document.getElementsByClassName("event");
    for (var i = 0; i < cardEvent.length; i++){
      cardEvent.item(i).addEventListener("click", function(event){
        console.log('hi');
        var element = event.target.closest("div.event");
        var blu = "#80DEEA";
        console.log('element', element);
        CarLot.clickedStyles(element, blu);
      });
    }
  }

  return oldCarLot;

})(CarLot || {});