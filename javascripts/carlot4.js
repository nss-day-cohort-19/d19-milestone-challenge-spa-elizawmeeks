var CarLot = (function (oldCarLot) {
  var write = document.getElementById("stickItHere");

  oldCarLot.writeToDom = function(){
  	var inventory = CarLot.getInventory();
  	console.log("WRITE TO DOM BEBE");
  	for (var i = 0; i < inventory.length; i = i + 3){
  		write.innerHTML += 	`<div class="row">
  													<div class="col s4 event">
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
										        </div>
										        <div class="col s4 event">
										          <div class="card">
										            <div class="card-image">
										              <img src="img/${inventory[i+1].image}">
										              <span class="card-title"></span>
										            </div>
										            <div class="card-content">
										              <h2>${inventory[i+1].make}</h2>
										              <h2>${inventory[i+1].model}</h2>
										              <h3>${inventory[i+1].year}</h3>
										              <p>${inventory[i+1].description}</p>
										            </div>
										            <div class="card-action">
										              <a href="#">$${inventory[i+1].price}</a>
										            </div>
										          </div>
										        </div>
										        <div class="col s4 event">
										          <div class="card">
										            <div class="card-image">
										              <img src="img/${inventory[i+2].image}">
										              <span class="card-title"></span>
										            </div>
										            <div class="card-content">
										              <h2>${inventory[i+2].make}</h2>
										              <h2>${inventory[i+2].model}</h2>
										              <h3>${inventory[i+2].year}</h3>
										              <p>${inventory[i+2].description}</p>
										            </div>
										            <div class="card-action">
										              <a href="#">$${inventory[i+2].price}</a>
										            </div>
										          </div>
										        </div>
										       </div>`

  	}
  }

	return oldCarLot;

})(CarLot || {});