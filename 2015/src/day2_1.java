import java.io.*;

public class day2_1 {
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
            sum += (a * b + b * c + a * c) * 2 + Math.min(Math.min(a * b, b * c), a * c);
        }
        System.out.println("the sum was: " + sum);
    }
}
