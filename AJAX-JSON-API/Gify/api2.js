let myAPIkey = "g5FZrbC8BGEccP3S45mqcrd5v0D9DHie";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnSearch").addEventListener("click", ev => {
    ev.preventDefault();
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${myAPIkey}&limit=16&q=`;
    let str = document.getElementById("search").value.trim();
    url = url.concat(str);

    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let allData = JSON.parse(this.response);

        for (const gif of allData.data) {
          let container = document.querySelector(".out");
          let newImg = document.createElement("img");
          newImg.src = gif.images.original.url;
          newImg.addEventListener("click", () => {
            newImg.className = ".big";
          });
          container.appendChild(newImg).classList.add("img");
        }
      }
    };
    request.open("GET", url, true);
    request.send();
  });
});
