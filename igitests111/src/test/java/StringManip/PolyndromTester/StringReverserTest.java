package StringManip.PolyndromTester;

import org.junit.Before;
import org.junit.Test;

import java.util.Objects;

public class StringReverserTest {
    StringReverser stringReverser = new StringReverser();

    @Before
    public void setUp(){
        stringReverser = new StringReverser();
    }

    public void assertReversedString(String source, String expectedResult){
        String actual = stringReverser.reverse(source);
        assert(Objects.equals(actual, expectedResult));
    }

    @Test
    public void testReverse(){
        assertReversedString("", "");
        assertReversedString("a", "a");
        assertReversedString("ab", "ba");
        assertReversedString("abc", "cba");
    }

}