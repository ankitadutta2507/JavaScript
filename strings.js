// 31. Reverse a string.
let str = prompt("Enter a string");
let reversedString = "";
for (let i = str.length-1; i>=0; i--){
reversedString += str[i];
}
console.log(Original String: ${str}, and reversed string: ${reversedString});
//_____________________________________________________________________________
// 32. Count characters in a string.
let str = prompt("Enter a string");
let characters = str.length;

console.log("Total number of characters in your string =", characters);
//_____________________________________________________________________________
// 33. Count vowels in a string.
let str = prompt("Enter your string");
let vowelCount = 0;

for (let i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i].toLowerCase())) {
        vowelCount++;
    }
}

console.log("Count of vowels is", vowelCount);
//_____________________________________________________________________________

// 34. Count consonants.

let str = prompt("Enter your string");
let consonantCount = 0;

for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();

    if (char >= "a" && char <= "z") {
        if (!"aeiou".includes(char)) {
            consonantCount++;
        }
    }
}

console.log("Consonant count of the string is:", consonantCount);
//_____________________________________________________________________________
// 35. Check whether a string is a palindrome.
let str = prompt("Enter a string:").toLowerCase();
let reversedStr = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}

if (str === reversedStr) {
    console.log(`${str} is a Palindrome`);
} else {
    console.log(`${str} is not a palindrome`);
}
//____________________________________________________________________________
// 36. Find the longest word in a sentence.
let sentence = prompt("Enter a sentence");
let words = sentence.split(" ");
let longest = "";

for (let word of words) {
    if (word.length > longest.length) {
        longest = word;
    }
}

console.log("Longest word in the sentence is", longest);
//_________________________________________________________________________________
// 37.Capitalize the first letter of every word.
let sentence = prompt("Enter a sentence");
let words = sentence.split(" ");
let capitalizedArr = [];

for (let word of words) {
    capitalizedArr.push(
        word[0].toUpperCase() + word.slice(1).toLowerCase()
    );
}

console.log(capitalizedArr.join(" "));
//______________________________________________________________________________________
// 38. Remove spaces from a string.

let str = prompt("Enter a string");
str = str.replace(/\s/g, "");

console.log(str);
//_________________________________________________________________________________________

// 39. Count how many times a character occurs.

let str = prompt("Enter the string:").toLowerCase();
let char = prompt("Which character do you want to check?").toLowerCase();
let count = 0;

if (char.length !== 1) {
    console.log("Please enter exactly one character.");
} else {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }

    console.log(`The character "${char}" occurs ${count} times.`);
}
//__________________________________________________________________________________________
// 40. Find the first non-repeating character.
// 40. Find the first non-repeating character.(Copied)

let str = prompt("Enter a string:");
let frequency = {};

for (let char of str) {
    if (frequency[char]) {
        frequency[char]++;
    } else {
        frequency[char] = 1;
    }
}

let found = false;

for (let char of str) {
    if (frequency[char] === 1) {
        console.log(`First non-repeating character is: ${char}`);
        found = true;
        break;
    }
}

if (!found) {
    console.log("There is no non-repeating character.");
}
