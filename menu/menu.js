//gets the locally stored portfolio
//if no portfolio is stored it creates a null portfolio obj
let portfolio = JSON.parse(localStorage.getItem('portfolio')) || {};

document.querySelector('.pullPortfolioButton').addEventListener('click', function(){
  html =  `
            <input class = "pullPortfolioInput" type = "text">
            <button class = "sendButton">&#8594;</button>
          `;
  document.querySelector('.pullPortfoilioButtonToInput').innerHTML = html;
})