// Write a program that takes in a date of birth of a person and returns the number of days till the next birthday

ManyHappyReturns = (userString) => {

    //Creating a current date object
    var currentDate = new Date();

    //Splitting the input string
    var userString = userString.split("-");
  
    var stringday = userString[0];
    var stringmonth = userString[1]-1;
    var stringyear = currentDate.getFullYear();
    
    //Storing the input string into a Date object
    var stringDate = new Date(stringyear, stringmonth, stringday);
    
    //Parameters
    var days = 1000*60*60*24; 
    // var oneWeek = 1000*60*60*24*7;
    
    //To get the current and userstring object in milliseconds so I can get the difference
    var currentDateInMs = currentDate.getTime();
    var userStringDateInMs = stringDate.getTime();
    
    //Subtracting the current date from the input date
    var difference = Math.round(userStringDateInMs - currentDateInMs);

    //Number of weeks
    // var weeks = Math.floor(difference/oneWeek)

    //Dividing the difference to give the number of days
    var numDays = Math.floor(difference/(days));

    return numDays;
}

ManyHappyReturns('13-10-1998')