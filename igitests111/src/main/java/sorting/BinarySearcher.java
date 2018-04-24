package sorting;

public class BinarySearcher {

    public static int NOT_FOUND_INDEX = -1;

    public int findValueIndex(int[] array, int value) {

        return binarySearchRecursive(array, value, 0, array.length - 1);


    }

    public int binarySearchRecursive(int[] array, int value, int lowIndex, int highIndex) {
        int resultIndex = NOT_FOUND_INDEX;
        if (lowIndex > highIndex) {
            resultIndex = NOT_FOUND_INDEX;
        } else {
            int midPoint = (lowIndex + highIndex) / 2;
            if (value == array[midPoint]) {
                resultIndex = midPoint;
            } else if (value < array[midPoint]) {
                highIndex = midPoint - 1;
                return binarySearchRecursive(array, value, lowIndex, highIndex);
            } else {
                lowIndex = midPoint + 1;
                return binarySearchRecursive(array, value, lowIndex, highIndex);
            }
        }

        return resultIndex;
    }
}
