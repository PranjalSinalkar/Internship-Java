function add(x,y){
    return x+y;
}
// console.log(add(2,3));
// module.exports=add;
async function getData() {
    const data=await fetch("https://jsonplaceholder.typicode.com/users");
    const res =await data.json()
    return res;
}
module.exports ={ add,getData };