
console.log('SZIA')

   // no need to postman 
   fetch('http://127.0.0.1:3000/api')
   .then((res)=>res.json())
   .then((body)=>console.log(body))

   //POST


/* async function postData(url='', data={}){
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type':'application/json'},
    body: JSON.stringify(data)
  });
return response.json();
}
postData('http://127.0.0.1:3000/api/items', { items :'alma'})
then(data =>{
  console.log(data)
}) */

const data = { items: 'example' };

fetch('http://127.0.0.1:3000/api/items', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});


const postData = {
  method:'POST',
  headers:{'Content-Type':'application/json'},
  body: JSON.stringify(data)
}

fetch('http://127.0.0.1:3000/ninja', postData )
.then((res)=>{ 
  return console.log(res)})
