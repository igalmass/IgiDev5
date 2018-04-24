package Recursion;

public class FactorialCalculator {


    public int calc(int i) {
        if (i <= 1){
            return 1;
        } else {
            return i * calc(i - 1);
        }
    }
}
