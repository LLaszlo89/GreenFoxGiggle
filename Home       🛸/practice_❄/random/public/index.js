window.onload=()=>{
  onLoad();
}

let names = document.querySelector("#names");

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  let toSend = names.value.match(/[^\r\n]+/g); 
  console.log(toSend)

  fetch("http://127.0.0.1:3000/api/add", {
    method:"POST",
    headers:{"Content-type":"application/json"},
    body:JSON.stringify(toSend)
  })
  .then(res=>res.json())
  .then(data => console.log(data))
  .catch((err)=> console.log(err))

})

const onLoad =()=>{

  fetch("http://127.0.0.1:3000/api/list")
  .then(res=>res.json())
  .then((data)=>{
    data.users.forEach(e => {
      let li = document.createElement("li");
      li.innerHTML = e.name
      document.querySelector("ul").appendChild(li)  
    });
  })
  .catch((err)=> console.log(err));
}


function chunkArray(myArray, chunk_size){
  var results = [];
  while (myArray.length) {
      results.push(myArray.splice(0, chunk_size));
  }
  return results;
}



randomForm.addEventListener("submit",(ev)=>{
ev.preventDefault();
let num = document.querySelector("#r_g").value;

fetch(`http://127.0.0.1:3000/api/group?count=${num}`)
.then(res=>res.json())
.then((data)=>{
  let o = data.groups;
  var result = chunkArray(o, num); 

result.forEach(e => {
  let t = 0;
  e.forEach(i => {
    t++; 
    console.log("groop number:" + t +""+ i.name)

  });
});
})
})