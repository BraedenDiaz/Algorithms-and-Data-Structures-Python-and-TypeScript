
export class TreeNode
{
    _value : any;
    _children : TreeNode[];

    constructor(value : any)
    {
        this._value = value;
        this._children = [];
    }

    addChild(childNode : TreeNode) : void
    {
        // Don't allow duplicates
        if (this._children.includes(childNode))
        {
            return;
        }

        console.log(`Adding child: ${childNode._value}`);
        this._children.push(childNode);
    }

    removeChild(childNode : TreeNode) : void
    {
        

        console.log(`Removing node: ${childNode._value} from ${this._value}`);

        // A shorter way that performs the same functionality as all the code that is commented out below
        this._children = this._children.filter((child : TreeNode) => child !== childNode);

        // const updatedChildren : TreeNode[] = [];
        
        // for (let child of this._children)
        // {
        //     if (child !== childNode)
        //     {
        //         updatedChildren.push(child);
        //     }
        // }

        // this._children = updatedChildren;
    }

    traverse() : void
    {
        console.log("Traversing...");
        let nodesToVisit : TreeNode[] = [this];

        while (nodesToVisit.length > 0)
        {
            let currentNode : TreeNode = nodesToVisit.pop()!;
            console.log(`Visited Node: ${currentNode._value}`);
            nodesToVisit = nodesToVisit.concat(currentNode._children);
        }
    }
}