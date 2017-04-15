#include<stdio.h>
int recursiveToThree(int n){
    printf("%d th\n", n + 1);
    if(n < 3){
        int r = recursiveToThree(n + 1);
        n = r;
    }
    return n;
}
int main(){
    int n = 0;//example of variable declaration

    n = recursiveToThree(0);//example of recursive function

    int arr[5] = {1, 2, 3};//example of array variable

    int* ptr = &arr[2];//example of pointer variable
    *ptr = 5;

    //example of dynamic memory allocation
    int* d_arry = malloc(sizeof(int) * 3);

    //example of two-dimensional dynamic array
    int* pd_arr[2];
    pd_arr[0] = malloc(sizeof(int) * 2);
    pd_arr[1] = malloc(sizeof(int) * 2);

    printf("Hello,world!\n");//example of standard output

    //example of memory leak
    free(pd_arr[0]);
    return 0;
}