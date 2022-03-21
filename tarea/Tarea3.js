var num1 = prompt("1 Dime un numero")

var num2 = prompt("2 Dime un numero")

var num3 = prompt("3 Dime un numero")

if (num1 > num2 && num1 > num3){
    alert( 'Tu numero mayor es: ' + num1)
}
else
 if (num2 > num3 && num2 > num1){
    alert( 'Tu numero mayor es: ' + num2)
}
else if (num3 > num1 && num3 > num2){
    alert( 'Tu numero mayor es: ' + num3)
}
