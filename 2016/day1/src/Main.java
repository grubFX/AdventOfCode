import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class Main {
    enum Heading {
        NORTH, EAST, SOUTH, WEST
    }

    public static void main(String[] args) {
        String[] list = null;
        try {
            BufferedReader reader = new BufferedReader(new FileReader("input.txt"));
            String s = reader.readLine();
            list = s.split(",");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        int x = 0, y = 0;
        Heading heading = Heading.NORTH;

        for (String s : list) {
            int dist = Integer.parseInt(s.trim().substring(1));

            switch (s.trim().charAt(0)) {
                case 'L':
                    switch (heading) {
                        case NORTH:
                            x -= dist;
                            heading = Heading.WEST;
                            break;

                        case EAST:
                            y += dist;
                            heading = Heading.NORTH;
                            break;

                        case SOUTH:
                            x += dist;
                            heading = Heading.EAST;
                            break;

                        case WEST:
                            y -= dist;
                            heading = Heading.SOUTH;
                            break;
                    }
                    break;

                case 'R':
                    switch (heading) {
                        case NORTH:
                            x += dist;
                            heading = Heading.EAST;
                            break;

                        case EAST:
                            y -= dist;
                            heading = Heading.SOUTH;
                            break;

                        case SOUTH:
                            x -= dist;
                            heading = Heading.WEST;
                            break;

                        case WEST:
                            y += dist;
                            heading = Heading.NORTH;
                            break;
                    }
                    break;
            }
        }
        System.out.println(x + " / " + y + " => " + (Math.abs(x) + Math.abs(y)));
    }
}
