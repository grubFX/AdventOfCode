import java.awt.*;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.Arrays;

public class day6_2 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new FileReader("day6/input6.txt"));
        String line;
        int[][] lights = new int[1000][1000];
        for (int[] row : lights) {
            Arrays.fill(row, 0);
        }
        String[] arr, arr2;
        Point p1, p2;
        long sum = 0;
        while ((line = br.readLine()) != null) {
            arr = line.split(" ");
            if (arr.length == 5) {
                arr[0] = arr[0] + arr[1];
                arr[1] = arr[2];
                arr[2] = arr[3];
                arr[3] = arr[4];
            }
            arr2 = arr[1].split(",");
            p1 = new Point(Integer.parseInt(arr2[0]), Integer.parseInt(arr2[1]));
            arr2 = arr[3].split(",");
            p2 = new Point(Integer.parseInt(arr2[0]), Integer.parseInt(arr2[1]));
            switch (arr[0]) {
                case "turnon":
                    for (int i = p1.x; i <= p2.x; i++) {
                        for (int j = p1.y; j <= p2.y; j++) {
                            lights[i][j]++;
                        }
                    }
                    break;
                case "turnoff":
                    for (int i = p1.x; i <= p2.x; i++) {
                        for (int j = p1.y; j <= p2.y; j++) {
                            lights[i][j]--;
                            if (lights[i][j] < 0) {
                                lights[i][j] = 0;
                            }
                        }
                    }
                    break;
                case "toggle":
                    for (int i = p1.x; i <= p2.x; i++) {
                        for (int j = p1.y; j <= p2.y; j++) {
                            lights[i][j] += 2;
                        }
                    }
                    break;
            }
        }
        for (int i = 0; i < 1000; i++) {
            for (int j = 0; j < 1000; j++) {
                sum += lights[i][j];
            }
        }
        System.out.println("total brightness: " + sum);
    }
}