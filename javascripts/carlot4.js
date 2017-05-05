"use strict";
var CarLot = (function (oldCarLot) {
  var write = document.getElementById("stickItHere");
  // Function that writes to dom. Yes all the append childs are kind of a bitch, but when I tried to do innerHTML += something kept adding in the "missing" </div> to the end of my rows after only one element had been placed. I'm pretty sure that "something" was Materialize, but I'm not sure. I do know it wasn't me.
	oldCarLot.writeToDom = function(){
	  	var inventory = CarLot.getInventory();
	  	console.log("WRITE TO DOM BEBE");
	  	for (var i = 0; i < inventory.length; i++){
	  		if (i % 3 === 0){
		  		write.appendChild(document.createElement("div")).setAttribute("class", "row");
		  		var thisRow = write.querySelectorAll(".row")[i/3];
		  		console.log("thisRow", thisRow);
		  		thisRow.appendChild(document.createElement("div")).setAttribute("class", "col s4 event");
		  		var thisCard = thisRow.querySelector(".col");
		  		console.log("thisCard", thisCard);
		  		thisCard.appendChild(document.createElement("div")).setAttribute("class", "card");
		  		thisCard.querySelector(".card").appendChild(document.createElement("div")).setAttribute("class", "card-image");
		  		thisCard.querySelector(".card-image").appendChild(document.createElement("img")).setAttribute("src", `img/${inventory[i].image}`);
					thisCard.querySelector(".card-image").appendChild(document.createElement("span")).setAttribute("class", `card-title`);
					thisCard.querySelector(".card").appendChild(document.createElement("div")).setAttribute("class", "card-content");
					thisCard.querySelector(".card-content").appendChild(document.createElement("h2"));
					thisCard.querySelector("h2").appendChild(document.createTextNode(`${inventory[i].make}`));
					thisCard.querySelector(".card-content").appendChild(document.createElement("h2"));
					thisCard.querySelectorAll("h2")[1].appendChild(document.createTextNode(`${inventory[i].model}`));
					thisCard.querySelector(".card-content").appendChild(document.createElement("h2"));
					thisCard.querySelectorAll("h2")[2].appendChild(document.createTextNode(`${inventory[i].year}`));
					thisCard.querySelector(".card-content").appendChild(document.createElement("p"));
					thisCard.querySelector("p").appendChild(document.createTextNode(`${inventory[i].description}`));
					thisCard.querySelector(".card").appendChild(document.createElement("div")).setAttribute("class", "card-action");
					thisCard.querySelector(".card-action").appendChild(document.createElement("a")).setAttribute("href", "#");
					thisCard.querySelector("a").appendChild(document.createTextNode(`${inventory[i].price}`));
	  		} else if (i % 3 === 1) {
	  			console.log("r1");
	  			write.appendChild(document.createElement("div")).setAttribute("class", "row");
		  		var thisRow = write.querySelectorAll(".row")[((i-1)/3)];
		  		console.log("thisRow", thisRow);
		  		thisRow.appendChild(document.createElement("div")).setAttribute("class", "col s4 event");
		  		var thisCard = thisRow.querySelectorAll(".col")[1];
		  		console.log("thisCard", thisCard);
		  		thisCard.appendChild(document.createElement("div")).setAttribute("class", "card");
		  		thisCard.querySelector(".card").appendChild(document.createElement("div")).setAttribute("class", "card-image");
		  		thisCard.querySelector(".card-image").appendChild(document.createElement("img")).setAttribute("src", `img/${inventory[i].image}`);
					thisCard.querySelector(".card-image").appendChild(document.createElement("span")).setAttribute("class", `card-title`);
					thisCard.querySelector(".card").appendChild(document.createElement("div")).setAttribute("class", "card-content");
					thisCard.querySelector(".card-content").appendChild(document.createElement("h2"));
					thisCard.querySelector("h2").appendChild(document.createTextNode(`${inventory[i].make}`));
					thisCard.querySelector(".card-content").appendChild(document.createElement("h2"));
					thisCard.querySelectorAll("h2")[1].appendChild(document.createTextNode(`${inventory[i].model}`));
					thisCard.querySelector(".card-content").appendChild(document.createElement("h2"));
					thisCard.querySelectorAll("h2")[2].appendChild(document.createTextNode(`${inventory[i].year}`));
					thisCard.querySelector(".card-content").appendChild(document.createElement("p"));
					thisCard.querySelector("p").appendChild(document.createTextNode(`${inventory[i].description}`));
					thisCard.querySelector(".card").appendChild(document.createElement("div")).setAttribute("class", "card-action");
					thisCard.querySelector(".card-action").appendChild(document.createElement("a")).setAttribute("href", "#");
					thisCard.querySelector("a").appendChild(document.createTextNode(`${inventory[i].price}`));

	  		} else if (i % 3 === 2) {
	  			console.log("r2");
	  			write.appendChild(document.createElement("div")).setAttribute("class", "row");
		  		var thisRow = write.querySelectorAll(".row")[((i-2)/3)];
		  		console.log("thisRow", thisRow);
		  		thisRow.appendChild(document.createElement("div")).setAttribute("class", "col s4 event");
		  		var thisCard = thisRow.querySelectorAll(".col")[2];
		  		console.log("thisCard", thisCard);
		  		thisCard.appendChild(document.createElement("div")).setAttribute("class", "card");
		  		thisCard.querySelector(".card").appendChild(document.createElement("div")).setAttribute("class", "card-image");
		  		thisCard.querySelector(".card-image").appendChild(document.createElement("img")).setAttribute("src", `img/${inventory[i].image}`);
					thisCard.querySelector(".card-image").appendChild(document.createElement("span")).setAttribute("class", `card-title`);
					thisCard.querySelector(".card").appendChild(document.createElement("div")).setAttribute("class", "card-content");
					thisCard.querySelector(".card-content").appendChild(document.createElement("h2"));
					thisCard.querySelector("h2").appendChild(document.createTextNode(`${inventory[i].make}`));
					thisCard.querySelector(".card-content").appendChild(document.createElement("h2"));
					thisCard.querySelectorAll("h2")[1].appendChild(document.createTextNode(`${inventory[i].model}`));
					thisCard.querySelector(".card-content").appendChild(document.createElement("h2"));
					thisCard.querySelectorAll("h2")[2].appendChild(document.createTextNode(`${inventory[i].year}`));
					thisCard.querySelector(".card-content").appendChild(document.createElement("p"));
					thisCard.querySelector("p").appendChild(document.createTextNode(`${inventory[i].description}`));
					thisCard.querySelector(".card").appendChild(document.createElement("div")).setAttribute("class", "card-action");
					thisCard.querySelector(".card-action").appendChild(document.createElement("a")).setAttribute("href", "#");
					thisCard.querySelector("a").appendChild(document.createTextNode(`${inventory[i].price}`));
	  		}
	  	}
	  	// for (var i = 1; i < inventory.length; i++){
	  	// 		write.innerHTML += `<div class="col s4 event">
				// 									      <div class="card">
				// 								          <div class="card-image">
				// 								            <img src="img/${inventory[i].image}">
				// 								            <span class="card-title"></span>
				// 								          </div>
				// 								          <div class="card-content">
				// 								            <h2>${inventory[i].make}</h2>
				// 								            <h2>${inventory[i].model}</h2>
				// 								            <h3>${inventory[i].year}</h3>
				// 								            <p>${inventory[i].description}</p>
				// 								          </div>
				// 								          <div class="card-action">
				// 								            <a href="#">$${inventory[i].price}</a>
				// 								          </div>
				// 								        </div>
				// 								      </div>`;
				// 	}
	  	// }
	}

	return oldCarLot;

})(CarLot || {});