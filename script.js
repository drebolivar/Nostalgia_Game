const cardArray = [
  { name: 'n64', img: 'resources/n64.png' },
  { name: 'sidekick', img: 'resources/sidekick.png' },
  { name: 'nokia', img: 'resources/nokia.png' },
  { name: 'tamagotchi', img: 'resources/tamagotchi.png' },
  { name: 'cassette', img: 'resources/cassette.png' },
  { name: 'polaroid', img: 'resources/polaroid.png' },
  { name: 'n64', img: 'resources/n64.png' },
  { name: 'sidekick', img: 'resources/sidekick.png' },
  { name: 'nokia', img: 'resources/nokia.png' },
  { name: 'tamagotchi', img: 'resources/tamagotchi.png' },
  { name: 'cassette', img: 'resources/cassette.png' },
  { name: 'polaroid', img: 'resources/polaroid.png' }
]

//Randomizer
cardArray.sort(() => 0.5 - Math.random())

const boardDisplay = document.querySelector('#board')
let cardsShown = []
let cardsIds = []
const cardsWon = []

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
console.log(cardArray)

//Flippin' the card
function showCard() {
  let identifier = this.getAttribute('data-id')
  cardsShown.push(cardArray[identifier].name)
  cardsIds.push(identifier)
  this.setAttribute('src', cardArray[identifier].img)
  if (cardsShown.length === 2) {
    checkMatch()
  }
}

function checkMatch() {
  const cards = document.querySelectorAll('img')
  const firstPick = cardsIds[0]
  const secondPick = cardsIds[1]
  if (cardsShown[0] == cardsShown[1]) {
    cards[firstPick].setAttribute('src', 'resources/woncard.png')
    cards[secondPick].setAttribute('src', 'resources/woncard.png')
    cards[firstPick].removeEventListener('click', showCard)
    cards[secondPick].removeEventListener('click', showCard)
    cardsWon.push(cardsShown)
    cardsShown = []
    cardsIds = []
    console.log(cardsWon)
    console.log(cardsShown)
    console.log(cardsIds)
  } else {
    cards[firstPick].setAttribute('src', 'resources/staticcard.png')
    cards[secondPick].setAttribute('src', 'resources/staticcard.png')
    cardsShown = []
    cardsIds = []
  }
}
