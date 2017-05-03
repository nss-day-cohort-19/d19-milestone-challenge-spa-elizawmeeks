var CarLot = (function (oldCarLot) {
	oldCarLot.resetStyles = function(element){
		element.classList.remove("border");
	}

	oldCarLot.clickedStyles = function(elt, colr){
		// elt.style.cssText = "background-color: clr; border: 5px solid black";
		elt.setAttribute("style", `background-color: ${colr}; border: 5px solid black;`);
	}
	return oldCarLot;
})(CarLot || {});