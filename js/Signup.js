'use strict';

class Signup{
    constructor(){
        this.firstNameInput = document.querySelector('#first-name');
        this.lastNameInput = document.querySelector('#last-name');
        this.userNameInput = document.querySelector('#user-name');
        this.ageInput = document.querySelector('#age');
        this.cityInput = document.querySelector('#city');
        this.phoneInput = document.querySelector('#phone');
        this.emailInput = document.querySelector('#email');
        this.repeatEmailInput = document.querySelector('#repeat-email');
        this.passwordInput = document.querySelector('#password');
        this.repeatPasswordInput =document.querySelector('#repeat-password');
        this.errorsWrapper = document.querySelector('.errors-container');
        this.buttonInput = document.querySelector('#submit-button');
    }
    
    
    safeData = (event) => {
        event.preventDefault() //evita que el boton haga su comportamiento por default al tener tipo submit
        //recoge los valores de los inputs
        const firstName = this.firstNameInput.value; 
        const lastName =this.lastNameInput.value; 
        const userName =this.userNameInput.value;  
        const age = this.ageInput.value;  
        const city = this.cityInput.value;  
        const phone = this.phoneInput.value;  
        const email = this.emailInput.value;  
        const password = this.passwordInput.value;  
       
        
        //crea una instancia de User

        const newUser = new User (firstName, lastName, userName, age, city, phone, email, password);

         // almacenar datos en local storage
        // el primer item es la key de la colección de objeto
        // el segundo es una string con la infomacion que se quiere registrar, para convertir la variable e nstring hacemos el JSON.stringify(variable)
        //JSON.parse es un metodo que convierte de string a objeto.
        let usersDB = JSON.parse(localStorage.getItem('users')) //recogemos del local storage

        if(usersDB){ //miro si hay usuarios registrados
            usersDB.push(newUser); //añado a la lista que es una array si ya hay usuarios anteriores
        }else { //si no hay usuarios registrados
            usersDB = [newUser]    //asigno una array con mi usuario
        }

        localStorage.setItem('users', JSON.stringify(usersDB)); //envio a local storage mi base de datos

        //vaciar el formulario una vez se ha hecho el signup

        this.firstNameInput.value = '';
        this.lastNameInput.value = '';
        this.userNameInput.value = ''; 
        this.ageInput.value = ''; 
        this.cityInput.value = ''; 
        this.phoneInput.value = ''; 
        this.emailInput.value = ''; 
        this.repeatEmailInput.value = '';
        this.passwordInput.value = '';
        this.repeatPasswordInput.value = '';


        validator.checkErrors(true);
        window.location.href = 'login.html'
    }
    
    handleInputsValues = () => {
    

        this.firstNameInput.addEventListener('input', event => { 
            validator.validateFirstName(event.target.value);
            this.handleErrorMessages();
            this.handleIsValid();
        })

        this.userNameInput.addEventListener('input', event => {
            const errors = validator.validateUserName(event.target.value);

            if(!('userNameError' in errors)){
                validator.validateUnicUserName(event.target.value)
            }
            this.handleErrorMessages();
            this.handleIsValid();
        })

        this.emailInput.addEventListener('input', event => { //cada vez que el valor del input canvia ejecuta la función
            const errors = validator.validateValidEmail(event.target.value)
           if(!('invalidEmailError' in errors)){
                validator.validateUnicEmail(event.target.value)
            }
            this.handleErrorMessages();
            this.handleIsValid();
        })
        this.repeatEmailInput.addEventListener('input', event =>{
            validator.validateEmailRepeat(this.emailInput.value, event.target.value);
            validator.validateEmailRepeat(this.emailInput.value,event.target.value)
             this.handleErrorMessages();
             this.handleIsValid();
         })
        this.passwordInput.addEventListener('input', event =>{
            validator.validatePassword(event.target.value)
            validator.validatePasswordRepeat(event.target.value, this.repeatPasswordInput.value)
            this.handleErrorMessages();
            this.handleIsValid();
        })
        
        this.repeatPasswordInput.addEventListener('input', event =>{
            validator.validatePasswordRepeat(this.passwordInput.value, event.target.value);
            validator.validatePasswordRepeat(this.passwordInput.value,event.target.value)
            this.handleErrorMessages();
            this.handleIsValid();
        })
        
       
    }

    handleErrorMessages = () => {
        this.errorsWrapper.innerHTML = ''
        //comprovar si hay errores y si los hay mostrarlos en el HTML
        const errors = validator.checkErrors();
        for (const prop in errors){
            const error = document.createElement('p')
            error.innerHTML = errors[prop];
            this.errorsWrapper.appendChild(error);
        }
    }

    handleIsValid = () =>{
        //activar o desactivar el button del form en función de si hay errores o no
        const errors = validator.checkErrors();

        if(Object.keys(errors).length === 0){
            this.buttonInput.removeAttribute('disabled')

        }else{
            this.buttonInput.setAttribute('disabled','')
        }

    }
    
    }

    const signup = new Signup();
    window.addEventListener('load', signup.handleInputsValues)