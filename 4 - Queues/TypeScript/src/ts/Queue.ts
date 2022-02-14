import { Node } from "./Node";

export class Queue
{
    head : (Node | null);
    tail : (Node | null);
    max_size : (number | null);
    _size : number;

    constructor(max_size : (number | null) = null)
    {
        this.head = null;
        this.tail = null;
        this.max_size = max_size;
        this._size = 0;
    }

    get size() : number
    {
        return this._size;
    }

    enqueue(value : any)
    {
        if (this.hasSpace())
        {
            const itemToAdd : Node = new Node(value);

            console.log(`Adding ${itemToAdd.value.toString()} to the queue!`);

            // If is empty
            if (!(this.head && this.tail))
            {
                this.head = itemToAdd;
                this.tail = itemToAdd;
            }
            else
            {
                this.tail.nextNode = itemToAdd;
                this.tail = itemToAdd;
            }

            this._size++;
        }
        else
        {
            console.log("Sorry, no more room!");
        }
    }

    dequeue() : any
    {
        if (this.head)
        {
            const itemToRemove : Node = this.head;

            console.log(`Dequeued ${itemToRemove.value.toString()} from the queue!`);

            if (this._size === 1)
            {
                this.head = null;
                this.tail = null;
            }
            else
            {
                this.head = this.head.nextNode;
            }

            this._size--;
            return itemToRemove.value;
        }
        else
        {
            console.log("The queue is totally empty!");
        }
    }

    peek() : any
    {
        if (this.head)
        {
            return this.head.value;
        }

        return null;
    }

    hasSpace() : boolean
    {
        if (this.max_size === null)
        {
            return true;
        }
        else
        {
            return this.max_size > this._size;
        }
    }

    isEmpty() : boolean
    {
        return this._size === 0;
    }
}