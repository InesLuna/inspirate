'use strict';
const emailOrUserInput = document.querySelector('#email-user');
const passwordInput = document.querySelector('#password');
const buttonLogin = document.querySelector('#login-button')


const handleMessages = user => {
    const messageContainer = document.querySelector(".errors-container");
    messageContainer.innerHTML = '';
  
    const message = document.createElement('p');

    if (!user){
      message.innerHTML = "The email, the username and/or the password are wrong"
    }
    messageContainer.appendChild(message);
  }
  
  const login = (event) => {
    event.preventDefault();
    //recoger los datos de nuestra "base de datos" de localstorage
    const usersDB = JSON.parse(localStorage.getItem('users'));
    
    //filtrar base de datos. Find funciona como un filter, pero devuelve el primer elemento que coincide, y no un array de todos los elementos que cumplen la expresión
    const user = usersDB.find(element => {
        if(element.email === emailOrUserInput.value || element.userName === emailOrUserInput.value){
         
            if(element.password === passwordInput.value){
              window.location.href = 'inspPersonal.html'
              //return element
            }
        } 
     });
    

     handleMessages(user);
     
   
  }
  const handleLoginIsValid = () =>{
    console.log('abc')
    console.log(buttonLogin)
    if(emailOrUserInput.value && passwordInput.value){
        buttonLogin.removeAttribute('disabled')
    }else{
        buttonLogin.setAttribute('disabled','')
    }

}

  emailOrUserInput.addEventListener('input', handleLoginIsValid)
  passwordInput.addEventListener('input', handleLoginIsValid)
  
  