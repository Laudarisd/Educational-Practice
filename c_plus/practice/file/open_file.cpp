#include <iostream>
#include <fstream>
using namespace std;

int main () {
    ofstream MyFile1("test.txt");
    
    MyFile1 << "This is awesome! \n";
    MyFile1.close();

    string line;
    ifstream MyFile("test.txt");
    while ( getline (MyFile, line) ) {
        cout << line << '\n';
    }
    MyFile.close();
}