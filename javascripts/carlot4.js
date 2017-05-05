"use strict";
var CarLot = (function (oldCarLot) {
  var write = document.getElementById("stickItHere");
  // Function that writes to dom.
	oldCarLot.writeToDom = function(){
	  	var inventory = CarLot.getInventory();
	  	console.log("WRITE TO DOM BEBE");
	  	for (var i = 0; i < inventory.length; i++){
	  			write.innerHTML += `<div class="col s4 event">
													      <div class="card">
												          <div class="card-image">
												            <img src="img/${inventory[i].image}">
												            <span class="card-title"></span>
												          </div>
												          <div class="card-content">
												            <h2>${inventory[i].make}</h2>
												            <h2>${inventory[i].model}</h2>
												            <h3>${inventory[i].year}</h3>
												            <p>${inventory[i].description}</p>
												          </div>
												          <div class="card-action">
												            <a href="#">$${inventory[i].price}</a>
												          </div>
												        </div>
												      </div>`;
	  	}
	}

	return oldCarLot;

})(CarLot || {});