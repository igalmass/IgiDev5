package Recursion;

import org.junit.Test;

public class FactorialCalculatorTest {

    @Test
    public void doTest(){
        FactorialCalculator factorialCalculator = new FactorialCalculator();

        assert(factorialCalculator.calc(1) == 1);
        assert(factorialCalculator.calc(2) == 2);
        assert(factorialCalculator.calc(3) == 6);
        assert(factorialCalculator.calc(4) == 24);
    }

}