// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
  
  // EURO x 1.07 = USD 
  // USD/1.07=EURO
  
  // EURO x 156.5 = JPY
  // JPY/156.5=EURO

    // EURO x .87 = GDP
  
  // EURO x .87 = GBP
  // GBP/.87=EURO


// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}
console.log(fromEuroToDollar(1))
const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / oneEuroIs.USD
    let valueInYen = valueInEuro * oneEuroIs.JPY
    return valueInYen
}

console.log(fromDollarToYen(1.07))
const fromYenToPound = function(valueInYen){
    let valueInEuro = valueInYen / oneEuroIs.JPY
    let valueInPound = valueInEuro * oneEuroIs.GBP
    return valueInPound
}
console.log(fromYenToPound(156.5))

// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };

