//initialize array and a variable
let addValue = JSON.parse(localStorage.getItem('key')) || [];

let final ="";

//created a funtion that takes input from text field from user
function saving(){
   const Input = document.getElementById("field");
   addValue.push(Input.value);

//pushing data to local storage   
   localStorage.setItem('key', JSON.stringify(addValue));

//empties text field   
   Input.value ="";

//made final variable empty so it does not repeats previus values

   final ="";

//made a loop so that list get update

for (i=0; i<addValue.length;i++)
{
   final += `<li> ${addValue[i]} </li>`;
   
   document.getElementById("data").innerHTML = final;
}

//stops page from reload
event.preventDefault();
}