// JavaScript program to reverse 
// a String

// Reverse the letters of 
// the word 
function reverse(str, start, end) {
    // Temporary variable to 
    // store character 
    let temp;

    while (start <= end) {
        // Swapping the first and 
        // last character 
        temp = str[start];
        str[start] = str[end];
        str[end] = temp;
        start++;
        end--;
    }
}

// Function to reverse words
function reverseWords(s) {
    // Reversing individual words as
    // explained in the first step
    s = s.split("");// I love program very much
    let start = 0;
    for (let end = 0; end < s.length; end++) {
        // If we see a space, we reverse 
        // the previous word
        if (s[end] == ' ') {
            reverse(s, start, end - 1);
            start = end + 1;
        }
    }
    // Reverse the last word
    reverse(s, start, s.length - 1);

    // Reverse the entire String
    reverse(s, 0, s.length - 1);
    return s.join("");
}

// Driver Code
let s = "I am new to JAVA";
console.log(reverseWords(s));



/*

<ul>
<li>Match Little</li>
<li>Match Order</li>
<li>Match New</li>
<li>Match Other</li>
</ul>

*/