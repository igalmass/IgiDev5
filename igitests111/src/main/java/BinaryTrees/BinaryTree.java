package BinaryTrees;

public class BinaryTree {
    TreeNode root;

    public void addNode(int key, String name) throws Exception {
        TreeNode newNode = new TreeNode(key, name);

        if (root == null){
            root = newNode;
        } else {
            TreeNode focusNode = root;

            TreeNode parent;

            while(true){
                parent = focusNode;

                if (key < focusNode.key){
                    focusNode = focusNode.leftChild;

                    if (focusNode == null){
                        parent.leftChild = newNode;
                        return;
                    }
                } else if (key > focusNode.key) {
                    focusNode = focusNode.rightChild;

                    if (focusNode == null){
                        parent.rightChild = newNode;
                        return;
                    }
                } else {
                    throw new Exception("There is already a node with value " + key);
                }

            }
        }

    }

    public void inOrderTraverseTree(TreeNode focusNode){

        if (focusNode != null){
            inOrderTraverseTree(focusNode.leftChild);

            System.out.println(focusNode);

            inOrderTraverseTree(focusNode.rightChild );
        }
    }

    public void preorderTraverseTree(TreeNode focusNode){
        if (focusNode != null){
            System.out.println(focusNode);
            preorderTraverseTree(focusNode.leftChild);
            preorderTraverseTree(focusNode.rightChild);
        }
    }

    public void postorderTraverseTree(TreeNode focusNode){
        if (focusNode != null){
            postorderTraverseTree(focusNode.leftChild);
            postorderTraverseTree(focusNode.rightChild);
            System.out.println(focusNode);
        }
    }

    public TreeNode findNode(int key){
        TreeNode focusNode = root;

        while (focusNode.key != key){
            if (key < focusNode.key){
                focusNode = focusNode.leftChild;
            } else {
                focusNode = focusNode.rightChild;
            }

            if (focusNode == null){
                return null;
            }
        }

        return focusNode;
    }



    public static void main(String[] args) throws Exception {
        BinaryTree theTree = new BinaryTree();

        theTree.addNode(50, "Boss 50");
        theTree.addNode(25, "Vice 25");
        theTree.addNode(15, "Office manager 15");
        theTree.addNode(30, "30");
        theTree.addNode(76, "76");
        theTree.addNode(85, "85");

        //theTree.inOrderTraverseTree(theTree.root);
        //theTree.preorderTraverseTree(theTree.root);
        //theTree.postorderTraverseTree(theTree.root);
        TreeNode result = theTree.findNode(32);
        System.out.println(result);

    }
}

