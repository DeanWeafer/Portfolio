#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() {
    int num[] ={0, 0, 0, 0, 0, 0, 0, 0, 0, 0};
    int count;
    char s[1000];
    scanf("%s", s);
    for(int i =0;s[i] != '\0';i++){
        
        count = s[i] - '0';
        if(0 <= count && count<=9){
            ++num[count];
        }
        
    }
    for(int i =0;i<=9;i++){
        printf("%d ",num[i]);
    }
    
    return 0;
}