'use strict';

const handleMessages = user => {
    const messageContainer = document.querySelector(".errors-container");
    const formContainer = document.querySelector('.login-form')
    messageContainer.innerHTML = '';
  
    const message = document.createElement('p');
    if (user) {
        formContainer.innerHTML=''
      message.classList.add('correct-message')
      message.innerHTML = `hola, ${user.userName}`
    } else {
      message.innerHTML = "El email, el nombre de usuario y/o el password son erróneos"
    }
    messageContainer.appendChild(message);
  }
  
  const login = (event) => {
    event.preventDefault();
    //recoger los datos de nuestra "base de datos" de localstorage
    const usersDB = JSON.parse(localStorage.getItem('users'));
  
    //recoger los datos de los inputs
    const emailOrUserInput = document.querySelector('#email-user');
    const passwordInput = document.querySelector('#password');
   
  
    //filtrar base de datos. Find funciona como un filter, pero devuelve el primer elemento que coincide, y no un array de todos los elementos que cumplen la expresión
    const user = usersDB.find(element => {
        if(element.email === emailOrUserInput.value || element.userName === emailOrUserInput.value){
         
            if(element.password === passwordInput.value){
          
                return element
            }
        } 
     });


     handleMessages(user);
   
  }