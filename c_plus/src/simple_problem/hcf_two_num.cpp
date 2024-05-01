/* Find HCF of two number by using function */

#include <iostream>
#include <stdlib.h>

using namespace std;

// int hcf(int a, int b){
//     int temp;
//     while (b!=0){
//         temp = b;
//         b = a%b;
//         a = temp;
//     }
//     return a;
// }


void gcd(int a, int b);

int main(){
    int a, b;
    cout << "Enter first number" << endl;
    cin >> a;
    cout << "Enter second number" << endl;
    cin >> b;
    gcd(a, b);
    return 0;
}

void gcd(int a, int b){
    int m,n;

    m=a;
    n=b;

    while(m!=n)
    {
        if(m>n)
            m=m-n;
        else
            n=n-m;
    }

    cout<<"\nH.C.F of  "<<a<<"  and  "<<b<<"  is :: "<<m<<"\n";
}