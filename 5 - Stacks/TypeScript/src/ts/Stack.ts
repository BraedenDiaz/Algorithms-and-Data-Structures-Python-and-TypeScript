import { Node } from "./Node";

export class Stack
{
    _topItem : (Node | null);
    _size : number;
    _limit : number;

    constructor(limit : number = 1000)
    {
        this._topItem = null;
        this._size = 0;
        this._limit = limit;
    }

    get size() : number
    {
        return this._size;
    }

    push(value : any) : void
    {
        if (this.hasSpace())
        {
            const item : Node = new Node(value);
            item.nextNode = this._topItem;
            this._topItem = item;
            this._size++;
            console.log(`Adding ${item.value} to the stack!`);
        }
        else
        {
            console.log("Stack is full!");
        }
    }

    pop() : any
    {
        if (this._topItem)
        {
            const itemToRemove : Node = this._topItem;
            this._topItem = itemToRemove.nextNode;
            this._size--;
            console.log(`Removed ${itemToRemove.value} from the stack!`);
            return itemToRemove.value;
        }

        console.log("Stack is empty!");
    }

    peek() : any
    {
        if (this._topItem)
        {
            return this._topItem.value;
        }

        console.log("Stack is empty, nothing to peek at!");
    }

    hasSpace() : boolean
    {
        return this._limit > this._size;
    }

    isEmpty() : boolean
    {
        return this._size === 0;
    }
}