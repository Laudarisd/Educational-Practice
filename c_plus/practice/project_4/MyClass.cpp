#include <iostream>
using namespace std; 

class Queue { 
    int size; 
    int* queue; 
    
    public:
    Queue() { 
        size = 0;
        queue = new int[100];
    }
    void add(int data) { 
        queue[size] = data; 
        size++;
    }
    void remove() { 
        if (size == 0) { 
            cout << "Queue is empty"<<endl; 
            return; 
        } 
        else { 
            for (int i = 0; i < size - 1; i++) { 
                queue[i] = queue[i + 1]; 
            } 
            size--; 
        } 
    } 
    void print() { 
        if (size == 0) { 
            cout << "Queue is empty"<<endl; 
            return; 
        } 
        for (int i = 0; i < size; i++) { 
            cout<<queue[i]<<" <- ";
        } 
        cout << endl;
    }
    //your code goes here
    Queue operator+(Queue &that) {
        Queue result;
        for (int i=0; i<this->size; i++) {
           result.add(this->queue[i]);
        }
        for (int i=0; i<that.size; i++) {
           result.add(that.queue[i]);
        }
        return result;
    }
};

int main() { 
    Queue q1; 
    q1.add(42); q1.add(2); q1.add(8);  q1.add(1);
    Queue q2;
    q2.add(3); q2.add(66); q2.add(128);  q2.add(5);
    Queue q3 = q1+q2;
    q3.print();

    return 0; 
}