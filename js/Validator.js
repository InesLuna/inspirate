'use strict';
//solo añadimos oquitamos errores, que hacemos con esos errores lo haremos en el archivo signup
class Validator {
    constructor(){
        this.invalidEmailError = 'Enter a valid email';
        this.repeatEmailError = 'Emails do not match'
        this.duplicateEmailError = 'The email is already in use';
        this.passwordError = 'Introduce una contraseña de almenos 8 caracteres';
        this.repeatPassError = 'Passwords do not match';
        this.firstNameError = 'Enter your name';
        this.userNameError = 'Entear a user name';
        this.duplicatUserName = 'This user name is already in use, try a different one';

        this.errors = {
            invalidEmailError: this.invalidEmailError,
            repeatEmailError : this.repeatEmailError,
            passwordError: this.passwordError,
            repeatPassError: this.repeatPassError,
            firstNameError: this.firstNameError,
            userNameError : this.userNameError,
        }
    }
    //obligar a rellenar el nombre

   validateFirstName = name =>{

        if(name){
            delete this.errors.firstNameError;
        } else {
            this.errors.firstNameError = this.firstNameError;
        }
   }

   validateUserName = userName =>{
       if(userName){
            delete this.errors.userNameError;
       } else {
           this.errors.userNameError = this.userNameError;
       }
       return this.errors;
   }
   
    validateUnicUserName = newUserName =>{
        //Recoger los datos del local storage
        const usersDB = JSON.parse(localStorage.getItem('users'));
    
        if(!usersDB){ 
            delete this.errors.duplicatUserName;
            return this.errors
        }
        
        let uniqueUserName = true; //iterar para saber si existe o no el email
        usersDB.forEach(user => {
            if(user.userName === newUserName){
                uniqueUserName = false
            }
        });
        if(uniqueUserName){
            delete this.errors.duplicatUserName
        } else {
            this.errors.duplicatUserName = this.duplicatUserName
        }
        return this.errors
    }

    validateValidEmail = email =>{

        //validará si el formato del email es correcto
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)){  //si es correcto va a eliminar el error invalidEmailError del objeto
            delete this.errors.invalidEmailError
        } else{ //si no es correcto lo añadirá al objeto
            this.errors.invalidEmailError = this.invalidEmailError
        }
        return this.errors;
    }
    validateEmailRepeat = (email, emailRepeat) => {
        //comprobar si los dos emails son iguales
        //Quitar o añadir el error en función de si son iguales o no
        //return this.errors
        if(email === emailRepeat){
            delete this.errors.repeatEmailError;
        }else{
            this.errors.repeatEmailError = this.repeatEmailError
        }
        return this.errors

    }

    validateUnicEmail = newEmail =>{
        //Recoger los datos del local storage
        const usersDB = JSON.parse(localStorage.getItem('users'));
        //comprovar si está o no el email en el local storage
        //en función de si está o no añadiremos o quitaremos el error del objeto
        if(!usersDB){ //por is no hay ningún usuario registrado
            delete this.errors.duplicateEmailError
            return this.errors
        }

        let mailUnique = true; //iterar para saber si existe o no el email
        usersDB.forEach(user => {
            if(user.email === newEmail){
                mailUnique = false
            }
        });

        if(mailUnique){
            delete this.errors.duplicateEmailError
        } else {
            this.errors.duplicateEmailError = this.duplicateEmailError
        }
        return this.errors
    }

    validatePassword = password =>{
        //comprobar si password tiene más de cinco caracteres
        //si tiene más quitamos el error, si tiene menos lo añadimos
        //return this.errors
        if(password.length > 7){
            delete this.errors.passwordError
        } else {
        this.errors.passwordError = this.passwordError;
        }
        return this.errors
    }

    validatePasswordRepeat = (password, passwordRepeat) => {
        //comprobar si los dos password son iguales
        //Quitar o añadir el error en función de si son iguales o no
        //return this.errors
        if(password === passwordRepeat){
            delete this.errors.repeatPassError;
        }else{
            this.errors.repeatPassError = this.repeatPassError
        }
        return this.errors

    }


    checkErrors = isSubmitted =>{ //auxiliar que nos permitirá acceder a los errores cuando queramos desde signup
        if(isSubmitted){
            this.errors = {
                invalidEmailError: this.invalidEmailError,
                repeatEmailError: this.repeatEmailError,
                passwordError: this.passwordError,
                repeatPassError: this.repeatPassError,
            }
        }
        return this.errors
    }

}

const validator = new Validator();