
window.onload=()=>{
  firstStep()
}


firstStep =()=>{
  fetch("http://127.0.0.1:3000/api/items")
  .then(res=> res.json())
  .then((data)=>{
    data.forEach(e => {
      let toLi = document.createElement("li");
     toLi.innerHTML= `${e.title} (highest bid: ${e.highestBid}, ${e.highestBidderName}) ` 
       document.querySelector('ul').appendChild(toLi);

       let op = document.createElement("option");
        op.innerHTML =`${e.title}`;
       op.setAttribute("value",`${e.id}`) 
       document.querySelector("select").appendChild(op)
    })
    })
  .catch(err => console.log(err))
}


const form = document.querySelector("#allInputs").addEventListener('submit',(e)=>{
  e.preventDefault();
  
  let item = document.querySelector("#staff").value
  let name = document.querySelector("#name").value
  let bid = document.querySelector("#bid").value
  let sendTo = { highestBidderName: name, highestBid: bid}

  console.log(sendTo)
  fetch(`/api/items/${item}/bids`,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(sendTo)
  })
  .then(res=>res.json())
  .then((data)=>{
    document.querySelector("h3").innerHTML= data.message;
    console.log(data)})
  .catch(err => console.log(err))
})