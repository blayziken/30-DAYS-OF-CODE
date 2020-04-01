//Write a JavaScript program to get convert numbers from Arabic to Roman numerals

romaArabica = (input) => {
    //Testing the input
    if( typeof(input) !== 'number') return "Wrong input";

    if(input === 0) return " ";
    
    var romanNumbers = [[1,"I"],[4,"IV"],[5,"V"],[9,"IX"],[10,"X"],[40,"XL"],[50,"L"],[90,"XC"],[100,"C"],[490,"CD"],[500,"D"],[900,"CM"],[1000,"M"],[4000, "MV"],[4900, "CV"],[5000,"V"]]

    for(let i = romanNumbers.length-1; i >= 0; i--) {
        if(input >= romanNumbers[i][0]) {
            return romanNumbers[i][1] + romaArabica(input - romanNumbers[i][0])
        }
    }
}

romaArabica(900)
