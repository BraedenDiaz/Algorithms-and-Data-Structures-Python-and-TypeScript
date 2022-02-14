
export type NodeType = (null | Node);

export class Node
{
    _value : any;
    _nextNode : NodeType;

    constructor(value : any)
    {
        this._value = value;
        this._nextNode = null;
    }

    get value() : any
    {
        return this._value;
    }

    set value(newValue : any)
    {
        this._value = newValue;
    }

    get nextNode() : NodeType
    {
        return this._nextNode;
    }

    set nextNode(nextNode : NodeType)
    {
        this._nextNode = nextNode;
    }
}