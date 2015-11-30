import java.util.Scanner;


public class JavaIfElse {

    // returns true if n is an even integer
    public static Boolean isEven (int n) {
        return n % 2 == 0;
    }

    // returns true if n is an odd integer
    public static Boolean isOdd (int n) {
        return n % 2 == 1;
    }

    // returns true if n is an integer in the range [i, j]
    public static Boolean isInRange (int n, int i, int j) {
        return n >= i && n <= j;
    }


    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();

        String answer = "";

        // If N is odd, print "Weird"
        if (isOdd(n)) {
            answer = "Weird";
        // If N is even and, in between the range of 2 and 5 (inclusive), print "Not Weird"
        } else if (isEven(n) && isInRange(n, 2, 5)) {
            answer = "Not Weird";
        // If N is even and, in between the range of 6 and 20 (inclusive), print "Weird"
        } else if (isEven(n) && isInRange(n, 6, 20)) {
            answer = "Weird";
        // If N is even and N > 20, print "Not Weird"
        } else if (isEven(n) && n > 20) {
            answer = "Not Weird";
        }

        System.out.println(answer);
    }
}
