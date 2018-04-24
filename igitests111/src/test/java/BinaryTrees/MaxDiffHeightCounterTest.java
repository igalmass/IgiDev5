package BinaryTrees;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class MaxDiffHeightCounterTest {

    MaxDiffHeightCounter maxDiffHeightCounter = new MaxDiffHeightCounter();

    @Before
    public void setUp() throws Exception {
        maxDiffHeightCounter = new MaxDiffHeightCounter();
    }

    @Test
    public void getMaxHeightOf_0_Correctly(){
        assertActualHeight(null, 0);
    }

    @Test
    public void getMaxHeightOf_1_Correctly() {
        TreeNode treeNode = new TreeNode(1, "1");

        assertActualHeight(treeNode, 1);
    }

    private void assertActualHeight(TreeNode treeNode, int expectedActualHeight) {
        int actual = maxDiffHeightCounter.getMaxDiffHeight(treeNode);
        assert(actual == expectedActualHeight);
    }

    @Test
    public void getMaxHeightOf_1_With2ElementsCorrectly(){
        TreeNode treeNode = new TreeNode(1, "1 main");
        treeNode.rightChild = new TreeNode(1, "1 right");
        assertActualHeight(treeNode, 1);
    }

    @Test
    public void getMaxHeightOf_2_With_2_1_Correctly(){
        TreeNode treeNode = new TreeNode(1, "1 main");
        treeNode.rightChild = new TreeNode(1, "2 right");
        treeNode.leftChild = new TreeNode(1, "1 left");
        treeNode.rightChild.rightChild = new TreeNode(1, "1 right right");
        treeNode.rightChild.rightChild.rightChild = new TreeNode(2, "2 right right right");
        treeNode.rightChild.rightChild.rightChild.leftChild = new TreeNode(3, "3 rrrr");

        assertActualHeight(treeNode, 3);
    }
}