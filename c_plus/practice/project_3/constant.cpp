#include <iostream>
using namespace std;

class MyClass
{
    public:
        void myPrint() const;
};

void MyClass::myPrint() const {
    cout <<"Hello"<<endl;
}

int main() {
    const MyClass obj;
    obj.myPrint();
}
