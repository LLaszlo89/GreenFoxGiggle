document.addEventListener("DOMContentLoaded", () => {
  let url = 'https://swapi.co/api/people/?format=json';
  let method = "GET"

  document.getElementById("btn").addEventListener("click", ev => {
    ev.preventDefault();
    let search = document.getElementById('search').value.trim();

    let xml = new XMLHttpRequest();
    xml.onreadystatechange  = function() {
      if (this.readyState == 4 && this.status == 200) {
        let allData = JSON.parse(this.response);

        //console.log(search)

        for (const i of allData.results) {
          
            //console.log(i.name)
          
          if(i.name == search ){
            console.log("There is a match: " + i.name)
            let container = document.querySelector('.container');
            let nemLi = document.createElement('li')
            nemLi.innerHTML = i.name;
             nemLi.addEventListener("click", ()=>{
              allInfo()
            }) 
           container.appendChild(nemLi)

          } else{
            console.log("No match so far")

          } 
        }

        function allInfo(){
          let resultcontanier = document.querySelector('.resultOfMatch');
          let nemLi2 = document.createElement('li');

          let xml = new XMLHttpRequest();
          xml.onreadystatechange  = function() {
            if (this.readyState == 4 && this.status == 200) {
              let allData = JSON.parse(this.response);
              console.log(allData)
             /*  for (const i of allData) {
                console.log(i)
                
              } */
              nemLi2.innerText = 
              

            }




        
        }
      }}

    xml.open(method, url, true);
    xml.send();



  });
});
