
export class Vertex<T>
{
    private _value : T;
    private _edges : Map<T, number>;

    public constructor(value : T)
    {
        this._value = value;
        this._edges = new Map<T, number>();
    }

    public get value() : T
    {
        return this._value;
    }

    public get neighbors() : Map<T, number>
    {
        return new Map<T, number>(this._edges);
    }

    public addEdge(toVertex : Vertex<T>, weight : number = 0)
    {
        this._edges.set(toVertex.value, weight);
    }
}