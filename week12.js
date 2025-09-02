console.log("week 12")
const fruits = ["apple", "banana","Juice"];
for(let i=0;i<fruits.length;i++) {
    console.log(fruits[i]);
}
// practice
const color=["blue","green","black","red"];
// for(let i=0;i<color.length;i++){
//     console.log(color[i]);
// }
color.splice(0,3)
console.log("after remove")
color.forEach(element=>{
    console.log("Element:",element)
});
const animal=["dog","tiger","cat","Dragon"];
// for(let i=0;i<animal.length;i++){
//     console.log(animal[i]);
// }

animal.forEach(element=>{
    console.log("Element:",element)
});
let person={
    name:'ka',
    gender: 'F',
    dateofbairth:'2003-01-12'
}
console.log("Name: ",person.name)
console.log("Gender: ",person.gender)
console.log("Date of birth: ",person.dateofbairth)
console.log("Person",person)
//Practice obj
let Moto={
    type1:'HondaDream',
    type2:'Scopy',
    type3:'Today',
    typ4:'click'
}
console.log("Type1: ",Moto.type1)
console.log("Type2: ",Moto.type2)
console.log("Type3: ",Moto.type3)
console.log("Type4: ",Moto.type4)
console.log("Moto",Moto)
let 