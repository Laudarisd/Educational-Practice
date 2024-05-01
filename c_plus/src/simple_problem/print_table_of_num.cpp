#include <iostream>
#include <stdlib.h>

using namespace std;


int main(){
    int i , n , table=1;

    cout << "Enter a positive number" << endl;
    cin >> n;

    cout << "Multiplicatin of given number is" << endl;

    for (i=1; i<=10; i++){
        table = n*i;
        cout << n << " * " << i << " = " << table << endl;
    }
    return 0;
}