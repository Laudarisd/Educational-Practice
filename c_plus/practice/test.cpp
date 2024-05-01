#include <iostream>
using namespace std;

int f=1, i=2;
while(++i<5) {
   f*=i;
}
cout<<f;