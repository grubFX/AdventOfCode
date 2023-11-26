import java.awt.*;
import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;

public class day3_1 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(new FileInputStream("day3/input3.txt")));
        int c;
        HashMap<String, Point> map = new HashMap<String, Point>();
        Point p = new Point(0, 0);
        map.put(p.x + "/" + p.y, p);
        while ((c = br.read()) != -1) {
            switch ((char) c) {
                case '^':
                    p.setLocation(p.x, p.y + 1);
                    break;
                case 'v':
                    p.setLocation(p.x, p.y - 1);
                    break;
                case '<':
                    p.setLocation(p.x - 1, p.y);
                    break;
                case '>':
                    p.setLocation(p.x + 1, p.y);
                    break;
            }
            map.put(p.x + "/" + p.y, p);
        }
        System.out.println("number of houses with 1 or more visits: " + map.size());
    }
}