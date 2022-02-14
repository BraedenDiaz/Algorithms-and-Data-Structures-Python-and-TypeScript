
export class Vertex
{
    private _value : string;
    private _edges : Map<string, number>;

    public constructor(value : string)
    {
        this._value = value;
        this._edges = new Map<string, number>();
    }

    public get value() : string
    {
        return this._value;
    }

    public get edges() : Map<string, number>
    {
        return new Map(this._edges);
    }

    public addEdge(vertexVal : string, weight : number = 0)
    {
        this._edges.set(vertexVal, weight);
    }
}