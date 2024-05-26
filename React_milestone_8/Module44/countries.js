const loadCoutries=()=>{
    fetch('https://restcoutries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountries(data));
}
const displayCountries=countries=>{

    
}
loadCoutries();