package StringManip.PolyndromTester;

public class IsStringPolyndromChecker {
    public boolean check(String stringToCheck) {
        boolean resultAreEqual = true;
        if (stringToCheck == null || stringToCheck.length() <= 1){
            resultAreEqual = true;
        } else {
            int lPointer = stringToCheck.length() - 1;
            int rPointer = 0;
            while (rPointer < lPointer && resultAreEqual == true){
                if (stringToCheck.charAt(rPointer) != stringToCheck.charAt(lPointer)){
                    resultAreEqual = false;
                } else {
                    lPointer = lPointer - 1;
                    rPointer = rPointer + 1;
                }
            }
        }

        return resultAreEqual;
    }
}
