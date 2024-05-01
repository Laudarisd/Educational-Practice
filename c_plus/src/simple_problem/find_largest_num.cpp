#include <iostream>
#include <stdlib.h>

using namespace std;

int main(){
    int a, b, c;

    cout << " Enter first number" << endl;
    cin >> a;
    cout << " Enter second number" << endl;
    cin >> b;
    cout << " Enter third number" << endl;
    cin >> c;

    if (a>=b && a>=c){
        cout << "Largest number is" << endl;
        cout << a << endl;
    }
    else if (b>=a && b>=c){
        cout << "Largest number is" << endl;
        cout << b << endl;
    }
    else{
        cout << "Largest number is" << endl;
        cout << c << endl;
    }
    return 0;
}