const names = ["Charlie", "Samip", "Ali"];

function writeCards(names) {
    let cards = [];
    for (let i = 0; i < names.length; i++) {
        const card = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
        cards.push(card);
    }
    return cards;
}

function countDown() {
    let count = 11;
    while(count--) {
        console.log(count)
    }
}