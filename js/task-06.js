const t6Input = document.querySelector("#validation-input");

t6Input.addEventListener("blur", (event)=>{

if (event.currentTarget.value.length >= t6Input.dataset.length) {
    t6Input.classList.add("valid")
    t6Input.classList.remove("invalid")
}
else{
    t6Input.classList.add("invalid")   
    t6Input.classList.remove("valid")
}
//event.currentTarget.value.length
})