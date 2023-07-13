let buildBook = JSON.parse(localStorage.getItem('portfolio')) || {};

//stores the local room into var
let cartGridParse = JSON.parse(localStorage.getItem('room')) || {};

//referance var for editing each order
let currOrderNum = 0;

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
              <th>Edit</th>
            </tr>
            <tr class = "tr1">
          `;
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
      html+=`
              <th class = "order${z}">${z}</th>
              <td class = "devicePanel${z}">${innerHTMLdevicePanel}</td>
              <td class = "ckt${z}">${innerHTMLckt}</td>
              <td class = "s${z}">${innerHTMLs}</td>
              <td class = "qty${z}">${innerHTMLqty}</td>
              <td class = "boxType${z}">${innerHTMLboxType}</td>
              <td class = "exits${z}">${innerHTMLexits}</td>
              <td class = "connecterType${z}">${innerHTMLconnecterType}</td>
              <td class = "supportType${z}">${innerHTMLsupportType}</td>
              <td class = "supportType2${z}">${innerHTMLsupportType2}</td>
              <td class = "plasterRing${z}">${innerHTMLplasterRing}</td>
              <td class = "conduitCableType${z}">${innerHTMLconduitCableType}</td>
              <td class = "left${z}">${innerHTMLleft}</td>
              <td class = "center${z}">${innerHTMLcenter}</td>
              <td class = "right${z}">${innerHTMLright}</td>
              <td class = "bottom${z}">${innerHTMLbottom}</td>
              <td class = "deviceLeft${z}">${innerHTMLdeviceLeft}</td>
              <td class = "deviceCenter${z}">${innerHTMLdeviceCenter}</td>
              <td class = "deviceRight${z}">${innerHTMLdeviceRight}</td>
              <th><button class = "editButton editButton${z}" onclick = "setCurrOrderNum(${z}); edit(${z})">&#9998;</button></th>
              </tr>`;
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
  //loads the notes
  loadNotes();
}

/**
 * loads each note into the html
 * loops for each note to input and appends the adjacent html
 * changes the background of table data based on correlated notes
 * loops through orders then loops through assigned notes
 */
function loadNotes(){
  for(let x = 0; x<cartGridParse.notes.noteInputArray.length; x++)
  {
    let html = `<h2 class = 'hNote${x+1}'>Note ${x+1}: <span class = "referenceName">${cartGridParse.notes.noteReferanceArray[x]}</span> : ${cartGridParse.notes.noteInputArray[x]}</h2>`
    document.querySelector('.notesArrayReferance').insertAdjacentHTML("beforeend",html);
  }
  for(let x = 0; x<count; x++){
    for(let y = 0; y<cartGridParse.matRoom[x+1].orderNotes.length; y++){
      if(cartGridParse.matRoom[x+1].orderNotes[y][1] === true)
      {
        let colorRef = cartGridParse.notes.noteReferanceArray[y];
        let dataNote = cartGridParse.matRoom[x+1].orderNotes[y][0];
        document.querySelector(`.${colorRef}${x+1}`).classList.add(`${dataNote}Color`);
        //console.log(colorRef + ' : ' +(y+1) + ' : ' + dataNote);
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
  document.querySelector(".devicePanelVal").value = cartGridParse.matRoom[objNum].devicePanel;
  document.querySelector(".cktVal").value = cartGridParse.matRoom[objNum].ckt;
  document.querySelector(".sVal").value = cartGridParse.matRoom[objNum].s;
  document.querySelector(".qtyVal").value = cartGridParse.matRoom[objNum].qty;
  document.querySelector(".boxTypeVal").value = cartGridParse.matRoom[objNum].boxType;
  document.getElementById("exitsVal").value = cartGridParse.matRoom[objNum].exits;
  document.querySelector(".connecterTypeVal").value = cartGridParse.matRoom[objNum].connecterType;
  document.querySelector(".supportTypeVal").value = cartGridParse.matRoom[objNum].supportType;
  document.querySelector(".supportType2Val").value = cartGridParse.matRoom[objNum].supportType2;
  document.querySelector(".plasterRingVal").value = cartGridParse.matRoom[objNum].plasterRing;
  document.getElementById("conduitCableTypeVal").value = cartGridParse.matRoom[objNum].conduitCableType;
  document.querySelector(".leftVal").value = cartGridParse.matRoom[objNum].left;
  document.querySelector(".centerVal").value = cartGridParse.matRoom[objNum].center;
  document.querySelector(".rightVal").value = cartGridParse.matRoom[objNum].right;
  document.querySelector(".bottomVal").value = cartGridParse.matRoom[objNum].bottom;
  document.querySelector(".deviceLeftVal").value = cartGridParse.matRoom[objNum].deviceLeft;
  document.querySelector(".deviceRightVal").value = cartGridParse.matRoom[objNum].deviceRight;
  document.querySelector(".deviceCenterVal").value = cartGridParse.matRoom[objNum].deviceCenter;
  document.querySelector('.orderNumber').innerHTML = 'Order: ' + objNum;
  for(let x = 0; x<cartGridParse.notes.noteInputArray.length;x++){
    htmlNotes = `<div class = "noteSection">
              <input class = "note${x+1} notesInputBox" type = "text" placeholder = "Note ${x+1}">
              <select class = "noteReferance${x+1} noteReferance">
                <option selected value="">Choose</option>
                <option value="boxType">Box Type</option>
                <option value="exits">Exits</option>
                <option value="connecterType">Connecter Type</option>
                <option value="supportType">Support Type</option>
                <option value="supportType2">Support Type 2</option>
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
    document.querySelector(`.note${x+1}`).value = cartGridParse.notes.noteInputArray[x];
    document.querySelector(`.noteReferance${x+1}`).value = cartGridParse.notes.noteReferanceArray[x];
  }
  for(let x = 0; x<cartGridParse.matRoom[objNum].orderNotes.length;x++){
    if(cartGridParse.matRoom[objNum].orderNotes[x][1] === true){
      document.querySelector(`.notes${x+1}CheckBox`).checked = true;
    }
  }
}

/**
 * listens for the reset button to be clicked
 * will take all in the edit overlay and set them to blank
 */
document.querySelector(".resetButton").addEventListener("click", function(){
  document.querySelector(".devicePanelVal").value = '';
  document.querySelector(".cktVal").value = '';
  document.querySelector(".sVal").value = '';
  document.querySelector(".qtyVal").value = '';
  document.querySelector(".boxTypeVal").value = '';
  document.getElementById("exitsVal").value = '';
  document.querySelector(".connecterTypeVal").value = '';
  document.querySelector(".supportTypeVal").value = '';
  document.querySelector(".supportType2Val").value = '';
  document.querySelector(".plasterRingVal").value = '';
  document.getElementById("conduitCableTypeVal").value = '';
  document.querySelector(".leftVal").value = '';
  document.querySelector(".centerVal").value = '';
  document.querySelector(".rightVal").value = '';
  document.querySelector(".bottomVal").value = '';
  document.querySelector(".deviceLeftVal").value = '';
  document.querySelector(".deviceRightVal").value = '';
  document.querySelector(".deviceCenterVal").value = '';
})

/**
 * listens for the done button to be clicked
 * sets each value in cartGridParse to the curent input values of each textbox
 * removes the edit overlay
 * sets the localStorage to new values
 * reloads the page to change the chart to edited values
 */
document.querySelector('.doneButton').addEventListener('click', function(){
  cartGridParse.matRoom[currOrderNum].devicePanel=document.querySelector(".devicePanelVal").value;
  cartGridParse.matRoom[currOrderNum].ckt=document.querySelector(".cktVal").value;
  cartGridParse.matRoom[currOrderNum].s=document.querySelector(".sVal").value;
  cartGridParse.matRoom[currOrderNum].qty=document.querySelector(".qtyVal").value;
  cartGridParse.matRoom[currOrderNum].boxType=document.querySelector(".boxTypeVal").value;
  cartGridParse.matRoom[currOrderNum].exits=document.getElementById("exitsVal").value;
  cartGridParse.matRoom[currOrderNum].connecterType=document.querySelector(".connecterTypeVal").value;
  cartGridParse.matRoom[currOrderNum].supportType=document.querySelector(".supportTypeVal").value;
  cartGridParse.matRoom[currOrderNum].supportType2=document.querySelector(".supportType2Val").value;
  cartGridParse.matRoom[currOrderNum].plasterRing=document.querySelector(".plasterRingVal").value;
  cartGridParse.matRoom[currOrderNum].conduitCableType=document.getElementById("conduitCableTypeVal").value;
  cartGridParse.matRoom[currOrderNum].left=document.querySelector(".leftVal").value;
  cartGridParse.matRoom[currOrderNum].center=document.querySelector(".centerVal").value;
  cartGridParse.matRoom[currOrderNum].right=document.querySelector(".rightVal").value;
  cartGridParse.matRoom[currOrderNum].bottom=document.querySelector(".bottomVal").value;
  cartGridParse.matRoom[currOrderNum].deviceLeft=document.querySelector(".deviceLeftVal").value;
  cartGridParse.matRoom[currOrderNum].deviceRight=document.querySelector(".deviceRightVal").value;
  cartGridParse.matRoom[currOrderNum].deviceCenter=document.querySelector(".deviceCenterVal").value;
  for(let x = 0; x<cartGridParse.notes.noteInputArray.length; x++){
    cartGridParse.notes.noteInputArray[x] = document.querySelector(`.note${x+1}`).value;
    cartGridParse.notes.noteReferanceArray[x] = document.querySelector(`.noteReferance${x+1}`).value;
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
  cartGridParse.matRoom[currOrderNum].orderNotes = Object.entries(orderNotesArray);
  document.querySelector('.editOverlay').classList.remove('editOn');
  document.getElementById("editOverlay").style.display = 'none';
  currOrderNum = 0;
  localStorage.setItem('room',JSON.stringify(cartGridParse));
  location.reload();
})

//sets currOrderNum to edit the values
function setCurrOrderNum(num)
{
  currOrderNum = num;
}

document.querySelector('.buildbookOutput').innerHTML = buildBook.name;
document.querySelector('.roomNameOutput').innerHTML = cartGridParse.name;

document.querySelector('.sendToBookButton').addEventListener('click', function(){
  cartGridParse.editRoom = true;
  buildBook['rooms'][cartGridParse.name] = cartGridParse;
  localStorage.setItem('portfolio', JSON.stringify(buildBook));
  localStorage.removeItem('room');
})