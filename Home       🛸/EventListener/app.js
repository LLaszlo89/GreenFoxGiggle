/* 
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const sum = document.querySelector('#sum')

one.addEventListener('input' , show)
two.addEventListener('input' , show)

function show (){
let inputValueOne = parseFloat(one.value) || null; 
let inputValueTwo = parseFloat(two.value) || null;
sum.innerHTML = 'Your sum is : ' + (inputValueOne + inputValueTwo) 
}
 */

const puppy = document.querySelector('#puppy');
const horse = document.querySelector('#horse');
const duck = document.querySelector('#duck');

puppy.addEventListener("click" , pickLink);
horse.addEventListener("click" , pickLink);
duck.addEventListener("click" , pickLink);


function pickLink(){
  let allImg = document.querySelectorAll("img")
  allImg.forEach(e => {
    e.className = 'hide';
  });
  
 

}