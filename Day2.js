//Write a JavaScript function to validate whether an argument of a given value type is error or not.


isError = (input) => {

    if(input instanceof Error) {
        return "Error";
    } else {
        return "No Error";
    };

};

isError()
