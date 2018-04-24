package StringManip.PolyndromTester;

import org.junit.Test;

public class IsStringPolyndromCheckerTest {

    private IsStringPolyndromChecker isStringPolyndromChecker;

    @org.junit.Before
    public void setUp() throws Exception {
        isStringPolyndromChecker = new IsStringPolyndromChecker();
    }

    @Test
    public void returnTrueIfPolyndrom(){
        assertCheck("aaa", true);
        assertCheck("bba", false);
        assertCheck("a", true);
        assertCheck("bb", true);
        assertCheck("aba", true);
        assertCheck("aabb", false);

    }

    private void assertCheck(String stringToCheck, boolean expectedResult) {
        boolean actual = isStringPolyndromChecker.check(stringToCheck);
        assert (actual == expectedResult);
    }


}