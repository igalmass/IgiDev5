package StringManip.PolyndromTester;

public class IsNumberPolyndromChecker {

    public int reverse(int sourceInt){
        int result = 0;

        int cur = sourceInt;
        while (cur > 0){
            final int lastDigit = cur % 10;
            result = result * 10 + lastDigit;
            cur = cur / 10;
        }

        return result;
    }

}
