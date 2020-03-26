function DateTime(){
    var date = new Date()
    var currentDay = date.getDay()                   
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
   
    console.log("Today is " + days[currentDay])
    console.log("Current time is " + date.toLocaleTimeString())
}

DateTime()