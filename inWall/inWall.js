let portfolio = JSON.parse(localStorage.getItem('portfolio'));
let room = JSON.parse(localStorage.getItem('room')) || {
  notes:[],
  matRoom:{}
};
/*
let matRoom = JSON.parse(localStorage.getItem('matRoom')) || {
  notes:[]
};
*/
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

document.querySelector(
  '.addToOrder').addEventListener(
    'click', function(){
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
      };
      orderCount++;
      if(orderCount === 1)
      {
        document.querySelector('.viewOrders').innerHTML = `${orderCount} Order`;
      }
      else{
        document.querySelector('.viewOrders').innerHTML = `${orderCount} Orders`;
      }
      localStorage.setItem('room', JSON.stringify(room));

      for(let x = 0; x<noteCount-1;x++)
      {
        notesArray[x] = document.querySelector(`.note${x+1}`).value;
      }
      
      room['notes'].push(notesArray);

    }
  )

let notesArray = [];
let htmlNotes = ``;
let noteCount = notesArray.length+1;

function addNote(){
  htmlNotes = `<div class = "noteSection">
                  <input class = "note${noteCount} notesInputBox" type = "text" placeholder = "Note ${noteCount}">
                  <select class = "noteReferance${noteCount} noteReferance">
                    <option selected value="">Choose</option>
                    <option value="boxType">Box Type</option>
                    <option value="exits">Exits</option>
                    <option value="comnecterType">Connecter Type</option>
                    <option value="supportRing">Support Ring</option>
                    <option value="plasterRing">Plaster Ring</option>
                    <option value="conduitCableType">Conduit/Cable Type</option>
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                    <option value="bottom">Bottom</option>
                  </select>
                </div>`;
  noteCount++;
  document.querySelector('.userNotes').insertAdjacentHTML("beforeend",htmlNotes);
}

document.querySelector('.addNoteButton').addEventListener('click', function(){
  addNote();
})

/*
document.querySelector(
  '.sendButton').addEventListener(
    'click',function(){
      let temp = document.querySelector('.notesInput');
      notes.push(temp.value);
      let html = '';
      for(let x = 0; x<notes.length; x++){
        html+= `<p>${notes[x]}</p>`
      }
      document.querySelector('.userNotes').innerHTML = html;
      document.querySelector('.notesInput').value = '';
    }
  )

function enter(event){
  if(event.key === 'Enter'){
    let temp = document.querySelector('.notesInput');
      notes.push(temp.value);
      let html = '';
      for(let x = 0; x<notes.length; x++){
        html+= `<p>${notes[x]}</p>`
      }
      document.querySelector('.userNotes').innerHTML = html;
      document.querySelector('.notesInput').value = '';
  }
}
*/

document.querySelector(".clearCartButton").addEventListener('click', function(){
  localStorage.clear();
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
})

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
})
