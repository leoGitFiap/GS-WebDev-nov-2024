// alert("Seja bem vindo!!!");

//TROCAR A COR DE FUNDO
function trocar(cor){
    document.body.style.background = cor;
}

function redirect() {
    document.getElementById("redirect_login1").addEventListener("click", function() {
        window.location.href = "login.html";
    });
    
    document.getElementById("redirect_login2").addEventListener("click", function() {
        window.location.href = "login.html";
    });
    
    document.getElementById("redirect_login3").addEventListener("click", function() {
        window.location.href = "login.html";
    });
}
redirect();

let imagens =[
    "./src/assets/hidrelétrica.jpeg",
    "./src/assets/termelétrica.jpeg",
    "./src/assets/nuclear.jpeg"
];
let i = 0;
let time = 3000;

function slideShow(){
    document.getElementById("imagehome").src=imagens[i];
    i++;
    if(i == imagens.length) {i=0;}
    setTimeout("slideShow()",time)  
}
slideShow();