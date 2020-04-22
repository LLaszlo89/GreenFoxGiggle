const animals = document.querySelector("form div");

let clickedCatFacts = true;

animals.addEventListener("click", (ev) => {
  let short = ev.target.defaultValue;
  console.log(short)

  short == "dog" || short == "cat" ? document.querySelector("#sign-up").classList.remove('hidden')/* .setAttribute("class", " ")  */
  : short === "fish" && clickedCatFacts == false  ? document.querySelector("#sign-up").classList.remove('hidden') 
  : document.querySelector("#love-cat").setAttribute("class", "hidden");
  })

 /*  if (short == "dog" || short == "cat") {
    document.querySelector("#sign-up").setAttribute("class", " ");
  } */
/*   if (short === "fish" && clickedCatFacts == false) {
    document.querySelector("#sign-up").setAttribute("class", " ");
    document.querySelector("#love-cat").setAttribute("class", "hidden");

  }
 */

document.querySelector('.cat-facts').addEventListener('click',(ev)=>{

  if(ev.target.value === "yes"){
    document.querySelector("#love-cat").classList.remove('hidden') ;
    clickedCatFacts = true;

  } else{
    clickedCatFacts = false;
  }


console.log(ev.target.value)
})


buttons.addEventListener("click", (ev) => {
  alert(`Thank you, you've successfully signed up for cat facts`);
});
