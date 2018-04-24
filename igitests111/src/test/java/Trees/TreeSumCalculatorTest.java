package Trees;

import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;

import static org.junit.Assert.*;

public class TreeSumCalculatorTest {

    TreeSumCalculator treeSumCalculator = new TreeSumCalculator();

    @Before
    public void setUp() throws Exception {
        treeSumCalculator = new TreeSumCalculator();
    }

    @Test
    public void calculateSum_OfTreeWithOneLevel() {
        MyNode myNode = new MyNode(1,null,null);
        assertSum(myNode, 1);
    }

    @Test
    public void calcSum_OfTreeWith_2_Levels(){
        MyNode myNode = new MyNode(1,
                new MyNode(2, null, null),
                new MyNode(3,null, null));

        assertSum(myNode, 6);
    }

    private void assertSum(MyNode myNode, int expectedSum) {
        assert(treeSumCalculator.calculateSum(myNode) == expectedSum);
    }
}