console.log("Heloe");
const employee={
    ide:'Vs Code',
    designation:'developer',
    machine:'mac',
    languages:['htm','css','js','python','react','php','ruby','swift']
    ,specification:{
        height:55,weight:120,address:'kumarkhali',drink:'water'
    }
}
// console.log(employee);
const {machine,ide}=employee;
const {weight,address}=employee.specification;
for(const data in employee){
    // console.log(data.length);
}

//JSON stringfy & parse--->

const employeeJSON= JSON.stringify(employee);
console.log(employeeJSON);
const employeeNormal=JSON.parse(employeeJSON)
// console.log(employeeNormal);

//Fetch----->
// fetch('url')
// .then(res=>res.json())
// .then(data=>console.log(data))

//obeject keys, value method

const keys=Object.keys(employee);
const values=Object.values(employee);

//array for each, map

const num=[23,34,54,34,23,55];
// num.forEach(num=>console.log(num))
num.map(num=>num*2,console.log(num));
// console.log(num);

//add or remove from array of objects
const products=[
    {name:'laptop',price:3299,brand:'len',color:'silver'},
    {name:'watch',price:343,brand:'io',color:'golden'},
    {name:'sungalss',price:399,brand:'tital',color:'bla,ck'},
    {name:'pc',price:329e9,brand:'len',color:'red'},
    {name:'camera',price:3299,brand:'len',color:'gray'}
]
const newProduct={name:"abdulla",pric:"nonoe",brand:"GodMade"}
const newProducts=[...products,newProduct];
console.log(newProducts);

//remove item
const remainings=products.filter(p=>p.name !== 'pc')
console.log(remainings);