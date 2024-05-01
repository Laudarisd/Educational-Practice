#include <iostream>
using namespace std;


class myClass{
    public:
    myClass(string nm){
        setName(nm);
    }
    void setName(string x){
        name =x;
    }
    string getName(){
        return name;
    }
    private:
    string name;
    
};
int main(){
    myClass ob1("David\n");
    myClass ob2("Amy");
    cout << ob1.getName();
    cout << ob2.getName();
}