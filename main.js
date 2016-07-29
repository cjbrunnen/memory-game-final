
var gameBoard = document.getElementById("game-board");
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		 var newCard = document.createElement('div');
		 newCard.className = "card";
		 newCard.setAttribute('data-card', cards[i]);
		 newCard.addEventListener('click', isTwoCards);
      
		 gameBoard.appendChild(newCard);
	}
};

function isTwoCards() {
        cardInPlay.push(this.getAttribute('data-card'));
        this.innerHTML = '<img src="' + this.getAttribute('data-card') + '.png">';
        if (cardInPlay.length === 2) {
        isMatch(cardInPlay);
        cardInPlay = [];

    }
};
var isMatch = function(array) {
        (array[0] === array[1]) ?   alert("You found a match!") :  alert("Sorry, try again.");
        for (var i = 0; i < cards.length; i++) {
        document.getElementsByClassName('card')[i].innerHTML = " ";
    }
};

createBoard(4);

/*
:::below is the other code which I think is wrong:::

function isMatch (cardPair) {
	if (cardPair[0] === cardPair[1]) {
		alert ("Nice to see you, to see you...? Well done, you got a pair!"); 
	}
	else {
		alert ("Better luck next time, dear.");
	}
	for (var i = 0; i < cards.length; i++) {
		document.getElementByClassName('card')[i].innerHTML = " ";
	}
}*/

/*function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if(this.getAttribute('data-card') === 'queen') {
		cardElement.innerHTML = <img src="/Users/cazbrunnen/Desktop/coding/cardQueen.png" alt="Queen of Spades!" />;
	}
	else {
		cardElement.innerHTML = <img src="/Users/cazbrunnen/Desktop/coding/cardKing.png" alt="King of Hearts!" />;
	}


	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
  }
}
createBoard(4);

/* do I need this too??
var createBoard = function() {

}

var alertUser = function(createBoard) {
	alert ('Board created');
}
*/

/*var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";*/

/* Don't think i need to link this here..
<script type="text/html" src="/Users/cazbrunnen/Desktop/coding/index3.html"></script> */

/*if (cardTwo === cardFour) {
	alert("You found a match!")
} else {
	alert("Sorry, try again.")
} */