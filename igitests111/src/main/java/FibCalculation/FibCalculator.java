package FibCalculation;

public class FibCalculator {
    public int fib(int n) throws Exception {
        if (n < 1){
            throw new Exception("Undefined fib of " + n);
        }

        int result = 1;
        if (n == 1 || n == 2){
            result = 1;
        } else {
            result = fib(n - 1 ) + fib(n -2);
        }

        return result;
    }
}
