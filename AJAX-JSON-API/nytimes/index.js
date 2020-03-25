let key = "toweed1IzDkqRKyxrk2eD6DbrfpcikAP";

document.addEventListener("DOMContentLoaded", () => {
  const xhr = new XMLHttpRequest(),
    method = "GET",
    url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Apollo11&moonlanding&api-key=${key}`;

  xhr.open(method, url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      var status = xhr.status;
      if (status === 0 || (status >= 200 && status < 400)) {
        let allData = JSON.parse(xhr.responseText);

        for (const i of allData.response.docs) {
          let cont = document.querySelector(".apollo");
          let newH = document.createElement("h3");
          let newP = document.createElement("p");
          let publ = document.createElement("p");
          let link = document.createElement("a");
          link.setAttribute("href", i.web_url);
          link.setAttribute("target", "_blank");
          console.log(i.web_url);

          cont.appendChild(newH).innerText = i.headline.main;
          cont.appendChild(newP).innerText = i.snippet;
          cont.appendChild(link).innerText = "More informaion 'Click Here'";
          cont.appendChild(publ).innerText = i.pub_date;
        }
      } else {
        console.log(xhr.response);
      }
    }
  };
  xhr.send();
});
