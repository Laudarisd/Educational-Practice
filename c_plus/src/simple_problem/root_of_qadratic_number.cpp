#include <iostream>
#include <stdlib.h>
#include <cmath>

using namespace std;


int main()
{
    float a, b, c, root1, root2, determinant, realpart, imaginarypart;
    cout << "Enter coefficients a, b, and c: ";
    cin >> a >> b >> c;

    determinant  = b*b - 4*a*c;

    if (determinant > 0)
    {
       root1 = (-b + sqrt(determinant)) / (2*a);
       root2 = (-b - sqrt(determinant)) / (2*a);
       cout << "\nRoots are real and different." << endl;
       cout << "\nRoot1 = " << root1 << endl;
       cout << "\nRoot2 = " << root2 << endl;
    }
    else if (determinant == 0)
    {
        cout << "\nRoots are real and same." << endl;
        root2 = (-b + sqrt(determinant)) / (2*a);
        cout << "\nRoot1 = Root2 = " << root1 << endl;
    }
    else
    {
        realpart = -b/(2*a);
        imaginarypart = sqrt(-determinant) / (2*a);
        cout << "\nRoots are complex and different." << endl;
        cout << "\nRoot1 = " << realpart << "+" << imaginarypart << "i" << endl;
        cout << "\nRoot2 = " << realpart << "+" << imaginarypart << "i" << endl;
    }
    return 0;

}

 
