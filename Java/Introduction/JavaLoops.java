import java.util.Scanner;
import java.lang.Math;


public class JavaLoops {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int t = scanner.nextInt();
        for (int i = 0; i < t; i++) {
            int a = scanner.nextInt();
            int b = scanner.nextInt();
            int n = scanner.nextInt();

            int sum = a;
            for (int j = 0; j < n; j++) {
                int x = ((int) Math.pow(2, j))*b;
                System.out.printf("%d ", a + x);
                a += x;
            }

            System.out.println();
        }
    }
}
