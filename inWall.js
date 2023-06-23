document.querySelector(
  '.sendButton').addEventListener(
    'click',function(){
      let temp = document.querySelector('.notesInput');
      document.querySelector('.formRight').innerHTML = temp.value;
    })

function enter(event){
  if(event.key === 'Enter'){
    let temp = document.querySelector('.notesInput');
      document.querySelector('.formRight').innerHTML = temp.value;
  }
}