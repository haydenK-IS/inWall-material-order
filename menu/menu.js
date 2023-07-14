//gets the locally stored portfolio
//if no portfolio is stored it creates a null portfolio obj
let portfolio = JSON.parse(localStorage.getItem('portfolio')) || {
  name:'Unnamed',
  rooms:{}
};

//looks for dark in the localstorage to apply dark mode
if(localStorage.getItem('dark')){
  document.querySelector('.light').classList.add('dark');
}

//sets the protfolio to the local sotrage
localStorage.setItem('portfolio',JSON.stringify(portfolio));

//changes the html to input with a button to replace the pullPortfolioButton so the user
//can search for their build book
document.querySelector('.pullPortfolioButton').addEventListener('click', function(){
  html =  `
            <input class = "pullPortfolioInput" type = "text">
            <button class = "sendButton">&#8594;</button>
          `;
  document.querySelector('.pullPortfoilioButtonToInput').innerHTML = html;
})

/*
document.querySelector('.changeTheme').addEventListener('click', function(){
  if(document.querySelector('.light').classList.contains('dark')){
    document.querySelector('.light').classList.remove('dark');
    localStorage.removeItem('dark');
  }
  else{
    document.querySelector('.light').classList.add('dark');
    localStorage.setItem('dark', 'dark');
  }
})
 */