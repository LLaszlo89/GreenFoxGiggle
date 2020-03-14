
let current = 0;

let pictures = ["./assets/pic_1.jpg","./assets/pic_2.jpg","./assets/pic_3.jpg","./assets/pic_4.jpg","./assets/pic_5.jpg","./assets/pic_6.jpg",]

let texts =['Pantheon','Colosseo','Ponte Sant Angelo','Villa Borghese','Vatican City','Fontana di Trevi'];

let rightButton = document.getElementsByClassName('right');
let lestButton = document.getElementsByClassName('left');
let mainPicture = document.getElementById('main');


 let buttonsFunctionsRight = () =>{
   if (current == pictures.length-1 ){
     current = 0
   } else{
     current ++;
  }
 mainPicture.setAttribute('src', pictures[current] )
}

 let buttonsFunctionsLeft = () =>{
  if (current == 0 ){
    current = pictures.length-1
  } else{
    current --;
   }
  mainPicture.setAttribute('src', pictures[current] )
}
/* ------------ */


let thumbnails = document.getElementById('thumbnails');

pictures.forEach(element => {
  let newPic = document.createElement('img');
  newPic.setAttribute('src',element)
  thumbnails.appendChild(newPic)
  newPic.onclick = ()=>{
    mainPicture.setAttribute('src',element)
  }
  
});

