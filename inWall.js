document.querySelector(
  '.sendButton').addEventListener(
    'click',function(){
      let temp = document.querySelector('.notesInput');
      document.querySelector('.formRight').innerHTML = temp.value();
      //console.log('click');
    })