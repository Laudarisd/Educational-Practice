#include <iostream>
using namespace std;

int main()
{
    int a;
    int b;

    cout << "Enter numbers: " << a << " " << b << endl;
    cin >> a >> b;

    cout  << "Numbers before swapping : " << a << " " << b << endl;
    swap(a, b);
    cout << "Numbers after swapping : " << a << " " << b << endl;
    return 0;
    
}