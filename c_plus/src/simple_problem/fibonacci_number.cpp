#include <iostream>
#include <stdlib.h>

using namespace std;


int main(){
    /* Fibonacci Series is in the form of 0, 1, 1, 2, 3, 5, 8, 13, 21,…… To find this series we add 
    two previous terms/digits and get next term/number. */
    int i, n , first_num=0, second_num=1, next;
    first_num = 0;
    second_num = 1;

    cout << "Enter a lpositive number" << endl;
    cin >> n;

    cout << "Fibonacci Series is" << endl;
    for (i=0; i<n; i++){
        if (i<=1){
            next = i;
        }
        else{
            next = first_num + second_num;
            first_num = second_num;
            second_num = next;
        }
        cout << next << endl;
    }
}