//gets locally stored portfolio
let buildBook = JSON.parse(localStorage.getItem('portfolio')) || {};
//gets locally stored room obj
//if none is stored it creates a room obj with notes and matRoom
let room = JSON.parse(localStorage.getItem('room')) || {
  name:'Unnamed',
  notes:{
    noteInputArray:[],
    noteReferanceArray:[]
  },
  matRoom:{}
};

//sets the order count for the current amount of stored orders
let orderCount = 0
loadOrderCount();
function loadOrderCount(){
  for(let properties in room.matRoom){
    orderCount++;
  }
  if(orderCount === 1){
    document.querySelector('.viewOrders').innerHTML = `${orderCount} Order`;
  }
  else{
    document.querySelector('.viewOrders').innerHTML = `${orderCount} Orders`;
  }
}

/*
 *if add to room button is clicked runs function
 *that will make a order obj inside of matRoom which stores all line data for that order
*/
document.querySelector(
  '.addToOrder').addEventListener(
    'click', function(){

      for(let x = 0; x<noteCount-1;x++)
      {
        if(document.querySelector(`.noteReferance${x+1}`).value === ""){
          alert(`Must choose referance for note ${x+1}`);
          return;
        }
      }
      
      let orderNotesArray = {};
      document.querySelectorAll('[type = "checkbox"]').forEach(item => {
        if(item.checked === true){
          orderNotesArray[item.value] = true;
        }
        else if(item.checked === false){
          orderNotesArray[item.value] = false;
        }
      })
      room.matRoom[orderCount+1] = {
        devicePanel : document.querySelector(".devicePanelVal").value,
        ckt : document.querySelector(".cktVal").value,
        s : document.querySelector(".sVal").value,
        qty : document.querySelector(".qtyVal").value,
        boxType: document.querySelector(".boxTypeVal").value,
        exits:document.getElementById("exitsVal").value,
        connecterType:document.querySelector(".connecterTypeVal").value,
        supportType:document.querySelector(".supportTypeVal").value,
        plasterRing:document.querySelector(".plasterRingVal").value,
        conduitCableType:document.getElementById("conduitCableTypeVal").value,
        left:document.querySelector(".leftVal").value,
        center:document.querySelector(".centerVal").value,
        right:document.querySelector(".rightVal").value,
        bottom:document.querySelector(".bottomVal").value,
        deviceLeft:document.querySelector(".deviceLeftVal").value,
        deviceRight:document.querySelector(".deviceRightVal").value,
        deviceCenter:document.querySelector(".deviceCenterVal").value,
        orderNotes:Object.entries(orderNotesArray)
      };
      orderCount++;
      //displays order# info on form
      if(orderCount === 1)
      {
        document.querySelector('.viewOrders').innerHTML = `${orderCount} Order`;
      }
      else{
        document.querySelector('.viewOrders').innerHTML = `${orderCount} Orders`;
      }
      
      //sets each note into the correct array index
      for(let x = 0; x<noteCount-1;x++)
      {
        notesArray[x] = document.querySelector(`.note${x+1}`).value;
        notesSelectArray[x]= document.querySelector(`.noteReferance${x+1}`).value
      }
      //sets the array to blank if there is prev notes to refresh the changed notes values
      if(room.notes.length>0)
      {
        room['notes'].noteInputArray = [];
        room['notes'].noteReferanceArray = [];
      }
      //pushes the notes into the room obj
      room['notes'].noteInputArray = notesArray;
      room['notes'].noteReferanceArray = notesSelectArray;
      //stores room to local storage
      localStorage.setItem('room', JSON.stringify(room));
      location.reload();
    }
  )

//creates notes array from locally stored array
//if no array is stored makes empty array
let notesArray = room.notes.noteInputArray || [];
let notesSelectArray = room.notes.noteReferanceArray || [];
//keeps count of notes
let noteCount = notesArray.length+1;
//sets blank var to set the html
let htmlNotes = ``;
loadNotes();

/*
runs through the array and creates the html for the locally stored notes
sets the value of each input and select to the locally storred values
*/
function loadNotes(){
  for(let x = 0; x<notesArray.length; x++){
    htmlNotes = `<div class = "noteSection">
                  <input class = "note${x+1} notesInputBox" type = "text" placeholder = "Note ${x+1}">
                  <select class = "noteReferance${x+1} noteReferance">
                    <option selected value="">Choose</option>
                    <option value="boxType">Box Type</option>
                    <option value="exits">Exits</option>
                    <option value="connecterType">Connecter Type</option>
                    <option value="supportType">Support Type</option>
                    <option value="plasterRing">Plaster Ring</option>
                    <option value="conduitCableType">Conduit/Cable Type</option>
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                    <option value="bottom">Bottom</option>
                  </select>
                  <input class = "notesCheckbox notes${x+1}CheckBox" type="checkbox" value = "notes${x+1}" unchecked>
                </div>`;
      document.querySelector('.userNotes').insertAdjacentHTML("beforeend",htmlNotes);
      document.querySelector(`.note${x+1}`).value = notesArray[x];
      document.querySelector(`.noteReferance${x+1}`).value = notesSelectArray[x];
  }
}

/*
 *when the add note button is clicked new html is appended to the last in userNotes
*/
function addNote(){
  if(noteCount>10){
    alert('Cannot have more than 10 notes');
    return false;
  }
  htmlNotes = `<div class = "noteSection">
                  <input class = "note${noteCount} notesInputBox" type = "text" placeholder = "Note ${noteCount}">
                  <select class = "noteReferance${noteCount} noteReferance">
                    <option selected value="">Choose</option>
                    <option value="boxType">Box Type</option>
                    <option value="exits">Exits</option>
                    <option value="connecterType">Connecter Type</option>
                    <option value="supportType">Support Type</option>
                    <option value="plasterRing">Plaster Ring</option>
                    <option value="conduitCableType">Conduit/Cable Type</option>
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                    <option value="bottom">Bottom</option>
                  </select>
                  <input class = "notesCheckbox notes${noteCount}Checkbox" type="checkbox" value = "notes${noteCount}">
                </div>`;
  noteCount++;
  document.querySelector('.userNotes').insertAdjacentHTML("beforeend",htmlNotes);
}

document.querySelector('.addNoteButton').addEventListener('click', function(){
  addNote();
})

//clears all values in local room
document.querySelector(".clearCartButton").addEventListener('click', function(){
  localStorage.removeItem('room');
  orderCount = 0;
  document.querySelector('.viewOrders').innerHTML = `${orderCount} Orders`;
  document.querySelector(".devicePanelVal").value = '';
  document.querySelector(".cktVal").value = '';
  document.querySelector(".sVal").value = '';
  document.querySelector(".qtyVal").value = '';
  document.querySelector(".boxTypeVal").value = '';
  document.getElementById("exitsVal").value = '0';
  document.querySelector(".connecterTypeVal").value = '';
  document.querySelector(".supportTypeVal").value = '';
  document.querySelector(".plasterRingVal").value = '';
  document.getElementById("conduitCableTypeVal").value = 'Choose';
  document.querySelector(".leftVal").value = '';
  document.querySelector(".centerVal").value = '';
  document.querySelector(".rightVal").value = '';
  document.querySelector(".bottomVal").value = '';
  document.querySelector(".deviceLeftVal").value = '';
  document.querySelector(".deviceRightVal").value = '';
  document.querySelector(".deviceCenterVal").value = '';
  location.reload();
})

//resets values on the form
document.querySelector(".resetButton").addEventListener("click", function(){
  document.querySelector(".devicePanelVal").value = '';
  document.querySelector(".cktVal").value = '';
  document.querySelector(".sVal").value = '';
  document.querySelector(".qtyVal").value = '';
  document.querySelector(".boxTypeVal").value = '';
  document.getElementById("exitsVal").value = '0';
  document.querySelector(".connecterTypeVal").value = '';
  document.querySelector(".supportTypeVal").value = '';
  document.querySelector(".plasterRingVal").value = '';
  document.getElementById("conduitCableTypeVal").value = 'Choose';
  document.querySelector(".leftVal").value = '';
  document.querySelector(".centerVal").value = '';
  document.querySelector(".rightVal").value = '';
  document.querySelector(".bottomVal").value = '';
  document.querySelector(".deviceLeftVal").value = '';
  document.querySelector(".deviceRightVal").value = '';
  document.querySelector(".deviceCenterVal").value = '';
  location.reload();
})

document.querySelector('.viewCart').addEventListener('click',function(){
  room.name = document.querySelector('.roomNameInput').value;
  localStorage.setItem('room', JSON.stringify(room));
  buildBook.name = document.querySelector('.buildbookNameInput').value;
  localStorage.setItem('portfolio', JSON.stringify(buildBook));
})

loadName();
function loadName(){
  document.querySelector('.roomNameInput').value = room.name;
  document.querySelector('.buildbookNameInput').value = buildBook.name;
}