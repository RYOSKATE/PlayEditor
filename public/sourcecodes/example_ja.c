#include<stdio.h>
int recursiveToThree(int n){
    printf("%d times\n", n + 1);
    if(n < 3){
        int r = recursiveToThree(n + 1);
        n = r;
    }
    return n;
}
int main(){
    int n = 0;//変数宣言の例

    n = recursiveToThree(0);//再帰関数呼び出しの例

    int arr[5] = {1, 2, 3};//配列変数の例

    int* ptr = &arr[2];//ポインタ変数の例
    *ptr = 5;

    //メモリの動的確保の例
    int* d_arry = malloc(sizeof(int) * 3);

    //動的な2次元配列の例
    int* pd_arr[2];
    pd_arr[0] = malloc(sizeof(int) * 2);
    pd_arr[1] = malloc(sizeof(int) * 2);

    printf("Hello,world!\n");//標準出力の例

    //メモリリークの例
    free(pd_arr[0]);
    return 0;
}