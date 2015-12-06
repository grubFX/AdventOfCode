import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class day5_1 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new FileReader("day5/input5.txt"));
        String line;
        int i, num = 0;
        char c_old;
        boolean b;
        while ((line = br.readLine()) != null) {
            // unallowed substrings
            if (line.contains("ab") || line.contains("cd") || line.contains("pq") || line.contains("xy")) {
                continue;
            }

            // vowels
            i = 0;
            char[] arr = line.toCharArray();
            for (char c : arr) {
                if ("aeiou".contains(c + "")) {
                    i++;
                }
            }
            if (i < 3) {
                continue;
            }

            // double chars
            c_old = '.';
            b = false;
            for (char c : arr) {
                if (c_old == c) {
                    b = true;
                    break;
                }
                c_old = c;
            }
            if (b) {
                num++;
            }
        }
        System.out.println("valid words: " + num);
    }
}
