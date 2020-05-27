window.onload=()=>{
  load()
}

let url = "http://127.0.0.1:3000/warehouse"


let type = document.querySelector("#type");
let size = document.querySelector("#size");
let quantity = document.querySelector("#quantity");
let table = document.querySelector("table");

console.log(table)

all.addEventListener('submit', (e)=>{
  e.preventDefault();
 let data ={ item_name: type.value.replace(/\s/g, ''), size: size.value, quantity:quantity.value }

 fetch(`/price-check/?item=${data.item_name}&size=${data.size}&quantity=${data.quantity}`)
.then(res=>res.json())
.then((data)=>{
  console.log(data)
  mssg.innerHTML = data.total_price ? "Total to pay: "+data.total_price : data.result;
})


})

function load(){
  fetch("http://127.0.0.1:3000/warehouse")
  .then(res=>res.json())
  .then((data)=> {
    data.cloths.forEach((e) => {

      let tr = document.createElement("tr");
      tr.innerHTML =`<td>${e.item_name}</td>
      <td>${e.manufacturer}</td>
      <td>${e.category}</td>
      <td>${e.size}</td>
      <td>${e.unit_price}</td>`;

      let op = document.createElement("option")
      op.innerHTML = `${e.item_name}`
      
     table.appendChild(tr)
     type.appendChild(op)

    })
  });
}