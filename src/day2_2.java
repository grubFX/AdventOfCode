import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.Arrays;

public class day2_2 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new FileReader("day2/input2.txt"));
        String line;
        int a, b, c;
        long sum = 0;
        while ((line = br.readLine()) != null) {
            String[] arr = line.split("x");
            a = Integer.parseInt(arr[0]);
            b = Integer.parseInt(arr[1]);
            c = Integer.parseInt(arr[2]);
            int[] arr2 = new int[]{a, b, c};
            Arrays.sort(arr2);
            sum += 2 * arr2[0] + 2 * arr2[1] + a * b * c;
        }
        System.out.println("the sum was: " + sum);
    }
}
