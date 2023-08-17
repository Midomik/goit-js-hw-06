const inputElement = document.querySelector("#font-size-control");
const spanElement = document.querySelector("#text");

spanElement.style.fontSize = `${inputElement.value}px`;

const getSize = (event)=>{
   
   spanElement.style.fontSize =`${event.currentTarget.value}px`;
    
}


inputElement.addEventListener("input", getSize)