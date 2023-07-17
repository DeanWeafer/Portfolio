package Collats_Length;

import java.util.*;
public class Collats_Length
{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int start = sc.nextInt();
        int end = sc.nextInt();
        int target = sc.nextInt();
        sc.close();
        long array[] = new long[end-start + 1];
        int input[] = new int[end - start + 1];
        int num = start;
        for(int i = 0; i < array.length;i++){
            array[i] = Collatz(num);
            input[i] = num;
            num++;
        }
        System.out.println(SelectionSort(array,input,target));
        
    }
    public static long Collatz(int a){
        int collatz = 0;
        while(a !=1){
            if(a % 2 == 0){
                a = a/2;
                collatz++;
            }
            else{
                a = (a*3) + 1;
                collatz++;
            }
        }
        return collatz;
    }
    
    public static int SelectionSort(long array[], int input[], int target){
        int min =0;
        for(int outer =0; outer < input.length;outer++){
            min = outer;
            
            for(int i = outer+1;i<input.length;i++){
                if(check(array[i],array[min],input,i,min)){
                    min = i;
                }
            }
            swap(outer,min,input,array);
            if(outer == target-1){
                return input[outer];
            }
        }
        return -1;
    }
    public static void swap(int a, int b, int input[], long array[]){
        int temp = input[a];
        input[a] = input[b];
        input[b] = temp;
        
        long templ = array[a];
        array[a] = array[b];
        array[b] = templ;
    }
    public static boolean check(long a, long b, int input[], int i, int min){
        if(a<b){
            return true;
        }
        else if (a>b){
            return false;
        }
        else{
            if(input[i]<input[min]){
                return true;
            }
            else if(input[i]>input[min]){
                return false;
            }
            else{
                return false;
            }
        }
    }
}

