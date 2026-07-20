//rest 
//It is used to get elments from array

import react from './react'
function Rest(...data)
{
    const [firstnumber,Secondnumber,,Fourthnumber,...othernums]=data
    console.log("this is restnumber",firstnumber);
    console.log("this is restnumber",Secondnumber);
    console.log("this is restnumber",Fourthnumber);
}
const array=[1,2,3,4,5,6]
Rest(...array)


