const students=[
    
        {id:21,name:'oscar wild'},
        {id:32,name:'bill gates'},
        {id:23,name:'zeff bezos'},
        {id:43,name:'jhankar Mahbub'}
    
]
const names =students.map(x=>x.name)
const ids =students.map(x=>x.id)
const bigger=students.filter(y=>y.id>21)
const biggerOne=students.find(y=>y.id>21)
console.log(biggerOne)