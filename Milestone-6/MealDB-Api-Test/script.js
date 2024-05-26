const searchFood=()=>{
    const searchFeild=document.getElementById('search-field');
    const searchText=searchFeild.value;
    console.log(searchText);
    searchFeild.value='';
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{displayData(data.meals)});

}

const displayData=data=>{
    const searchResult=document.getElementById('searchResult');

    for(const meal of data){
        const p=meal.strInstructions;
        const newP=p.slice(0,100);
        const div=document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`<div class="card">

        <img src="${meal.strMealThumb}"  onclick="showInfo(${meal.idMeal})" class="img-thumbnail" alt="...">
        <div class="card-body">
          <h5 class="card-title text-center">${meal.strMeal}</h5>
          <p class="card-text">${newP}.</p>
        </div>
      </div>`;
    searchResult.appendChild(div);  
    console.log(meal);
    }
      
}
const showInfo=(data)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>console.log(data.meals))
}
