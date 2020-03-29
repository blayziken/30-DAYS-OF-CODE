// Write a JavaScript function that checks whether a passed string is palindrome or not?


noReverse = (str) => {
    
    str = str.toLowerCase().replace(/[.,?'!\s]/g, ''); //To remove spaces, commas, question marks etc

    newString = str.split("").reverse().join("");

    if(newString === str) {
        return true;
    } 
    else return false;
}

noReverse('str')
