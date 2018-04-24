package LinkedList.FromInet.SingleLinkList;

public class Neighbour {
    public String homeOwnerName;
    public int houseNumber;
    public Neighbour next;
    public Neighbour prev;

    public Neighbour(String homeOwnerName, int houseNumber) {
        this.homeOwnerName = homeOwnerName;
        this.houseNumber = houseNumber;
    }

    public void display(){
        System.out.println("Home owner name: " + homeOwnerName + ", house number: " + houseNumber);
        System.out.println("Prev: " + prev);
        System.out.println("Next: " + next);
        System.out.println("\n");
    }

    public String toString(){
        return homeOwnerName;
    }
}

