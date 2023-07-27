/**
 * By: Hayden Kubit
 * Date: 7/14/2023
 */

let plan = JSON.parse(localStorage.getItem('planning')) || {
  inWall:{
    buildBookName:"",
    roomName:""
  }
}

//stores the local buildbook
let buildBook = JSON.parse(localStorage.getItem('portfolio')) || {
  name:plan.inWall.buildBookName,
  rooms:{}
};
//sets for frist time set up with case being buildbook name was
//established to unnamed on the menu
buildBook.name = plan.inWall.buildBookName;
//stores the local room into var
let cartGridParse = JSON.parse(localStorage.getItem('room')) || {
  name:plan.inWall.roomName,
  notes:{
    noteInputArray:[],
    noteReferanceArray:[]
  },
  matRoom:{},
  editRoom:false
};

//referance var for editing each order
let currNoteNum = 0;

//keeps count of the orders to display all the orders into the chart
let count = 0;
//counts the orders
for(let properties in cartGridParse.matRoom){
  count++;
}

/**
 * puts all the html for the table into the html file
 * displays the chart for the user to see
 * also runs the loadNotes() method to load the notes at the top of the page
 */
loadingCart();
function loadingCart(){
  //loads the headers in the table
  let html=`
            <table id="materialTable" border="1">
            <tr>
              <th>Order</th>
              <th>Device panel</th>
              <th>CKT#</th>
              <th>S</th>
              <th>Qty</th>
              <th>Box Type</th>
              <th>Exits</th>
              <th>Connecter Type</th>
              <th>Support Type</th>
              <th>Support Type 2</th>
              <th>Plaster Ring</th>
              <th>Conduit/Cable Type</th>
              <th>Left</th>
              <th>Center</th>
              <th>Right</th>
              <th>Bottom</th>
              <th>Device Left</th>
              <th>Device Center</th>
              <th>Device Right</th>
              
            </tr>
            <tr class = "tr1">
          `; //<th>Edit</th>
  //keeps index on table rows added to close out the table when orders are complete
  let counter = 0;
    //gets values of keys to input into the table
    for(let z in cartGridParse.matRoom){
      let innerHTMLdevicePanel = cartGridParse.matRoom[z].devicePanel;
      let innerHTMLckt = cartGridParse.matRoom[z].ckt;
      let innerHTMLs = cartGridParse.matRoom[z].s;
      let innerHTMLqty = cartGridParse.matRoom[z].qty;
      let innerHTMLboxType = cartGridParse.matRoom[z].boxType;
      let innerHTMLexits = cartGridParse.matRoom[z].exits;
      let innerHTMLconnecterType = cartGridParse.matRoom[z].connecterType;
      let innerHTMLsupportType = cartGridParse.matRoom[z].supportType;
      let innerHTMLsupportType2 = cartGridParse.matRoom[z].supportType2;
      let innerHTMLplasterRing = cartGridParse.matRoom[z].plasterRing;
      let innerHTMLconduitCableType = cartGridParse.matRoom[z].conduitCableType;
      let innerHTMLleft = cartGridParse.matRoom[z].left;
      let innerHTMLcenter = cartGridParse.matRoom[z].center;
      let innerHTMLright = cartGridParse.matRoom[z].right;
      let innerHTMLbottom = cartGridParse.matRoom[z].bottom;
      let innerHTMLdeviceLeft = cartGridParse.matRoom[z].deviceLeft;
      let innerHTMLdeviceRight = cartGridParse.matRoom[z].deviceRight;
      let innerHTMLdeviceCenter = cartGridParse.matRoom[z].deviceCenter;
      //creates html for each value and puts into table
      html+=`
              <th class = "order${z}"><button onclick="dup(${z})" class="dupButton dupButton${z}" onmouseover="plus(${z})" onmouseleave="plusChange(${z})">${z}</button></th>
              <td class = "devicePanel${z}"><input type="text" class = "devicePanel${z}Input tableInput" value = "${innerHTMLdevicePanel}"></td>
              <td class = "ckt${z}"><input type = "text" class = "ckt${z}Input tableInput" value = "${innerHTMLckt}"></td>
              <td class = "s${z}"><input type="text" class="s${z}Input tableInput" value="${innerHTMLs}"></td>
              <td class = "qty${z}"><input type="text" class="qty${z}Input tableInput" value="${innerHTMLqty}"></td>
              <td class = "boxType${z}"><input type="text" class="boxType${z}Input tableInput" value="${innerHTMLboxType}"></td>
              <td class = "exits${z}"><select id="exits${z}Input" class="tableInput exits${z}Input">
                                        <option selected value="${innerHTMLexits}">${innerHTMLexits}</option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                      </select></td>
              <td class = "connecterType${z}"><input class="connecterType${z}Input tableInput" value="${innerHTMLconnecterType}"></td>
              <td class = "supportType${z}"><input class="supportType${z}Input tableInput" value="${innerHTMLsupportType}"></td>
              <td class = "supportType2${z}"><input class="supportType2${z}Input tableInput" value="${innerHTMLsupportType2}"></td>
              <td class = "plasterRing${z}"><input class="plasterRing${z}Input tableInput" value="${innerHTMLplasterRing}"></td>
              <td class = "conduitCableType${z}"><input class="conduitCableType${z}Input tableInput" value="${innerHTMLconduitCableType}"></td>
              <td class = "left${z}"><input class="left${z}Input tableInput" value="${innerHTMLleft}"></td>
              <td class = "center${z}"><input class="center${z}Input tableInput" value="${innerHTMLcenter}"></td>
              <td class = "right${z}"><input class="right${z}Input tableInput" value="${innerHTMLright}"></td>
              <td class = "bottom${z}"><input class="bottom${z}Input tableInput" value="${innerHTMLbottom}"></td>
              <td class = "deviceLeft${z}"><input class="deviceLeft${z}Input tableInput" value="${innerHTMLdeviceLeft}"></td>
              <td class = "deviceCenter${z}"><input class="deviceCenter${z}Input tableInput" value="${innerHTMLdeviceCenter}"></td>
              <td class = "deviceRight${z}"><input class="deviceRight${z}Input tableInput" value="${innerHTMLdeviceRight}"></td>
              
              </tr>`; //<th><button class = "editButton editButton${z}" onclick = "setcurrNoteNum(${z}); edit(${z})">&#9998;</button></th>
            //increments counter to track amount of orders
            counter++;
      //checks to see if the tbale needs to be closed
      if(counter < count)
      {
          html+='<tr>';
      }
      
    }
    //displays if no orders are in table
    if(count === 0)
    {
      html += '<td>Nothing in Cart</td></tr>'
    }
  html+=`</table>`;
  document.querySelector('.orderSummary').innerHTML += html;
  //document.querySelector('.devicePanel1Input').value = cartGridParse.matRoom[1].devicePanel;
  //loads the notes after the table has been created to referance the table data
  loadNotes();
  loadQTY();
}

/**
 * loads each note into the html
 * loops for each note to input and appends the adjacent html
 * changes the background of table data based on correlated notes
 * loops through orders then loops through assigned notes
 */
function loadNotes(){
  //creates the html for the notes to display on top of the table
  for(let x = 0; x<cartGridParse.notes.noteInputArray.length; x++)
  {
    let html = `<button class = 'hNote${x+1} notesEditButton notesEditButton${x+1}' onclick="setcurrNoteNum(${x+1}); edit(${x+1})">Note ${x+1}: ${cartGridParse.notes.noteReferanceArray[x]} : ${cartGridParse.notes.noteInputArray[x]}</button>`
    document.querySelector('.notesArrayReferance').insertAdjacentHTML("beforeend",html);
  }
  //x counts the orders
  for(let x = 0; x<count; x++){
    //y counts the notes
    for(let y = 0; y<cartGridParse.matRoom[x+1].orderNotes.length; y++){
      if(cartGridParse.matRoom[x+1].orderNotes[y][1] === true)
      {
        let colorRef = cartGridParse.notes.noteReferanceArray[y];
        let dataNote = cartGridParse.matRoom[x+1].orderNotes[y][0];
        document.querySelector(`.${colorRef}${x+1}`).classList.add(`${dataNote}Color`);
        document.querySelector(`.${colorRef}${x+1}Input`).classList.add(`${dataNote}Color`);
      }
    }
  }
}

/**
 * pulls up overlay so the user can edit
 * pulls each value from cartGridParse then inputs it into each textbox for the user to edit
 */
function edit(objNum){
  if(document.querySelector('.editOverlay').classList.contains('editOn')){
    document.querySelector('.editOverlay').classList.remove('editOn');
    document.getElementById("editOverlay").style.display = 'none';
  }
  else{
    document.querySelector('.editOverlay').classList.add('editOn');
    document.getElementById("editOverlay").style.display = "block";
  }

  document.querySelector('.noteInput').value = cartGridParse.notes.noteInputArray[objNum-1];
  document.querySelector('.noteReferance').value = cartGridParse.notes.noteReferanceArray[objNum-1];
  let html = '';
  for(let x = 0; x<count; x++){
    html+=`<div>
            <p style = "display: inline-block">${x+1}</p> 
            <input type="checkbox" class="note${x+1}Checkbox notesCheckbox" unchecked>
          </div>`
  }
  document.querySelector('.loadNoteInfo').innerHTML = html;
  for(let x = 0; x<count; x++){
    if(cartGridParse.matRoom[x+1].orderNotes[objNum-1][1] === true){
      document.querySelector(`.note${x+1}Checkbox`).checked = true;
    }
  }
}

//sets currNoteNum to edit the values
function setcurrNoteNum(num)
{
  currNoteNum = num;
}

//loads names of room and build book
document.querySelector('.buildbookOutput').innerHTML = buildBook.name;
document.querySelector('.roomNameOutput').innerHTML = cartGridParse.name;

/**
 * when send to book is clicked the room gets removed from the localstorage
 * only way to access is through the edit so edit status becomes true
 * creates object of room name into the build book and sets local storage of the book
 */
document.querySelector('.sendToBookButton').addEventListener('click', function(){
  cartGridParse.editRoom = true;
  buildBook['rooms'][cartGridParse.name] = cartGridParse;
  localStorage.setItem('portfolio', JSON.stringify(buildBook));
  localStorage.removeItem('room');
})

function loadQTY(){
  for(let x = 0; x<count; x++){
    if(cartGridParse.matRoom[x+1].qty > 1){
      document.querySelector(`.qty${x+1}`).classList.add('multiQTY');
    }
  }
}

document.body.addEventListener('input', function(){
  for(let x = 1; x<count+1; x++){
    cartGridParse.matRoom[x].devicePanel = document.querySelector(`.devicePanel${x}Input`).value;
    cartGridParse.matRoom[x].ckt = document.querySelector(`.ckt${x}Input`).value;
    cartGridParse.matRoom[x].s = document.querySelector(`.s${x}Input`).value;
    cartGridParse.matRoom[x].qty = document.querySelector(`.qty${x}Input`).value;
    cartGridParse.matRoom[x].boxType = document.querySelector(`.boxType${x}Input`).value;
    cartGridParse.matRoom[x].exits = document.querySelector(`.exits${x}Input`).value;
    cartGridParse.matRoom[x].connecterType = document.querySelector(`.connecterType${x}Input`).value;
    cartGridParse.matRoom[x].supportType = document.querySelector(`.supportType${x}Input`).value;
    cartGridParse.matRoom[x].supportType2 = document.querySelector(`.supportType2${x}Input`).value;
    cartGridParse.matRoom[x].plasterRing = document.querySelector(`.plasterRing${x}Input`).value;
    cartGridParse.matRoom[x].conduitCableType = document.querySelector(`.conduitCableType${x}Input`).value;
    cartGridParse.matRoom[x].left = document.querySelector(`.left${x}Input`).value;
    cartGridParse.matRoom[x].center = document.querySelector(`.center${x}Input`).value;
    cartGridParse.matRoom[x].right = document.querySelector(`.right${x}Input`).value;
    cartGridParse.matRoom[x].bottom = document.querySelector(`.bottom${x}Input`).value;
    cartGridParse.matRoom[x].deviceLeft = document.querySelector(`.deviceLeft${x}Input`).value;
    cartGridParse.matRoom[x].deviceRight = document.querySelector(`.deviceRight${x}Input`).value;
    cartGridParse.matRoom[x].deviceCenter = document.querySelector(`.deviceCenter${x}Input`).value;
  }
})

document.querySelector('.addNotesButton').addEventListener('click', function(){
  if(cartGridParse.notes.noteInputArray.length>=10){
    alert('Cannot have more than 10 notes');
    return;
  }
  if(document.querySelector('.addNotesOverlay').classList.contains('addNotesOn')){
    document.querySelector('.addNotesOverlay').classList.remove('addNotesOn');
    document.getElementById("addNotesOverlay").style.display = 'none';
  }
  else{
    document.querySelector('.addNotesOverlay').classList.add('addNotesOn');
    document.getElementById("addNotesOverlay").style.display = "block";
  }
  let html = '';
  for(let x = 0; x<count; x++){
    html+=`<div>
            <p style = "display: inline-block">${x+1}</p> 
            <input type="checkbox" class="note${x+1}Checkbox notesCheckbox" unchecked>
          </div>`
  }
  document.querySelector('.orderCheckboxDiv').innerHTML = html;
})

document.querySelector('.doneNotesButton').addEventListener('click', function(){
  if(document.querySelector('.addNoteReferance').value === ''){
    alert('Must choose a note reference');
    return;
  }
  cartGridParse.notes.noteInputArray.push(document.querySelector('.addNoteInput').value);
  cartGridParse.notes.noteReferanceArray.push(document.querySelector('.addNoteReferance').value);
  let length = cartGridParse.notes.noteInputArray.length;
  let html=`<button class = 'hNote${length} notesEditButton notesEditButton${length}' onclick="setcurrNoteNum(${length}); edit(${length})">Note ${length}: ${cartGridParse.notes.noteReferanceArray[length-1]} : ${cartGridParse.notes.noteInputArray[length-1]}</button>`
  document.querySelector(`.notesArrayReferance`).insertAdjacentHTML('afterbegin',html);
  for(let x = 0; x<count; x++){
    cartGridParse.matRoom[x+1].orderNotes.push([`notes${length}`, document.querySelector(`.note${x+1}Checkbox`).checked]);
  }
  localStorage.setItem('room', JSON.stringify(cartGridParse));
  document.querySelector('.addNotesOverlay').classList.remove('addNotesOverlay');
  document.getElementById("addNotesOverlay").style.display = 'none';
  location.reload();
})

document.querySelector('.addRowButton').addEventListener('click', function(){
  let orderNotesArray = {};
  let noteTrack = 0;
  cartGridParse.notes.noteInputArray.forEach(element => {
    orderNotesArray[`notes${noteTrack+1}`] = false;
    noteTrack++;
  })
  //sets each order obj in the local room
  cartGridParse.matRoom[count+1] = {
    devicePanel:'',
    ckt:'',
    s:'',
    qty:'',
    boxType:'',
    exits:'',
    connecterType:'',
    supportType:'',
    supportType2:'',
    plasterRing:'',
    conduitCableType:'',
    left:'',
    center:'',
    right:'',
    bottom:'',
    deviceLeft:'',
    deviceRight:'',
    deviceCenter:'',
    orderNotes:Object.entries(orderNotesArray)
  };
  count++;
  localStorage.setItem('room', JSON.stringify(cartGridParse));
  location.reload();
})

function dup(order){
  cartGridParse.matRoom[count+1] = {
    devicePanel: cartGridParse.matRoom[order].devicePanel,
    ckt:cartGridParse.matRoom[order].ckt,
    s:cartGridParse.matRoom[order].s,
    qty:cartGridParse.matRoom[order].qty,
    boxType:cartGridParse.matRoom[order].boxType,
    exits:cartGridParse.matRoom[order].exits,
    connecterType:cartGridParse.matRoom[order].connecterType,
    supportType:cartGridParse.matRoom[order].supportType,
    supportType2:cartGridParse.matRoom[order].supportType2,
    plasterRing:cartGridParse.matRoom[order].plasterRing,
    conduitCableType:cartGridParse.matRoom[order].conduitCableType,
    left:cartGridParse.matRoom[order].left,
    center:cartGridParse.matRoom[order].center,
    right:cartGridParse.matRoom[order].right,
    bottom:cartGridParse.matRoom[order].bottom,
    deviceLeft:cartGridParse.matRoom[order].deviceLeft,
    deviceRight:cartGridParse.matRoom[order].deviceRight,
    deviceCenter:cartGridParse.matRoom[order].deviceCenter,
    orderNotes:cartGridParse.matRoom[order].orderNotes
  };
  count++;
  localStorage.setItem('room', JSON.stringify(cartGridParse));
  location.reload();
}

function plus(order){
  document.querySelector(`.dupButton${order}`).innerHTML = '+';
}

function plusChange(order){
  document.querySelector(`.dupButton${order}`).innerHTML = `${order}`;
}

document.querySelector('.deleteRowButton').addEventListener('click', function(){
  delete cartGridParse.matRoom[`${count}`];
  count--;
  localStorage.setItem('room', JSON.stringify(cartGridParse));
  location.reload();
})