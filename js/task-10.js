// const t10InputNumbers=document.querySelector("input");
// const t10BtnCreate=document.querySelector("button[data-create]");
// const t10BtnDestroy=document.querySelector("button[data-destroy]");
// const t10PlaceBoxes=document.querySelector("#boxes");
// const t20Controls=document.querySelector("#controls");
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// let amount=t10InputNumbers.value;

// function createBoxes(amount){
//   let box="";
//   let width=20;
//   let heigth=20;
//   t20Controls.style.paddingBottom="20px";

//   for (let i=0; i<=t10InputNumbers.value-1; i++){
//     width+=10;
//     heigth+=10;
//     box=`<div style="background-color:${getRandomHexColor()}; width:${width}px; height:${heigth}px; margin-bottom:15px;"></div>`;
//     t10PlaceBoxes.insertAdjacentHTML("beforeend",box)
//   }


//   console.log(t10InputNumbers.value)
// }

// function destroyBoxes(){
//   t10PlaceBoxes.innerHTML="";
// }


// t10BtnCreate.addEventListener("click",createBoxes);
// t10BtnDestroy.addEventListener("click",destroyBoxes);