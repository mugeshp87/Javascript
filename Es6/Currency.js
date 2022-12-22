var usd=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"})
console.log(usd.format(1234567))
var ind=new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR"})
console.log(ind.format(987654))

var usdNumber=new Intl.NumberFormat("en-US")
console.log(usdNumber.format(1234567))
var indNumber=new Intl.NumberFormat("en-IN")
console.log(indNumber.format(987654))