let buildBook = JSON.parse(localStorage.getItem('portfolio')) || {};

let countRoom = 0;

for(x in buildBook.rooms){
  let tempRoom  = buildBook.rooms[`${x}`];
  //counts the orders
  let count = 0;
  for(let properties in tempRoom.matRoom){
    count++;
  }
  let html =`
              <div class="titleDisplay">
                <div class="portDis">
                  <h1>Build Book &#x2022;</h1>
                  <h1 class="buildbookOutput"></h1>
                </div>
                <div class="roomDis">
                  <h1>Room &#x2022;</h1>
                  <h1 class="roomNameOutput"></h1>
                </div>
                <div class="noteDis">
                  <h1 class="notesTitle" style="margin-top: 0px; margin-bottom: 0px">
                    Notes &#x2022;
                  </h1>
                  <div class="notesArrayReferance${countRoom} notesArrayReferance"></div>
                </div>
              </div>
            `
  document.querySelector('.roomInput').insertAdjacentHTML('beforeend', html);
  html =`
          <table id="materialTable" border="1" style="page-break-after: always;">
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
      let counter = 0;
      //gets values of keys to input into the table
      for(let z in tempRoom.matRoom){
        let innerHTMLdevicePanel = tempRoom.matRoom[z].devicePanel;
        let innerHTMLckt = tempRoom.matRoom[z].ckt;
        let innerHTMLs = tempRoom.matRoom[z].s;
        let innerHTMLqty = tempRoom.matRoom[z].qty;
        let innerHTMLboxType = tempRoom.matRoom[z].boxType;
        let innerHTMLexits = tempRoom.matRoom[z].exits;
        let innerHTMLconnecterType = tempRoom.matRoom[z].connecterType;
        let innerHTMLsupportType = tempRoom.matRoom[z].supportType;
        let innerHTMLsupportType2 = tempRoom.matRoom[z].supportType2;
        let innerHTMLplasterRing = tempRoom.matRoom[z].plasterRing;
        let innerHTMLconduitCableType = tempRoom.matRoom[z].conduitCableType;
        let innerHTMLleft = tempRoom.matRoom[z].left;
        let innerHTMLcenter = tempRoom.matRoom[z].center;
        let innerHTMLright = tempRoom.matRoom[z].right;
        let innerHTMLbottom = tempRoom.matRoom[z].bottom;
        let innerHTMLdeviceLeft = tempRoom.matRoom[z].deviceLeft;
        let innerHTMLdeviceRight = tempRoom.matRoom[z].deviceRight;
        let innerHTMLdeviceCenter = tempRoom.matRoom[z].deviceCenter;
        html+=`
                <th class = "order${z}${countRoom}">${z}</th>
                <td class = "devicePanel${z}${countRoom}">${innerHTMLdevicePanel}</td>
                <td class = "ckt${z}${countRoom}">${innerHTMLckt}</td>
                <td class = "s${z}${countRoom}">${innerHTMLs}</td>
                <td class = "qty${z}${countRoom}">${innerHTMLqty}</td>
                <td class = "boxType${z}${countRoom}">${innerHTMLboxType}</td>
                <td class = "exits${z}${countRoom}">${innerHTMLexits}</td>
                <td class = "connecterType${z}${countRoom}">${innerHTMLconnecterType}</td>
                <td class = "supportType${z}${countRoom}">${innerHTMLsupportType}</td>
                <td class = "supportType2${z}${countRoom}">${innerHTMLsupportType2}</td>
                <td class = "plasterRing${z}${countRoom}">${innerHTMLplasterRing}</td>
                <td class = "conduitCableType${z}${countRoom}">${innerHTMLconduitCableType}</td>
                <td class = "left${z}${countRoom}">${innerHTMLleft}</td>
                <td class = "center${z}${countRoom}">${innerHTMLcenter}</td>
                <td class = "right${z}${countRoom}">${innerHTMLright}</td>
                <td class = "bottom${z}${countRoom}">${innerHTMLbottom}</td>
                <td class = "deviceLeft${z}${countRoom}">${innerHTMLdeviceLeft}</td>
                <td class = "deviceCenter${z}${countRoom}">${innerHTMLdeviceCenter}</td>
                <td class = "deviceRight${z}${countRoom}">${innerHTMLdeviceRight}</td>
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
    document.querySelector('.roomInput').insertAdjacentHTML('beforeend', html);
    for(let y = 0; y<tempRoom.notes.noteInputArray.length; y++)
  {
    html = `<h2 class = 'hNote${y+1}'>Note ${y+1}: <span class = "referenceName">${tempRoom.notes.noteReferanceArray[y]}</span> : ${tempRoom.notes.noteInputArray[y]}</h2>`
    document.querySelector(`.notesArrayReferance${countRoom}`).insertAdjacentHTML("beforeend",html);
  }
  for(let z = 0; z<count; z++){
    for(let y = 0; y<tempRoom.matRoom[z+1].orderNotes.length; y++){
      if(tempRoom.matRoom[z+1].orderNotes[y][1] === true)
      {
        let colorRef = tempRoom.notes.noteReferanceArray[y];
        //console.log(colorRef + `${colorRef}${z+1}`);
        let dataNote = tempRoom.matRoom[z+1].orderNotes[y][0];
        //console.log(dataNote + `${dataNote}Color`);
        document.querySelector(`.${colorRef}${z+1}${countRoom}`).classList.add(`${dataNote}Color`);
        //document.querySelector('.boxType1').classList.add("notes1Color");
      }
    }
  }
    countRoom++;
}

window.print();