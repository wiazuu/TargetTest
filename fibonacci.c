#include <stdio.h>

void ChecarOFibonacci(int num){
    int a = 0, b = 1, temp;

    if (num == a || num == b){
        printf("O numero pertence a sequencia de Fibonacci");
        return;
    }

    while (b < num){
        temp = b;
        b = a + b;
        a = temp;
    }

    if (b == num){
        printf("O numero pertence a sequencia de Fibonacci");
    } else {
        printf("O numero nao pertence a sequencia de Fibonacci");
    }
}


int main() {
    int num;

    printf("Digite um numero: ");
    scanf("%d", &num);

    ChecarOFibonacci(num);

    return 0;
}