let key = 'g5FZrbC8BGEccP3S45mqcrd5v0D9DHie'

document.addEventListener('DOMContentLoaded', ()=>{
  
  let url = `https://api.giphy.com/v1/stickers/search?api_key=${key}&limit=1&q=`
  let input = document.getElementById("search").value.trim();
  console.log(input)
  
  url = url.concat(input)
  console.log(url)
  
  document.querySelector('#btnSearch').addEventListener("click", ev =>{
    ev.preventDefault();



fetch(url)
.then(response => response.json())
.then(content => { 
  console.log(content.data)})

.catch(err => {console.log(err)})
})











})