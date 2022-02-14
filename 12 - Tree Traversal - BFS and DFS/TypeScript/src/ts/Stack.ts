import { Node } from "./Node";

export class Stack
{
    private _topItem : (Node | null);
    private _size : number;
    private _limit : number;

    public constructor(limit : number = 1000)
    {
        this._topItem = null;
        this._size = 0;
        this._limit = limit;
    }

    public get size() : number
    {
        return this._size;
    }

    public push(value : any) : void
    {
        if (this.hasSpace())
        {
            const item : Node = new Node(value);
            item.nextNode = this._topItem;
            this._topItem = item;
            this._size++;
        }
        else
        {
            console.log("Stack is full!");
        }
    }

    public pop() : any
    {
        if (this._topItem)
        {
            const itemToRemove : Node = this._topItem;
            this._topItem = itemToRemove.nextNode;
            this._size--;
            return itemToRemove.value;
        }

        console.log("Stack is empty!");
    }

    public peek() : any
    {
        if (this._topItem)
        {
            return this._topItem.value;
        }

        console.log("Stack is empty, nothing to peek at!");
    }

    public hasSpace() : boolean
    {
        return this._limit > this._size;
    }

    public isEmpty() : boolean
    {
        return this._size === 0;
    }
}