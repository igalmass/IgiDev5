package sorting;

import org.junit.Before;
import org.junit.Test;

import java.util.Arrays;

import static org.junit.Assert.*;

public class BubbleSorterTest {

    BubbleSorter bubbleSorter = null;
    @Before
    public void setUp() throws Exception {
        bubbleSorter = new BubbleSorter();


        //System.out.println("at the end: " + array);

    }

    private void assertSort(int[] source, int []target){
        assert(arrayEquals(bubbleSorter.sort(source), target));
    }

    private boolean arrayEquals(int[] source, int[] target) {
        boolean result = true;
        if (source.length != target.length){
            result = false;
        } else {
            for (int i = 0 ; i < source.length && result == true; i++){
                if (source[i] != target[i]){
                    result = false;
                }
            }
        }

        return result;
    }

    @Test
    public void sort() {
        int[] sourceArray = {1,8,2};
        int[] targetArray = {1,2,8};

        assertSort(sourceArray, targetArray);
    }
}