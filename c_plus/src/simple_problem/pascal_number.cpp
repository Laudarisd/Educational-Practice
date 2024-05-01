#include <iostream>
#include <stdlib.h>

using namespace std;

// function to calculate factorial long fact(int x)

long fact(int x) {
    int i;
    long f = 1;

    for (i=1; i<=x; i++) {
        f = f * i;
}
return f;
}

int main() {
    int i, j, k , n ;

    cout << "How many line do you want to print?" << endl;
    cin >> n;

    for (i=0; i<n; ++i) 
    {
        //loop to print spaces at starting of each row
        for (j=0; j<n-i-1; ++j) 
        {
            cout << " ";
        }
        
    //loop to calculate each value in a row and print it for(k=0; k<=i; ++k)
        for (k=0; k<=i; ++k) 
        {
            cout << fact(i) / (fact(k) * fact(i-k)) << " ";
        }
       
    cout << "\n"; //print new line after each row
    }
    return 0;
}


