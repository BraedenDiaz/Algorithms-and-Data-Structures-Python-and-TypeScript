
import { TreeNode } from "./TreeNode";
import { bfs } from "./BFS";
import { dfs, iterativeDFS } from "./DFS";

/******************* BFS Testing Code *******************/

const sampleRootNode : TreeNode  = new TreeNode("Home");
const docs : TreeNode  = new TreeNode("Documents");
const photos : TreeNode  = new TreeNode("Photos");

sampleRootNode.addChild(docs);
sampleRootNode.addChild(photos);

const wishList : TreeNode = new TreeNode("WishList.txt");
const todoList : TreeNode  = new TreeNode("TodoList.txt");
const myCat : TreeNode  = new TreeNode("Fluffy.jpg");
const myDog : TreeNode  = new TreeNode("Spot.jpg");

docs.addChild(wishList);
docs.addChild(todoList);
photos.addChild(myCat);
photos.addChild(myDog);

const goalPath : (TreeNode[] | null) = bfs(sampleRootNode, "Fluffy.jpg");

console.log("\nBFS Test:\n");

if (goalPath)
{
    console.log("BFS - Path found:");

    for (let treeNode of goalPath)
    {
        console.log(treeNode.value);
    }
}
else
{
    console.log("BFS - No path found.");
}

/******************* DFS Testing Code *******************/

console.log();
console.log("DFS Test:\n");

const A : TreeNode = new TreeNode("A");
const B : TreeNode = new TreeNode("B");
const C : TreeNode = new TreeNode("C");
const D : TreeNode = new TreeNode("D");
const E : TreeNode = new TreeNode("E");
const F : TreeNode = new TreeNode("F");
const G : TreeNode = new TreeNode("G");

A.addChild(B);
A.addChild(C);
B.addChild(D);
B.addChild(E);
C.addChild(F);
C.addChild(G);

 const foundPath : (TreeNode[] | null) = dfs(A, "F");
 const foundPath2 : (TreeNode[] | null) = iterativeDFS(A, "E");
 
 if (foundPath)
 {
     console.log("DFS - Path Found:");

     for (let treeNode of foundPath)
     {
         console.log(treeNode.value);
     }
 }
 else
 {
     console.log("DFS - No path found.")
 }

 console.log();

 if (foundPath2)
 {
     console.log("DFS - Path Found:");

     for (let treeNode of foundPath2)
     {
         console.log(treeNode.value);
     }
 }
 else
 {
     console.log("DFS - No path found.")
 }