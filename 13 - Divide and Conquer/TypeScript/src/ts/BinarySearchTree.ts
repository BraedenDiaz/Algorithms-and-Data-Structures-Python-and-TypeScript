
/**
 * An implementation of a Binary Search Tree.
 * 
 * Notes:
 *      - Duplicates are allowed, and are inserted to the right of equal nodes.
 *      - This BST doesn't perform rebalancing, so it may become unbalanced.
 *      - It uses in-order depth-first traversing to traverse the BST.
 */
export class BinarySearchTree
{
    private _value : any;
    private _depth : number;
    private _left : (BinarySearchTree | null);
    private _right : (BinarySearchTree | null);

    public constructor(value : any, depth : number = 1)
    {
        this._value = value;
        this._depth = depth;
        this._left = null;
        this._right = null;
    }

    /**
     * Inserts a value into the BST.
     * 
     * Assumption: It is assumed that the user is inserting to the root of a tree for accurate and optimal results.
     * 
     * Note: Duplicates are allowed and will be inserted to the right subtree of any equal nodes it compares with.
     * 
     * Running Time Complexity:
     *      Average: O(log n) - Because the depth is log(n) for balanced BSTs.
     *      Worst: O(n) - If the BST is unbalanced (all values are on one side/branch.)
     * 
     * @param value The value to insert to the BST.
     */
    public insert(value : any) : void
    {
        if (value < this._value)
        {
            if (this._left === null)
            {
                this._left = new BinarySearchTree(value, this._depth + 1);
                console.log(`Tree node ${value} added to the left of ${this._value} at depth ${this._depth + 1}`);
            }
            else
            {
                this._left.insert(value);
            }
        }
        else
        {
            if (this._right === null)
            {
                this._right = new BinarySearchTree(value, this._depth + 1);
                console.log(`Tree node ${value} added to the right of ${this._value} at depth ${this._depth + 1}`);
            }
            else
            {
                this._right.insert(value);
            }
        }
    }

    /**
     * Looks for and retrieves the BST node for a given value, or null if it is not in the BST.
     * 
     * Assumption: It is assumed that the user is starting from the root of a tree for accurate results.
     * 
     * Running Time Complexity:
     *      Average: O(log n) - Because the depth is log(n) for balanced BSTs.
     *      Worst: O(n) - If the BST is unbalanced (all values are on one side/branch.)
     * 
     * @param value The value to find in the BST.
     * @returns The BST node containing that value or null if not found.
     */
    public getNodeByValue(value : any) : (BinarySearchTree | null)
    {
        if (this._value === value)
        {
            return this;
        }
        else if ((this._left !== null) && (value < this._value))
        {
            return this._left.getNodeByValue(value);
        }
        else if ((this._right !== null) && (value >= this._value))
        {
            return this._right.getNodeByValue(value);
        }
        else
        {
            return null
        }
    }

    /**
     * Performs an in-order depth-first traversal of the BST.
     * 
     * You can start traversing from any node, but you must start from the root if
     * you want to traverse the whole BST.
     * 
     * pre-order: current node, left node, right node
     * in-order: left node, current node, right node
     * post-order: left node, right node, current node
     * 
     * This function uses a depth-first search approach, but you could also do
     * a breadth-first approach.
     * 
     */
    public depthFirstTraversal()
    {
        if (this._left !== null)
        {
            this._left.depthFirstTraversal();
        }

        console.log(`Depth=${this._depth}, Value=${this._value}`);

        if (this._right !== null)
        {
            this._right.depthFirstTraversal();
        }
    }
}