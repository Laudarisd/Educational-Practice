#include "MyClass.h"
#include <iostream>
using namespace std;

MyClass::MyClass() {
}
void MyClass::myPrint() {
    cout <<"Hello"<<endl;
}

int main() {
    MyClass obj;
    obj.myPrint();
}
