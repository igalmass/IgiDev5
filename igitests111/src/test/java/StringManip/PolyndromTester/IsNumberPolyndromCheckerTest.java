package StringManip.PolyndromTester;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class IsNumberPolyndromCheckerTest {

    private IsNumberPolyndromChecker isNumberPolyndromChecker;

    @Before
    public void before(){
        isNumberPolyndromChecker = new IsNumberPolyndromChecker();
    }

    private void assertReverseEquals(int source, int expected){
        int actual = isNumberPolyndromChecker.reverse(source);
        assert(actual == expected);
    }

    @Test
    public void reverseTest() {
        assertReverseEquals(1,1);
        assertReverseEquals(12, 21);
        assertReverseEquals(123, 321);
    }
}