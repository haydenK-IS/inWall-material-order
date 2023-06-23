let notes = [];

document.querySelector(
  '.sendButton').addEventListener(
    'click',function(){
      let temp = document.querySelector('.notesInput');
      notes.push(temp);
      let html = '';
      for(let x = 0; x<notes.length; x++){
        html+= `<p>${notes[x]}</p>`
      }
      document.querySelector('.formRight').innerHTML = JSON.stringify(notes);
    })

function enter(event){
  if(event.key === 'Enter'){
    let temp = document.querySelector('.notesInput');
      document.querySelector('.formRight').innerHTML = notes;
  }
}