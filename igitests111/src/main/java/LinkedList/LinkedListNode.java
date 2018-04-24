package LinkedList;

public class LinkedListNode {
    private int value;
    private LinkedListNode nextNode;

    public LinkedListNode(int value, LinkedListNode nextNode){
        this.value = value;
        this.nextNode = nextNode;
    }

    public int getValue() {
        return value;
    }

    public LinkedListNode getNextNode() {
        return nextNode;
    }
}
