/* A Palindrome number is a number that remains the same when its digits are reversed.
For example: we take 121 and reverse it, after reverse it is same as original.*/


#include <iostream>
#include <stdlib.h>

using namespace std;


int main(){
    int n , rev=0 , rem, temp;
    cout << "Enter a positive number" << endl;
    cin >> n;
    temp = n;
    while (n!=0){
        rem = n%10;
        rev = rev*10 + rem;
        n = n/10;
    }
    if (temp == rev){
        cout << "Number is palindrome" << endl;
    }
    else{
        cout << "Number is not palindrome" << endl;
    }
    return 0;
}