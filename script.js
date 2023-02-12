const input = document.getElementById("input");
const btn = document.getElementById('btn');
const body =document.body;

btn.addEventListener("click",getmovie)
function getmovie(){
    fetch("https://www.omdbapi.com/?i=tt3896198&apikey=b5e039d7").then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data)
    
    const div = document.createElement('div');
    body.appendChild(div);
    const img = document.createElement('img');
   img.setAttribute('src',"https://img.omdbapi.com/?i=tt3896198&apikey=b5e039d7");
   div.appendChild(img)
    const h3= document.createElement('h3');
    h3.innerText =`Movie Title: ${data.Title}`;
    div.appendChild(h3);
    const yearofrelease =document.createElement('p');
    yearofrelease.innerText=`Year of Release:${data.Year}`;
    div.appendChild(yearofrelease);
    const IMDBrating =document.createElement('p');
    IMDBrating.innerText=`IMDB Rating: ${data.imdbRating}`;
    div.appendChild(IMDBrating);
    const castandcrew =document.createElement('p');
    castandcrew.innerText=`Cast & Crew: ${data.Actors}`
    div.appendChild(castandcrew)
})
}