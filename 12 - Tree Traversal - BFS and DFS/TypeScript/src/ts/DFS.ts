
import { TreeNode } from "./TreeNode";
import { Stack } from "./Stack";

// NOTE: The DFS functions provided here only works on trees. There are other implmentations used
// to handle DFS on graphs, graphs with cycles, etc. Please look into those if needed.

/**
 * Recursive Depth-First Search (DFS) tree traversal algorithm.
 * 
 * This DFS is implemented using recursion, but it can also be implmeneted iteratively using
 * a Stack data structure to hold the frontier nodes (see ther other function below). Recursion
 * already has an implicit stack (the callstack) that it uses behind the scenes which is why we
 * don't directly use a stack in this recursive version of DFS.
 * 
 * Running Time Complexity: O(n) - In the wrost case, we may visit every node if the node we are
 * trying to find is at the end of the algorithm's search or if it's not in the tree.
 * 
 * Space Complexity: O(n) - In the worst case, we need to store a reference to every node in the
 * tree. So, the memory required will grow linearly with respect to tree size.
 * 
 * @param root The TreeNode which is the root of a tree to search.
 * @param target The target value to search for.
 * @param path The path list of TreeNodes to the target value.
 * @returns A list of TreeNodes representing the path to the target value or null.
 */
export function dfs(root : TreeNode, target : any, path : TreeNode[] = []) : (TreeNode[] | null)
{
    path = path.concat([root]);

    if (root.value === target)
    {
        return path;
    }

    for (let child of root.children)
    {
        const pathFound : (TreeNode[] | null) = dfs(child, target, path);

        if (pathFound)
        {
            return pathFound;
        }
    }

    return null;
}

/**
 * Iterative Depth-First Search (DFS) tree traversal algorithm.
 * 
 * This version uses a Stack data structure instead of using the implicit callstack
 * provided by recursion. Sometimes, it may be better to be more explicit and you also
 * avoid the overhead of recursion as well.
 * 
 * NOTE: You may notice that this is literally the same exact function as the Breath-First Search
 * bfs() function from the BFS.ts file. The only difference is that we use a stack here instead of
 * a Queue. Therefore, another benefit of using the iterative version is that we can easily get the
 * BFS version of this function very easily by simply switching out the Stack for a Queue and using
 * the Queue functions instead of the Stack's functions, nothing else has to change. It also works
 * in reverse where you can get DFS from the iterative BFS function by simply using a Stack and its
 * functions instead of a Queue.
 * 
 * @param rootNode The TreeNode which is the root of a tree to search.
 * @param targetValue The target value to search for in the tree.
 * @returns A list of TreeNodes representing the path to the target value or null.
 */
export function iterativeDFS(rootNode : TreeNode, targetValue : any) : (TreeNode[] | null)
{
    const pathStack : Stack = new Stack();
    const initialPath : TreeNode[] = [rootNode];

    pathStack.push(initialPath);

    while (pathStack.size > 0)
    {
        const currentPath : TreeNode[] = pathStack.pop();
        const currentNode : TreeNode = currentPath[currentPath.length - 1];

        if (currentNode.value === targetValue)
        {
            return currentPath;
        }

        for (let child of currentNode.children)
        {
            // Makes a copy of the current node path using spread syntax
            const newPath : TreeNode[] = [...currentPath];
            newPath.push(child);
            pathStack.push(newPath);
        }
    }

    return null;
}