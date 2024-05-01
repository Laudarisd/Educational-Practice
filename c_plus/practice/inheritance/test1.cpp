#include <iostream>
using namespace std;

class Enemy {
    protected:
        int attackPower;
    public:
        void setAttackerPower(int a){
            attackPower = a;
        }
};

class Ninja: public Enemy {
    public:
        void attack() {
            cout << "Ninja! - "<<attackPower<<endl;
        }
};

class Monster: public Enemy {
    public:
        void attack() {
            cout << "Monster! - "<<attackPower<<endl;
        }
};

int main() {
    Ninja n;
    Monster m;
    Enemy *e1 = &n;
    Enemy *e2 = &m;

    e1->setAttackerPower(20);
    e2->setAttackerPower(80);

    n.attack();
    m.attack();
}