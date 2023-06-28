
let cartGridParse = JSON.parse(localStorage.getItem('matList'));

let count = 0;

for(let properties in cartGridParse){
  count++;
}



loadingCart();
function loadingCart(){
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
              <th>Plaster Ring</th>
              <th>Conduit/Cable Type</th>
              <th>Left</th>
              <th>Center</th>
              <th>Right</th>
              <th>Bottom</th>
              <th>Device Left</th>
              <th>Device Center</th>
              <th>Device Right</th>
              <th>Notes</th>
              <th>Edit</th>
            </tr>
            <tr>
          `;
  let counter = 0;
    for(let z in cartGridParse){
      let innerHTMLdevicePanel = cartGridParse[z].devicePanel;
      let innerHTMLckt = cartGridParse[z].ckt;
      let innerHTMLs = cartGridParse[z].s;
      let innerHTMLqty = cartGridParse[z].qty;
      let innerHTMLboxType = cartGridParse[z].boxType;
      let innerHTMLexits = cartGridParse[z].exits;
      let innerHTMLconnecterType = cartGridParse[z].connecterType;
      let innerHTMLsupportType = cartGridParse[z].supportType;
      let innerHTMLplasterRing = cartGridParse[z].plasterRing;
      let innerHTMLconduitCableType = cartGridParse[z].conduitCableType;
      let innerHTMLleft = cartGridParse[z].left;
      let innerHTMLcenter = cartGridParse[z].center;
      let innerHTMLright = cartGridParse[z].right;
      let innerHTMLbottom = cartGridParse[z].bottom;
      let innerHTMLdeviceLeft = cartGridParse[z].deviceLeft;
      let innerHTMLdeviceRight = cartGridParse[z].deviceRight;
      let innerHTMLdeviceCenter = cartGridParse[z].deviceCenter;
      let innerHTMLnotes = cartGridParse[z].note;
      console.log(innerHTMLnotes);
      html+=`
              <th>${z}</th>
              <td>${innerHTMLdevicePanel}</td>
              <td>${innerHTMLckt}</td>
              <td>${innerHTMLs}</td>
              <td>${innerHTMLqty}</td>
              <td>${innerHTMLboxType}</td>
              <td>${innerHTMLexits}</td>
              <td>${innerHTMLconnecterType}</td>
              <td>${innerHTMLsupportType}</td>
              <td>${innerHTMLplasterRing}</td>
              <td>${innerHTMLconduitCableType}</td>
              <td>${innerHTMLleft}</td>
              <td>${innerHTMLcenter}</td>
              <td>${innerHTMLright}</td>
              <td>${innerHTMLbottom}</td>
              <td>${innerHTMLdeviceLeft}</td>
              <td>${innerHTMLdeviceCenter}</td>
              <td>${innerHTMLdeviceRight}</td>`;
            if(cartGridParse[z].note.length > 0){
              html+=`<td><button class = "notesButton notesButton${z}" onclick = "notesView(${z})">&#9776;</button></td>`;
            }
            else{
              html+=`<td></td>`
            }
            html+=`<td><button class = "editButton editButton${z}" onclick = "edit(${z})">&#9998;</button></td></tr>`;
            counter++;
      if(counter < count)
      {
          html+='<tr>';
      }
      
    }
    if(count === 0)
    {
      html += '<td>Nothing in Cart</td></tr>'
    }
  html+=`</table>`;
  document.querySelector('.orderSummary').innerHTML += html; 
}

function edit(objNum){
  if(document.querySelector('.editOverlay').classList.contains('editOn')){
    document.querySelector('.editOverlay').classList.remove('editOn');
    document.getElementById("editOverlay").style.display = 'none';
  }
  else{
    document.querySelector('.editOverlay').classList.add('editOn');
    document.getElementById("editOverlay").style.display = "block";
  }
  document.querySelector(".devicePanelVal").value = cartGridParse[objNum].devicePanel;
  document.querySelector(".cktVal").value = cartGridParse[objNum].ckt;
  document.querySelector(".sVal").value = cartGridParse[objNum].s;
  document.querySelector(".qtyVal").value = cartGridParse[objNum].qty;
  document.querySelector(".boxTypeVal").value = cartGridParse[objNum].boxType;
  document.getElementById("exitsVal").value = cartGridParse[objNum].exits;
  document.querySelector(".connecterTypeVal").value = cartGridParse[objNum].connecterType;
  document.querySelector(".supportTypeVal").value = cartGridParse[objNum].supportType;
  document.querySelector(".plasterRingVal").value = cartGridParse[objNum].plasterRing;
  document.getElementById("conduitCableTypeVal").value = cartGridParse[objNum].conduitCableType;
  document.querySelector(".leftVal").value = cartGridParse[objNum].left;
  document.querySelector(".centerVal").value = cartGridParse[objNum].center;
  document.querySelector(".rightVal").value = cartGridParse[objNum].right;
  document.querySelector(".bottomVal").value = cartGridParse[objNum].bottom;
  document.querySelector(".deviceLeftVal").value = cartGridParse[objNum].deviceLeft;
  document.querySelector(".deviceRightVal").value = cartGridParse[objNum].deviceRight;
  document.querySelector(".deviceCenterVal").value = cartGridParse[objNum].deviceCenter;
  document.querySelector('.orderNumber').innerHTML = 'Order: ' + objNum;
}

document.querySelector('.doneButton').addEventListener('click', function(){
  document.querySelector('.editOverlay').classList.remove('editOn');
  document.getElementById("editOverlay").style.display = 'none';
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
  document.querySelector('.notesInput').value = '';
})

function notesView(objNum){
  let noteHTML = "";
  if(document.querySelector('.notesOverlay').classList.contains('notesOn')){
    document.querySelector('.notesOverlay').classList.remove('notesOn');
    document.getElementById("notesOverlay").style.display = 'none';
  }
  else{
    document.querySelector('.notesOverlay').classList.add('notesOn');
    document.getElementById("notesOverlay").style.display = "block";
  }
  for(let x = 0; x<cartGridParse[objNum].note.length;x++){
    let tempNote = cartGridParse[objNum].note[x]
    noteHTML+=`<p>${tempNote}</p>`;
  }
  //document.querySelector('.notesReferance').innerHTML = cartGridParse[objNum].note;
  document.querySelector('.notesReferance').innerHTML = noteHTML;
  document.querySelector('.orderNumberNotes').innerHTML = 'Order: ' + objNum;
}

document.querySelector('.exitNotes').addEventListener('click', function(){
  document.querySelector('.notesOverlay').classList.remove('notesOn');
  document.getElementById("notesOverlay").style.display = 'none';
})