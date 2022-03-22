function suma(){
    let n1 = document.getElementById('num1').value;
    let n2 = document.getElementById('num2').value;
    let suma = parseFloat(n1) + parseFloat(n2);
    document.getElementById('resultado').innerHTML="La suma es: "+suma;

}
document.getElementById('boton1').onclick = suma;

function resta(){
    let n1 = document.getElementById('num1').value;
    let n2 = document.getElementById('num2').value;
    let resta = parseFloat(n1) - parseFloat(n2);
    document.getElementById('resultado').innerHTML="La resta es: "+resta;
    
}
document.getElementById('boton2').onclick = resta;

function multiplicacion(){
    let n1 = document.getElementById('num1').value;
    let n2 = document.getElementById('num2').value;
    let multi = parseFloat(n1)  * parseFloat(n2);
    document.getElementById('resultado').innerHTML="La multi es: "+multi;
    
}
document.getElementById('boton3').onclick = multiplicacion;
function division(){
    let n1 = document.getElementById('num1').value;
    let n2 = document.getElementById('num2').value;
    let divi = parseFloat(n1) / parseFloat(n2);
    document.getElementById('resultado').innerHTML="La division es: "+divi;
    
}
document.getElementById('boton4').onclick = division;