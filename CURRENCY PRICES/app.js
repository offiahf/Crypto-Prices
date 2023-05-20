const mainForm = document.querySelector('.convert-form');
const currencyName = document.querySelector('#currencyName');
const currentPrice = document.querySelector('.currentPrice');
const priceSymbol = document.querySelector('.symbol');
const rank = document.querySelector('.rank');
const nameDisplay = document.querySelector('.name');



  // FETCHIND DATA FROM SERVER
  
window.addEventListener('load', e =>{
    let getSymbol = async () => {
      let api = await fetch('https://api.coincap.io/v2/assets')
      return api.json()
     
   }
  
   getSymbol()
   .then(result =>{
    let arrayData = result.data // the array i want to cycle through from the API
    console.log(result.data)
     arrayData.forEach(item =>{
     currencyName.innerHTML += `<option>${item.name}</option>`;
   })

currencyName.addEventListener('click', e =>{
     arrayData.forEach(item => {
     let price = String(item.priceUsd);
      if(item.name === currencyName.value) {
        currentPrice.textContent = `Current price: $${price.substring(0, 7)}`
        priceSymbol.textContent = `Symbol: ${item.symbol}`
        rank.textContent = `Cryto ranking: ${item.rank}`
        nameDisplay.textContent = `Name: ${item.name}`
      }


     })
     console.log(dropDownValue)
   })
   })
})

// DOCUMENTATION
// return api.json() - parses the json object to javascript object 
// arrayData - in the onfulfilled state, returns an array full of objects that we perform array methods to.
// forEach() is an array method. item represents each object in the arrayData array.
// item.name - represents the name of the currency which appends in dropdown for each item.
// dropDownValue = whatever a user clicks becomes the value of the currencyName or select property in the DOM
// currencyName listens to the click event. Everytime a user selects a value, it fires a callback function for all items in the array and checks if the item.name property is the same with the value of the dropdown (or whatever a user selects) before displaying the output in the browser.










