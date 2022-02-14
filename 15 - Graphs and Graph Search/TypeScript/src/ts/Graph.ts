
import { Vertex } from "./Vertex";
import { Queue } from "./Queue";

/**
 * A graph class used to manage vertices and represent a full graph.
 *      - Can be initialized as a directed graph, where edges are set in one direction.
 * 
 *      - Stores every vertex inside a Hashtable (Map)
 *          - Vertex data is the key and the vertex instance is the value.
 * 
 *      - Has methods to add vertices, add edges between vertices, and determine if a path exists between two vertices.
 */
export class Graph
{
    private _graphMap : Map<string, Vertex>;
    private _isDirected : boolean;

    public constructor(isDirected : boolean = false)
    {
        this._graphMap = new Map<string, Vertex>();
        this._isDirected = isDirected;
    }

    public get graphMap() : Map<string, Vertex>
    {
        // Don't return the original map, only return a copy, otherwise the user could modify
        // our map outside this class!
        return new Map(this._graphMap);
    }

    public addVertex(vertex : Vertex) : void
    {
        this._graphMap.set(vertex.value, vertex);
    }

    public addEdge(fromVertex : Vertex, toVertex : Vertex, weight : number = 0) : void
    {
        if (!this._graphMap.has(fromVertex.value) || !this._graphMap.has(toVertex.value))
        {
            console.log("One of the vertices passed in is not in the graph!");
            return;
        }

        this._graphMap.get(fromVertex.value)!.addEdge(toVertex.value, weight);

        if (!this._isDirected)
        {
            this._graphMap.get(toVertex.value)!.addEdge(fromVertex.value, weight);
        }
    }

    // This is a graph search like BFS not exactly, use the exmaples
    // from the graph search section below for more common implementations.
    public pathExists(startVertex : string, endVertex : string) : boolean
    {
        let startList : string[] = [startVertex];
        const seenMap : Map<string, boolean> = new Map<string, boolean>();

        if (!this._graphMap.has(startVertex) || !this._graphMap.has(endVertex))
        {
            return false;
        }

        while (startList.length > 0)
        {
            // We know we have a string sinnce the length of startList is > 0
            let currentVertexKey : string = startList.shift()!;
            seenMap.set(currentVertexKey, true);

            console.log(`Visiting ${currentVertexKey}`);

            if (currentVertexKey === endVertex)
            {
                return true;
            }
            else
            {
                // We know we have a vertex here as we checked startVertex in the very first "if"
                // that it is in the graphMap. If yes, the graphMap will have its children as well.
                const verticesToVisit : string[] = this._graphMap.get(currentVertexKey)!.getEdges();

                startList = [...startList, ...verticesToVisit];

                startList = startList.filter((value : string) => {
                    return !seenMap.has(value);
                })
            }
        }

        return false;
    }

    /********************* Other More Common Graph Search Functions  **********************/

    public dfs(currentVertex : string, targetValue : string, visited : (string[] | null) = null) : (string[] | null)
    {
        if (!this._graphMap.has(currentVertex))
        {
            console.log(`Graph does not contain the vertex ${currentVertex}`);
            return null;
        }

        if (visited === null)
        {
            visited = [];
        }

        visited.push(currentVertex);

        if (currentVertex === targetValue)
        {
            return visited;
        }

        for (let neighbor of this._graphMap.get(currentVertex)!.getEdges())
        {
            if (!visited.includes(neighbor))
            {
                const path : string[] = this.dfs(neighbor, targetValue, visited)!;

                if (path.length > 0)
                {
                    return path;
                }
            }
        }

        return null;
    }

    public bfs(startVertex : string, targetValue : string) : (string[] | null)
    {
        if (!this._graphMap.has(startVertex))
        {
            console.log(`Graph does not contain the vertex ${startVertex}`);
            return null;
        }

        let path : string[] = [startVertex];
        const vertexAndPath : [string, string[]] = [startVertex, path];
        const bfsQueue : Queue = new Queue();
        const visited : Set<string> = new Set();

        bfsQueue.enqueue(vertexAndPath);

        while (!bfsQueue.isEmpty())
        {
            const vertexPathTuple : [string, string[]] = bfsQueue.dequeue();
            const currentVertex : string = vertexAndPath[0];
            path = vertexPathTuple[1];

            visited.add(currentVertex);

            for (let neighbor of this._graphMap.get(currentVertex)!.getEdges())
            {
                if (!visited.has(neighbor))
                {
                    if (neighbor === targetValue)
                    {
                        return path.concat(neighbor);
                    }
                    else
                    {
                        bfsQueue.enqueue([neighbor, path.concat(neighbor)]);
                    }
                }
            }
        }

        return null;
    }
}