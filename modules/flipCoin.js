function flipCoin(message) {
    if (Math.floor(Math.random() * 2) === 0) {
        return message.author + " Heads";
    }
    return message.author + " Tails";
}

module.exports = {
    flipCoin: flipCoin
}