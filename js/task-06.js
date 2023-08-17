const Input = document.querySelector("#validation-input");

Input.addEventListener("blur", (event)=>{

if (event.currentTarget.value.trim().length === Number(Input.dataset.length)) {
    Input.classList.add("valid")
    Input.classList.remove("invalid")
}
else{
    Input.classList.add("invalid")   
    Input.classList.remove("valid")
}
//event.currentTarget.value.length
})