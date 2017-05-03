var CarLot = (function () {
  var inventory = [];

  return {
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.addEventListener("load", function () {
      	console.log("file loaded");
      	var inventoryData = JSON.parse(event.target.responseText);
      	console.log("inventoryData", inventoryData);
      	for (var i = 0; i < inventoryData.cars.length; i++){
      		inventory.push(inventoryData.cars[i]);
      	}
      	console.log("inventory array", inventory);
      	
      	CarLot.writeToDom();
      });

      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();

    },

    getInventory: function (prop){
    	return inventory;
    }
  };

})(CarLot || {});