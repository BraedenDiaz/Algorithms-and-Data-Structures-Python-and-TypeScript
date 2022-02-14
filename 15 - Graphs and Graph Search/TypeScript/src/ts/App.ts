
import { Graph } from "./Graph";
import { Vertex } from "./Vertex";

/******************* Custom Graph Example *******************/

// Builds a graph of the Utah Transit Authority's Trax Redline Route

const daybreak : Vertex = new Vertex("Daybreak");
const southJordan : Vertex = new Vertex("South Jordan");
const oldBinghamHwy5600 : Vertex = new Vertex("5600");
const oldBinghamHwy4800 : Vertex = new Vertex("4800");
const jordanValley : Vertex = new Vertex("Jordan Valley");
const sugarFactoryRd : Vertex = new Vertex("2700");
const westJordanCityCenter : Vertex = new Vertex("West Jordan City Center");
const historicGarden : Vertex = new Vertex("Historic Garden");
const binghamJunction : Vertex = new Vertex("Bingham Junction");
const fashionPlace : Vertex = new Vertex("Fashion Place");
const murrayCentral : Vertex = new Vertex("Murray Central");
const murrayNorth : Vertex = new Vertex("Murray North");
const meadowbrook : Vertex = new Vertex("Meadowbrook");
const millcreek : Vertex = new Vertex("Millcreek");
const centralPointe : Vertex = new Vertex("Central Pointe");
const ballpark : Vertex = new Vertex("Ballpark");
const _900South : Vertex = new Vertex("900 South");
const courthouse : Vertex = new Vertex("Courthouse");
const library : Vertex = new Vertex("Library");
const trolley : Vertex = new Vertex("Trolley");
const _900East : Vertex = new Vertex("900 East");
const stadium : Vertex = new Vertex("Stadium");
const universitySouth : Vertex = new Vertex("University South Campus");
const fortDouglas : Vertex = new Vertex("Fort Douglas");
const uofuMedicalCenter : Vertex = new Vertex("U. Of U. Medical Center");

const traxRedline : Graph = new Graph();

traxRedline.addVertex(daybreak);
traxRedline.addVertex(southJordan);
traxRedline.addVertex(oldBinghamHwy5600);
traxRedline.addVertex(oldBinghamHwy4800);
traxRedline.addVertex(jordanValley);
traxRedline.addVertex(sugarFactoryRd);
traxRedline.addVertex(westJordanCityCenter);
traxRedline.addVertex(historicGarden);
traxRedline.addVertex(binghamJunction);
traxRedline.addVertex(fashionPlace);
traxRedline.addVertex(murrayCentral);
traxRedline.addVertex(murrayNorth);
traxRedline.addVertex(meadowbrook);
traxRedline.addVertex(millcreek);
traxRedline.addVertex(centralPointe);
traxRedline.addVertex(ballpark);
traxRedline.addVertex(_900South);
traxRedline.addVertex(courthouse);
traxRedline.addVertex(library);
traxRedline.addVertex(trolley);
traxRedline.addVertex(_900East);
traxRedline.addVertex(stadium);
traxRedline.addVertex(universitySouth);
traxRedline.addVertex(fortDouglas);
traxRedline.addVertex(uofuMedicalCenter);

traxRedline.addEdge(daybreak, southJordan);
traxRedline.addEdge(southJordan, oldBinghamHwy5600);
traxRedline.addEdge(oldBinghamHwy5600, oldBinghamHwy4800);
traxRedline.addEdge(oldBinghamHwy4800, jordanValley);
traxRedline.addEdge(jordanValley, sugarFactoryRd);
traxRedline.addEdge(sugarFactoryRd, westJordanCityCenter);
traxRedline.addEdge(westJordanCityCenter, historicGarden);
traxRedline.addEdge(historicGarden, binghamJunction);
traxRedline.addEdge(binghamJunction, fashionPlace);
traxRedline.addEdge(fashionPlace, murrayCentral);
traxRedline.addEdge(murrayCentral, murrayNorth);
traxRedline.addEdge(murrayNorth, meadowbrook);
traxRedline.addEdge(meadowbrook, millcreek);
traxRedline.addEdge(millcreek, centralPointe);
traxRedline.addEdge(centralPointe, ballpark);
traxRedline.addEdge(ballpark, _900South);
traxRedline.addEdge(_900South, courthouse);
traxRedline.addEdge(courthouse, library);
traxRedline.addEdge(library, trolley);
traxRedline.addEdge(trolley, _900East);
traxRedline.addEdge(_900East, stadium);
traxRedline.addEdge(stadium, universitySouth);
traxRedline.addEdge(universitySouth, fortDouglas);
traxRedline.addEdge(fortDouglas, uofuMedicalCenter);

console.log("Path exists from Daybreak to University Medical Center:");
// We can pass in strings directly
console.log(traxRedline.pathExists("Daybreak", "U. Of U. Medical Center"));

console.log();

console.log("Path exists from University Medical Center to Daybreak:");
// We can also pass in the string value of a vertex
console.log(traxRedline.pathExists(uofuMedicalCenter.value, daybreak.value));

console.log();

console.log("Path exists from Fashion Place to South Jordan?");
console.log(traxRedline.pathExists(fashionPlace.value, southJordan.value));

console.log();

console.log("Path exists from Ballpark to Las Vegas?");
console.log(traxRedline.pathExists("Ballpark", "Las Vegas"));

console.log();

/******************* Build Random Graphs *******************/

function getRandomNumberBetween(min : number, max : number) : number
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buildRandomGraph(isDirected : boolean) : Graph
{
    const g : Graph = new Graph(isDirected);
    const vertices : Vertex[] = [];

    for (let val of ['a', 'b', 'c', 'd', 'e', 'f', 'g'])
    {
        const vertex : Vertex = new Vertex(val);
        vertices.push(vertex);
        g.addVertex(vertex);
    }

    for (let i = 0; i < vertices.length; i++)
    {
        const v1 : Vertex = vertices[getRandomNumberBetween(0, vertices.length - 1)];
        const v2 : Vertex = vertices[getRandomNumberBetween(0, vertices.length - 1)];

        // Don't allow a vertex to connect to itself, remove if you want a possible self-loop on a vertex
        if (v1 === v2)
        {
            i--;
            continue;
        }

        g.addEdge(v1, v2, getRandomNumberBetween(1, 10));
    }

    return g;
}

function printGraph(graph : Graph) : void
{    
    for (let vertex of graph.graphMap)
    {
        console.log();
        console.log(`${vertex[0]} connected to`)
        const vertexNeighbors : string[] = graph.graphMap.get(vertex[0])!.getEdges();
        
        if (vertexNeighbors.length === 0)
        {
            console.log("No edges!");
        }

        for (let adjacentVertex of vertexNeighbors)
        {
            console.log(`=> ${adjacentVertex}`);
        }
    }
}

console.log("Build and Print a Random Undirected Graph:");
printGraph(buildRandomGraph(false));

console.log();

console.log("Build and Print a Random Directed Graph:");
printGraph(buildRandomGraph(true));

console.log();

/******************* Graph Search Tests *******************/

const someHazardousGraph : Graph = new Graph(true);
const lava = new Vertex("lava");
const sharks = new Vertex("sharks");
const piranhas = new Vertex("piranhas");
const bees = new Vertex("bees");
const lasers = new Vertex("lasers");

someHazardousGraph.addVertex(lava);
someHazardousGraph.addVertex(sharks);
someHazardousGraph.addVertex(piranhas);
someHazardousGraph.addVertex(bees);
someHazardousGraph.addVertex(lasers);

someHazardousGraph.addEdge(lava, sharks);
someHazardousGraph.addEdge(lava, piranhas);
someHazardousGraph.addEdge(sharks, piranhas);
someHazardousGraph.addEdge(sharks, bees);
someHazardousGraph.addEdge(piranhas, bees);
someHazardousGraph.addEdge(bees, lasers);

console.log("Depth-First Search on Some Hazerdous Graph:");

console.log(someHazardousGraph.dfs("sharks", "bees"));

console.log();

console.log("Breadth-First Search on Some Hazerdous Graph:");

console.log(someHazardousGraph.bfs("sharks", "bees"));

console.log();