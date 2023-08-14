let counterValue = document.querySelector("#value");
const t4BtnPlus = document.querySelector('button[data-action="increment"]');
const t4BtnMinus= document.querySelector('button[data-action="decrement"]');
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


t4BtnPlus.addEventListener("click", funcPlus);
t4BtnMinus.addEventListener("click", funcMinus);



