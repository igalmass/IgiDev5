package StringManip.PolyndromTester;

public class StringReverser {

    public String reverse(String source) {
        int lPointer = source.length() - 1;
        int rPointer = 0;
        char[] asChars = source.toCharArray();

        while (rPointer < lPointer){
            char lChar = source.charAt(lPointer);
            char rChar = source.charAt(rPointer);

            asChars[rPointer] = lChar;
            asChars[lPointer] = rChar;

            rPointer = rPointer + 1;
            lPointer = lPointer - 1;
        }

        String result = String.valueOf(asChars);
        return result;
    }
}
