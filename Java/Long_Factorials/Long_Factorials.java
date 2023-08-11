package Long_Factorials;

import java.io.*;
import java.math.*;

class Result {

   // This code is a hackerrank question, my work is the extraLongFactorials method below

    public static void extraLongFactorials(int n) {
    BigInteger a = new BigInteger("1");
    BigInteger one = new BigInteger("1");
    BigInteger num = new BigInteger(""+n);
    while(!num.equals(one)){
        a = a.multiply(num);
        num = num.subtract(one);
    }
    System.out.println(a.toString());
    

    }

}

public class Long_Factorials {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(bufferedReader.readLine().trim());

        Result.extraLongFactorials(n);

        bufferedReader.close();
    }
}
