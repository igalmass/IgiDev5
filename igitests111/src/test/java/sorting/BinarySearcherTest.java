package sorting;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class BinarySearcherTest {

    private BinarySearcher binarySearcher = null;

    @Before
    public void setUp() throws Exception {
        binarySearcher = new BinarySearcher();
    }

    public void assertFindIndex(int[] array, int value, int expectedIndex){
        int actualIndex = binarySearcher.findValueIndex(array, value);
        assertEquals(actualIndex, expectedIndex);
    }

    @Test
    public void testFindValueIndex() {
        int[] array = {1,2,8,13,5};
        assertFindIndex(array, 13, 3);

        int[] array2 = {1,2,4,7,8,9,20,22,25,65};
        assertFindIndex(array2, 22, 7);
        assertFindIndex(array2, 23, BinarySearcher.NOT_FOUND_INDEX);

    }
}