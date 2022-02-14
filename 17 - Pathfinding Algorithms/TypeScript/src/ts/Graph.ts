
import { Vertex } from "./Vertex";
import { heapValueTypes, MinHeap } from "./MinHeap";
import { City } from "./City";

export class Graph<T>
{
    private _vertices : Map<T, Vertex<T>>;
    private _isDirected : boolean;

    public constructor(isDirected : boolean = false)
    {
        this._vertices = new Map<T, Vertex<T>>();
        this._isDirected = isDirected;
    }

    public get vertices() : Map<T, Vertex<T>>
    {
        return new Map<T, Vertex<T>>(this._vertices);
    }

    public addVertex(vertex : Vertex<T>)
    {
        this._vertices.set(vertex.value, vertex);
    }

    public addEdge(fromVertex : Vertex<T>, toVertex : Vertex<T>, weight : number = 0) : void
    {
        if (!this._vertices.has(fromVertex.value) || !this._vertices.has(toVertex.value))
        {
            console.log("Grap addEdge Error: Graph does not have one of the provided vertices!");
            return;
        }

        this._vertices.get(fromVertex.value)!.addEdge(toVertex, weight);

        if (!this._isDirected)
        {
            this._vertices.get(toVertex.value)!.addEdge(fromVertex, weight);
        }
    }

    public dijkstras(startVertex : Vertex<T>) : (Map<T, number> | void)
    {
        if (!this._vertices.has(startVertex.value))
        {
            console.log("The provided start vertex is not in the graph!");
            return;
        }
 
        const distances : Map<T, number> = new Map<T, number>();
        const minHeap : MinHeap = new MinHeap();

        for (let vertex of this._vertices.keys())
        {
            distances.set(vertex, Infinity);
        }

        distances.set(startVertex.value, 0);

        minHeap.add([0, startVertex.value]);

        while (minHeap.count > 0)
        {
            const currentDistanceAndVertex : heapValueTypes = minHeap.removeMin();
            const currentDistance : number = currentDistanceAndVertex[0];
            const currentVertexValue : T = currentDistanceAndVertex[1];

            for (let [neighbor, edgeWeight] of this._vertices.get(currentVertexValue)!.neighbors)
            {
                const newDistance : number = currentDistance + edgeWeight;

                if (newDistance < distances.get(neighbor)!)
                {
                    distances.set(neighbor, newDistance);
                    minHeap.add([newDistance, neighbor]);
                }
            }
        }

        return distances;
    }

    /************************* A* Search Algorithm *************************/

    /**
     * The A* Search Algorithm.
     * 
     * This function is created from some modifications of Dijkstra's Algorithm from above.
     * 
     * @param startVertex The vertex to start the search from.
     * @param targetVertex The target vertex your trying to find the shortest path to from the start vertex.
     * @param heuristic A function that calculates some heuristic (e.g. Manhattan distance, Euclidean distance, etc.) between two vertices.
     * @returns A list of vertex values representing the shortest path from the startVertex to the targetVertex.
     */
    public aStarSearch(startVertex : Vertex<T>, targetVertex : Vertex<T>, heuristic : (arg0 : T, arg1 : T) => number) : (T[] | void)
    {
        if (!this._vertices.has(startVertex.value) || !this._vertices.has(targetVertex.value))
        {
            console.log("The provided start vertex or target vertex is not in the graph!");
            return;
        }
 
        let count : number = 0;
        const distancesAndPaths : Map<T, [number, T[]]> = new Map<T, [number, T[]]>();
        const minHeap : MinHeap = new MinHeap();

        for (let vertex of this._vertices.keys())
        {
            distancesAndPaths.set(vertex, [Infinity, [startVertex.value]]);
        }

        distancesAndPaths.set(startVertex.value, [0, [startVertex.value]]);

        minHeap.add([0, startVertex.value]);

        // We know targetVertex exists as we checked it above and put it into distancesAndPaths
        while (minHeap.count > 0 && (distancesAndPaths.get(targetVertex.value)![0] === Infinity))
        {
            const currentDistanceAndVertex : heapValueTypes = minHeap.removeMin();
            const currentDistance : number = currentDistanceAndVertex[0];
            const currentVertexValue : T = currentDistanceAndVertex[1];

            for (let [neighbor, edgeWeight] of this._vertices.get(currentVertexValue)!.neighbors)
            {
                const newDistance : number = currentDistance + edgeWeight + heuristic(neighbor, targetVertex.value);
                const newPath : T[] = distancesAndPaths.get(currentVertexValue)![1].concat(neighbor);

                if (newDistance < distancesAndPaths.get(neighbor)![0])
                {
                    distancesAndPaths.set(neighbor, [newDistance, newPath]);
                    minHeap.add([newDistance, neighbor]);
                    count++;
                    // console.log("\nAt");
                    // console.log(minHeap.minimum);
                    // console.log();
                }
            }
        }

        console.log(`Found a path in ${count} steps.`);

        return distancesAndPaths.get(targetVertex.value)![1];
    }
}

// For testing Graph
function main()
{
    // Creating a graph and vertices with specified types
    const g = new Graph<any>(true);
    const v1 = new Vertex<number>(2022);
    const v2 = new Vertex<string>("Year");

    g.addVertex(v1);
    g.addVertex(v2);

    g.addEdge(v1, v2);

    console.log("Vertices:");
    console.log(g.vertices);

    // Test Dijkstras
    console.log("Test Dijkstras");
    console.log("--------------");

    // Created a graph without spcifying a type
    const graph2 = new Graph(true);
    const A = new Vertex("A");
    const B = new Vertex("B");
    const C = new Vertex("C");
    const D = new Vertex("D");
    const E = new Vertex("E");

    graph2.addVertex(A);
    graph2.addVertex(B);
    graph2.addVertex(C);
    graph2.addVertex(D);
    graph2.addVertex(E);

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
    console.log(graph2.dijkstras(D));

    console.log();

    console.log("Dijkstras Result for a 'start' Vertex not in the Graph:");
    console.log(graph2.dijkstras(new Vertex("Z")));
};

main();