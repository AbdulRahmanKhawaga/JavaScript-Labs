// 1- Function accept a full name string and convert each letter of 
// first world to Capital and the remaining to small (Pascal 
// Case). 

function PascalCaseConverter(fullname){
    return fullname.split(' ').map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()).join(' ');
}

//  2- Function that accept a sentence and return the longest word within the input
//  Example : 'Web Development Tutorial'
//  Output : 'Development'

function findLongestWord(sentence) {
    return sentence.split(' ').sort((a, b) => b.length - a.length)[0];
}


//  3- Write a JavaScript Function that returns a passed string with letters in alphabetical order
//  //Example : javascript
//  //Output : aacijprstv

function stringAlphabeticallSort(str) {
    return str.split('').sort().join('');
}


//  4- Write a function that takes two arrays and returns an array of common elements using filter() or a loop.
//  Example: const arr1 = [1, 2, 3]; const arr2 = [2, 3, 4]; Returns [2, 3].

function getCommonArrayElements(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
}

//  5- make Array of duplicates numbers and remove it in new array
function removeDuplicates(arr) {
        const newarr = [];
        arr.forEach(function(num) {
            if (!newarr.includes(num)) {
                newarr.push(num);
            }
        })
        return newarr;
}