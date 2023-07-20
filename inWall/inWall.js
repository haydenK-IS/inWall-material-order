/**
 * By: Hayden Kubit
 * Date: 7/14/2023
 */

let planning = JSON.parse(localStorage.getItem('planning')) || {
  inWall:{
    cards:0,
    buildBookName:"",
    roomName:""
  }/*,
  OVHD:{
    cards:1,
  }*/
}

bbChoice = '';
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

document.querySelector('.forward').addEventListener('click', function(){
  if(bbChoice === ''){
    if(document.querySelector('.buildbookChoice').value === ''){
      alert('Must choose a build book type');
      return;
    }
    bbChoice = document.querySelector('.buildbookChoice').value
    cardChoice = planning[`${bbChoice}`].cards;
  }
  if(cards[cardChoice].length<= currentCard){
    window.location.href = 'http://127.0.0.1:5500/viewCart/viewCart.html';
    window.location.href;
  }
  document.querySelector('.cardQuestion').innerHTML = cards[cardChoice][currentCard];
  document.querySelector('.cardInput').innerHTML = `<input class = "question${currentCard}" type = "text">`;
  currentCard++;
})

document.querySelector('.back').addEventListener('click', function(){
  if(currentCard<=0){
    alert('Cannot go back');
    return;
  }
  currentCard--;
  document.querySelector('.cardQuestion').innerHTML = cards[cardChoice][currentCard];
  document.querySelector('.cardInput').innerHTML = `<input class = "question${currentCard}" type = "text">`;
})