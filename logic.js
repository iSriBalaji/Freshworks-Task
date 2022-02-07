const app = document.getElementById('root');
var baseURL = 'https://restcountries.eu/rest/v2/name/';
var finalURl='?fullText=true';
const container = document.createElement('div');
container.setAttribute('class', 'container');
const card = document.createElement('div');
card.setAttribute('class', 'card');
container.appendChild(card);
var name="";
var coun_json;
app.appendChild(container);
//getCountry
var cnt=0;
function getCountry(){ name=document.getElementById('searchTxt').value;
if(cnt>0){
	//console.log(document.getElementsByClassName("card").id);
	

container.removeAttribute(card);
//container.removeChild(card[1]);
//const card = document.createElement('div');
//card.setAttribute('class', 'card');
//container.appendChild(card);
}
callAPI(name, (d) => {
coun_json=d;
const h1 = document.createElement('h1');
const ff1 = document.createElement('img');
debugger;

ff1.src=d[0].flag;
h1.innerText=name.toUpperCase();
ff1.width="200";
ff1.height="200";
card.appendChild(ff1);
card.appendChild(h1);cnt=cnt+1;
});}

//delete previous value

//API Function
function callAPI(fresh, c){
fetch(baseURL+fresh+finalURl)
  .then(function(response) {
  		return response.json();
    
  }) .then(function(myJson) {
    c(myJson, null)
  });

}
card.addEventListener("click", function(){window.location.href = "details.html"});