const cardArray = [
    {
        name: "meppuru",
        img: "img/meppuru.jpg",
    },
    {
        name:"mippuru",
        img: "img/mippuru.jpg",
    },
    {
        name:"porun",
        img: "img/porun.jpg",
    },
    {
        name:"nagisa",
        img: "img/nagisa.jpg",
    },
    {
        name: "honoka",
        img: "img/honoka.jpg",
    },
    {
        name: "hikari",
        img: "img/hikari.jpg",
    },
    {
        name: "meppuru",
        img: "img/meppuru.jpg",
    },
    {
        name:"mippuru",
        img: "img/mippuru.jpg",
    },
    {
        name:"porun",
        img: "img/porun.jpg",
    },
    {
        name:"nagisa",
        img: "img/nagisa.jpg",
    },
    {
        name: "honoka",
        img: "img/honoka.jpg",
    },
    {
        name: "hikari",
        img: "img/hikari.jpg",
    },

];

//cardArray.sort(() => 0.5 - Math.random())
//Fisher-Yates algorith
 const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array
}

const gridDisplay = document.querySelector("#grid")
const resultDisplay = document.querySelector("#result")
let cardsChosen = []
let cardsChosenIds = []
const cardsFound = []

function createBoard () {
    for (let i = 0; i < cardArray.length; i++ ) {
        const card = document.createElement("img")
        card.setAttribute("src", "img/backside.jpg" )
        card.setAttribute("data-id", i)
        card.addEventListener("click", flipcard)
        //maybe add hover over here
        gridDisplay.append(card)
    }
    shuffleArray(cardArray)
}


function checkMatch(){
    const cards = document.querySelectorAll("img")
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if (optionOneId == optionTwoId){
        alert("Same cards!!")
        cards[optionOneId].setAttribute("src", "img/backside.jpg")
        cards[optionTwoId].setAttribute("src", "img/backside.jpg")
        
    }

    else if (cardsChosen[0] == cardsChosen[1]){
        alert ("You found a match!")
        cards[optionOneId].setAttribute("src", "img/blank.jpg")
        cards[optionTwoId].setAttribute("src", "img/blank.jpg")
        cards[optionOneId].removeEventListener("clikcs", flipcard)
        cards[optionTwoId].removeEventListener("clikcs", flipcard)
        cardsFound.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute("src", "img/backside.jpg")
        cards[optionTwoId].setAttribute("src", "img/backside.jpg")
        alert("try again")
    }
    cardsChosen = []
    cardsChosenIds = []
    resultDisplay.textContent = cardsFound.length

    if (cardsFound.length === (cardArray.length/2)){
        resultDisplay.textContent = "Congratulations you found them all"
    }
}

function flipcard (){
   const cardId = this.getAttribute("data-id")
   cardsChosen.push(cardArray[cardId].name)
   cardsChosenIds.push(cardId)
   this.setAttribute("src", cardArray[cardId].img)
   console.log(cardsChosen)
   console.log(cardsChosenIds)
   if (cardsChosen.length === 2){
        setTimeout( checkMatch, 50)
   }
}
createBoard ()