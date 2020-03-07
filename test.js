let king = document.getElementById("b325");
console.log(king);

/* 2. store 'The Businessman' and 'The Lamplighter'
in the 'businessLamp' variable.
console.log each of them. */
let businessLamp = document.getElementsByClassName("big");
console.log(businessLamp);
console.log(businessLamp[0]);
console.log(businessLamp[1]);
console.log(businessLamp[0].textContent);
console.log(businessLamp[1].textContent);

/* 3. store 'The King' and 'The Conceited Man'
in the 'conceitedKing' variable.
alert them one by one. */
let conceitedKing = document.getElementsByClassName("container")[0].getElementsByTagName("div");
alert(conceitedKing[0].innerHTML);
alert(conceitedKing[1].innerHTML);

/* 4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
in the 'noBusiness' variable.
console.log each of them. */
let noBusiness = document.getElementsByTagName("div");
console.log(noBusiness[0]);
console.log(noBusiness[1]);
console.log(noBusiness[2]);