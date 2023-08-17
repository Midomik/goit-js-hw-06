const Input=document.querySelector("#name-input");
const Output=document.querySelector("#name-output");

Input.addEventListener("input", (event) => {
if (event.currentTarget.value.trim()===""){
Output.textContent = "Anonymous"
}
else{
    Output.textContent =event.currentTarget.value.trim()
}
});
