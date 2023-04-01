//initialize array and a variable
let addValue = JSON.parse(localStorage.getItem('key')) || [];
let final ="";

//created a funtion that takes input from text field from user
function saving(){
   const Input = document.getElementById("field");
   const valuePush =Input.value

 //if there is any vlaue only when array will be updated  
   if(valuePush){
   addValue.push(valuePush);
   }

//pushing data to local storage   
   localStorage.setItem('key', JSON.stringify(addValue));

//empties text field   
   Input.value ="";

//made final variable empty so it does not repeats previus values
   final ="";

//function to print list
print();

//stops page from reload
event.preventDefault();
}




//clear list
function clr()
{
   addValue = []
   localStorage.clear();
   document.getElementById("data").innerHTML = ""  
}

//print button and list in Todo list
function print() {
   for (i=0; i<addValue.length;i++)
   {
      final += `<div class="horizon"><li class="ele"> ${addValue[i]} </li> <button class="dltBTn" id="delBtn${i}" onclick="addValue.splice(${i},1); saving(); lastCheck();" > Done </button><br> </div> `;
      document.getElementById("data").innerHTML = final;
   }  
}

//last one itself nahi ht raha tha to clr kraya
function lastCheck() {

   if(addValue.length === 0)
   {
      clr();
   }
}
