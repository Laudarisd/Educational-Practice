#include <iostream>
#include "area_v2.h"

using namespace std;


int main()
{
    AreaofRectangle area;
    area.setLength(7);
    area.setBreadth(4);
    int t = area.getArea();
    cout << "Area of given rectangle is : " << t << endl;
    return 0;
}