/**
 * By: Hayden Kubit
 * Date: 7/14/2023
 */

let planning = JSON.parse(localStorage.getItem('planning')) || {
  bbChoice:'',
  inWall:{
    cards:0,
    buildBookName:"",
    roomName:""
  }/*,
  OVHD:{
    cards:1,
  }*/
}

let cardChoice;
let currentCard = 0;

let cards = [
              ['What is the name of your Build Book?',
               'What is the name of your Room?'
              ]/*,
              ['Did this work?',
               'asking for a friend?'
              ]*/
            ]
let cardStorage = [
                    []
                  ]


if(planning.inWall.buildBookName != ""){
  cardChoice = planning[`${planning.bbChoice}`].cards;
  cardStorage[cardChoice].push(planning.inWall.buildBookName);
  currentCard = 1;
  document.querySelector('.cardQuestion').innerHTML = cards[cardChoice][currentCard];
  document.querySelector('.cardInput').innerHTML = `<input class = "question${currentCard}" type = "text">`;
}

document.querySelector('.forward').addEventListener('click', function(){
  if(planning.bbChoice === ''){
    if(document.querySelector('.buildbookChoice').value === ''){
      alert('Must choose a build book type');
      return;
    }
    planning.bbChoice = document.querySelector('.buildbookChoice').value
    cardChoice = planning[`${planning.bbChoice}`].cards;
  }else{
    cardStorage[cardChoice].push(document.querySelector(`.question${currentCard}`).value)
  }
  if(cards[cardChoice].length-1<= currentCard){
    planning.inWall.buildBookName = cardStorage[cardChoice][0];
    planning.inWall.roomName = cardStorage[cardChoice][1];
    localStorage.setItem('planning', JSON.stringify(planning))
    window.location.href = 'http://127.0.0.1:5501/viewCart/viewCart.html';
    window.location.href;
  }
  currentCard++;
  document.querySelector('.cardQuestion').innerHTML = cards[cardChoice][currentCard];
  document.querySelector('.cardInput').innerHTML = `<input class = "question${currentCard}" type = "text">`;
})

document.querySelector('.back').addEventListener('click', function(){
  if(currentCard<=0){
    alert('Cannot go back');
    return;
  }
  currentCard--;
  cardStorage[cardChoice].pop();
  document.querySelector('.cardQuestion').innerHTML = cards[cardChoice][currentCard];
  document.querySelector('.cardInput').innerHTML = `<input class = "question${currentCard}" type = "text">`;
})