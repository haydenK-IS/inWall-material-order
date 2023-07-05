//gets the locally stored portfolio
//if no portfolio is stored it creates a null portfolio obj
let portfolio = JSON.parse(localStorage.getItem('portfolio')) || {};