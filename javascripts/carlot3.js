var CarLot = (function (oldCarLot) {
	oldCarLot.resetStyles = function(elt){
		elt.style.cssText = null;
	}

	// Function that actually sets the style changes. Called by CarLot.cardEvents(); on carlot2.js
	oldCarLot.clickedStyles = function(elt, colr){
		elt.style.cssText = `background-color: ${colr}; border: 5px solid black;`;
		// elt.setAttribute("style", `background-color: ${colr}; border: 5px solid black;`);
	}
	return oldCarLot;
})(CarLot || {});