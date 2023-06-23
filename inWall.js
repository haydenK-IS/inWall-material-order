let matList = {};

let orderCount = 1;

document.querySelector(
  '.addToOrder').addEventListener(
    'click', function(){
      matList[orderCount] = {
        devicePanel : 0,
        ckt : 0,
        s : 0,
        qty : 0,
        boxType: document.getElementById("boxTypeVal").value,
        exits:0,
        connecterType:0,
        supportType:0,
        platerRing:0,
        conduitCableType:0,
        left:0,
        center:0,
        right:0,
        bottom:0,
        deviceLeft:0,
        deviceRight:0,
        deviceCenter:0,
        note: notes
      }
      orderCount++;
      console.log(matList);
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