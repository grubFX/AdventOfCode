import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;

public class day1_2 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(new FileInputStream("day1/input1.txt")));
        int c, num = 0, index = 0;
        while ((c = br.read()) != -1) {
            index++;
            char ch = (char) c;
            if (ch == '(') {
                num++;
            } else if (ch == ')') {
                num--;
            }
            if (num == -1) {
                System.out.println("index for floor -1 was: " + index);
                break;
            }
        }
    }
}
