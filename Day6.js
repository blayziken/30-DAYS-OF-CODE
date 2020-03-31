// Write a JavaScript program using the map function to return the squares of all the  elements in an array


const secretMap = (array) => {
    
    //To check if the input argument is not an array
    if(Array.isArray(array) == false) {
      return 'Wrong input argument'
    }
  
    return array.map((index) => {
      return Math.pow(index,2) 
    })
  
 }
  

  secretMap([1,2,3])
  