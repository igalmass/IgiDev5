package LinkedList.FromInet.SingleLinkList;

import java.util.Objects;

//  taken from: https://www.youtube.com/watch?v=195KUinjBpU&index=4&list=PLGLfVvz_LVvReUrWr94U-ZMgjYTQ538nT
public class LinkList{
    public Link firstLink;

    public LinkList(){
        firstLink = null;
    }

    public boolean isEmpty(){
        return firstLink == null;
    }

    public void insertFirstLink(String bookName, int millionsSold){
        Link newLink = new Link(bookName, millionsSold);

        newLink.next = firstLink;

        firstLink = newLink;
    }

    public Link removeFirstLink(){
        Link result = firstLink;
        if (!isEmpty()){
            firstLink = firstLink.next;
        } else {
            System.out.println("empty linked list");
        }

        return result;

    }

    public void display(){
        Link curLink = firstLink;
        StringBuffer stringBuffer = new StringBuffer("Printing link list");
        System.out.println("Displaying linked list: ");
        while (curLink != null){
            curLink.display();
            System.out.println("Coming up next: " + curLink.next);
            curLink = curLink.next;

        }
    }

    public Link find(String bookName) {
        Link curLink = firstLink;
        while (curLink != null) {
            if (Objects.equals(curLink.getBookName(), bookName)) {
                break;
            } else {
                curLink = curLink.next;
            }
        }

        return curLink;
    }

    public Link removeLink(String bookName){
        Link previousLink = firstLink;
        Link currentLink = firstLink;

        while (currentLink.getBookName() != bookName){
            if (currentLink.next == null){
                return null;
            } else {
                previousLink = currentLink;
                currentLink = currentLink.next;
            }
        }

        if (currentLink == firstLink){
            firstLink = firstLink.next;
        } else {
            previousLink.next = currentLink.next;
        }

        return currentLink;

    }

    public void reveseList(){
        Link prev = null;
        Link cur = firstLink;

        while (cur != null){
            Link next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }

        firstLink = prev;
    }



    public static void main(String[] args) {
        LinkList theLinkedList = new LinkList();

        theLinkedList.insertFirstLink("Don Quixote 1", 500);
        theLinkedList.insertFirstLink("Don Quixote 2", 600);
        theLinkedList.insertFirstLink("The blade itself 3", 602);
        theLinkedList.insertFirstLink("Centennial 4", 333);

        System.out.println("Before:");
        theLinkedList.display();

        theLinkedList.removeLink("The blade itself 3");

        System.out.println("After:");
        theLinkedList.display();
    }

}
