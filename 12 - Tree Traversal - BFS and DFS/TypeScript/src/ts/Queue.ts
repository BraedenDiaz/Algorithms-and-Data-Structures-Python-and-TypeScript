import { Node } from "./Node";

export class Queue
{
    private head : (Node | null);
    private tail : (Node | null);
    private max_size : (number | null);
    private _size : number;

    public constructor(max_size : (number | null) = null)
    {
        this.head = null;
        this.tail = null;
        this.max_size = max_size;
        this._size = 0;
    }

    public get size() : number
    {
        return this._size;
    }

    public enqueue(value : any)
    {
        if (this.hasSpace())
        {
            const itemToAdd : Node = new Node(value);

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

    public dequeue() : any
    {
        if (this.head)
        {
            const itemToRemove : Node = this.head;

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

    public peek() : any
    {
        if (this.head)
        {
            return this.head.value;
        }

        return null;
    }

    public hasSpace() : boolean
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

    public isEmpty() : boolean
    {
        return this._size === 0;
    }
}