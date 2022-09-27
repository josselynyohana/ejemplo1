function validar(){
 
    var usuarioIngresado=document.getElementById("textUsuario").value;
    var passwordIngresado=document.getElementById("textPass").value;
     
    if(usuarioIngresado=="Josselyn" && passwordIngresado=="123456") {
        alert("Bienvenido, sus datos son los correctos");
        window.open("https://www.youtube.com/watch?v=xL8C5CIxDts");
    }
    else
    {
        alert("No son correctos sus datos");
        window.open("index.html");
    }
    }
    