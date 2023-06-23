
let cartGridParse = JSON.parse(localStorage.getItem('matList'));
console.log(cartGridParse);

loadingCart();
function loadingCart(){
  let html;
    for(let z = 1; z<=cartGridParse.length; z++){
      html+=`<div>
              <p>cartGridParse.${z}.devicePanel</p>
              <p>cartGridParse.${z}.ckt</p>
              <p>cartGridParse.${z}.s</p>
              <p>cartGridParse.${z}.qty</p>
              <p>cartGridParse.${z}.boxType</p>
              <p>cartGridParse.${z}.exits</p>
              <p>cartGridParse.${z}.connecterType</p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>`
    }
    document.querySelector('.orderSummary').innerHTML = html;
      
}
