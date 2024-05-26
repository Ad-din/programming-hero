console.log('Hello API');
/*
///BUTTON CLICK LOAD DATA

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(Response=>Response.json())
.then(json=>console.log(json));

}
function loadAnd() {
    const ul=document.getElementById('userName');

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response=>Response.json())
    .then(json=>json.forEach(element => {
       const li= document.createElement('li');
        li.innerText=`This user name is ${element.username} & his address is ${element.address.city}`;
        ul.appendChild(li);
        console.log(element);
    }))
}
*/

// SITE LOAD POST DATA
/*
function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>res.json())
.then(data=>displayData(data))
}
function displayData(posts) {
    const ul=document.getElementById('userName');
    posts.forEach(element => {     
    const li=document.createElement('li');
    li.innerText=element.title;
    ul.appendChild(li);
        console.log(element.title);
    });
    
}
loadPosts();

*/
//New API module



const loadQuotes= ()=> {
    fetch('https://api.kanye.rest/')
    .then(res=>res.json())
    .then(data=>{
        const quote=document.getElementById('quotes');
        quote.innerText=data.quote;

        console.log(data);
    }
        
        )
}
loadQuotes();

const randomUsers= ()=>{
   
    fetch('https://randomuser.me/api/?results=5')
    .then(res=>res.json())
    .then(data=>displayUser(data))
};
const displayUser= user=>{
    const buddy=user.results;
    const info=document.querySelector('.buddyShower');
    info.style='display:grid; grid-template-columns: repeat(3,fr);';
    for(const bud of buddy){
        const div=document.createElement('div');
        div.classList.add('data');
        div.style='border: 2px solid tomato;margin: 10px;padding: 20px;border-radius: 10px;';
        const h3=document.createElement('h3');
        const p=document.createElement('p');
        h3.innerText=`Title ${bud.name.title} First Name ${bud.name.firstName}`;
        p.innerText=bud.email;
        div.appendChild(h3);
        div.appendChild(p);
        info.appendChild(div);
        console.log(div);
    }

}
randomUsers();
