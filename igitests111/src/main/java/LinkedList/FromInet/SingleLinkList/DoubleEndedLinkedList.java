package LinkedList.FromInet.SingleLinkList;

public class DoubleEndedLinkedList {
    Neighbour firstLink;
    Neighbour lastLink;

    public void display() {
        System.out.println("Display double ended linked list:");
        System.out.println("First link: " + firstLink + ", last link: " + lastLink);

        System.out.println("The links in a loop:");
        Neighbour curNeighbour = firstLink;
        while (curNeighbour != null) {
            curNeighbour.display();
            curNeighbour = curNeighbour.next;
        }
    }

    public void insertInFirstPosition(String homeOwnerName, int houseNumber) {
        Neighbour theNewLink = new Neighbour(homeOwnerName, houseNumber);

        if (isEmpty()) {
            lastLink = theNewLink;
            firstLink = theNewLink;
        } else {
            firstLink.prev = theNewLink;
            theNewLink.next = firstLink;
            firstLink = theNewLink;
        }
    }

    private boolean isEmpty() {
        return firstLink == null;
    }

    public void insertInLastPosition(String homeOwnerName, int houseNumber) {

        Neighbour theNewLink = new Neighbour(homeOwnerName, houseNumber);

        if (isEmpty()) {
            firstLink = theNewLink;
            lastLink = theNewLink;
        } else {
            lastLink.next = theNewLink;
            theNewLink.prev = lastLink;
            lastLink = theNewLink;
        }
    }

    public void insertAfterKey(String homeOwnerName, int houseNumber, String key){
        Neighbour theNewLink = new Neighbour(homeOwnerName, houseNumber);

        Neighbour currentNeighbour = firstLink;

        boolean done = false;
        while (!done){
            if (currentNeighbour == null){
                done = true;
            } else
            if (currentNeighbour.homeOwnerName == key){
                done = true;
            } else {
                currentNeighbour = currentNeighbour.next;
            }
        }

        if (currentNeighbour == null){
            System.out.println("Key was not found");
        } else {
            if (currentNeighbour == lastLink){
                lastLink.next = theNewLink;
                theNewLink.prev = lastLink;
                lastLink = theNewLink;
            } else {
                theNewLink.next = currentNeighbour.next;
                currentNeighbour.next = theNewLink;
                theNewLink.prev = currentNeighbour;
            }

        }
    }
}
