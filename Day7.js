//Write a JavaScript program to get the first n Fibonacci numbers. Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.

//Fibonacci Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

//Recursively
donFibonacciRecursive = (index) => {
    if(index <= 1) return index;

    return donFibonacciRecursive(index-2) + donFibonacciRecursive(index-1);
}

// donFibonacciRecursive(7)

//Iterative method
donFibonacci = (index) => {
    var array = [0,1];
    for(let i=0 ; i<=index; i++) {
        array.push(array[i] + array[i+1]);
    }
    return array[index];
}

donFibonacci(7)