let matList = JSON.parse(localStorage.getItem("matList")) || {};

let orderCount = 0
loadOrderCount();
function loadOrderCount(){
  for(let properties in matList){
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
      matList[orderCount+1] = {
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
        note: notes
      };
      orderCount++;
      if(orderCount === 1)
      {
        document.querySelector('.viewOrders').innerHTML = `${orderCount} Order`;
      }
      else{
        document.querySelector('.viewOrders').innerHTML = `${orderCount} Orders`;
      }
      notes = [];
      localStorage.setItem('matList', JSON.stringify(matList));
      
    }
  )

let notes = [];

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
  document.querySelector('.notesInput').value = '';
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