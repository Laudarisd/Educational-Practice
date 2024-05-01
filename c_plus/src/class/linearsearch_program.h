int recursiveLinearSearch(int array[],int key,int size)
{
        size=size-1;
        if(size <0)
    {
                return -1;
        }
        else if(array[size]==key)
        {
                return 1;
        }
        else
        {
                return recursiveLinearSearch(array,key,size);
        }
}