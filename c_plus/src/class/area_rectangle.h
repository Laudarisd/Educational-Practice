class Rectangle
{
	public:
		int length;         //length of rectangle
		int breadth;        //breadth of rectangle
		/* declaring member functions */
		void setLength( int l );
		void setBreadth( int b );
		int getArea();
};

/* defining member functions */
void Rectangle::setLength( int l )
{
    length = l;
}
void Rectangle::setBreadth( int b )
{
    breadth = b;
}
int Rectangle::getArea()
{
    return length * breadth;
}

    