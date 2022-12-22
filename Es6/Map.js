// const map1=new Map()
// map1.set(1,"santhosh")
// map1.set(2,"Mugesh")
// map1.set("name","Amar")
// console.log(map1)
// map1.set("name","Amarnath")
// console.log(map1)
// console.log(map1.get("name"))
// console.log(map1.get(2))
// for(const loop of map1)
// {
// console.log(loop)
// }

let weakMap = new WeakMap();
let obj = {name:"mugi"};
weakMap.set(obj, "ok")
console.log(weakMap.get(obj))
// weakMap.set("test", "Whoops"); 

