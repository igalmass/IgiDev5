package SerializeDemo;

public class WithNonSerializeable {
    public static void main(String[] args) {

    }
}

class NonSerializeableClass{
    private final int quantity;

    public NonSerializeableClass(int quantity) {
        this.quantity = quantity;
    }
}
