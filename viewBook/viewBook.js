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



/**
 * looks for click on save book button to send book to quickbase
 * send book data to quickbase
*/ 
document.querySelector('.completeBook').addEventListener('click', function(){
  //pushes the values of the build book into quickbase with api call
  setBookVals();
})

//holds data for the max book number
let maxBookNum;
//API calls prefabrication sandbox and uses designer 999 to get the maximum book value
function getMaxBookNum(){
  var headers = {
  	'QB-Realm-Hostname': 'inglett.quickbase.com',
    'User-Agent': '{User-Agent}',
    'Authorization': 'QB-USER-TOKEN b8hh5r_nh9z_0_dm29ei5bdm65qjcwzj5srda74zte',
    'Content-Type': 'application/json'
  }
  var body = {"from":"btgyiesrv","select":[20],"where":"{19.EX.'QB@inglett-stubbs.com'}","options":{"skip":0,"top":0,"compareWithAppLocalTime":false}}

  fetch('https://api.quickbase.com/v1/records/query',
    {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    })
  .then(res => {
    if (res.ok) {
      res.json().then(res => maxBookNum = res);
      return maxBookNum;
    }
    return res.json().then(resBody => Promise.reject({status: res.status, ...resBody}));
  })
  .catch(err => console.log(err))
}