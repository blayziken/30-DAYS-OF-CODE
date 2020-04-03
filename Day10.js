//Write a program that checks if a string is an email address or not with Regular Expression
yahooCheck = (email) => {
    
    if(typeof(email) !== 'string') return false;

    const valids =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    return valids.test(email);
}

yahooCheck('mail@gmail.com')
