#include <iostream>
#include "linearsearch_program.h"

using namespace std;


int main()
{
        int size;
        cout<<"\nEnter Size Of Array :: ";
        cin>>size;
        int array[size], key,i;

        for (int j=0;j<size;j++)
    {
                cout<<"\nEnter [ "<<j<<" ] Element :: ";
                cin>>array[j];
        }

        cout<<"\nThe Array entered is :: \n\n";

        for (int a=0;a<size;a++)
    {s
                cout<<"Arr[ "<<a<<" ]  =  ";
                cout<<array[a]<<endl;
        }

        cout<<"\nEnter any Key To Search in Array :: ";
        cin>>key;
        int result;

        result=recursiveLinearSearch(array,key,size--);

        if(result==1) {
                cout<<"\nKey Found in Array .\n ";
        } else {
                cout<<"\nKey NOT Found in Array .\n ";
        }
        return 0;
}