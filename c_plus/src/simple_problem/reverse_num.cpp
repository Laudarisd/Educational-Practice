#include <iostream>
#include <stdlib.h>

using namespace std;


int main(){
    int n , rev=0 , rem;

    cout << "Enter a positive number" << endl;
    cin >> n;

    while (n!=0){
        rem = n%10;
        rev = rev*10 + rem;
        n = n/10;
    }
    cout << "Reverse of given number is" << endl;
    cout << rev << endl;
    return 0;
}