 //Ejercicio 1
 //Cogemos con el new Date().getFullYear(); el año actual y le restamos al año de nacimiento pedido por teclado
 
 function ageCalculator(){
     aActual=new Date().getFullYear();
     posibilidad = aActual - fnacimiento;
     return aActual - fnacimiento 
 }

 //Ejercicio 2
// Pides por teclado la edad maxima, tu edad actual y la cantiad que vas a tomar y se hace la operacion

 function supplyCalculator(){
    parseInt(edadActual=prompt("Introduce your actual age: "));
    parseInt(edadMaxima=prompt("Introduce your think about the ripe old age yours "));
    parseInt(cantidadDia=prompt("How quantity are you going to eat daily ? "));

    total= (edadMaxima-edadActual)*cantidadDia;
    return total;
 }

 //Ejercicio 3
 // Se hace los calculos con el math.pi y sale la circunferencia y el radio

function circumference(){
    circunferencia= Math.PI * radio;
    return circunferencia;
}
function area(){
    area=2*Math.PI*radio;
    return area;
}

//Ejercicio 4
// 

function convertTemperature(){
    var faren= (celsius *9/5) + 32;
    var cel=(farenheit - 32)* 5/9;
    return [faren,cel];
}