function drawACard(message) {
    var cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
    var suits = ["Spades", "Hearts", "Daimonds", "Clubs"];
    var cardResult = cards[Math.floor(Math.random() * (cards.length))];
    var suitResult = suits[Math.floor(Math.random() * (suits.length ))];
    return message.author + " " + cardResult + " of " + suitResult;
}

module.exports = {
    drawACard: drawACard
}