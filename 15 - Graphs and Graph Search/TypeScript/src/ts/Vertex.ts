
/**
 * A vertex class to be used in graphs.
 * 
 *      - Uses a Hashtable (Map) as an adjacency list to store connected vertices.
 * 
 *      - For edges, connected vertex names are keys and the edge weights are values.
 * 
 *      - Has methods to add edges and return a list of connected vertices.
 */
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

    public addEdge(vertex : string, weight : number = 0) : void
    {
        this._edges.set(vertex, weight);
    }

    public getEdges() : string[]
    {
        return Array.from(this._edges.keys());
    }
}