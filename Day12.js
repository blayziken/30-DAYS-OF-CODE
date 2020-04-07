//Using a try-catch block, write a function to convert a string to a number and handle for any exceptions, perform an alternative if need be.


Strinverter = string => {
    try{
        if(isNaN(string)) throw new Error
        return Number(string)
    } catch(error) {
        console.log(error.name)
    }
}

Strinverter("[1,2]")
