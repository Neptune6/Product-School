
//define the input to the function
//write a function that will take the input and reverse the workd


var inputOne = 'racecar'
var inputTwo = 'nickname'

function getReverseWord(word) {
    //0123456    
    //racecar
   
    //var newReverseWord = word[6] + word[5]+ word[4]+ word[3]+ word[2]+ word[1]+ word[0]
    var newReverseWord = ''; //setting this to blank at first
    for(var i=word.length - 1; i > -1; i=i-1){ //For loop. i if the value you want to initially declare. When i is greater than -1, continue the loop. i-1 will decrease the number
    //In here, this statement will run as many times until we exit the loop
     newReverseWord = newReverseWord + word[i];
    }
    
    return newReverseWord;
}

function isPalindrome(input){
    
    var ReverseWord = getReverseWord(input);
    if (input === ReverseWord){
        return true;
    } else{
        return false;
    }
}

console.log(isPalindrome(inputOne));
console.log(isPalindrome(inputTwo));