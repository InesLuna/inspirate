'use strict';


const callImgApi = async () =>{

  //conseguir array con los elementos de las diferentes medidas de imagen que necesito
    const cuatroXcuatro = document.querySelectorAll('.cuatro-x-cuatro');
    const cuatroXocho = document.querySelectorAll('.cuatro-x-ocho');
    const cuatroXdoce = document.querySelectorAll('.cuatro-x-doce');
    const cuatroXseis = document.querySelectorAll('.cuatro-x-seis');
    const cuatroXdos = document.querySelectorAll('.cuatro-x-dos');
    const cuatroXtres = document.querySelectorAll('.cuatro-x-tres')
    //conseguir una url que va ha permitir hacer una llamada a la api de una página de 100 elementos de la api elegida de manera random entre las 10 páginas que tiene
    const random = Math.floor(Math.random()*10+1);
    const url = `https://picsum.photos/v2/list?page=${random}&limit=100`
    
   //Hacer la llamada a la Api y conseguir las 16 imagenes que necesito elegidas de manera random entre las 100 que llegan
    const arrayImg = [];
    
    const response = await fetch(url);
    const myJson = await response.json();

    for(let i = 0 ; i <16 ; i++){
      arrayImg.push(myJson[Math.floor(Math.random()*99+1)])
    }
    //Setear 
    const newImgArray = []

    for(let i = 0; i < arrayImg.length ; i++){ 
      newImgArray.push(arrayImg[i].download_url.split('/')) 
    }
    newImgArray.forEach(img => {
      img[5] = 400
    })


    console.log(newImgArray)

    /*
    const setAt = await imgTag[0].setAttribute('src',myJson.message)*/
  }

  callImgApi()