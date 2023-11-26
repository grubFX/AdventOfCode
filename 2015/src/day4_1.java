import javax.xml.bind.DatatypeConverter;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class day4_1 {
    public static void main(String[] args) throws NoSuchAlgorithmException {
        String input = "ckczppom", temp;
        int num = 0;
        byte[] b, out;
        MessageDigest md = MessageDigest.getInstance("MD5");
        while (true) {
            temp = input + num;
            b = temp.getBytes();
            out = md.digest(b);
            temp = DatatypeConverter.printHexBinary(out).toUpperCase();
            if (temp.substring(0, 5).equals("00000")) {
                System.out.println("found matching hash for number: " + num);
                break;
            }
            num++;
        }
    }
}
