import java.awt.*;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.Arrays;

public class day6_1 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new FileReader("day6/input6.txt"));
        String line;
        boolean[][] lights = new boolean[1000][1000];
        for (boolean[] row : lights) {
            Arrays.fill(row, Boolean.FALSE);
        }
        String[] arr, arr2;
        Point p1, p2;
        int num = 0;
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
            for (int i = p1.x; i <= p2.x; i++) {
                for (int j = p1.y; j <= p2.y; j++) {
                    switch (arr[0]) {
                        case "turnon":
                            lights[i][j] = true;
                            break;
                        case "turnoff":
                            lights[i][j] = false;
                            break;
                        case "toggle":
                            lights[i][j] = !lights[i][j];
                            break;
                    }
                }
            }
        }
        for (int i = 0; i < 1000; i++) {
            for (int j = 0; j < 1000; j++) {
                if (lights[i][j]) {
                    num++;
                }
            }
        }
        System.out.println("number of lights on: " + num);
    }
}