//Write a Javascript function to count how many vowels are in an argument string.

MonoTong = (string) => {
    string = string.toLowerCase();
    vowel = ['a','e','i','o','u'];

    let count = 0;

    for (let i = 0; i < string.length; i++) {
        if (vowel.indexOf(string[i]) !== -1) {
            count++;
        }
    }
   return count;
    
}

MonoTong('abc')