const {add,getData} = require("./src/function")
getData().then((item)=>console.log(item))

console.log(getData,add(2,5));