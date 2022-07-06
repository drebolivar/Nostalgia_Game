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
const boardDisplay = document.querySelector('#board')

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', 'resources/staticcard.png')
    card.setAttribute('data-id', i)
    boardDisplay.appendChild(card)
  }
}

createBoard()
console.log(cardArray)
