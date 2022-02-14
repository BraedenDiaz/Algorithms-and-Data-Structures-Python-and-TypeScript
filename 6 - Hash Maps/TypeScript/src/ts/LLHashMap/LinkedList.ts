import { Node, NodeType } from "./Node";

export class LinkedList
{
    _headNode : NodeType;
    _size : number;

    constructor()
    {
        this._headNode = null;
        this._size = 0;
    }

    get size() : number
    {
        return this._size;
    }

    [Symbol.iterator] ()
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

    addToBeginning(value : any) : void
    {
        const newNode : Node = new Node(value);

        if (this._headNode !== null)
        {
            newNode.nextNode = this._headNode;
        }

        this._headNode = newNode;
        this._size++;

    }

    remove(value : any) : any
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

    contains(value : any) : boolean
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

    set(value : any, newValue : any) : void
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

    isEmpty() : boolean
    {
        return this._headNode === null;
    }

    toString() : string
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