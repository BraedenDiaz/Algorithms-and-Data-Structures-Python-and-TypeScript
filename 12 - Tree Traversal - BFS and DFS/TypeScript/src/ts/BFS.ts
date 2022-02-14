
import { Queue } from "./Queue";
import { TreeNode } from "./TreeNode";

// NOTE: The BFS function provided here only works on trees. There are other implmentations used
// to handle BFS on graphs, graphs with cycles, etc. Please look into those if needed.

/**
 * Breadth-First Search (BFS) tree traversal algorithm.
 * 
 * This BFS is implemented iteratively using a Queue data structure, but it can
 * also be implmented recursively.
 * 
 * Running Time Complexity: O(n) - In the wrost case, we may visit every node if the node we are
 * trying to find is at the end of the algorithm's search or if it's not in the tree.
 * 
 * Space Complexity: O(n) - In the worst case, we need to store a reference to every node in the
 * tree. So, the memory required will grow linearly with respect to tree size.
 * 
 * NOTE: You can easily turn this function into DFS by simply using a Stack and its
 * functions instead of a Queue. See the DFS.ts file for an example.
 * 
 * @param rootNode The TreeNode which is the root of a tree to search.
 * @param goalValue The target goal value to search for in the tree.
 * @returns A list of TreeNodes representing the path to the target value or null.
 */
export function bfs(rootNode : TreeNode, goalValue : any) : (TreeNode[] | null)
{
    const pathQueue : Queue = new Queue();
    const initialPath : TreeNode[] = [rootNode];

    pathQueue.enqueue(initialPath);

    while (pathQueue.size > 0)
    {
        const currentPath : TreeNode[] = pathQueue.dequeue();
        const currentNode : TreeNode = currentPath[currentPath.length - 1];

        console.log(`Searching node with value: ${currentNode.value}`);

        if (currentNode.value === goalValue)
        {
            return currentPath;
        }

        for (let child of currentNode.children)
        {
            // Makes a copy of the current node path using spread syntax
            const newPath : TreeNode[] = [...currentPath];
            newPath.push(child);
            pathQueue.enqueue(newPath);
        }
    }

    return null;
}