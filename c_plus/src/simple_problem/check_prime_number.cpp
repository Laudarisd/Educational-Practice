#include <iostream>
#include <stdlib.h>
#include <math.h>

using namespace  std;

int main()
{
    int n;
    cout << "Enter a number:";
    cin >> n;

    if (n < 0)
    {
        cout << " Invalid input" << endl;
    }
    else if (n == 1)
    {
        cout << "1 is neither prime nor composite" << endl;
    }
    else
    {
        int i;
        for (i = 2; i < n; i++)
        {
            if (n % i == 0)
            {
                cout << n << " is not a prime number" << endl;
                break;
            }
        }
        if (i == n)
        {
            cout << n << " is a prime number" << endl;
        }
    }

}
