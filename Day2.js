isError = (input) => {

    if(input instanceof Error) {
        return "Error";
    } else {
        return "No Error";
    };

};

isError()