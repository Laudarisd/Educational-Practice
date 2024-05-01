#include <iostream>
#include <stdlib.h>
using namespace std;



int main()
{
    float a, b, c, sum, ave;

    cout << "Enter first numvber: ";
    cin >> a;
    cout << "Enter second number: ";
    cin >> b;
    cout << "Enter third number: ";
    cin >> c;

    sum = a + b + c;
    ave = sum / 3;

    cout << "The sum of the three numbers is: " << sum << endl;
    cout << "The average of the three numbers is: " << ave << endl;

    return 0;
}