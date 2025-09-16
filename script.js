function isSameType(value1, value2) {
 let flagcheck = false;

	if(value1 == value2){
		flagcheck = true;
	} else {
		flagcheck = false;
	}
	return flagcheck;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
