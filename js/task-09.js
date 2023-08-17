const SpanColor=document.querySelector(".color");
const BtnChangeColor=document.querySelector(".change-color");
const Body=document.querySelector("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


let saveColor=getRandomHexColor();
SpanColor.textContent=saveColor;
SpanColor.style.color=saveColor;

const describeBckColor=()=>{
  const randColor=getRandomHexColor();
  
  Body.style.backgroundColor=saveColor;
  SpanColor.textContent=randColor;
  SpanColor.style.color=randColor;
  
  saveColor=randColor;
  
 
}



BtnChangeColor.addEventListener("click", describeBckColor);