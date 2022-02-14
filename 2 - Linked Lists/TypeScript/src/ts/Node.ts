
export type NodeType = (null | Node);

export class Node
{
    _value : any;
    _nexNode : (Node | null);

    constructor(_value : any, next_node : (Node | null) = null)
    {
        this._value = _value;
        this._nexNode = next_node;
    }

    get value() : any
    {
        return this._value;
    }

    set value(newValue : any)
    {
        this._value = newValue;
    }

    get nextNode() : (Node | null)
    {
        return this._nexNode;
    }

    set nextNode(next_node : (Node | null))
    {
        this._nexNode = next_node;
    }
}