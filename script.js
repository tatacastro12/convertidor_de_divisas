function convertir() {
    var valor=parseFloat(document.getElementById("cantidad").value);
    document.getElementById("valor").innerHTML=valor;
    var de =document.getElementById("de").nodeValue;
    var a =document.getElementById("a").nodeValue;
    var dolar= 3.768;
    var euro = 4.395;
    redultado=0;

    if(de==1&&a==2){
    resultado=valor/dolar;
    }
    else if (de==1&&a==3) {
        resultado= valor/euro;
    }
    else if (de==2&&a==1) {
        resultado= valor*dolar;
    }
    else if (de==2&&a==3) {
        resultado= valor*(dolar/euro);
    }
    else if (de==3&&a==1) {
        resultado= valor*euro; 
    }
    else if (de==3&&a==2) {
        resultado= valor*(euro/dolar); 
    }
    else{
        resultado= valor;
    }
    document.getElementById("resultado").innerHTML="resultado:$"+ resultado.toFixed(2);

        

}