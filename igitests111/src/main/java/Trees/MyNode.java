package Trees;

import java.util.ArrayList;
import java.util.List;

public class MyNode {
    public MyNode(int value, MyNode rightNode, MyNode leftNode) {
        this.value = value;
        this.rightNode = rightNode;
        this.leftNode = leftNode;
    }

    int value;
    MyNode rightNode;
    MyNode leftNode;


    public int getValue() {
        return value;
    }

    public MyNode getRightNode() {
        return rightNode;
    }

    public MyNode getLeftNode() {
        return leftNode;
    }



}
