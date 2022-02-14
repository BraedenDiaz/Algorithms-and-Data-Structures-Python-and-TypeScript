
import { City } from "./City";
import { Graph } from "./Graph";
import { Vertex } from "./Vertex";

function manhattanHeuristic(city1 : City, city2 : City) : number
{
    const xDistance : number = Math.abs(city1.latitude - city2.latitude);
    const yDistance : number = Math.abs(city1.longitude - city2.longitude);
    return xDistance + yDistance;
}

function euclideanHeuristic(city1 : City, city2 : City) : number
{
    const xDistance : number = Math.abs(city1.latitude - city2.latitude);
    const yDistance : number = Math.abs(city1.longitude - city2.longitude);
    return Math.sqrt(xDistance * xDistance + yDistance * yDistance);
}

(function main()
{
    const delhi : Vertex<City> = new Vertex<City>(new City("New Delhi", 28.6448, 77.216721));
    const jaipur : Vertex<City> = new Vertex<City>(new City("Jaipur", 26.92207, 75.778885));
    const varanasi : Vertex<City> = new Vertex<City>(new City("Varanasi", 25.321684, 82.987289));
    const mumbai : Vertex<City> = new  Vertex<City>(new City("Mumbai", 19.07283, 72.88261));
    const chennai : Vertex<City> = new Vertex<City>(new City("Chennai", 13.067439, 80.237617));
    const hyderabad : Vertex<City> = new Vertex<City>(new City("Hyderabad", 17.387140, 78.491684));
    const kolkata : Vertex<City> = new Vertex<City>(new City("Kolkata", 22.572645, 88.363892));
    const bengaluru : Vertex<City> = new Vertex<City>(new City("Bengaluru", 12.972442, 77.580643));

    const euclideanGraph = new Graph<City>(true);
    euclideanGraph.addVertex(delhi);
    euclideanGraph.addVertex(jaipur);
    euclideanGraph.addVertex(varanasi);
    euclideanGraph.addVertex(mumbai);
    euclideanGraph.addVertex(chennai);
    euclideanGraph.addVertex(hyderabad);
    euclideanGraph.addVertex(kolkata);
    euclideanGraph.addVertex(bengaluru);
    
    euclideanGraph.addEdge(delhi, jaipur, 2.243918);
    euclideanGraph.addEdge(delhi, varanasi, 6.65902);
    euclideanGraph.addEdge(delhi, mumbai, 10.507479);
    euclideanGraph.addEdge(delhi, chennai, 15.867576);
    euclideanGraph.addEdge(delhi, hyderabad, 11.329626);
    euclideanGraph.addEdge(delhi, kolkata, 12.693718);
    euclideanGraph.addEdge(delhi, bengaluru, 15.676582);

    euclideanGraph.addEdge(jaipur, mumbai, 8.366539);
    euclideanGraph.addEdge(jaipur, delhi, 2.243918);

    euclideanGraph.addEdge(varanasi, delhi, 6.65902);
    euclideanGraph.addEdge(varanasi, mumbai, 11.88077);

    euclideanGraph.addEdge(mumbai, delhi, 10.507479);
    euclideanGraph.addEdge(mumbai, jaipur, 8.366539);
    euclideanGraph.addEdge(mumbai, varanasi, 11.88077);
    euclideanGraph.addEdge(mumbai, hyderabad, 5.856898);
    euclideanGraph.addEdge(mumbai, kolkata, 15.87195);
    euclideanGraph.addEdge(mumbai, bengaluru, 7.699756);

    euclideanGraph.addEdge(chennai, delhi, 15.867576);
    euclideanGraph.addEdge(chennai, kolkata, 12.50541);
    euclideanGraph.addEdge(chennai, hyderabad, 4.659195);
    euclideanGraph.addEdge(chennai, bengaluru, 2.658671);

    euclideanGraph.addEdge(hyderabad, delhi, 11.329626);
    euclideanGraph.addEdge(hyderabad, mumbai, 5.856898);
    euclideanGraph.addEdge(hyderabad, chennai, 4.659195);
    euclideanGraph.addEdge(hyderabad, bengaluru, 4.507721);
    euclideanGraph.addEdge(hyderabad, kolkata, 11.151231);

    euclideanGraph.addEdge(kolkata, delhi, 12.693718);
    euclideanGraph.addEdge(kolkata, mumbai, 15.87195);
    euclideanGraph.addEdge(kolkata, chennai, 12.50541);
    euclideanGraph.addEdge(kolkata, hyderabad, 11.151231);
    euclideanGraph.addEdge(kolkata, bengaluru, 14.437532);

    euclideanGraph.addEdge(bengaluru, delhi, 15.676582);
    euclideanGraph.addEdge(bengaluru, mumbai, 7.699756);
    euclideanGraph.addEdge(bengaluru, chennai, 2.658671);
    euclideanGraph.addEdge(bengaluru, hyderabad, 4.507721);
    euclideanGraph.addEdge(bengaluru, kolkata, 14.437532);

    console.log("A* Search Example (Manhattan Heuristic):");

    console.log(euclideanGraph.aStarSearch(bengaluru, jaipur, manhattanHeuristic));

    console.log();

    console.log("A* Search Example (Euclidean Heuristic):");
    console.log(euclideanGraph.aStarSearch(jaipur, chennai, euclideanHeuristic));


})();