const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const confirmPassword=document.getElementById('password2');
let res=0;

form.addEventListener('submit',e=>{
    e.preventDefault();
    validateInputs();
});

const setSuccess=element=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');

    errorDisplay.innerText='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const setError=(element,message)=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');

    errorDisplay.innerText=message;
    inputControl.classList.remove('success');
    inputControl.classList.add('error');
}

 
const isValidEmail =email=>{
    const re=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
 }
  
 function successMessage(){
    var error=document.getElementById("success-msg");
    error.textContent='Successfully registered';
    error.style.color='green';
    error.style.padding='10px';
    error.style.alignContent='centre';
 }
  
 
 
const validateInputs=()=>{
    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const password2Value=confirmPassword.value.trim();

    if(usernameValue===''){
    setError(username,'Username is required');
       
    }
     else{
       //setSuccess(username);
       setSuccess(username);
       res++;
     }



     if(emailValue===''){
        setError(email,"email is required");
     }
     else if(!isValidEmail(emailValue)){
        setError(email,'Provide a valid email address');
     }
     else{
        setSuccess(email);
        res++;
     }
     

     if(passwordValue===''){
        setError(password,'password is required');
     }
     else if(passwordValue.length<8){
        setError(password,'password must be atleast 8 character');
     }
     else{
        setSuccess(password);
        res++;
     }


     if(password2Value==''){
        setError(confirmPassword,'Please confirm your password');
     }
     else if(passwordValue!==password2Value){
        setError(confirmPassword,'passwords dont match');
     }
     else{
        setSuccess(confirmPassword);
        res++;
     }
   

     
        if(res==4){
           
            successMessage();
           
            username.value='';
            email.value='';
            password.value='';
            confirmPassword.value='';
        }
     


     
     
};


