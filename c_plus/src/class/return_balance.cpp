#include <iostream>
#include "return_balance.h"

using namespace std;


int main()
{
    Balance balance;
    balance.setInitialBalance(1000);
    balance.setWithdraw(2000);
    balance.setDeposit(0);
    int t = balance.getFinalBalance();
    
    //check if withdraw is greater than initial balance
    if (balance.getFinalBalance() < 0)
    {
        cout << "Insufficent funds" << endl;
    }
    else
    {
        cout << "Final balance is : " << t << endl;
    }
    
    return 0;
}