// var topping = prompt("ingresa un topping");
// var precio = 0;
// var helado = 5;
// var preciofinal = 0;

// if(topping=="oreo"){
// 		precio = 10;
// }else if(topping == "kitkat"){
// 	precio = 15;
// }else if(topping == "kinder"){
// 	precio = 25;
// }else{
// 		alert("No tenemos este topping");
// }
       
// if (topping=="oreo" || 
// topping=="kitkat" ||
// topping == "kinder")

// {preciofinal = helado + precio;
// alert("El helado cuesta "+"$"+preciofinal);}



var opciones=Number(prompt ("elija su menú: 1-carne 2-pescado 3-verdura"));

switch(opciones) {
    case 1:
        alert("Le recomiendo tomar vino tinto");
        break;
    case 2:
        alert ("Le recomiendo tomar vino blanco");
        break;
    case 3:
        alert ("Le recomiendo tomar agua");
        break;
    default:
        alert ("elija 1 carne, 2 pescado o 3 verdura");
}