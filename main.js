 var num1=  Number(prompt("Primeiro valor")) 
var num2=  Number(prompt("Segundo valor")) 
var soma= 0;
for(var i = num1; i <= num2; i++){
    if(i%2 != 0){
        soma += i;
    }
} 
alert(`a soma é ${soma}`)
