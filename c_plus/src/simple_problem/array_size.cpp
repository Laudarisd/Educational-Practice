#include <iostream>
using namespace std;

int main()
{
    int array[7] = {1, 2, 3, 4, 5, 6, 7};
    cout << "The size of the array is " << sizeof(array) << endl;
    cout << "The size of the array is " << sizeof(array[0]) << endl;
    cout << "The size of the array is " << sizeof(array) / sizeof(array[0]) << endl;
    return 0;
}
