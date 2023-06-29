// let recorrido;

//-----------------------------------------------------------------------------------------------------------------------------

// ***--- (1) Recorrido ---*** //

// recorrido = document;


// recorrido=document.forms;
// recorrido=document.domain;
// recorrido=document.forms[0].method;
// recorrido=document.forms[0].action;

//-----------------------------------------------------------------------------------------------------------------------------

// recorrido=document.links;
// recorrido=document.links[24];

//-----------------------------------------------------------------------------------------------------------------------------

// recorrido=document.images;
// recorrido=document.images[5];

//-----------------------------------------------------------------------------------------------------------------------------

// ***--- (2) Busqueda por ClassName ---*** //

// const header = document.getElementsByClassName('contenedor');
// console.log(header);

// const noExiste = document.getElementsByClassName('no-existe');
// console.log(noExiste);

// console.log(recorrido);

//-----------------------------------------------------------------------------------------------------------------------------

// ***--- (3) Busqueda por Id ---*** //

/*

const formulario = document.getElementById('formulario');
console.log(formulario);

*/

//-----------------------------------------------------------------------------------------------------------------------------


// ***--- (4) QUERY SELECTOR ---*** //

/*
const card = document.querySelector('.card');

console.log(card);



const info = document.querySelector('.premium .info');
console.log(info);


const segundoCard = document.querySelector('.hospedaje .card:nth-child(3)');
console.log(segundoCard);   


const formulario = document.querySelector('#formulario');
const formulario1 = document.querySelector('.contenido-hero #formulario');

console.log(formulario);    
console.log(formulario1);    

*/

//-----------------------------------------------------------------------------------------------------------------------------

// ***--- (5) Busqueda querySelectorAll ---*** //  
/*

const cards = document.querySelectorAll('.card');
console.log(cards);

const formulario = document.querySelectorAll('#formulario');
console.log(formulario);

*/

//-----------------------------------------------------------------------------------------------------------------------------

// ***--- (6)Busqueda querySelectorAll ---*** //  

/*
const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado.innerText);
console.log(encabezado.textContent);
console.log(encabezado.innerHTML);
*/


 
// document.querySelector('.hacer h2').textContent = "SOY NUEVO";

// // ***--- CON PROMPT ---*** //

/*

document.querySelector('.hacer h2').textContent = prompt("Primer palabra");

// ***--- CON VARIABLE ---*** // 

const nuevoTexto = 'AQUI NUEVO TEXTO';
document.querySelector('.contenido-hero h1').textContent = nuevoTexto;

*/

//-----------------------------------------------------------------------------------------------------------------------------

// // ***--- EJERCICIO ---*** //  

/*

let ingreso = parseInt(prompt("DIGITA UN NÚMERO DEL 1 AL 3"));

if (ingreso < 1 || ingreso >3){
    alert("Tu número no cumple el rango de 1 a 3");
}

if (ingreso !== parseInt){
    alert("Necesito un número entero, no letras");
}

if(ingreso == 1){
    document.querySelector('.contenido-hero h1').textContent = "WELCOME TUTOR";
}

if(ingreso == 2){
    document.querySelector('.contenido-hero h1').textContent = "WELCOME POLLITO";
}


if(ingreso == 3){
    document.querySelector('.contenido-hero h1').textContent = "WELCOME A CONFI";
}

*/

//-----------------------------------------------------------------------------------------------------------------------------

// // ***--- CAMBIAR IMAGENES ---*** //  

/*
const imagen = document.querySelector('.card img');

console.log(imagen);

imagen.src = 'img/hacer1.jpg';

*/

//-----------------------------------------------------------------------------------------------------------------------------

// // ***--- CAMBIAR ESTILOS ---*** //  

/*

const heading = document.querySelector('h1');

heading.style.backgroundColor = 'blue';

heading.style.textTransform = 'upercase';

*/

//-----------------------------------------------------------------------------------------------------------------------------

// // ***--- CAMBIAR CLASE ADD ---*** // 


/*
const card = document.querySelector('.card');
console.log(card);
console.log(card.classList);
card.classList.add('nueva-class');

//-----------------------------------------------------------------------------------------------------------------------------

const enlace = document.createElement('a');
enlace.textContent = 'NUEVO';
enlace.href = 'http://www';

// PÁGINA EN BLANCO
enlace.target = '_blank';

// Ubicar el nuevo enlace

const navegacion = document.querySelector ('.navegacion');
navegacion.appendChild(enlace);

//  Escoger la posición

navegacion.insertBefore(enlace, navegacion.childre[0, 1, o en la que se desee colocar]);
*/


//-----------------------------------------------------------------------------------------------------------------------------

// // ***--- CAMBIAR CLASE REMOVE ---*** // 

/*

const card = document.querySelector('.card');
console.log(card);
console.log(card.classList);
card.classList.remove('nueva-class');

*/

//-----------------------------------------------------------------------------------------------------------------------------

// // ***--- VER LOS HIJOS ---*** // 


// const navegacion = document.querySelector('.navegacion');
// console.log(navegacion);

// console.log(navegacion.children);

// console.log(navegacion.children[3].nodeType);
// console.log(navegacion.children[3].nodeName);



//-----------------------------------------------------------------------------------------------------------------------------

// // ***--- ACCEDER A LOS HIJOS ---*** // 

/*
const card = document.querySelector('.card');
console.log(card.children);

console.log(card.children[1]);


console.log(card.children[1].children[1].textContent);

console.log (card.children[1].children[1].textContent = 'SOY NUEVOOOOOO');

card.children[1].children[1].textContent = 'SOY NUEVOOOOOO';

// // ***--- CAMBIAR IMAGEN ---*** // 

card.children[0].src = 'img/populares4.jpg';


// // ***--- VER ÚLTIMO ELEMENTO ---*** // 

console.log(card.lastChild);
console.log(card.lastElementChild);

*/

// // ***--- ADICIONAR ---*** // 

/*
navegacion.firstElementChild.textContent = 'NUEVO';
*/

// // ***--- EJERCICIO ---*** //  


// const imgfondo = document.querySelector('.hero');
// let ingreso = parseInt(prompt("DIGITA UN NÚMERO DEL 1 AL 3"));

// if (ingreso < 1 || ingreso >3){
//     alert("Tu número no cumple el rango de 1 a 3");
// }

// // if (ingreso !== parseInt){
// //     alert("Necesito un número entero, no letras");
// // }

// if(ingreso == 1){

//     document.querySelector('.hacer h2').textContent = prompt("CAMBIA QUE HACER por");
//     document.querySelector('.contenido-hero h1').textContent = "WELCOME TUTOR";
//     console.log (navegacion.children[0].textContent = '');
//     console.log (navegacion.children[1].textContent = 'Menores');
//     console.log (navegacion.children[2].textContent = 'Rutas');
//     console.log (navegacion.children[3].textContent = 'Seguimiento');

//     //CAMBIAR COLOR
//     const heading = document.querySelector('h1');
//     heading.style.backgroundColor = 'blue';

//     // CAMBIAR IMG

//      const imagen = document.querySelector('.card img');
//      imagen.src = 'img/newyork1.jpg';

//      //CAMBIAR PLACEHOLDER
//      let placeh = document.querySelector(".busqueda");
//      placeh.placeholder = "POPAYÁN CAUCA";
   
//      // IMG DE FONDO
//      imgfondo.style.backgroundImage = "url('img/ey.jpg')"; 


    

// }

// if(ingreso == 2){
//     // document.querySelector('.hacer mi-viaje-plus h2').textContent = prompt("CAMBIAR Presentamos Miviaje.com Plus por");
//     document.querySelector('.contenido-hero h1').textContent = "WELCOME POLLITO";
//     console.log (navegacion.children[0].textContent = '');
//     console.log (navegacion.children[1].textContent = 'Ruta');
//     console.log (navegacion.children[2].textContent = 'Alerta');
//     console.log (navegacion.children[3].textContent = 'S.O.S');

//    //CAMBIAR COLOR
//     const heading = document.querySelector('h1');
//     heading.style.backgroundColor = 'red';

//     //CAMBIAR IMG
//     const imagen = document.querySelector('.card img');
//     imagen.src = 'img/logo.jpg';

//      // IMG DE FONDO
//     imgfondo.style.backgroundImage = "url('img/ey2.jpg')";

// }


// if(ingreso == 3){
//     document.querySelector('.hospedaje h2').textContent = prompt("CAMBIA Hospedaje por");
//     document.querySelector('.contenido-hero h1').textContent = "WELCOME A CONFI";


//     //CAMBIAR COLOR
//     const heading = document.querySelector('h1');
//     heading.style.backgroundColor = 'orange';

//    //CAMBIAR IMG
//    const imagen = document.querySelector('.card img');
//    imagen.src = 'img/lupa.jpg';

//    // IMG DE FONDO
//    imgfondo.style.backgroundImage = "url('img/ey3.jpg')";

// IMG FONDO SOLA LÍNEA
//    document.querySelector('.hero').style.backgroundImage = "url('img/ey3.jpg')";
// 


// CAMBIAR MENÚ 1ER HIJO

// navegacion.firstElementChild.textContent="HOLAAAA123";

// }

//-----------------------------------------------------------------------------------------------------------------------------

/*

// ALERTA AL DAR CLICK PARA IR A OTRA PÁGINA

enlace.onclick = alertas;

function alertas (){
    alert("Vas a ingresar a la siguiente pagina que es")
}




*/


//-----------------------------------------------------------------------------------------------------------------------------

// 

///// E J E R C I C I O /////


// GRUPOS DE 4

/*

// PROYECYTO

1. VALIDAR EL INICIO DE SESIÓN (TIPO MODAL):
* USUARIO   const = adso2556678
* PASSWORD  const = adso2023
Que no tenga espacios en blanco.

Si no existe que te redirije a registro.

2. IDENTIFICAR LOS ROLES 

3. Según el rol identificado 

* Menú para cada rol
* Título
* Encabezado diferente a cada rol
* Imagen de presentación diferente
* Contenidos diferentes utilizando DOM (Texto e Imagenes)



*/