window.onload = () => {  
  fetch("http://localhost:3500/posts")
    .then((posts) => posts.json())
    .then((data) => {
      let toPost = "";
      data.forEach((post) => {
        const template = `<li data-id=${post.id}><a href="${post.url}" target="_blank">${post.title}</a><br>
        <span class="edit">Edit</span><span class="remove">Remove</span></li>`;
        toPost = toPost + template;
        document.querySelector("#container ul").innerHTML = toPost; 
      });
    });
};

const container = document.querySelector('#container')
.addEventListener('click', (ev)=>{
 
  let url = "http://127.0.0.1:3500/posts/" + ev.path[1].attributes[0].value;
  let method ={ method:"DELETE"}
     if(ev.target.className == "edit"){
    document.location.href = "post.html";
  }else if(ev.target.className === "remove"){
    fetch(url, method)
    .then(res=> res.json())
    .then(msg=> console.log(msg))
  }  
  return

});

