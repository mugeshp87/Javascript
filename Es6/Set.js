// let setexample=new Set()
// setexample.add(4)
// setexample.add(7)
// setexample.add(8)
// console.log(setexample)
// // setexample.clear()
// // console.log(setexample)
// setexample.delete(4)
// console.log(setexample)
// console.log(setexample.has(4))
// console.log(setexample.values())
// console.log(setexample.entries())


let Set1 = new WeakSet();

let mugi = { name: "mugesh" };
let amar = { name: "amarnath" };
let santho = { name: "santhosh" };

Set1.add(mugi); 
Set1.add(amar);
Set1.add(santho);
console.log(Set1)

john = null;

// visitedSet will be cleaned automatically