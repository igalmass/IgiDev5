package LinkedList;

import org.junit.Before;
import org.junit.Test;

public class LinkedListReverserTest {

    LinkedListReverser linkedListReverser;

    @Before
    public void before(){
        linkedListReverser = new LinkedListReverser();
    }

    @Test
    public void testReverse_1_Node(){
        LinkedListNode linkedListNode = new LinkedListNode(1, null);
        LinkedListNode reversed = linkedListReverser.reverse(linkedListNode);
        assert(reversed.getValue() == 1);
    }

    @Test
    public void testReverse_2_Nodes(){
        LinkedListNode linkedListNode = new LinkedListNode(1, new LinkedListNode(2, null));
        LinkedListNode reversed = linkedListReverser.reverse(linkedListNode);
        assert(reversed.getValue() == 2);
        assert(reversed.getNextNode().getValue() == 1);
    }

}