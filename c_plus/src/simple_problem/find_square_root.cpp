#include <iostream>
#include <stdlib.h>
#include <math.h>

using namespace std;


int main()
{ float sq;
float n;

cout << "Enter a number: ";
cin >> n;

if (n == 0)
{
    cout << "Square root of 0 is o" << endl;
}
else if (n < 0)
{
    cout << "Square root of negative number is not possible" << endl;
}
else
{
    sq = sqrt(n);
    cout << "Square root of " << n << " is " << sq << endl;
}
return 0;

}
    