var BasicCard = function(front, back){
	this.front = front;
	this.back = back;
	this.print = function(){
		console.log(this.front + " " + this.back)
	}
}


var firstPresident = new BasicCard("Who was the first president of the U.S?", "George Washington")

firstPresident.print();
module.exports = BasicCard;