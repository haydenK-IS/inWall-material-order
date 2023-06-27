
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
              <td>${innerHTMLdeviceRight}</td>
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
