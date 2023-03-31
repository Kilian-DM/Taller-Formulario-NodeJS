function empleadocalcular() {
    var masculino= document.getElementById("masculino").value;
    var femenino=document.getElementById("femenino").value;
    if(document.getElementById('masculino').checked){
        var bono= 200000 
        document.getElementById("bono").innerm=+bono;
    }
    if(document.getElementById('femenino').checked){
        var bono= 300000
        document.getElementById("bono").innerHTML=+bono;

    }
    
    }
    