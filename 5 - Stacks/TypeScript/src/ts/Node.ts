
export class Node
{
    _value : any;
    next_node : (Node | null);

    constructor(_value : any, next_node : (Node | null) = null)
    {
        this._value = _value;
        this.next_node = next_node;
    }

    get value() : any
    {
        return this._value;
    }

    get nextNode() : (Node | null)
    {
        return this.next_node;
    }

    set nextNode(next_node : (Node | null))
    {
        this.next_node = next_node;
    }
}