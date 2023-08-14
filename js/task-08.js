const t8Form=document.querySelector(".login-form");



const getProcessingForm = (event) =>{
    event.preventDefault();

   const { elements:{email, password} } = event.currentTarget;
   const formInfo={};

   if (email.value==="" || password.value==="") {
    return alert("Please, fill in all fields!!!");
   }
   else{
   formInfo[email.name]=email.value;
   formInfo[password.name]=password.value;
   
}

console.log(formInfo);
t8Form.reset();
}
t8Form.addEventListener("submit", getProcessingForm);
