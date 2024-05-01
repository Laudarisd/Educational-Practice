#include <iostream>
#include <stdlib.h>
using namespace std;

int main()
{
    /* define range*/
    int min = 1;
    int max = 100;
    /* required numbers*/
    int number = 10;
    /* generate random numbers*/
    for (int i = 0; i < number; i++)
    {
        int random = min + rand() % (( max + 1 ) - min);
        cout << random << endl;
    }
    return 0;
}