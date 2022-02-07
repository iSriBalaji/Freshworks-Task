const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';
baseURL = 'https://restcountries.eu/rest/v2/name/';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/name/india?fullText=true', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(name => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = name.title;

      const p = document.createElement('p');
      const ff1 = document.createElement('img');
      ff1.src=name.flag;
            ff1.width="200";
      ff1.height="200";
     // name.capital = name.capital;
      p.textContent = `${name.capital}`;

      container.appendChild(card);
      card.appendChild(ff1);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    console.log(request.status);
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();