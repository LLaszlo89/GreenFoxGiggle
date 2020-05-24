let m = document.getElementById('m');
let d = document.getElementById('d');
let p = document.getElementById('p');
let s = document.getElementById('s');
let log = console.log;    // shortening!!!!!! 


let highlight = (ev) =>{ // ev obj bring back info of the event target ,type ,cancelable ...
  ev.stopImmediatePropagation(); // Without this it would make all parent element gold
  let target = ev.currentTarget;
  target.className = 'gold';  // add CSS class = gold
  reset(target)
};

// ev.type good to see what key pressed ,  ev.target the tag witch pressed , e.target.firstChild ect...
// target shows the tag attached with the ev lis    where they clicked originally 
// currentTarget  is shows all element where event bubbled up
let reset = (_element) =>{
 setTimeout(()=>{ _element.className =''; }, 2000);  // remove color after 2 sec
}

d.addEventListener('click', (ev) =>{
  ev.stopImmediatePropagation();    // STOP s the bubbling from this point up
  log('Hi im a DIV');
});

[m,d,p,s].forEach((element)=>{  // add event Listener too all element at one time
  element.addEventListener('click', highlight );
});

