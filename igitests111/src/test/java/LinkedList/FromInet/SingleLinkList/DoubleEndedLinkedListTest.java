package LinkedList.FromInet.SingleLinkList;

import org.junit.Test;

public class DoubleEndedLinkedListTest {

    @Test
    public void testList(){

        DoubleEndedLinkedList doubleEndedLinkedList = new DoubleEndedLinkedList();

        doubleEndedLinkedList.insertInFirstPosition("aaa", 3);

        //doubleEndedLinkedList.display();

        doubleEndedLinkedList.insertInLastPosition("bbb", 44);

        doubleEndedLinkedList.insertAfterKey("ccc", 124, "bbb");



        //doubleEndedLinkedList.insertInFirstPosition("very first", 66);
        //doubleEndedLinkedList.insertInLastPosition("very lastititi", 99);

        doubleEndedLinkedList.display();



    }

}