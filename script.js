const cardArray = [
  { item: 'n64', img: 'resources/n64.png' },
  { item: 'sidekick', img: 'resources/sidekick.png' },
  { item: 'nokia', img: 'resources/nokia.png' },
  { item: 'tamagotchi', img: 'resources/tamagotchi.png' },
  { item: 'cassette', img: 'resources/cassette.png' },
  { item: 'polaroid', img: 'resources/polaroid.png' },
  { item: 'n64', img: 'resources/n64.png' },
  { item: 'sidekick', img: 'resources/sidekick.png' },
  { item: 'nokia', img: 'resources/nokia.png' },
  { item: 'tamagotchi', img: 'resources/tamagotchi.png' },
  { item: 'cassette', img: 'resources/cassette.png' },
  { item: 'polaroid', img: 'resources/polaroid.png' }
]
// Card Info

let tempCards = []
let displayIds = []
let wonCards = []

// Board Info

const boardDisplay = document.querySelector('#board')
const resultDisplay = document.querySelector('#result')
cardArray.sort(() => 0.5 - Math.random())

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', 'resources/staticcard.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', showCard)
    boardDisplay.appendChild(card)
  }
}

createBoard()

// Flippin' the card

function showCard() {
  let identifier = this.getAttribute('data-id')
  tempCards.push(cardArray[identifier].item)
  displayIds.push(identifier)
  this.setAttribute('src', cardArray[identifier].img)
  if (tempCards.length == 2) {
    setTimeout(checkMatch, 500)
  }
}
//Check' the match, son
function checkMatch() {
  const cards = document.querySelectorAll('img')
  const firstCard = displayIds[0]
  const secondCard = displayIds[1]
  if (tempCards[0] == tempCards[1]) {
    cards[firstCard].setAttribute('src', 'resources/woncard.png')
    cards[secondCard].setAttribute('src', 'resources/woncard.png')
    cards[firstCard].removeEventListener('click', showCard)
    cards[secondCard].removeEventListener('click', showCard)
    wonCards.push(tempCards)
  } else {
    cards[firstCard].setAttribute('src', 'resources/staticcard.png')
    cards[secondCard].setAttribute('src', 'resources/staticcard.png')
  }
  tempCards = []
  displayIds = []
}
