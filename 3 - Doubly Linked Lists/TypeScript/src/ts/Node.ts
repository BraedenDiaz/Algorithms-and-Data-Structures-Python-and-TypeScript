
export class Node
{
    _value : any;
    next_node : (Node | null);
    prev_node : (Node | null);

    constructor(_value : any, next_node : (Node | null) = null, prev_node : (Node | null) = null)
    {
        this._value = _value;
        this.next_node = next_node;
        this.prev_node = prev_node;
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

    get prevNode() : (Node | null)
    {
        return this.prev_node;
    }

    set prevNode(prev_node : (Node | null))
    {
        this.prev_node = prev_node;
    }
}