class AreaofRectangle
{
    public:
    int length;
    int breadth;
    /* declare member function*/
    void setLength(int l)
    {
        length = l;
    }
    void setBreadth(int b)
    {
        breadth = b;
    }
    int getArea()
    {
        return length * breadth;
    }
};