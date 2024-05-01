
#include <iostream>
#include <stdlib.h>
#include <math.h>

using namespace std;


int main()
{
    /* we need principal amount, interest rate, and time to find out compound interest */
    float principal, rate, time, compound_interest;
    cout << "Enter principal amount: ";
    cin >> principal;
    cout << "Enter interest rate: ";
    cin >> rate;
    cout << "Enter time in years: ";
    cin >> time;


    /* calculate compound interest */
    compound_interest = principal * (pow((1 + rate / 100), time));
    cout << "Compound interest of given principal amount is: " << compound_interest << endl;

    return 0;
}