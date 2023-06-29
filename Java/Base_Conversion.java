
/**
 * The goal is to change a number from one base to another
 *
 * @author Dean Weafer
 * @version 25/10/2022
 */
import java.util.*;
public class Base_Conversion
{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        long basefrom = sc.nextLong();
        long baseto = sc.nextLong();
        String number = sc.next();
        sc.close();
        boolean minus = false;
        if(number.substring(0,1).equals("-")){
            minus = true;
            number = number.substring(1);
        }
        long ans = convertToDecimal(basefrom,number);
        String answer = convertToBase(baseto,ans);
        if(minus){
            System.out.println("-" + answer);
        }
        else{
            System.out.println(answer);
        }
    }
    public static long convertToDecimal(long fr,String num){
        long sum =0;
        long power =0;
        for(int i =num.length()-1;i>=0;i--){
            sum = (trueValue(num.substring(i,i+1)))*(int)Math.pow(fr,power) + sum;
            power++;
        }
        return sum;
    }
    public static String convertToBase(long to, long ans)
    {
        String printed = "";
        long num =0;
        while(ans !=0){
            num = ans%to;
            printed = numToLetter(num) + printed;
            ans = (ans-num)/to;
        }
        return printed;
    }
    public static long trueValue(String a){
        if(a.equals("0")){
            return 0;
        }
        if(a.equals("1")){
            return 1;
        }
        if(a.equals("2")){
            return 2;
        }
        if(a.equals("3")){
            return 3;
        }
        if(a.equals("4")){
            return 4;
        }
        if(a.equals("5")){
            return 5;
        }
        if(a.equals("6")){
            return 6;
        }
        if(a.equals("7")){
            return 7;
        }
        if(a.equals("8")){
            return 8;
        }
        if(a.equals("9")){
            return 9;
        }
        if(a.matches("A|a")){
            return 10;
        }
        if(a.matches("A|a")){
            return 10;
        }
        if(a.matches("B|b")){
            return 11;
        }
        if(a.matches("C|c")){
            return 12;
        }
        if(a.matches("D|d")){
            return 13;
        }
        if(a.matches("E|e")){
            return 14;
        }
        if(a.matches("F|f")){
            return 15;
        }
        if(a.matches("G|g")){
            return 16;
        }
        if(a.matches("H|h")){
            return 17;
        }
        if(a.matches("I|i")){
            return 18;
        }
        if(a.matches("J|j")){
            return 19;
        }
        if(a.matches("K|k")){
            return 20;
        }
        if(a.matches("L|l")){
            return 21;
        }
        if(a.matches("M|m")){
            return 22;
        }
        if(a.matches("N|n")){
            return 23;
        }
        if(a.matches("O|o")){
            return 24;
        }
        if(a.matches("P|p")){
            return 25;
        }
        if(a.matches("Q|q")){
            return 26;
        }
        if(a.matches("R|r")){
            return 27;
        }
        if(a.matches("S|s")){
            return 28;
        }
        if(a.matches("T|t")){
            return 29;
        }
        if(a.matches("U|u")){
            return 30;
        }
        if(a.matches("V|v")){
            return 31;
        }
        if(a.matches("W|w")){
            return 32;
        }
        return 0;
    }
    public static String numToLetter(long a){
        if(a==0){
            return "0";
        }
        if(a==1){
            return "1";
        }
        if(a==2){
            return "2";
        }
        if(a==3){
            return "3";
        }
        if(a==4){
            return "4";
        }
        if(a==5){
            return "5";
        }
        if(a==6){
            return "6";
        }
        if(a==7){
            return "7";
        }
        if(a==8){
            return "8";
        }
        if(a==9){
            return "9";
        }
        if(a==10){
            return "a";
        }
        if(a==11){
            return "b";
        }
        if(a==12){
            return "c";
        }
        if(a==13){
            return "d";
        }
        if(a==14){
            return "e";
        }
        if(a==15){
            return "f";
        }
        if(a==16){
            return "g";
        }
        if(a==17){
            return "h";
        }
        if(a==18){
            return "i";
        }
        if(a==19){
            return "j";
        }
        if(a==20){
            return "k";
        }
        if(a==21){
            return "l";
        }
        if(a==22){
            return "m";
        }
        if(a==23){
            return "n";
        }
        if(a==24){
            return "o";
        }
        if(a==25){
            return "p";
        }
        if(a==26){
            return "q";
        }
        if(a==27){
            return "r";
        }
        if(a==28){
            return "s";
        }
        if(a==29){
            return "t";
        }
        if(a==30){
            return "u";
        }
        if(a==31){
            return "v";
        }
        if(a==32){
            return "w";
        }
        return "-1";
}
}
