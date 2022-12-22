var str1="hello aspirians"
var str2="welcome team lamp,team dotnet"

console.log(str1.charAt(1))
console.log(str1.charCodeAt(1))
console.log(str1)
console.log(str1.concat(str2))
console.log(str1.endsWith("ans"))
console.log(String.fromCharCode(101))
console.log(str2.includes("lamp"))
console.log(str2.indexOf("team"))
console.log(str2.lastIndexOf("team"))
console.log(str2.match(/ome/))
console.log(str1.repeat(3))
console.log(str2.replace(/team/g,"group"))
console.log(str2.search("ot"))
console.log(str1.slice(4,9))
console.log(str1.split(" "))
console.log(str1.startsWith("hello"))
console.log(str2.substr(2,5))
console.log(str2.substring(2,5))
console.log(str2.toUpperCase())
console.log(str2.toLowerCase())


var str3="        development team!!!               "
console.log(str3)
console.log(str3.trim())
console.log(str3.trimStart())
console.log(str3.trimEnd())