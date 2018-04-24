package FibCalculation;

import org.junit.Before;
import org.junit.Test;

public class FibCalculatorTest {
    private FibCalculator fibCalculator;

    @Before
    public void before(){
        fibCalculator = new FibCalculator();
    }

    public void assertCalcular(int n, int expectedResult) throws Exception {
        assert(fibCalculator.fib(n) == expectedResult);
    }

    @Test
    public void checkFibs() throws Exception {
        assertCalcular(1,1);
        assertCalcular(2, 1);
        assertCalcular(3,2);
        assertCalcular(5, 5);
        assertCalcular(6, 8);
        assertCalcular(7, 13);
    }

}