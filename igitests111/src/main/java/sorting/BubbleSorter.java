package sorting;

import java.util.Arrays;

public class BubbleSorter {


    public int[] sort(int[] array){
        boolean sorted = false;
        int lastSorted = array.length - 1;

        while (!sorted) {
            sorted = true;
            for (int i = 0; i < lastSorted; i++) {
                if (array[i] > array[i + 1]){
                    swap(array, i, i+1);
                    sorted = false;
                }

            }
            lastSorted = lastSorted - 1;

            printArray(array);
        }

        return array;




    }

    private void printArray(int[] array) {
        Arrays.stream(array).forEach(x -> System.out.println(x + " "));

        System.out.println(array);
    }

    private void swap(int[] array, int i, int j) {
        int arrayJ = array[j];
        array[j] = array[i];
        array[i] = arrayJ;
    }
}
