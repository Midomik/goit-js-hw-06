const t7Input=document.querySelector("#font-size-control");
const t7SpanAbra=document.querySelector("#text");

t7SpanAbra.style.fontSize=`${t7Input.value}px`;

t7Input.addEventListener("input", (event)=>{
   
   t7SpanAbra.style.fontSize=`${event.currentTarget.value}px`;
    
})