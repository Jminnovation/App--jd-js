console.log("loading javascript")

function sendform(){
    console.log("envio de formulario");

   let nameInfo = document.getElementById("nombre");

   let CedulaInfo = document.getElementById("Cedula");

    let correoInfo = document.getElementById("correo");

    let EdadInfo = document.getElementById("Edad");

   nameInfo = nameInfo.Value;
   CedulaInfo = CedulaInfo.Value;
   correoInfo = correoInfo.Value;
   EdadInfo = EdadInfo.Value;

   let personalInfo ={
   name:nameInfo,
   Cedula:CedulaInfo,
   correo:correoInfo,
   Edad:EdadInfo,

   }

console.log(personalInfo);

document.cookie = "name=el";
document.cookie = "Cedula=N";
document.cookie = "correo=C";
document.cookie = "Edad=E";

let cookieData= document.cookie; 

console.log(cookieData);

alert("Tus datos fueron Guardados" + personalInfo.name + " y Cedula " + personalInfo.Cedula); 



let buttonform = document.getElementById("botons");
buttonform.addEventListener("click",sendform);


}

