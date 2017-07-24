var BasicCard = require("./BasicCard.js")

var ClozeCard = function(partial, cloze){
	this.partial = partial;
	this.cloze = cloze;
	this.generateCard = function(){
		// Cloze
		// fullText
		console.log(this.partial +" "+ this.cloze)
	}
}

var fourthTerm = new ClozeCard("... was the only president to be elected to a fourth term.", "FDR");

fourthTerm.generateCard();

// this is really confusing. 
