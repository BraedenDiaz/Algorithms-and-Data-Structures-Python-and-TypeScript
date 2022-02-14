import { Node } from "./Node"

export class DoublyLinkedList
{
    head_node : (Node | null);
    tail_node : (Node | null);

    constructor()
    {
        this.head_node = null
        this.tail_node = null
    }

    addToHead(newValue : any) : void
    {
        const newHead : Node = new Node(newValue);
        const currentHead : (Node | null) = this.head_node;

        if (currentHead !== null)
        {
            currentHead.prevNode = newHead;
            newHead.nextNode = currentHead;
        }

        this.head_node = newHead;

        if (this.tail_node === null)
        {
            this.tail_node = newHead;
        }
    }

    addToTail(newValue : any) : void
    {
        const newTail : Node = new Node(newValue);
        const currentTail : (Node | null) = this.tail_node;

        if (currentTail !== null)
        {
            currentTail.nextNode = newTail;
            newTail.prevNode = currentTail;
        }

        this.tail_node = newTail;

        if (this.head_node === null)
        {
            this.head_node = newTail;
        }
    }

    removeHead() : any
    {
        const removedHead : (Node | null) = this.head_node;

        if (removedHead === null)
        {
            return null
        }

        this.head_node = removedHead.nextNode;

        if (this.head_node !== null)
        {
            this.head_node.prevNode = null;
        }

        if (removedHead === this.tail_node)
        {
            this.removeTail();
        }

        return removedHead.value;
    }

    removeTail() : any
    {
        const removedTail : (Node | null) = this.tail_node;

        if (removedTail === null)
        {
            return null;
        }

        this.tail_node = removedTail.prevNode;

        if (this.tail_node !== null)
        {
            this.tail_node.nextNode = null;
        }

        if (removedTail === this.head_node)
        {
            this.removeHead();
        }

        return removedTail.value;
    }

    removeByValue(valueToRemove) : (Node | null)
    {
        let nodeToRemove : (Node | null) = null;
        let currentNode : (Node | null) = this.head_node;

        while (currentNode !== null)
        {
            if (currentNode.value === valueToRemove)
            {
                nodeToRemove = currentNode;
                break;
            }

            currentNode = currentNode.nextNode;
        }

        if (nodeToRemove === null)
        {
            return null;
        }

        if (nodeToRemove.prevNode === null) // If the nodeToRemove is the head_node
        {
            this.removeHead();
        }
        else if (nodeToRemove.nextNode === null) // Else if the nodeToRemove is the tail_node
        {
            this.removeTail();
        }
        else
        {
            const nextNode : Node = nodeToRemove.nextNode;
            const prevNode : Node = nodeToRemove.prevNode;
            nextNode.prevNode = prevNode;
            prevNode.nextNode = nextNode;
        }

        return nodeToRemove;
    }

    toString() : string
    {
        let currentNode : (Node | null) = this.head_node;
        let stringList : string = "";

        while (currentNode)
        {
            if (currentNode.value !== null)
            {
                stringList += currentNode.value + "\n";
            }

            currentNode = currentNode.nextNode;
        }

        return stringList;
    }
}