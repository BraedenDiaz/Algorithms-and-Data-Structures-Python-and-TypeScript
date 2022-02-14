
import { TreeNode } from "./TreeNode";

const root : TreeNode = new TreeNode("CEO");
const firstChild : TreeNode = new TreeNode("Vice President");
const secondChild : TreeNode = new TreeNode("Head of Marketing");
const thirdChild : TreeNode = new TreeNode("Marketing Assistant");
const badChild: TreeNode = new TreeNode("Stewie Griffen");

root.addChild(firstChild);
root.addChild(secondChild);
root.addChild(badChild);
secondChild.addChild(thirdChild);

console.log();

root.traverse();

console.log();

root.removeChild(badChild);

console.log();

root.traverse();