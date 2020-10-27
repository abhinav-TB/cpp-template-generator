# include <iostream>
# include <math.h>

using namespace std;

class Any{
  
private:
   int var1;
   int var2;
public:
    Any(){};
    Any(int , int );
    ~Any();
    void show();
    int getdata(){
        return var1;
    }
};

Any::Any(int a ,int b)
{
    this->var1=a;
    this->var2=b;
}

Any::~Any()
{
}
void Any::show(){
    
    cout<<var1<<endl;
    cout<<var2<<endl;

}

int main(){
    
    return 0;
}
