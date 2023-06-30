
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
              <th class = "order${z}">${z}</th>
              <td class = "devicePanel${z}">${innerHTMLdevicePanel}</td>
              <td class = "ckt${z}">${innerHTMLckt}</td>
              <td class = "s${z}">${innerHTMLs}</td>
              <td class = "qty${z}">${innerHTMLqty}</td>
              <td class = "boxType${z}">${innerHTMLboxType}</td>
              <td class = "exits${z}">${innerHTMLexits}</td>
              <td class = "connecterType${z}">${innerHTMLconnecterType}</td>
              <td class = "supportType${z}">${innerHTMLsupportType}</td>
              <td class = "plasterRing${z}">${innerHTMLplasterRing}</td>
              <td class = "conduitCableType${z}">${innerHTMLconduitCableType}</td>
              <td class = "left${z}">${innerHTMLleft}</td>
              <td class = "center${z}">${innerHTMLcenter}</td>
              <td class = "right${z}">${innerHTMLright}</td>
              <td class = "bottom${z}">${innerHTMLbottom}</td>
              <td class = "deviceLeft${z}">${innerHTMLdeviceLeft}</td>
              <td class = "deviceCenter${z}">${innerHTMLdeviceCenter}</td>
              <td class = "deviceRight${z}">${innerHTMLdeviceRight}</td>
              <td><button class = "editButton editButton${z}" onclick = "edit(${z})">&#9998;</button></td>
              </tr>`;
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
  let noteHTML = '';
  for(let x = 0; x<cartGridParse[objNum].note.length;x++){
    let tempNote = cartGridParse[objNum].note[x]
    noteHTML+=`<p>${tempNote}</p>`;
  }
  document.querySelector('.userNotes').innerHTML = noteHTML;
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