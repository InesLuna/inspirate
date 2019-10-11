'use strict';


const callImgApi = async () =>{

  //conseguir array con los elementos de las diferentes medidas de imagen que necesito
    const cuatroXcuatro =[...document.querySelectorAll('.cuatro-x-cuatro')];
    const cuatroXocho = [...document.querySelectorAll('.cuatro-x-ocho')];
    const cuatroXdoce = [...document.querySelectorAll('.cuatro-x-doce')];
    const cuatroXseis = [...document.querySelectorAll('.cuatro-x-seis')];
    const cuatroXdos = [...document.querySelectorAll('.cuatro-x-dos')];
    const cuatroXtres = [...document.querySelectorAll('.cuatro-x-tres')]
    const imgTag = cuatroXcuatro.concat(cuatroXocho, cuatroXdoce, cuatroXseis, cuatroXdos, cuatroXtres)

    
    //conseguir una url que va ha permitir hacer una llamada a la api de una página de 100 elementos de la api elegida de manera random entre las 10 páginas que tiene
    const random = Math.floor(Math.random()*40+1);
    const url = `https://picsum.photos/v2/list?page=${random}&limit=25`
    
   //Hacer la llamada a la Api y conseguir las 16 imagenes que necesito elegidas de manera random entre las 100 que llegan
    const arrayImg = [];
    
    const response = await fetch(url);
    const myJson = await response.json();

    for(let i = 0 ; i <17 ; i++){
      
      const randomIndex = Math.floor(Math.random()*myJson.length)
      arrayImg.push(myJson[randomIndex])
      myJson.splice(randomIndex,1)
    }
    //obtener url para atributo src y setearle las medidas requeridas para el grid diseñado
    const newImgArray = []
   
    for(let i = 0; i < arrayImg.length ; i++){ 
      newImgArray.push({...arrayImg[i].download_url.split('/')})  
      
    }
    newImgArray.forEach(img => {
      img[5] = '400';
    })
 
    for(let i = 0 ; i < newImgArray.length; i++){
      if(i < 6){
        newImgArray[i][6] = '400'
      } else if( i === 6){
        newImgArray[i][6] = '800'
      } else if(i > 6 && i < 9){
        newImgArray[i][6] = '1200'
      } else if(i > 8 && i < 11 ){
        newImgArray[i][6] = '600'
      } else if(i > 10 && i < 14){
        newImgArray[i][6] = '200'
      } else { newImgArray[i][6] = '300'}
    }  
    
    let auxImg = [] 
    newImgArray.forEach(img => auxImg.push(Object.values(img)))
    
    const finalImgArray = []
    auxImg.forEach(img =>{ 
      finalImgArray.push(img.join('/'))
    })
    
    //setear atributos
      for(let i = 0; i < finalImgArray.length ; i++){
        imgTag[i].setAttribute('src', finalImgArray[i])
      
    }

  }

  callImgApi()