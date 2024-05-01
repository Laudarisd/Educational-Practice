#include <iostream>
using namespace std;

int main()
{
    // calculate and output how many empty seats the last bus will have.
    int input;
    cin >> input;
    cout << 50 - input % 50;
    return 0;
}