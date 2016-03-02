import java.util.Scanner;
import java.math.BigInteger;


class Solution {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int numberOfTestCases = scanner.nextInt();

        try {
            for (int i = 0; i < numberOfTestCases; ++i) {
                BigInteger testCase = scanner.nextBigInteger();

                if (Math.abs(testCase.longValue()) < Byte.MAX_VALUE) {
                    System.out.println(testCase + " can be fitted in:");
                    System.out.println("* byte");
                    System.out.println("* short");
                    System.out.println("* int");
                    System.out.println("* long");
                } else if (Math.abs(testCase.longValue()) < Short.MAX_VALUE) {
                    System.out.println(testCase + " can be fitted in:");
                    System.out.println("* short");
                    System.out.println("* int");
                    System.out.println("* long");
                } else if (Math.abs(testCase.longValue()) < Integer.MAX_VALUE) {
                    System.out.println(testCase + " can be fitted in:");
                    System.out.println("* int");
                    System.out.println("* long");
                } else if (Math.abs(testCase.longValue()) < Long.MAX_VALUE) {
                    System.out.println(testCase + " can be fitted in:");
                    System.out.println("* long");
                }
            }
        } catch(Exception e) {
            System.out.println(scanner.next() + " can't be fitted anywhere.");
        }
    }
}
