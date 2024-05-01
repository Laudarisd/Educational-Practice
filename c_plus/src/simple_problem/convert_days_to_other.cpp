#include <iostream>
#include <stdlib.h>

using namespace std;

int main()
{
    /*convert days to hour, week, month and year*/
    int days, hour, week, month, year;
    cout << "Enter days: ";
    cin >> days;

    /* convert to hour*/
    hour = days * 24;
    cout << "Hour: " << hour << endl;
    week = days / 7;
    cout << "Week: " << week << endl;
    month = days / 30;
    cout << "Month: " << month << endl;
    year = days / 365;
    cout << "Year: " << year << endl;

    return 0;


}