import { Node, NodeType } from "./Node";

/**
 * Author: Braeden Diaz
 * 
 * This class provides a better implementation of a linked list that includes a size property, an iterator, and
 * additional methods such as contains(), set(), and isEmpty().
 */
export class LinkedList
{
    private _headNode : NodeType;
    private _size : number;

    public constructor()
    {
        this._headNode = null;
        this._size = 0;
    }

    public get size() : number
    {
        return this._size;
    }

    public [Symbol.iterator] ()
    {
        let currentNode : NodeType = this._headNode;
        let valueToReturn : any;

        return {
            next() {
                if (currentNode === null)
                {
                    
                    return { value: null, done: true };
                }

                valueToReturn = currentNode.value;
                currentNode = currentNode.nextNode;

                return { value: valueToReturn, done: false };
            }
        }
    }

    public insert(value : any) : void
    {
        const newNode : Node = new Node(value);

        if (this._headNode !== null)
        {
            newNode.nextNode = this._headNode;
        }

        this._headNode = newNode;
        this._size++;

    }

    public remove(value : any) : any
    {
        let currentNode : NodeType = null;
        let nextNode : NodeType = null;
        let removedValue : any = null;

        // If list is empty
        if (this._headNode === null)
        {
            return;
        }

        // If the _headNode is the node that has the value we want to remove
        if (this._headNode.value === value)
        {
            removedValue = this._headNode.value;
            this._headNode = this._headNode.nextNode;
            this._size--;
            return removedValue;
        }

        // Check other nodes
        currentNode = this._headNode;

        while (currentNode !== null)
        {
            nextNode = currentNode.nextNode;

            if (nextNode === null)
            {
                break;
            }

            if (nextNode.value === value)
            {
                removedValue = nextNode.value;
                currentNode.nextNode = nextNode.nextNode;
                nextNode.nextNode = null;
                this._size--;
                return removedValue;
            }

            currentNode = currentNode.nextNode;
        }

    }

    public contains(value : any) : boolean
    {
        let currentNode : NodeType = this._headNode;

        while (currentNode !== null)
        {
            if (currentNode.value === value)
            {
                return true;
            }

            currentNode = currentNode.nextNode;
        }

        return false;
    }

    public set(value : any, newValue : any) : void
    {
        let currentNode : NodeType = this._headNode;

        while (currentNode !== null)
        {
            if (currentNode.value === value)
            {
                currentNode.value = newValue;
                return;
            }

            currentNode = currentNode.nextNode;
        }
    }

    public isEmpty() : boolean
    {
        return this._headNode === null;
    }

    public swapNodes(val1 : any, val2 : any) : void
    {
        let node1 : (Node | null) = this._headNode;
        let node2 : (Node | null) = this._headNode;
        let node1Prev : (Node | null) = null;
        let node2Prev : (Node | null) = null;
        let tempHolder : (Node | null) = null;
        
        if (val1 === val2)
        {
            console.log("LinkedList: Elements are the same - no swap needed.");
            return;
        }

        while (node1 !== null)
        {
            if (node1.value === val1)
            {
                break;
            }

            node1Prev = node1;
            node1 = node1.nextNode;
        }

        while (node2 !== null)
        {
            if (node2.value === val2)
            {
                break;
            }

            node2Prev = node2;
            node2 = node2.nextNode;
        }

        if (node1 === null || node2 === null)
        {
            console.log("LinkedList: Swap not possible - one or more element is not in the list.");
            return;
        }

        if (node1Prev === null)
        {
            this._headNode = node2;
        }
        else
        {
            node1Prev.nextNode = node2;
        }

        if (node2Prev === null)
        {
            this._headNode = node1;
        }
        else
        {
            node2Prev.nextNode = node1;
        }

        tempHolder = node1.nextNode;
        node1.nextNode = node2.nextNode;
        node2.nextNode = tempHolder;
    }

    public toString() : string
    {
        let currentNode : NodeType = this._headNode;
        let finalString : string = "";

        if (currentNode === null)
        {
            return "";
        }

        while (currentNode !== null)
        {
            finalString += currentNode.value + "\n";
            currentNode = currentNode.nextNode;
        } 

        return finalString;
    }
}