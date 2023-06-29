
/**
 * Write a description of class Monte_Carlotest here.
 *
 * @author Dean Weafer
 * @version 20/10/2022 before lab4
 */
import java.util.*;
public class Monte_Carlotest
{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int x = sc.nextInt();
        sc.close();
        double num = 0.0;
        double ans = 0.0;
        while(num<=100000.0){
            int array[] = new int[n];
            int largest=0;
            ran(array);
            bubblesorting(array);
            largest = large(array,largest);
            if(largest>=x){
                ans++;
            }
            num++;
        }
        
        System.out.println(Math.round((ans/num)*100.0));
    }
    
    public static void bubblesorting(int num[]){// modifide method learned in CS162
        boolean done;
        int max = num.length;
        for(int i =1;i<max;i++)
        {
            done = true;
            max--;
            for(int j=0;j<max;j++){
                if(num[j]>num[j+1]){
                    int temp =num[j];
                    num[j] = num[j+1];
                    num[j+1] = temp;
                    done = false;
                }
            }
            if(done)return;
        }
    }
    public static int[] ran(int array[]){
        for(int i =0;i<array.length;i++){
            array[i] = (int)(Math.random()*365+1);
        }
        return array;
    }
    public static int large(int array[],int largest){
        int count=1;
        for(int i=0;i<array.length-1;i++){
            if(array[i] != array[i+1]){
                count=1;
            }
            else if(array[i] == array[i+1]){
                count++;
            }
            if(count> largest){
                largest = count;
            }
        }
        return largest;
    }
}


