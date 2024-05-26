const fish={
    name:'Hilsha',price:120,phone:'019283293435',id:'23',dress:'Siver'
}
const {dress,phone,price,id,name}=fish;
console.log(name);
console.log(price);
console.log(phone);
console.log(phone);
console.log(dress);

const fish2={
    name:'Hilsha2',price:1202,phone:'2019283293435',id:'223',dress:'SiverGold',species:{name2:'Rui',dress:'silver',age:'34'}
}
const {name2,pri,dre,age}=fish2.species;
console.log(name2);
//32-3

const myObject={x:2,y:50,z:500,a:34,b:59};
const {x,b}=myObject;
console.log('myObject.p',myObject?.p?.q); //optional chaining..( ? )

//32-4  Array mapping

const numbers=[3,5,6,4,3,53,5];
const output=[];
const doubleIt=number=>number*3;
for(const num of numbers){
    const res=doubleIt(num);
    output.push(res);
}
// output=doubleIt(numbers);
console.log(output);

//We have done 3 things to put variable in output
//1.loop
//2.element diye function call
//3.result ekta array er moddeh pucsh korci

// Ei puro kaj tai ekta array er modde korte pari

const output2=numbers.map(doubleIt);
//or,
const output3=numbers.map(number=>number*2);

console.log(output2);
console.log(output3);

//32-5

const frineds=['tom hanks','tom cruise','Tom Brady','Tom solaiman'];
const lengths=frineds.map(lengths=>lengths.length);
console.log(lengths);
const products=[{name:'water bottle',price:50,color:'yellow'},
                 {name:'mobile pone',price:15000,color:'black'},
                 {name:'smart watch',price:400,color:'pink'}
]

const productNames=products.map(product=>product.name);
console.log(productNames);

//32-6 array filtering

const expensive=products.filter(product => product.price>100);
console.log(expensive);

//32-7,8  constructor,inheritance,extends class,super,class method
class support{
    name;
    age;
    designation='support For student';
    address;
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    startSession(){
        console.log(`this students name is ${this.name} and age is ${this.age}`);
    }
}
class StudentCare{
    name;
    age;
    designation='student care web dev';
    address;
    constructor(name,age,address){
        this.name=name;
        this.address=address;
        this.age=age;
        
        console.log("Data inserted successfully!");
    }
}

 student1= new StudentCare('abdul',19,'haji');
 student2=new StudentCare('tasmia',21,'haji');
