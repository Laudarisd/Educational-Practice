
class Balance
{
    public:
        int initial_balance;
        int withdraw;
        int deposit;
        int final_balance;
        char insufficent_funds;
        void setInitialBalance(int i)
        {
            initial_balance = i;
        }
        void setWithdraw(int w)
        {
            withdraw = w;
        }
        void setDeposit(int d)
        {
            deposit = d;
        }
        // get balance with conditions
        int getFinalBalance()
        {
            final_balance = initial_balance - withdraw + deposit;
            return final_balance;
        }
};