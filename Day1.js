// Write a program to check from two given numbers, whether one is positive and another one is negative.


function PlusLitmus(number1, number2) { 
    if(number1 > 0 && number2 < 0 || number1 < 0 && number2 > 0){
        return true
    } else if (number1 == undefined){
        return false
    } else return false
    

}

PlusLitmus(2,2)
