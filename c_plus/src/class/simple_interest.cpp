#include <iostream>
#include <cmath>
#include "simple_interest.h"

using namespace std;


int main()
{
    SimpleInterest interest;
    interest.principal = 2456000;
    interest.rate = 15;
    interest.time = 5;
    float simple_interest = interest.getInterest();
    //round off to 2 decimal places
    cout << "Simple Interest is " << llround(simple_interest)<< endl;


    // cout << "Simple Interest is " << simple_interest << endl;
    return 0;
}