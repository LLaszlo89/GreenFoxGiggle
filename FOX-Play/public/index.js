const audio =document.querySelector("audio")
const innerSkillBar =document.querySelector(".inner-bar")
const playPause_btn =document.querySelector("#play-pause")
const btns = document.querySelector(".buttons")
const mssg = document.querySelector(".mssg")
const currentTime =document.querySelector(".remaining")
const totalTime =document.querySelector(".total")
const volumeMute = document.querySelector(".fa-volume-mute")

const URL = "http://127.0.0.1:3000/playlists/";
const URL2 = "http://127.0.0.1:3000/playlist-tracks/";

  window.onload =()=>{
loadAll();}   

console.dir(audio) //!!!!!

// add EL to fetch all songs like the ALL song tag
const logo = document.querySelector('.logo').onclick =()=>{
fetch(URL2 +"1")
.then(res=>res.json())
.then(data => console.log(data))
}

const art = document.querySelector('.art')


// have a default picture or if availabale an album pic
const current = document.querySelector('.current') 
// read from file teh artist and the title

const plus = document.querySelector('.fa-plus') 
// add the current song to one of the paylist
const star = document.querySelector('.fa-star') 
// add current song to the favorite folder



const playlistPlus = document.querySelector('.playlistPlus');
playlistPlus.onclick=()=>{
 let value = prompt("Please enter the name of the new playlist:");
 let body= {title: value};
 fetch( URL , {
   method:"POST",
   headers:{"Content-Type":"application/json"},
   body: JSON.stringify(body)
 })
 .then(res=>res.json())
 .then((data)=>{
let li = document.createElement('li')
li.innerHTML = body.title  
li.className ="removable"

playlistUl.appendChild(li)
console.log(data)
})
} 


const playlistUl = document.querySelector('.playlist ul') 
playlistUl.addEventListener("click",(ev)=>{

  if(ev.target.className = "removable"){
  let idToFetchFromDB = ev.target.dataset.songs;
  fetch(URL2 + idToFetchFromDB)
  .then(res=>res.json()
  .then(data => console.log(data)))

} else if(ev.target.className = "required") {
    if(ev.target.textContent=== "All tracks"){
      fetch(URL2 + "1")
      .then(res=>res.json()
      .then(data => console.log(data)))
    }else{
      fetch(URL2 + "2")
      .then(res=>res.json()
      .then(data => console.log(data)))
    }
}else{
  let idToRemoveFromDB = ev.target.dataset.id;
  let toDelete = ev.target.parentElement;

  playlistUl.removeChild(toDelete)

 fetch(URL+idToRemoveFromDB ,{ method:"DELETE"})
.then(res=>res.json())
.then(data=>console.log(data))  

}  

}
) 



const loadAll=()=>{
  fetch(URL)
  .then(res => res.json())
  .then((data)=>{ 
    data.forEach(element => {
      let id= element.id;
      let li = document.createElement('li');    
      if(element.system ===0 ){ 
        li.className ="removable" 
        li.setAttribute("data-songs",id)
        li.innerHTML=element.title + `<i data-id="${element.id}" class="far fa-trash-alt trash"></i>`;
      }else{ 
        li.className ="required";
        li.innerHTML=element.title;
      }

      playlistUl.appendChild(li)
    });
  })
}



const track = document.querySelector('.track') 
//all track need to be pushd here.  have an id name and length

// Keyboard shortcuts
 document.onkeypress = function(evt) {
  evt = evt || window.event;
  const charCode = evt.keyCode || evt.which;
// if string needed
  const charStr = String.fromCharCode(charCode);

  if(charCode === 32){
    togglePlayPause()
  } else if(charCode === 100){
// play the next track 
  }else if( charCode === 112){

    //play the previous track  
  } else if(charCode === 27){
// mute the volume 
    return
  }
};
volumeMute.onclick=()=>{
  toggleMuteUnmute()
}

/* toggleMuteUnmute=()=>{
 if( volumeMute.className==="fa-volume-mute" ){
   audio.volume=0
   volumeMute.className="fa-volume-off"
 }else{
  volumeMute.className="fa-volume-mute" 
  audio.volume=0.5
 }

} */

togglePlayPause =()=>{
if(audio.paused){
  playPause_btn.className ="pause"
  audio.play()
} else{
  playPause_btn.className="play"
  audio.pause()
}
} 
playPause_btn.addEventListener("click", ()=>{
  togglePlayPause()
})
audio.addEventListener("timeupdate" , ()=>{
const line = audio.currentTime / audio.duration;
innerSkillBar.style.width = line * 100 +'%';

const min = ~~((audio.duration % 3600) / 60);
const sec = audio.duration % 60;
const curMin = ~~((audio.currentTime % 3600) / 60);
const curSec = audio.currentTime % 60;

totalTime.innerHTML = `<p>${min}:${sec.toFixed(0)}</p>`;
currentTime.innerHTML = `<p>${curMin}:${curSec.toFixed(0)}</p>`;

if(audio.ended){
  playPause_btn.className ="play"
}
})


btns.addEventListener("click", (ev)=>{
  ev.preventDefault()
  if(ev.target.className==="fas fa-backward"){
    audio.paused();
   audio.src=
   audio.load();
   audio.play(); 
  }
})

audio.addEventListener("ended",()=>{
  audio.paused();
  audio.src=
  audio.load();
  audio.play(); 
})




//    Volume 
const volume =document.querySelector("#volume")
volume.addEventListener('input', function () {
  audio.volume = volume.value / 10;
}, false);