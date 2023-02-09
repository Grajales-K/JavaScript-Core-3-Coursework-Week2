/*
Use fetch to load a greeting from the API and display it 
in the HTML element with the id "greeting-text".

API: https://codeyourfuture.herokuapp.com/api/greetings
Response: A greeting in a random language

To learn more about fetch, refer to the doc:
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


================
Expected result   
"https://holy-snow-6805.fly.dev/api/greetings"
================
.
Open index.html in your browser. Every time you refresh the page,
a different greeting should be displayed in the box.
*/

fetch("https://holy-snow-6805.fly.dev/api/greetings")
  .then(function (response) {
    return response.json();
  })
  .then(function (sayHello) {
    let resultOfFetch = document.getElementById("greeting-text");
    resultOfFetch.innerText = `language: ${sayHello.language} \n Greetings: ${sayHello.hello}`;
  });

/*
//".then()" is doing working similar like "await"
//json will translate the information,
//  and return in a lengauage that we can read*/
