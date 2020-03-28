//Write a JavaScript program to get a list of elements that exist in two separate arrays

intersectionEye = (arr1, arr2) => {
    var hashmap = {};
    var commonElements = [];

    for(let i=0; i<arr1.length;i++) {
    let value = arr1[i];
       if(!hashmap[value]) {
           hashmap[value] = 1;
       }
    }

     for(let j=0; j<arr2.length; j++) {
         let value2 = arr2[j];
         if(hashmap[value2]){
            commonElements.push(value2);
        }
     }

     return commonElements;
}


intersectionEye(['a','b',3],[1,2,3])