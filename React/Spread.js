import react from 'react';

//Spread Operator
//If.......expands an array or object into indivudal elements ,it's the spread operator

export default function Spread(...args){
    for (let i in args){
        console.log(args[i]);
    }
}
Spread(1,2,3,4,5,6)