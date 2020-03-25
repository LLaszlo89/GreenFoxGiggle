/* let ourRequest = new XMLHttpRequest();   //channel to a server or website
ourRequest.open('GET',"https://learnwebcode.github.io/json-example/animals-1.json", true);  // go and get data from 
ourRequest.onload = function(){      // after reciving data  do this.....

  let ourData = JSON.parse(ourRequest.responseText);    // JSON filter will transform the text into js
  console.log(ourData[0])

} */

let pagcounter = 1;
let parent = document.getElementById("animal-info");
let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  let ourRequest = new XMLHttpRequest(); //channel to a server or website
  ourRequest.open(
    "GET",
    "https://learnwebcode.github.io/json-example/animals-" +
      pagcounter +
      ".json",
    true
  ); // go and get data from
  ourRequest.onload = function() {
    // after reciving data  do this.....

    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      let ourData = JSON.parse(ourRequest.responseText); // JSON filter will transform the text into js
      renderHTML(ourData);
    } else {
      console.log("There was some error in the server");
    }
  };
  ourData.onerror = function() {
    console.log("");
  };
  ourRequest.send();
  pagcounter++;
  if (pagcounter > 3) {
    btn.classList.add("hide-me");
  }
});

function renderHTML(data) {
  let htmlString = "";
  for (let i = 0; i < data.length; i++) {
    htmlString +=
      "<p>" +
      data[i].name +
      " is a: " +
      data[i].species +
      " thats likes to eat ";
    for (let ii = 0; ii < data[i].foods.likes.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].foods.likes[ii];
      } else {
        htmlString += " and " + data[i].foods.likes[ii];
      }
    }
    htmlString += " and dislike ";
    for (let ii = 0; ii < data[i].foods.dislikes.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].foods.dislikes[ii];
      } else {
        htmlString += " and " + data[i].foods.dislikes[ii];
      }
    }

    htmlString += "</p>";
  }

  parent.insertAdjacentHTML("beforeend", htmlString);
}
