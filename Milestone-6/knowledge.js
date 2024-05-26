/*
Data types:(premitive data type)
1.number
2.string
3.boolean
4.undefined
5.null

7.symbol

Non-premitive data:
6.object


Boolean:
Falsy:
false
0
empty string;
null
undefined
NaN

Truthy:
truth
number->positive/negative(only 0 is false)
string
empty array



Undefined: Any variable that isn't given any value is called undefined;
empty return in a function will show undefined.
function that didn't write return;
parameter that isn't passed
property that doesn't exist in an object
accessing array eement out ofrange 
accessing deleted arrya element


Null=  null simply means empty.

//-------------//
Double Equal(==) vs Triple Equal(===)  [Implicit conversion]


*/

// let a ='hello';
// let b=a;
// console.log(a,b);
// a='gelo';
// console.log(a,b);

// const fourth=(a,b)=>{
//     a+b;
//        //* 
// }
// let es=fourth(2,3);
// console.log(es);
// console.log(fourth(3,5));//will show undefined
// function double(a,b) {
//     const s=a*b;
//     return s;
    
// }
// console.log(double(5));//will return undefiend because only one parameter is passed instead of 2.


// const first=3;
// const second='3';
// if(first==second){
//     console.log('condition is true');
// }

// else{
//     console.log('condifiton is false');
// }

// //=========Call back function========
// function welcomeMessege(name,greetHandler) {
//     console.log(greetHandler);
//     greetHandler(name);
// }
// function greetMorning(name){
//     console.log('good morning',name);

// }
//  welcomeMessege('Tom Hanks',greetMorning);
//  welcomeMessege('sakib hanks',greetMorning);
//  function work(x,y=4) {
//     return x+y;

//  }
//  console.log(work(32));


//====Module 36=====
//creating object using object literal
const student={name:'sakib Al hasan',job:'cricketer'}
//using constructor
const person=new Object();
//using Object Function
const human=Object.create(student);
console.log(human.job);
//using class
class People{
    constructor(name,age){
        
        this.name=name;
        this.age=age;

    }
}
const people=new People('abdul',12);
console.log(people);
//using function (Same as class)

function Manus(name) {
    this.name=name;

}
// const man=new Manus('kader');
// console.log(man);

// //========Object Methods=========
// const bottle={color:'ello',hold:'water',price:50,isCleaned:true}
// const keys=Object.keys(bottle)// keys method return property names only in an array
// console.log(keys);
// const values=Object.values(bottle)//values method returns propertry values only in an array
// console.log(values);
// const pairs=Object.entries(bottle);//entries method propertry & value gulo ke joray joray return kore array hisebe.
// console.log(pairs);
// delete bottle.isCleaned;// deletes any property 
// console.log(bottle);
// Object.freeze(bottle);//1.doesn't let you delete any property,doesn't let you modify any property,doesn't let you add any propety.
const getGirlFriend= (name = "chokina")=>"name"; console.log(getGirlFriend());

const obj={
    name:"abdullah",
    age:23,
    address:"Swizerland"
    ,bol:true,
    home:{firstHome:"golapkhor",laterHome:"KorimBagan"}
    ,peoples:[2,3,5,6,7],getMembers(){
        console.log("members Fetched");
    }
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element);
        element(getMembers());
        
    }
      
}
console.log('Problem Fixed');