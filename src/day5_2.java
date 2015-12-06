import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class day5_2 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new FileReader("day5/input5.txt"));
        String line;
        int num = 0;
        Pattern p;
        Matcher m;

        while ((line = br.readLine()) != null) {
            p = Pattern.compile("(..).*\\1");
            m = p.matcher(line);
            if (!m.find()) {
                continue;
            }
            p = Pattern.compile("(.).\\1");
            m = p.matcher(line);
            if (m.find()) {
                num++;
            }
        }
        System.out.println("valid words: " + num);
    }
}
