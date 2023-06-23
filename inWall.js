let matList = {
  orderCount : {
    devicePanel : 0,
    ckt : 0,
    s : 0,
    qty : 0,
    boxType: document.getElementById("boxTypeVal").value,
    exits:0,
    connecterType:0,
    supportType:0,
    platerRingv0,
    conduitCableType:0,
    left:0,
    center:0,
    right:0,
    bottomv0,
    deviceLeft:0,
    deviceRight:0,
    deviceCenter:0
  }
};

let orderCount = 1;

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
    })

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