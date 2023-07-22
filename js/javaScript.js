
var btn_iniciar=document.querySelector('#btn-iniciar');
var btn_calcular=document.querySelector('#btn-calcular');
var btn_inicio=document.querySelector('#btn-inicio');

var pageI=document.querySelector('#pageI');
var pageII=document.querySelector('#pageII');
var pageIII=document.querySelector('#pageIII');

var inputAltura=inputAltura=document.querySelector('#altura');
var inputPeso=inputPeso=document.querySelector('#peso');

var resultado_numero=document.querySelector('.resultado-numero');
var resultado_texto=document.querySelector('.resultado-texto');

var abaixoPeso=document.querySelector('#abaixoPeso');
var acimaPeso=document.querySelector('#acimaPeso');
abaixoPeso.style.display="none";
acimaPeso.style.display="none";

var peso=inputPeso.value;
peso=Number(peso.replace(",","."));


btn_iniciar.onclick=()=> {
    pageI.style.display="none";
    pageII.style.display="grid";
}

btn_calcular.onclick=(altura,peso)=> {

    var altura=inputAltura.value;
    altura=Number(altura.replace(",","."));

    var peso=inputPeso.value;
    peso=Number(peso.replace(",","."));


    let calculoIMC=Math.round(peso/(altura*altura));
    
    pageII.style.display="none";
    pageIII.style.display="grid";

    if(calculoIMC<17) {
        resultado_numero.innerHTML=calculoIMC;
        resultado_texto.innerHTML='Muito abaixo do peso';
        abaixoPeso.style.display="block";
    }

    if(calculoIMC>=17 && calculoIMC<=18.49) {
        resultado_numero.innerHTML=calculoIMC;
        resultado_texto.innerHTML='Abaixo do peso';
        abaixoPeso.style.display="block";
    }

    if(calculoIMC>=18.50 && calculoIMC<=24.99) {
        resultado_numero.innerHTML=calculoIMC;
        resultado_texto.innerHTML='Peso normal';
        abaixoPeso.style.display="block";
    }

    if(calculoIMC>=25 && calculoIMC<=29.99) {
        resultado_numero.innerHTML=calculoIMC;
        resultado_texto.innerHTML='Acima do peso';
        acimaPeso.style.display="block";
    }

    if(calculoIMC>=30 && calculoIMC<=34.99) {
        resultado_numero.innerHTML=calculoIMC;
        resultado_texto.innerHTML='Obesidade I';
        acimaPeso.style.display="block";
    }

    if(calculoIMC>=35 && calculoIMC<=39.99) {
        resultado_numero.innerHTML=calculoIMC;
        resultado_texto.innerHTML='Obesidade II <br> (severa)';
        acimaPeso.style.display="block";
    }

    if(calculoIMC>40) {
        resultado_numero.innerHTML=calculoIMC;
        resultado_texto.innerHTML='Obesidade III <br> (mórbida)';
        acimaPeso.style.display="block";
    }
}

btn_inicio.onclick=()=> {
    pageI.style.display="grid";
    pageII.style.display="none";
    pageIII.style.display="none";
    resultado_numero.innerHTML="";
    resultado_texto.innerHTML="";
    inputAltura.value="";
    inputPeso.value="";
    abaixoPeso.style.display="none";
    acimaPeso.style.display="none";
}

