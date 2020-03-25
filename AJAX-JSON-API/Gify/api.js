let myAPIkey = "g5FZrbC8BGEccP3S45mqcrd5v0D9DHie";

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("btnSearch").addEventListener("click", ev => {
    ev.preventDefault(); //This will stop the page to relod! OTherway we loose the content

    let url = `https://api.giphy.com/v1/gifs/search?api_key=${myAPIkey}&limit=6&q=`;
    let str = document.getElementById("search").value.trim(); // this will greb the input from the form and cuts off any space around it
    url = url.concat(str); // Here we put it to the end of the url

    fetch(url, { header: { "Content-Type": "application/json" } }) //its comes back with a JSON file
      .then(response => response.json()) // we make a JavaScript OBJ     Whern handeld here than it gives it to the next line
      .then(content => {
        // we get back    a  data property,   a pagination property,  and a meta  property

        console.log("Meta", content.meta);
        console.log(content.data);

        for (const i of content.data) {
          console.log(i.images.original.url);
          console.log(i.url);

          let fig = document.createElement("figure");
          let img = document.createElement("img");
          let fc = document.createElement("figcaption");

          img.src = i.images.original.url;
          img.alt = i.title;
          fc.textContent = i.title;

          fig.appendChild(img);
          fig.appendChild(fc);

          let out = document.querySelector(".out");
          out.insertAdjacentElement("afterbegin", fig); //This is like append ch  but puts the new element on the top!!
          document.querySelector("#search").value = ""; //this will clear the form after search
        }
      })
      .catch(err => {
        console.log(err);
      });
  });
});
