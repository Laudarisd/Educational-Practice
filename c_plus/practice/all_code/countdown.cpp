#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    //your code goes here
    /*Given a number N as input, output numbers from N to 1 on separate lines.
Also, when the current countdown number is a multiple of 5, the app should output "Beep".*/
    // while (n >= 1) {
    //     if (n % 5 == 0) {
    //         cout << "Beep" << endl;
    //     } else {
    //         cout << n << endl;
    //     }
    //     n--;
    // }
    // return 0;
  while (n >= 1)
  {
    if (n % 5 == 0)
    {
        cout << n << "Beep" << endl;
    }
    else
    {
        cout << n << endl;
    }
    n--;
  }
}