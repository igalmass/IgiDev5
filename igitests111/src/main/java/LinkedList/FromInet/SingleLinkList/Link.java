package LinkedList.FromInet.SingleLinkList;

public class Link {
    private final String bookName;
    private final int millionsSold;
    public Link next;

    public Link(String bookName, int millionsSold){
        this.bookName = bookName;
        this.millionsSold = millionsSold;
    }

    public void display(){
        System.out.println("book Name: " + bookName + ", millions sold: " + millionsSold + ",000,000");
    }

    @Override
    public String toString(){
        return bookName;
    }

    public static void main(String[] args) {

    }

    public String getBookName() {
        return bookName;
    }
}

