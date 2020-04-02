//Write a class method to return the number of tyres of a Car Class

class AutoBahn {
    constructor(number) {
        this.tyre = number
    }
    tyreNumber(){
        return this.tyre;
    }
}

car = new AutoBahn(4)
car.tyreNumber()