let formulario:any=document.getElementById("formulario");
let inputs:any=document.querySelectorAll('#formulario input');

const expresiones = {
	telefono: /^\d{9,9}$/


}
formulario.addEventListener("submit",function(event){
  
    let flag:Boolean;
    flag=validar();
   
    if(flag==true){
        enviar();
    }
    event.preventDefault();
});


function enviar(){
        formulario.style.display="none";
        document.getElementById("mensaje").innerHTML="<a href='#'>¡Muchas gracias, su formulario a sido enviado!</a>";
        document.body.style.backgroundColor="#D5DBDB";                         
}


function validar(){
    let x:Boolean;
    x=false;
    if ((<HTMLInputElement>document.getElementById('condiciones'))&&(<HTMLInputElement>document.getElementById('name'))&&(<HTMLInputElement>document.getElementById('año'))&&(<HTMLInputElement>document.getElementById('comentario'))){
        x=true;
    }else{
        alert("Complete todos los campos disponibles");
    }
   
    return x;

}

const validarnumero=(event) =>{
    switch (event.target.numero){
        case "telefono":
            if(expresiones.telefono.test(event.target.value)){
                return true;

            }else{
                alert("Caracteres invalidos");
            }    
    }
}