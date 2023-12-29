function isPalindrome(str) {
    // Remove spaces and convert to lowercase for case-insensitive comparison
    str = str.replace(/\s/g, '').toLowerCase();
    
    // Reverse the string
    const reversedStr = str.split('').reverse().join('');
    
    // Check if the original and reversed strings are the same
    return str === reversedStr;
}

// Prompt the user to enter a string
const userInput = prompt("Enter a string to check if it's a palindrome:");

if (userInput) {
    const result = isPalindrome(userInput);

    if (result) {
        alert(`"${userInput}" is a palindrome.`);
    } else {
        alert(`"${userInput}" is not a palindrome.`);
    }
} else {
    alert("You didn't enter a string.");
}
