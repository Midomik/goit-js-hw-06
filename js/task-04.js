let counterValue = document.querySelector("#value");
const BtnPlus = document.querySelector('button[data-action="increment"]');
const BtnMinus= document.querySelector('button[data-action="decrement"]');
Number(counterValue.textContent); 

let counter = Number(counterValue.textContent); 

const funcPlus = () => {
    counter+=1;
    counterValue.textContent=counter;
}

const funcMinus = () => {
    counter-=1;
    counterValue.textContent=counter;
}


BtnPlus.addEventListener("click", funcPlus);
BtnMinus.addEventListener("click", funcMinus);



