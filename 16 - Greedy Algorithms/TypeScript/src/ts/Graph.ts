
import { Vertex } from "./Vertex";
import { heapValueTypes, MinHeap } from "./MinHeap";

export class Graph
{
    private _vertices : Map<string, Vertex>;
    private _isDirected : boolean;

    public constructor(isDirected : boolean = false)
    {
        this._vertices = new Map<string, Vertex>();
        this._isDirected = isDirected;
    }

    public get vertices()
    {
        return new Map<string, Vertex>(this._vertices);
    }

    public addVertex(vertex : Vertex) : void
    {
        this._vertices.set(vertex.value, vertex);
    }

    public addEdge(fromVertex : Vertex, toVertex : Vertex, weight = 0) : void
    {
        if (!this._vertices.has(fromVertex.value) || !this._vertices.has(toVertex.value))
        {
            console.log("The graph does not contain one of the vertices passed in.");
            return;
        }

        if (weight < 0)
        {
            console.log("Weight must be positive!");
            return;
        }

        this._vertices.get(fromVertex.value)!.addEdge(toVertex.value, weight);

        if (!this._isDirected)
        {
            this._vertices.get(toVertex.value)!.addEdge(fromVertex.value, weight);
        }
    }

    public dijkstras(start : Vertex) : (Map<string, number> | void)
    {
        // You may want to use a try/catch and throw the error back
        // to the user instead so that we don't have to go through
        // all vertices here.
        if (!this._vertices.has(start.value))
        {
            console.log("The passed in vertex is not in the graph!");
            return;
        }

        const distances : Map<string, number> = new Map<string, number>();
        const verticesToExplore : MinHeap = new MinHeap();

        for (let vertexName of this._vertices.keys())
        {
            distances.set(vertexName, Infinity);
        }

        distances.set(start.value, 0);
        verticesToExplore.add([0, start.value]);

        while (verticesToExplore.count > 0)
        {
            const minTuple : heapValueTypes = verticesToExplore.removeMin();
            const currentDistance : number = minTuple[0];
            const currentVertex : string = minTuple[1];

            // As long as all vertices from the start vertex were built with this
            // graph, this will work. That is, no vertices should be editied manually
            // outside this Graph class. I.e. only this Graph class should add edges
            // (new vertices) to current vertices.
            for (let [neighbor, edgeWeight] of this._vertices.get(currentVertex)!.edges)
            {
                const newDistace : number = currentDistance + edgeWeight;

                // We instantiated distances with all vertices, so this will work as long
                // as no vertices were edited outside this Graph class.
                if (newDistace < distances.get(neighbor)!)
                {
                    distances.set(neighbor, newDistace);
                    verticesToExplore.add([newDistace, neighbor]);
                }
            }
        }

        return distances;
    }
}

(function main()
{
    // Test Graph Code
    const graph = new Graph(true);
    const A = new Vertex("A");
    const B = new Vertex("B");
    const C = new Vertex("C");
    const D = new Vertex("D");
    const E = new Vertex("E");
    const F = new Vertex("F");

    graph.addVertex(A);
    graph.addVertex(B);
    graph.addVertex(C);
    graph.addVertex(D);
    graph.addVertex(E);
    graph.addVertex(F);

    graph.addEdge(A, B);
    graph.addEdge(A, C);
    graph.addEdge(B, D);
    graph.addEdge(B, E);
    graph.addEdge(C, F);

    console.log(graph.vertices);

    console.log();

    // Test Dijkstras
    console.log("Test Dijkstras");
    console.log("--------------");
    const graph2 = new Graph(true);
    const A2 = new Vertex("A");
    const B2 = new Vertex("B");
    const C2 = new Vertex("C");
    const D2 = new Vertex("D");
    const E2 = new Vertex("E");

    graph2.addVertex(A2);
    graph2.addVertex(B2);
    graph2.addVertex(C2);
    graph2.addVertex(D2);
    graph2.addVertex(E2);

    graph2.addEdge(A, B, 10);
    graph2.addEdge(A, C, 3);
    graph2.addEdge(C, D, 2);
    graph2.addEdge(D, E, 10);
    graph2.addEdge(E, A, 7);
    graph2.addEdge(B, C, 3);
    graph2.addEdge(B, D, 2);

    console.log(graph2.vertices);

    console.log();

    console.log("Dijkstras Result:");
    console.log(graph2.dijkstras(D2));

    console.log();

    console.log("Dijkstras Result for a 'start' Vertex not in the Graph:");
    console.log(graph2.dijkstras(new Vertex("Z")));
})();