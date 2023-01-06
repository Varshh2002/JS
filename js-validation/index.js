const form=document.getElementById("form");
const email=document.getElementById("email");
const password=document.getElementById("password");
const confirmPassword=document.getElementById("confirmpassword");
const firstname=document.getElementById("firstname");
const lastname=document.getElementById("lastname");


form.addEventListener('submit',e=>{
    e.preventDefault();
    validateInputs();
})

const isValidEmail =email=>{
    const re=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
 }

 const setError=(element,message)=>{
    const inputControl=element.parentElement;
    const error=inputControl.querySelector('.error');

    error.innerText=message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
 }

 const setSuccess=element=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');

    errorDisplay.innerText='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}


const validateInputs=()=>{
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const password2Value=confirmPassword.value.trim();
    const firstnameValue=firstname.value.trim();
    const lastnameValue=lastname.value.trim();
  
    if(emailValue===''){
        setError(email,'Password is required');
    }
    else if(!isValidEmail(emailValue)){
        setError(email,'Provide a valid Email Address');
    }
    else{
        setSuccess(email);
    }


    if(passwordValue===''){
        setError(password,'password is required');
     }
     else if(passwordValue.length<8){
        setError(password,'password must be atleast 8 character');
     }
     else{
        setSuccess(password);
     }

     
     
     if(password2Value==''){
        setError(confirmPassword,'Please confirm your password');
     }
     else if(passwordValue!==password2Value){
        setError(confirmPassword,'passwords dont match');
     }
     else{
        setSuccess(confirmPassword);
    
     }


     if(firstnameValue==''){
        setError(firstname,'FirstName is required');
     }
     else{
        setSuccess(firstname);
     }


     if(lastnameValue==''){
        setError(lastname,'LastName is required');
    }
     else{
       setSuccess(lastname);
     }

     
     
    var check=document.getElementById("checkbox1");
    var error=document.getElementById("alert");
    if(check.checked==false){
        
        error.textContent='please accept the terms and conditions';
    }
    
    if(check.checked==true){
        error.textContent='';
    }
    




}