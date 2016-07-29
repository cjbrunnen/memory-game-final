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
        cardsInPlay.push(this.getAttribute('data-card'));
		/*if(this.getAttribute('data-card') === "queen") {
		cardElement.innerHTML = <img src="/Users/cazbrunnen/Desktop/coding/ga-memory-game/cardQueen.png" alt="Queen of Spades!" />;
		}
		else {
		cardElement.innerHTML = <img src="/Users/cazbrunnen/Desktop/coding/ga-memory-game/cardKing.png" alt="King of Hearts!" />;
		}*/
	this.innerHTML = '<img src="' + this.getAttribute('data-card') + '.png">';
        if (cardsInPlay.length === 2) {
        isMatch(cardsInPlay);
        cardsInPlay = [];

    }
};
function isMatch(array) {
        (array[0] === array[1]) ?   alert("Nice to see you, to see you..NICE! You got a match!") :  alert("Better luck next time, dear.");
        for (var i = 0; i < cards.length; i++) {
        document.getElementsByClassName('card')[i].innerHTML = " ";
    }
};

createBoard(4);
