#include <iostream>
using namespace std;

int main()
{
    int number1;
    int number2;
    int quotient;
    int reminder;

    cout << "Enter first number : " << endl;
    cin >> number1;
    cout << "Enter second number : " << endl;
    cin >> number2;

    quotient = number1 / number2;
    reminder = number1 % number2;

    cout << "Quotient of entered numbers is : " << quotient << endl;
    cout << "Reminder of entered numbers is : " << reminder << endl;
    return 0;


}