package Trees;

public class TreeSumCalculator {

    public int calculateSum(MyNode rootNode){

        int result = 0;
        if (rootNode != null) {
            result = rootNode.getValue() + calculateSum(rootNode.rightNode) + calculateSum(rootNode.leftNode);
        }

        return result;


    }
}
