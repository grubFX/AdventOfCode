import java.awt.*;
import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;

public class day3_2 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(new FileInputStream("day3/input3.txt")));
        int c;
        HashMap<String, Point> map = new HashMap<String, Point>(), map2 = new HashMap<String, Point>();
        Point p = new Point(0, 0), p2 = new Point(0, 0);
        map.put(p.x + "/" + p.y, p);
        map2.put(p2.x + "/" + p2.y, p2);
        boolean santa = true;
        while ((c = br.read()) != -1) {
            if (santa) {
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
            } else {
                switch ((char) c) {
                    case '^':
                        p2.setLocation(p2.x, p2.y + 1);
                        break;
                    case 'v':
                        p2.setLocation(p2.x, p2.y - 1);
                        break;
                    case '<':
                        p2.setLocation(p2.x - 1, p2.y);
                        break;
                    case '>':
                        p2.setLocation(p2.x + 1, p2.y);
                        break;
                }
                map2.put(p2.x + "/" + p2.y, p2);
            }
            santa = !santa;
        }
        map.putAll(map2);
        System.out.println("number of houses with 1 or more visits: " + map.size());
    }
}