const url="https://gist.githubusercontent.com/evanc/17f1ade674aa0d8066e0a33be923fe17/raw/b3b6cd9c96e5ca59bf7610c4c17da420bcaea0ae/movies.json";
var textRatingMovies=[];

function getAjaxData(movieUrl){
    return new Promise(function(resolve,reject){
       var req=new XMLHttpRequest();
        req.open('GET',url);
        req.onload= function(){
            if (this.status === 200)
                {
                    resolve(JSON.parse(req.responseText));
                   
                }
            else{
                reject(Error(req.responseText));
            }
            
        }
        req.onerror=function(){
            reject(Error("Network Error"))
        }
       
        req.send();
    });
}
function showOnUl(Movies){
   let myUl=document.querySelector("#myUl");
    for (val of Movies){
        let myLi=document.createElement("li");
        myLi.innerHTML=val.name;
        myUl.appendChild(myLi); 
}

function getMovies(movieList){
   textRatingMovies=movieList.map(setRatingText);
    showOnUl(textRatingMovies);
//    let myUl=document.querySelector("#myUl");
//    for (val of textRatingMovies){
//        let myLi=document.createElement("li");
//        myLi.innerHTML=val.name;
//        myUl.appendChild(myLi);}
    
    console.log(textRatingMovies);

}


function setRatingText(movie){
    if(movie.rating >=8.5)movie.ratingText="Excellent";
    else if(movie.rating >=8 && movie.rating <=8.5)movie.ratingText="Very good";
    else movie.ratingText="good";
    return movie;
}



getAjaxData(url).then(getMovies,logout);
function logout(x){
    console.log(x);
}

function hideList(){
   let myDiv=document.querySelector("myDiv");
   let myUl=document.getElementById("myUl");
    while(myUl.firstChild){myUl.removeChild(myUl.firstChild);}
}

function searchMovie(){
   let titleOfMovie= document.querySelector("searchInput").value.toString();
    
    let filteredMovies=textRatingMovies.filter(isInArray(movie,titleOfMovie));
    showOnUl(filteredMovies);
//    this function show the array in html file on an ul
    
}

function isInArray(movie, title){
 
    return (movie.name.search(title) === -1 );
}

