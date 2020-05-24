
const form = document.querySelector('#form').addEventListener('submit', checkUrl );

function checkUrl(event){
  event.preventDefault();

 let inpUrl = document.querySelector('#url').value;
 let inpAlias = document.querySelector('#alias').value;

/* console.log(inpUrl)
console.log(inpAlias) */

 const url = '/api/links';
 const method = {
   method:"POST",
   header:{"Content-Type":"application/json"},
   body: JSON.stringify({
     url: inpUrl,
     alias: inpAlias
   })
 };

 fetch(url , method)
.then(res => res.json())
.then((data)=>{
  console.log("Success:", data)
})
.catch((err)=>{
  console.log('Error:', err)
});
};