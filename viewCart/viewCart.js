
let cartGridParse = JSON.parse(localStorage.getItem('room')) || {};

let currOrderNum = 0;

let count = 0;

for(let properties in cartGridParse.matRoom){
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
    for(let z in cartGridParse.matRoom){
      let innerHTMLdevicePanel = cartGridParse.matRoom[z].devicePanel;
      let innerHTMLckt = cartGridParse.matRoom[z].ckt;
      let innerHTMLs = cartGridParse.matRoom[z].s;
      let innerHTMLqty = cartGridParse.matRoom[z].qty;
      let innerHTMLboxType = cartGridParse.matRoom[z].boxType;
      let innerHTMLexits = cartGridParse.matRoom[z].exits;
      let innerHTMLconnecterType = cartGridParse.matRoom[z].connecterType;
      let innerHTMLsupportType = cartGridParse.matRoom[z].supportType;
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
              <td class = "plasterRing${z}">${innerHTMLplasterRing}</td>
              <td class = "conduitCableType${z}">${innerHTMLconduitCableType}</td>
              <td class = "left${z}">${innerHTMLleft}</td>
              <td class = "center${z}">${innerHTMLcenter}</td>
              <td class = "right${z}">${innerHTMLright}</td>
              <td class = "bottom${z}">${innerHTMLbottom}</td>
              <td class = "deviceLeft${z}">${innerHTMLdeviceLeft}</td>
              <td class = "deviceCenter${z}">${innerHTMLdeviceCenter}</td>
              <td class = "deviceRight${z}">${innerHTMLdeviceRight}</td>
              <td><button class = "editButton editButton${z}" onclick = "setCurrOrderNum(${z}); edit(${z})">&#9998;</button></td>
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
  loadNotes();
}

function loadNotes(){
  for(let x = 0; x<cartGridParse.notes[0].length; x++)
  {
    let html = `<h2>Note ${x+1}: ${cartGridParse.notes[0][x]}</h2>`
    document.querySelector('.notesArrayReferance').insertAdjacentHTML("beforeend",html);
  }
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
  document.querySelector(".devicePanelVal").value = cartGridParse.matRoom[objNum].devicePanel;
  document.querySelector(".cktVal").value = cartGridParse.matRoom[objNum].ckt;
  document.querySelector(".sVal").value = cartGridParse.matRoom[objNum].s;
  document.querySelector(".qtyVal").value = cartGridParse.matRoom[objNum].qty;
  document.querySelector(".boxTypeVal").value = cartGridParse.matRoom[objNum].boxType;
  document.getElementById("exitsVal").value = cartGridParse.matRoom[objNum].exits;
  document.querySelector(".connecterTypeVal").value = cartGridParse.matRoom[objNum].connecterType;
  document.querySelector(".supportTypeVal").value = cartGridParse.matRoom[objNum].supportType;
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
}



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

document.querySelector('.doneButton').addEventListener('click', function(){
  cartGridParse.matRoom[currOrderNum].devicePanel=document.querySelector(".devicePanelVal").value;
  cartGridParse.matRoom[currOrderNum].ckt=document.querySelector(".cktVal").value;
  cartGridParse.matRoom[currOrderNum].s=document.querySelector(".sVal").value;
  cartGridParse.matRoom[currOrderNum].qty=document.querySelector(".qtyVal").value;
  cartGridParse.matRoom[currOrderNum].boxType=document.querySelector(".boxTypeVal").value;
  cartGridParse.matRoom[currOrderNum].exits=document.getElementById("exitsVal").value;
  cartGridParse.matRoom[currOrderNum].connecterType=document.querySelector(".connecterTypeVal").value;
  cartGridParse.matRoom[currOrderNum].supportType=document.querySelector(".supportTypeVal").value;
  cartGridParse.matRoom[currOrderNum].plasterRing=document.querySelector(".plasterRingVal").value;
  cartGridParse.matRoom[currOrderNum].conduitCableType=document.getElementById("conduitCableTypeVal").value;
  cartGridParse.matRoom[currOrderNum].left=document.querySelector(".leftVal").value;
  cartGridParse.matRoom[currOrderNum].center=document.querySelector(".centerVal").value;
  cartGridParse.matRoom[currOrderNum].right=document.querySelector(".rightVal").value;
  cartGridParse.matRoom[currOrderNum].bottom=document.querySelector(".bottomVal").value;
  cartGridParse.matRoom[currOrderNum].deviceLeft=document.querySelector(".deviceLeftVal").value;
  cartGridParse.matRoom[currOrderNum].deviceRight=document.querySelector(".deviceRightVal").value;
  cartGridParse.matRoom[currOrderNum].deviceCenter=document.querySelector(".deviceCenterVal").value;

  document.querySelector('.editOverlay').classList.remove('editOn');
  document.getElementById("editOverlay").style.display = 'none';
  currOrderNum = 0;
  localStorage.setItem('room',JSON.stringify(cartGridParse));
  location.reload();
})

function setCurrOrderNum(num)
{
  currOrderNum = num;
}