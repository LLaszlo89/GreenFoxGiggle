'use strict'

/* setTimeout(()=>{alert('apple')} , 3000); */
 
// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds


let fruits =['apple','pear','melon','grapes'];
let whenToShow = [0,1000,3000,5000]

for (let i = 0; i < fruits.length; i++) {
  multiopleTimeout(fruits[i], whenToShow[i])
  
}

function multiopleTimeout (fruit, time){
 setTimeout(()=>{console.log(fruit)},time)



}