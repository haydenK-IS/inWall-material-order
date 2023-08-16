/**
 * By: Hayden Kubit
 * Date: 7/14/2023
 */

let planning = JSON.parse(localStorage.getItem('planning')) || {
  bbChoice:'',
  inWall:{
    cards:0,
    buildBookName:"",
    roomName:"",
  },/*,
  OVHD:{
    cards:1,
  }*/
  bbID:'',
  bbProject:'',
  bbCostCode:'',
  bbType:'',
  bbLocation:''
}

let cardChoice;
let currentCard = 0;
let firstCardCurrentCard = 0;

let firstCards = [
                  'What is the Build Type?',
                  'What is the Project?',
                  'What is the Cost Code?',
                  'What is the Location',
                  'What is the name of your Build Book?'
                 ]

let cards = [
              [
               'What is the name of your Room?'
              ]/*,
              ['Did this work?',
               'asking for a friend?'
              ]*/
            ]
let firstCardStorage = [];
let cardStorage = [
                    []
                  ]


if(planning.inWall.buildBookName != ""){
  cardChoice = planning[`${planning.bbChoice}`].cards;
  firstCardCurrentCard = firstCards.length;
  currentCard = 0;
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
    document.querySelector('.cardQuestion').innerHTML = firstCards[firstCardCurrentCard];
    document.querySelector('.cardInput').innerHTML = `<input class = "question${firstCardCurrentCard}" type = "text">`;
    return;
  }else if(firstCardCurrentCard < firstCards.length){
    firstCardStorage.push(document.querySelector(`.question${firstCardCurrentCard}`).value);
    firstCardCurrentCard++;
    if(firstCardCurrentCard === firstCards.length){
      getMaxBookNum();
      planning.bbType = firstCardStorage[0];
      planning.bbProject = firstCardStorage[1];
      planning.bbCostCode = firstCardStorage[2];
      planning.bbLocation = firstCardStorage[3];
      setTimeout(function(){
        bbID = maxBookNum.data[0]['20'].value;
        setBookVals();
      },1000)
      document.querySelector('.cardQuestion').innerHTML = cards[cardChoice][currentCard];
      document.querySelector('.cardInput').innerHTML = `<input class = "question${currentCard}" type = "text">`;
      return;
    }
    document.querySelector('.cardQuestion').innerHTML = firstCards[firstCardCurrentCard];
    document.querySelector('.cardInput').innerHTML = `<input class = "question${firstCardCurrentCard}" type = "text">`;
    return;
  }else{
    if(document.querySelector(`.question${currentCard}`).value === ''){
      alert('Please answer question');
      return;
    }
    cardStorage[cardChoice].push(document.querySelector(`.question${currentCard}`).value)
  }
  if(cards[cardChoice].length-1<= currentCard){
    if(planning.inWall.buildBookName === ''){
      planning.inWall.buildBookName = firstCardStorage[firstCardStorage.length-1];
    }
    planning.inWall.roomName = cardStorage[cardChoice][0];
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

let maxBookNum;
function getMaxBookNum(){
  var headers = {
  	'QB-Realm-Hostname': 'inglett.quickbase.com',
    'User-Agent': '{User-Agent}',
    'Authorization': 'QB-USER-TOKEN b8hh5r_nh9z_0_dm29ei5bdm65qjcwzj5srda74zte',
    'Content-Type': 'application/json'
  }
  var body = {"from":"btgyiesrv","select":[20],"where":"{19.EX.'QB@inglett-stubbs.com'}","options":{"skip":0,"top":0,"compareWithAppLocalTime":false}}

  fetch('https://api.quickbase.com/v1/records/query',
    {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    })
  .then(res => {
    if (res.ok) {
      res.json().then(res => maxBookNum = res);
      return maxBookNum;
    }
    return res.json().then(resBody => Promise.reject({status: res.status, ...resBody}));
  })
  .catch(err => console.log(err))
}

function setBookVals(){
  var headers = {
  	'QB-Realm-Hostname': 'inglett.quickbase.com',
    'User-Agent': '{User-Agent}',
    'Authorization': 'QB-USER-TOKEN b8hh5r_nh9z_0_dm29ei5bdm65qjcwzj5srda74zte',
    'Content-Type': 'application/json'
  }
  var body = {"to":"btgyiesj3","data":[{"6":{"value":`${JSON.stringify(planning.bbID.value)}`},"8":{"value":`${planning.inWall.buildBookName}`},"9":{"value":"planning.bbType"},"14":{"value":"planning.bbType"},"15":{"value":"planning.bbProject"},"16":{"value":"planning.bbCostCode"}}],"fieldsToReturn":[6,8,9,15,16,14]}

  fetch('https://api.quickbase.com/v1/records',
    {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    })
  .then(res => {
    if (res.ok) {
      return res.json().then(res => console.log(res));
    }
    return res.json().then(resBody => Promise.reject({status: res.status, ...resBody}));
  })
  .catch(err => console.log(err))
}