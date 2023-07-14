/**
 * By: Hayden Kubit
 * Date: 7/14/2023
 */

//pulls local buildbook
let buildBook = JSON.parse(localStorage.getItem('portfolio')) || {};

//pulls local room
let cartGridParse = JSON.parse(localStorage.getItem('room')) || {};

//keeps count of order index
let count = 0;
//counts the orders
for(let properties in cartGridParse.matRoom){
  count++;
}

//loads cart to display room
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
            <tr>
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
        //document.querySelector('.boxType1').classList.add("notes1Color");
        //console.log(colorRef + ' : ' +(y+1) + ' : ' + dataNote);
      }
    }
  }
}

//displays book name and room name
document.querySelector('.buildbookOutput').innerHTML = buildBook.name;
document.querySelector('.roomNameOutput').innerHTML = cartGridParse.name;

//prints the table 
window.print();

//removes the room from local
localStorage.removeItem('room');