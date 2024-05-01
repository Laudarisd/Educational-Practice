class SimpleInterest
{
    public:
        float principal, rate, time, interest;
        
        int getInterest()
        {
            return (principal * rate * time) / 100;
        }
};