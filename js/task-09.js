const t9SpanColor=document.querySelector(".color");
const t9BtnChangeColor=document.querySelector(".change-color");
const t9Body=document.querySelector("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const describeBckColor=()=>{
  t9Body.style.backgroundColor=getRandomHexColor();
  t9SpanColor.textContent=getRandomHexColor();
}


t9BtnChangeColor.addEventListener("click", describeBckColor);