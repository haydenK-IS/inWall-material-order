let buildBook = JSON.parse(localStorage.getItem('portfolio')) || {};

loadBuildBook();
function loadBuildBook(){
  let html =`
              <table id = "buildbookTable" border = "1">
              <tr>
                <th>Room Name</th>
                <th>Edit</th>
                <th>Print</th>
                <th>Delete</th>
              </tr>
            `;
  let roomsArray = Object.entries(buildBook.rooms);
  for(let x in buildBook.rooms){
    console.log(x);
    html+=`
            <tr>
              <td class = "${x}">${x}</td>
              <th><button class = "editButton editButton${x}" onclick = "editRoom('${x}')">&#9998;</button></th>
              <th><button class = "printButton printButton${x}" onclick = "printRoom('${x}')">&#128438;</button></th>
              <th><button class = "trashButton trashButton${x}" onclick = "deleteRoom('${x}')">&#128465;</button></th>
            </tr>
          `
  }
  html+=`</table>`;
  document.querySelector('.buildbookTable').innerHTML = html;
}

function editRoom(editName){
  let roomSet = buildBook.rooms[`${editName}`];
  localStorage.setItem('room', JSON.stringify(roomSet));
  window.location.href = 'http://127.0.0.1:5500/viewCart/viewCart.html';
  window.location.href;
}

function deleteRoom(roomName){
  delete buildBook.rooms[`${roomName}`];
  localStorage.setItem('portfolio',JSON.stringify(buildBook));
  location.reload();
}

function printRoom(roomName){
  let roomSet = buildBook.rooms[`${roomName}`];
  localStorage.setItem('room', JSON.stringify(roomSet));
  window.open('http://127.0.0.1:5500/printing/printing.html');
  //localStorage.removeItem('room');
}

document.querySelector('.viewAllButton').addEventListener('click', function(){
  window.open('http://127.0.0.1:5500/viewAll/viewAll.html');
})