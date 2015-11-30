import java.util.Scanner;


public class JavaStdinAndStdout1 {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int firstInteger = scanner.nextInt();
        System.out.println(firstInteger);

        int secondInteger = scanner.nextInt();
        System.out.println(secondInteger);

        int thirdInteger = scanner.nextInt();
        System.out.println(thirdInteger);
    }
}
