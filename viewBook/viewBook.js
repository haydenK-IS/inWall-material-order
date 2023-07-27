/**
 * By: Hayden Kubit
 * Date: 7/14/2023
 */

//loads locally stored build book
let buildBook = JSON.parse(localStorage.getItem('portfolio')) || {};

/**
 * on page load runs loadBuildBook() to display all rooms in a table
 * each room has buttons to edit, print, and delete
 */
loadBuildBook();
function loadBuildBook(){
  //creates the header for the table
  let html =`
              <table id = "buildbookTable" border = "1">
              <tr>
                <th>Room Name</th>
                <th>Edit</th>
                <th>Print</th>
                <th>Delete</th>
              </tr>
            `;
  //x is each room
  for(let x in buildBook.rooms){
    //outputs each rom name and corrisponding buttons
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

//pulls you to the view room page with info pulled from that room
function editRoom(editName){
  let roomSet = buildBook.rooms[`${editName}`];
  localStorage.setItem('room', JSON.stringify(roomSet));
  window.location.href = 'http://127.0.0.1:5501/viewCart/viewCart.html';
  window.location.href;
}

//deletes room from buildBook
//resets local storage
function deleteRoom(roomName){
  delete buildBook.rooms[`${roomName}`];
  localStorage.setItem('portfolio',JSON.stringify(buildBook));
  location.reload();
}

//sets room locally and opens printing page
function printRoom(roomName){
  let roomSet = buildBook.rooms[`${roomName}`];
  localStorage.setItem('room', JSON.stringify(roomSet));
  window.open('http://127.0.0.1:5501/printing/printing.html');
}

//opens viewall page
document.querySelector('.viewAllButton').addEventListener('click', function(){
  window.open('http://127.0.0.1:5501/viewAll/viewAll.html');
})

//puts the build book name on display
document.querySelector('.buildBookTitle').innerHTML= buildBook.name;