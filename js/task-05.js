const t5Input=document.querySelector("#name-input");
const t5Output=document.querySelector("#name-output");

t5Input.addEventListener("input", (event) => {
if (event.currentTarget.value===""){
t5Output.textContent = "Anonymous"
}
else{
    t5Output.textContent =event.currentTarget.value
}
});
