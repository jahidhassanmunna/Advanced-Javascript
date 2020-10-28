 const number=[2,4,5,6,7,8]
 const output=[]
 for(let i=0;i<number.length;i++){
    const element=number[i]
    const result=element*element
     output.push(result)
 }
 console.log(output)


// MAP //
//const numbers=[10,4,5,6,7]
//function square(element){
    //return element*element;
//}


// const result=numbers.map(function square(element){
//     return element*element;
// })
// console.log(result)

const numbers=[60,4,5,6,7]
const result=numbers.map(element=>element*element)
const result=numbers.map(w=>w*w)
const square=element => element*element
console.log(result)

/* Filter*/

 const numbers=[2,3,4,5,6,7]
 const bigger=numbers.filter(x=>x>5)
 console.log(bigger)

/*Find*/

const numbers=[4,5,6,7,8]
const isThere=numbers.find(y=>y>5)
console.log(isThere)