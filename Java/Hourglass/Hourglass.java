package Hourglass;
import java.io.*;
import java.util.*;
import java.util.stream.*;
import static java.util.stream.Collectors.toList;

class Result {
    // This code was a question done on hackerrank, my work is the hourglassSum class below


    public static int hourglassSum(List<List<Integer>> arr) {
        int[][] hourglasses = new int [4][4];
        int largest = -999;
    for(int i =0;i<4;i++){
        for(int j =0;j<4;j++){
            if(arr.get(i+2).get(j+2) != null){
                hourglasses[i][j] = (arr.get(i).get(j)+arr.get(i).get(j+1)+arr.get(i).get(j+2)+arr.get(i+1).get(j+1)+arr.get(i+2).get(j)+arr.get(i+2).get(j+1)+arr.get(i+2).get(j+2));
                if(hourglasses[i][j]> largest){
                    largest = hourglasses[i][j];
                }
            }
        }
    }
    return largest;

    }

}

public class Hourglass {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        List<List<Integer>> arr = new ArrayList<>();

        IntStream.range(0, 6).forEach(i -> {
            try {
                arr.add(
                    Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
                        .map(Integer::parseInt)
                        .collect(toList())
                );
            } catch (IOException ex) {
                throw new RuntimeException(ex);
            }
        });

        int result = Result.hourglassSum(arr);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
