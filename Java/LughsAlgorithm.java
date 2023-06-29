
/**
 * From the furthest right, which is the check digit and moving left,
 * double the value of every second digit. If the result is greater
 * than 9, then add the digits of the product. Or the same result 
 * can be found bysubtacting 9 from the product.
 * 
 * Take the sum of all the digits
 * 
 * If the total mod 10 is equal to 0, then the number is valid
 * else it is not valid
 *
 * @author Dean Weafer
 * @version (a version number or a date)
 */
import java.util.*;
public class LughsAlgorithm
{
    public static void main(String args[])
    {
        Scanner myscanner = new Scanner(System.in);
        String numbers = myscanner.nextLine();
        myscanner.close();
        int firstsum=0;
        int secondsum=0;
        if(numbers.length()-1>=4 && numbers.length()-1 <=30)
        {
            int [] myarray = new int[numbers.length()];
             for(int i=0;i<numbers.length();i++){
                 myarray[i] = Integer.parseInt(numbers.substring(i,i+1));
             }
             for(int i=numbers.length()-2;i>=0;i=i-2){
                myarray[i] = myarray[i]*2;
                if(myarray[i]>9){
                   myarray[i]=myarray[i]-9;
                }
                secondsum = secondsum + myarray[i];
             }
             for(int i =numbers.length()-1;i>=0;i=i-2){
               firstsum = firstsum+myarray[i];
             }
    
             if(((firstsum+secondsum)%10)==0){
                System.out.println("Valid");
             }
    }
    else{
        System.out.println("Invalid");
    }
    }
             
       
    
    
}

    

