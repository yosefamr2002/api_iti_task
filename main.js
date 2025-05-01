var all= document.getElementById("all");
var Movies=document.getElementById("Movies");
var People= document.getElementById("People");
var Tv = document.getElementById("Tv");
var dash = document.querySelector(".dash")


//---------------------------------------

all.addEventListener("click",function(){
    getapi("all")
}
)

Movies.addEventListener("click",function(){
    getapi("movie")
}
)
People.addEventListener("click",function(){
    getapi("person")
}
)
Tv.addEventListener("click",function(){
    getapi("tv")
}
)


function getapi(id){
    
    var myReq = new XMLHttpRequest();
    myReq.open("GET", `https://api.themoviedb.org/3/trending/${id}/day?language=en-US`);
    myReq.setRequestHeader("Authorization",'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGQxMGQyYjhmNTJiYzBhNTMyMGQ1YzlkODhiZDFmZiIsIm5iZiI6MTU5Mjc1NTkwMS44MjgsInN1YiI6IjVlZWY4NmJkZWQyYWMyMDAzNTlkNGM4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NT77KLEZLjsgTMnyjJQBWADPa_t_7ydLLbvEABTxbwM');
  
  myReq.send();
  
  myReq.addEventListener("readystatechange", function () {
      if (myReq.readyState == 4) {
      let data = JSON.parse(myReq.responseText);
      console.log(data);
      
      var cartona = ``;
for (let i=0 ; i<data.results.length;i++){
        cartona+=`
  <div class="card">
    <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path ||data.results[i].profile_path}" alt="">
    <h2>${data.results[i].name||data.results[i].title}</h2>
    <p>${data.results[i].overview||data.results[i].original_name}</p>
  </div>`
      }
      dash.innerHTML=cartona;
      }
    }
  );
    
}




/////////////////////////////////////////////////





  
/////////////////////////////////////

