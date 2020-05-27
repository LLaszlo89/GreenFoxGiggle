let mssg = document.querySelector("h2");
let URL = "/api/links/"

const btn = document.querySelector("#btn").addEventListener('click', (e)=>{
e.preventDefault();

const uRl = document.querySelector("#url");
const aliAs = document.querySelector("#alias");

  let toSend = {
  url: uRl.value,
  alias: aliAs.value};
  
  fetch("http://127.0.0.1:3000/api/links",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(toSend)})
  .then(resp=> resp.json())
  .then((data)=>{ 
    mssg.innerHTML= `Your URL is aliased to ${toSend.alias} and your secret code is ${data.secret}`
    console.log(data.secret)})

    uRl.value ="";
    aliAs.value="";

})

