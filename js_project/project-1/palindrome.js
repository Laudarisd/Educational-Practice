/*Write a function called palindrome that takes a string, str. If str is a palindrome, return true, otherwise return false.*/

// To understand the palindrome check: https://www.freecodecamp.org/news/freecodecamp-palindrome-checker-walkthrough/


//Solution


function palindrome(str) {
    const alphanumericOnly = str
        // 1) Lowercase the input
        .toLowerCase()
        // 2) Strip out non-alphanumeric characters
        .match(/[a-z0-9]/g);
        
    // 3) return string === reversedString
    return alphanumericOnly.join('') ===
        alphanumericOnly.reverse().join('');
}



palindrome("eye");
