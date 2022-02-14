import { Node } from "./Node";

export class LinkedList
{
    head_node : (Node | null);

    constructor(value : any)
    {
        this.head_node = new Node(value);
    }

    get headNode() : (Node | null)
    {
        return this.head_node;
    }

    insertBeginning(value) : void
    {
        const newNode : Node = new Node(value);
        newNode.nextNode = this.head_node;
        this.head_node = newNode;
    }

    removeNode(valueToRemove : any) : void
    {
        let currentNode : (Node | null) = this.head_node;

        if (currentNode && currentNode.value === valueToRemove)
        {
            this.head_node = currentNode.nextNode;
        }
        else
        {
            while (currentNode)
            {
                const nextNode : (Node | null) = currentNode.nextNode;
    
                if (nextNode)
                {
                    if (nextNode.value === valueToRemove)
                    {
                        currentNode.nextNode = nextNode.nextNode;
                        currentNode = null;
                    }
                    else
                    {
                        currentNode = nextNode;
                    }
                }
                else
                {
                    currentNode = null;
                }
            }
        }
    }

    toString() : string
    {
        let currentNode : (Node | null) = this.head_node;
        let stringList : string = "";

        while (currentNode)
        {
            let currentNodeValue : any = currentNode.value;

            if (currentNodeValue !== null)
            {
                stringList += currentNodeValue + "\n";
            }

            currentNode = currentNode.nextNode;
        }

        return stringList;
    }

    swapNodes(val1 : any, val2 : any) : void
    {
        let node1 : (Node | null) = this.head_node;
        let node2 : (Node | null) = this.head_node;
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
            this.head_node = node2;
        }
        else
        {
            node1Prev.nextNode = node2;
        }

        if (node2Prev === null)
        {
            this.head_node = node1;
        }
        else
        {
            node2Prev.nextNode = node1;
        }

        tempHolder = node1.nextNode;
        node1.nextNode = node2.nextNode;
        node2.nextNode = tempHolder;
    }
}