
export class MaxHeap
{
    private _heapList : (number | null)[];
    private _count : number;

    public constructor()
    {
        // Note: It may be easier to not put a "null" at the beginning so that
        // you don't have to worry about null types in TypeScript. This is kept
        // as an example of how to do it if you decide to use it.
        this._heapList = [null];
        this._count = 0;
    }

    public get count() : number
    {
        return this._count;
    }

    // Helper Methods
    // These are helper methods that abstract the arithmetic which delivers the correct
    // index of a parent, right child, or left child element.

    private parentIndex(index : number) : number
    {
        // Math.floor((index - 1) / 2) if not using null at the beginning of _heapList
        return Math.floor(index / 2);
    }

    private leftChildIndex(index : number) : number
    {
        // index * 2 + 1 if not using null at the beginning of _heapList
        return index * 2;
    }

    private rightChildIndex(index : number) : number
    {
        // index * 2 + 2 if not using null at the beginning of _heapList
        return index * 2 + 1;
    }

    /**
     * Check if a heap "node" has any children. Helps the heapsort helper methods below.
     * 
     * @param index The index of the "node" to check if it has any children.
     * @returns A boolean specifying whether the "node" at the provided indexx has any children.
     */
    private hasChild(index : number) : boolean
    {
        return this.leftChildIndex(index) <= this._count;
    }

    // End of helper methods

    public add(element : number) : void
    {
        this._count++;
        console.log(`Adding ${element} to [${this._heapList}]`);
        this._heapList.push(element);
        this.heapifyUp();
    }

    private heapifyUp() : void
    {
        console.log("Heapifying up...");

        let index : number = this._count;

        // While there is a parent and the parent contains a smaller value than the child,
        // the child swaps locations with the parent.
        while (this.parentIndex(index) > 0)
        {
            const child : (number | null) = this._heapList[index];
            const parent : (number | null) = this._heapList[this.parentIndex(index)];

            if ((parent && child) && (parent < child))
            {
                console.log(`Swapping ${parent} with ${child}`);

                [this._heapList[index], this._heapList[this.parentIndex(index)]] = [this._heapList[this.parentIndex(index)], this._heapList[index]];
            }

            index = this.parentIndex(index);
        }

        console.log(`Heap Restored: [${this._heapList}]\n`);
    }

    /********************* Methods to help heapsort *********************/

    public retrieveMax() : (number | null)
    {
        if (this._count === 0)
        {
            console.log("No items in the heap.");
            return null
        }

        // This will for sure be a number as we checked the count of this heap
        // in the above "if" statement.
        const maxValue : number = this._heapList[1]!;

        console.log(`Removing ${maxValue} from [${this._heapList}]`);

        this._heapList[1] = this._heapList[this._count];
        this._count--;
        this._heapList.pop();

        console.log(`Last element move to the first position (root): [${this._heapList}]`);

        this.heapifyDown();
        return maxValue;
    }

    private getLargerChildIndex(index : number) : number
    {
        if (this.rightChildIndex(index) > this._count)
        {
            console.log("There is only a left child.");
            return this.leftChildIndex(index);
        }
        else
        {
            const leftChild : (number | null) = this._heapList[this.leftChildIndex(index)];
            const rightChild : (number | null) = this._heapList[this.rightChildIndex(index)];

            if ((leftChild && rightChild) && (leftChild > rightChild))
            {
                console.log(`Left child ${leftChild} is larger than the right child ${rightChild}`);
                return this.leftChildIndex(index);
            }
            else
            {
                console.log(`Right child ${rightChild} is larger than the left child ${leftChild}`);
                return this.rightChildIndex(index);
            }
        }
    }

    private heapifyDown() : void
    {
        let index : number = 1;

        while (this.hasChild(index))
        {
            console.log("Hepifying down!");

            const largerChildIndex : number = this.getLargerChildIndex(index);
            const child : (number | null) = this._heapList[largerChildIndex];
            const parent : (number | null) = this._heapList[index];

            if ((parent && child) && (parent < child))
            {
                this._heapList[index] = child;
                this._heapList[largerChildIndex] = parent;
            }

            index = largerChildIndex;
        }

        console.log(`HEAP RESTORED: [${this._heapList}]`);
        console.log();
    }
    
    /********************* Additional Methods *********************/

    public toString() : string
    {
        return this._heapList.toString();
    }
}