/* A palindromic number is a number (such as 626) that remains the same when its digits are reversed.
Write a function that returns true if a given number is a palindrome, and false, if it is not.
Complete the given function, so that the code in main works and results in the expected output.
*/



#include <iostream>
using namespace std;

bool isPalindrome(int x) {
    int temp = x;
    int reverse = 0;
    while (temp != 0){
        reverse = reverse * 10 + temp % 10;
        temp = temp / 10;
    }
    if (reverse == x){
        return true;
    }
    else{
        return false;
    }
}

int main() {
    int n;
    cin >>n;
    
    if(isPalindrome(n)) {
        cout <<n<<" is a palindrome";
    }
    else {
        cout << n<<" is NOT a palindrome";
    }
    return 0;