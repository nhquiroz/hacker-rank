import java.util.Scanner;


public class JavaStdinAndStdout2 {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int integerInput = scanner.nextInt();
        double doubleInput = scanner.nextDouble();

        // cleaning the buffer before reading the next line
        scanner.nextLine();
        String stringInput = scanner.nextLine();

        System.out.println("String: " + stringInput);
        System.out.println("Double: " + doubleInput);
        System.out.println("Int: " + integerInput);
    }
}
