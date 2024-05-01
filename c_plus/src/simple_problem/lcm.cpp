/* find the LCM of given numbers */

#include <iostream>
#include <stdlib.h>

using namespace std;

void LCM(int a, int b);

int main() {
    int a, b;
    cout << "Enter first number" << endl;
    cin >> a;
    cout << "Enter second number" << endl;
    cin >> b;
    LCM(a, b);
    return 0;
}

void LCM(int a, int b) {
    int m, n, lcm;
    m = a;
    n = b;
    while (m != n) {
        if (m > n)
            m = m - n;
        else
            n = n - m;
    }
    lcm = (a * b) / m;
    cout << "LCM of " << a << " and " << b << " is " << lcm << endl;
}