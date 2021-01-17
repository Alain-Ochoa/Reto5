
let opcion = prompt(" Eliga la opcion a realizar 1 , 2 o 3: ");
let TOT=0 ;
switch(opcion){

case '1': 
let L=prompt("Ingrese la cantidad de Litros producidos: ");
let PG=prompt("Ingrese el precio por galon");



function Produccion(){
    let TG = L/3.785;
    let GA = TG*PG;
    return GA;
}
let GA =Produccion();
console.log("La ganacia optenida es : " + GA);

break;

case '2':
    
let TI = prompt("Ingrese tipo de hamburquesa(sencilla, doble, triple) : ");
let N = prompt("Ingrese la cantidad de hamburguesa : ");
let TP = prompt("Ingrese el tipo de pago(Tarjeta o efectivo) : ");
let CA = 0.05;
let TO =0 ;

if(TI === "sencilla"){
    
    if(TP === "Tarjeta"){
        TO = N * 20;
        TOT = TO + (TO*CA);
    }else{
        
        TOT = N * 20;
    }

    console.log("El Total a paga nes : "+ TOT);
}else if(TI==="doble"){
    
    if(TP === "Tarjeta"){
        TO = N * 25;
        TOT = TO + (TO*CA);
    }else{
        
        TOT = N * 25;
    }
    console.log("El Total a paga nes : "+ TOT);
}else if( TI === "triple"){
    if(TP === "Tarjeta"){
        TO = N * 28;
        TOT = TO + (TO*CA);
    }else{
        
        TOT = N * 28;
    }
    console.log("El Total a pagar es : "+ TOT);
}

break;

case '3':
    let NC = prompt("Ingrese la cantidad de Citas : ");
    let CC = 0 ;
    TOT=0;
    
    for(let i=1; i <= NC ;i++){
    
        if(i <= 3 ){
            CC = 200;
            TOT += CC;
        }else if(i > 3 && i<=5){
            CC = 150;
            TOT += CC;
        }else if(i > 5 && i<=8){
            CC = 100;
            TOT += CC;
        }else if(i>8){
            CC = 50;
            TOT += CC;
        }
    
    }
    
    console.log("El pago Final es :" + TOT);
    break;
    default:
        console.log("Ingrese la opcion entre 1 y 3")

}
