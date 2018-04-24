package SerializeDemo;

import java.io.*;

public class SerializeDemo {
    public static void main(String[] args) {
        Save obj = new Save();
        obj.i = 4;

        File file = new File("obj.txt");
        try {
            FileOutputStream fileOutputStream = new FileOutputStream(file);
            ObjectOutputStream objectOutputStream = new ObjectOutputStream(fileOutputStream);
            objectOutputStream.writeObject(obj);

            FileInputStream fileInputStream = new FileInputStream(file);
            ObjectInputStream objectInputStream = new ObjectInputStream(fileInputStream);
            Save loadedObj = (Save) objectInputStream.readObject();
            System.out.println(loadedObj.i);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
