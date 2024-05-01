#include <iostream>
#include <stdlib.h>
#include <math.h>

using namespace std;


int main()
{
    int base, exponent, result;
    cout << "Enter base:";
    cin >> base;
    cout << "Enter exponent:";
    cin >> exponent;
    if (exponent == 0)
    {
        cout << "The result is 1" << endl;
    }
    else if (exponent == 1)
    {
        cout << "The result is " << base << endl;
    }
    else if (base == 0)
    {
        cout << "The result is 0" << endl;
    }
    else
    {
        result = pow(base, exponent);
        cout << "The result is " << result << endl;
    }
    return 0;
}
