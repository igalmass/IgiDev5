package LinkedList.FromInet.SingleLinkList;

import org.junit.Test;

import java.util.Objects;

public class LinkListTest {
    private final static String AMNON = "amnon";

    @Test
    public void testFind(){

        LinkList linkList = createLinkList();

        Link findResult = linkList.find(AMNON);
        assert(Objects.equals(findResult.getBookName(), AMNON));
    }

    private LinkList createLinkList() {
        LinkList linkList = new LinkList();
        linkList.insertFirstLink("moshe",3);
        linkList.insertFirstLink("dany", 8);
        linkList.insertFirstLink(AMNON, 33);
        linkList.insertFirstLink("january",99);
        return linkList;
    }

    @Test
    public void reverseList(){
        LinkList linkList = new LinkList();

        linkList.insertFirstLink("c", 5);
        linkList.insertFirstLink("b",3);
        linkList.insertFirstLink("a", 4);




        System.out.println("before");
        linkList.display();

        linkList.reveseList();

        System.out.println("after");
        linkList.display();

//        System.out.println("After");
//        linkList.reveseList();
//        linkList.display();


    }

}