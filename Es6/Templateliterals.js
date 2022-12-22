var customer={
    name:"mugesh"
}
var cards={
    amount:7,
    product:"mobile",
    unitprice:12000
}
var message=`Hello ${customer.name} you are purchased ${cards.product} and the price of that willl be % ${cards.amount*cards.unitprice}`
console.log(message);
