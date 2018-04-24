package BinaryTrees;

import java.util.HashMap;
import java.util.Map;

public class MaxDiffHeightCounter {
    public int getMaxDiffHeight(TreeNode treeNode){
        Map<Integer, Integer> existingValuesMap = new HashMap<>();
        return getInternalMaxDiffHeight(treeNode, existingValuesMap);
    }

    private int getInternalMaxDiffHeight(TreeNode treeNode, Map<Integer, Integer> existingValuesMap) {
        if (treeNode == null){
            return 0;
        } else {
            addOneToMap(treeNode.key, existingValuesMap);
            int maxHeightFromChildren = Math.max(
                    getInternalMaxDiffHeight(treeNode.leftChild, existingValuesMap),
                    getInternalMaxDiffHeight(treeNode.rightChild, existingValuesMap));
            int result = Math.max(maxHeightFromChildren, existingValuesMap.size());
            removeOneFromMap(treeNode.key, existingValuesMap);
            return result;
        }
    }

    private void removeOneFromMap(Integer key, Map<Integer, Integer> existingValuesMap) {
        int currentCount = existingValuesMap.get(key);
        if (currentCount == 1){
            existingValuesMap.remove(key);
        } else {
            existingValuesMap.put(key, currentCount - 1);
        }
    }

    private void addOneToMap(Integer key, Map<Integer, Integer> existingValuesMap) {
        if (existingValuesMap.containsKey(key)){
            existingValuesMap.put(key, existingValuesMap.get(key) + 1);
        } else {
            existingValuesMap.put(key, 1);
        }
    }
}
