#include <iostream>
using namespace std;


int main()
{
    int mark = 100;

    if (mark >= 50)
    {
        cout << " You have passed the exam" << endl;
        if (mark >= 80)
        {
            cout << " You have got a distinction" << endl;
        }
        else if (mark >= 60)
        {
            cout << " You have got a merit" << endl;
        }
        else
        {
            cout << " You have got a pass" << endl;
        }
    }
    else
    {
        cout << " You have failed the exam" << endl;
    }
    return 0;
}