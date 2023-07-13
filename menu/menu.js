//gets the locally stored portfolio
//if no portfolio is stored it creates a null portfolio obj
let portfolio = JSON.parse(localStorage.getItem('portfolio')) || {
  name:'Unnamed',
  rooms:{}
};

if(localStorage.getItem('dark')){
  document.querySelector('.light').classList.add('dark');
}

localStorage.setItem('portfolio',JSON.stringify(portfolio));

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