/*  C++ Program to Access Protected Data Member using Inheritance  */

#include <iostream>
#include "area_rectangle.h"

using namespace std;


int main()
{
	Rectangle rt;
	rt.setLength(7);
	rt.setBreadth(4);
	int area = rt.getArea();
	cout << "Area : " << area << endl;
	return 0;
}