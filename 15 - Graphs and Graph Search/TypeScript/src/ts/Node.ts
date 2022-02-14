
export class Node
{
    private _value : any;
    private _next_node : (Node | null);

    public constructor(_value : any, next_node : (Node | null) = null)
    {
        this._value = _value;
        this._next_node = next_node;
    }

    public get value() : any
    {
        return this._value;
    }

    public get nextNode() : (Node | null)
    {
        return this._next_node;
    }

    public set nextNode(next_node : (Node | null))
    {
        this._next_node = next_node;
    }
}