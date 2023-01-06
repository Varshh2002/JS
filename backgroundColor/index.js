const button=document.getElementById("btn");
const body=document.querySelector('body');
const colors=['red','green','blue','yellow','pink','purple']

body.style.backgroundColor='blue';

button.addEventListener('click',e=>{
    e.preventDefault();
    const colorIndex=parseInt(Math.random()*colors.length);
    body.style.backgroundColor=colors[colorIndex];
})