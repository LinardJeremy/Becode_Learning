let selectElementsStartingWithA = (array) => {
    let array2 = [];
    for (let i=0; i<array.length;i++){
        if (array[i].indexOf("a") ===0){
            array2.push(array[i]);
        }
    }
     return array2;
}

let selectElementsStartingWithVowel = (array) => {
    let array2 = [];
    for (let i=0; i<array.length;i++){
        if (array[i].indexOf("a") ===0||array[i].indexOf("e")===0||array[i].indexOf("i")===0||array[i].indexOf("o")===0||array[i].indexOf("u")===0||array[i].indexOf("y")===0)
        {
            array2.push(array[i]);
        }
    }
     return array2;
}

let removeNullElements = (array) => {
   
    let array2 = array.filter(function (el) {
        return el != null;
      });
      
    return array2;
}

let removeNullAndFalseElements = (array) => {
    let array2 = [];
    for (let i =0;i<array.length;i++){
        if (array[i]!=null && array[i]!=false){
            array2.push(array[i]);
        }
        if (array[i]===0){
            array2.push(array[i]);
        }
    }
      
    return array2;
}

let reverseWordsInArray = (array) => {
  let array3 = [];
  for (let i=0;i<array.length;i++){
  array3.push(array[i].split('').reverse('').join(''));
  }
    return array3;
}

let everyPossiblePair = (array) => {
    let array2 = [];
    array2 = [[array[2],array[0]],[array[2],array[1]], [array[0],array[1]]];
    return array2;
}

let allElementsExceptFirstThree = (array) => {
    return array.slice(3);
}

let addElementToBeginning = (array, element) => {
    array.unshift(element);
    return array;
}

let sortByLastLetter = (array) => {
    
    function comparator(a,b) {
        if (a.slice(-1) < b.slice(-1)) return -1;
        if (a.slice(-1) > b.slice(-1)) return 1;
        return 0;
    }
    return  array.sort(comparator);
}

let getFirstHalf = (string) => {
   return string.slice(0,3);
}

let makeNegative = (number) => {
    return -Math.abs(number);
}

let numberOfPalindromes = (array) => {
    let array2 = [];
    let t =0;
  for (let i=0;i<array.length;i++){
  array2.push(array[i].split('').reverse('').join(''));
  }
  for (let j=0;j<array.length;j++){
      if (array[j]===array2[j]){
          t++;
      }
  }
    return t;
}

let shortestWord = (array) => {
    function findShortest(arry) {
        return arry.reduce(function(prevWord,currWord) {
            if (currWord.length < prevWord.length) {
                return currWord;
            }
            else 
                return prevWord;
        })
    }
return findShortest(array);
}


let longestWord = (array) => {
    function findShortest(arry) {
        return arry.reduce(function(prevWord,currWord) {
            if (currWord.length > prevWord.length) {
                return currWord;
            }
            else 
                return prevWord;
        })
    }
    return findShortest(array);
}

let sumNumbers = (array) => {
    let number =0;
    for(let i =0;i<array.length;i++){
       number +=array[i];
    }
    return number;
}

let repeatElements = (array) => {
   let array2 = array.concat(array);
   
    return array2 ;
}

let stringToNumber = (string) => {
    return parseInt(string);
}

let calculateAverage = (array) => {
    let number =0;
    let x =Number;
    for (let i=0;i<array.length;i++){
        number +=array[i];
         x = number/(array.length)
    }
    return x;
}

let getElementsUntilGreaterThanFive = (array) => {
    let array2= array.slice(0,6);
    return array2;
}

let convertArrayToObject = (array) => {
let obj = {};
for(let i=0;i<array.length;i+=2){
obj[array[i]]= array[i+1];
}
return obj;
    
}

let getAllLetters = (array) => {
    array2 =[];
    array3 =[];
     array.forEach(e => {
        array2.push(...e);
    });
    return [...new Set(array2.sort())];
}
let swapKeysAndValues = (object) => {
    let obj ={};
    Object.entries(object).forEach(entry =>{
        let key = entry[0];
        let value = entry[1];
        obj[value] = key;
    });
    
    return obj;
}

let sumKeysAndValues = (object) => {
   let sum1 = Object.values(object).reduce((a, b) => a + b, 0);
  array = Object.keys(object);
  let array2 = [];
  for(let i=0;i<array.length;i++){
      array2.push(parseInt(array[i]));
  }
  let sum2 = array2.reduce((a, b) => a + b, 0);
    return (sum1+sum2);
}

let removeCapitals = (string) => {
    return string.replace((/[A-Z]/g),"");
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
let dd = date.getDate();
let mm = date.getMonth()+1; 
var yyyy = date.getFullYear();
date = "0"+dd+'/'+"0"+mm+'/'+yyyy;
    return date;
}

let getDomainName = (string) => {
    return string.slice(string.indexOf("@") + 1, string.lastIndexOf('.'));
}

let titleize = (string) => {
     string = string.replace((/w/g),"W");
     string = string.replace((/l/g),"L");
     string = string.replace("t","T");
    if (string.match(/[.]/g)) {
    string = string.replace(("a"),"A");
    }
    return string

}

let checkForSpecialCharacters = (string) => {
   function findSpecial(){
   if (string.match(/\W|_/g)){
       return true
   }
   else {
       return false
   }
   }
    return findSpecial();
}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
    function factorial(x) 
{ 
  if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1); 
}
    return factorial(number);
}

let findAnagrams = (string) => {   
     const chars = string.split('');
    let anagrams = [];
    for (let i = 0; i < chars.length; i++) {
        let word = string.split('');
        for (let j = 0; j < chars.length; j++) {
            word.splice(j, 0, word.splice(i, 1).join());
            !anagrams.includes(word.join('')) && anagrams.push(word.join(''));
        }
    }
    return anagrams;
}

let convertToCelsius = (number) => {
    return Math.round((number-32) / 1.8);
}

let letterPosition = (array) => {
    let array2 = [];
    for (let i=0;i<array.length;i++){
        array2.push( array[i].toLowerCase().charCodeAt()-96);
    }
    return array2;
}
