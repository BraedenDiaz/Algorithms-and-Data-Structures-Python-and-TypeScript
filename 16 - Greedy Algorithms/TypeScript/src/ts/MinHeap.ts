
import { Vertex } from "./Vertex";

export type heapValueTypes = string | number | [number, string];

export class MinHeap
{
    private _elements : heapValueTypes[];
    private _count : number;

    public constructor()
    {
        this._elements = [];
        this._count = 0;
    }

    public get count() : number
    {
        return this._count;
    }

    public get elements() : heapValueTypes[]
    {
        return this._elements;
    }

    public get minimum() : heapValueTypes
    {
        return this._elements[0];
    }

    private parentIndex(index : number) : number
    {
        return Math.floor((index - 1) / 2);
    }

    private leftIndex(index : number) : number
    {
        return index * 2 + 1;
    }

    private rightIndex(index : number) : number
    {
        return index * 2 + 2;
    }

    private smallerChild(index : number) : number
    {
        let smallestChildIndex : number = -1;
        let leftIndex : number = this.leftIndex(index);
        let rightIndex : number = this.rightIndex(index);

        if (this._count === 0 || this._count === 1)
        {
            return smallestChildIndex;
        }

        if (rightIndex >= this._count)
        {
            if (this._elements[leftIndex] < this._elements[index])
            {
                return leftIndex;
            }
            else
            {
                return -1;
            }
        }

        if (this._elements[leftIndex] < this._elements[rightIndex])
        {
            smallestChildIndex = leftIndex;
        }
        else
        {
            smallestChildIndex = rightIndex;
        }

        if (this._elements[smallestChildIndex] < this._elements[index])
        {
            return smallestChildIndex;
        }

        return -1;
    }

    private heapifyUp() : void
    {
        let lastElementIndex : number = this._count - 1;
        const lastElementValue : heapValueTypes = this._elements[lastElementIndex];
        let parentIndex : number = this.parentIndex(lastElementIndex);
        let parentValue : heapValueTypes = this._elements[parentIndex];

        while ((parentIndex >= 0) && (this._elements[parentIndex] > lastElementValue))
        {
            this._elements[lastElementIndex] = parentValue;
            this._elements[parentIndex] = lastElementValue;
            lastElementIndex = parentIndex;
            parentIndex = this.parentIndex(parentIndex);
            parentValue = this._elements[parentIndex];
        }
    }

    private heapifyDown() : void
    {
        let currentIndex : number = 0;
        let smallestChildIndex : number = this.smallerChild(currentIndex);

        while (smallestChildIndex !== -1)
        {
            const currentIndexValue : heapValueTypes = this._elements[currentIndex];
            this._elements[currentIndex] = this._elements[smallestChildIndex];
            this._elements[smallestChildIndex] = currentIndexValue;
            currentIndex = smallestChildIndex;
            smallestChildIndex = this.smallerChild(currentIndex);
        }
    }

    public add(value : heapValueTypes) : void
    {
        this._elements.push(value);
        this._count++;
        this.heapifyUp();
    }

    public removeMin() : heapValueTypes
    {
        const minimumElement : heapValueTypes = this._elements[0];
        this._elements[0] = this._elements[this._count - 1];
        this.elements.pop();
        this._count--;
        this.heapifyDown();
        return minimumElement;
    }
}

function getRandomNumber(min : number, max : number) : number
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function main()
{
    // MinHeap Tests

    const minHeap = new MinHeap();

    for (let i = 0; i < 10; i++)
    {
        const randNum = getRandomNumber(1, 15);
        console.log(`Adding random number ${randNum}`);
        minHeap.add(randNum);
    }

    console.log(`Minimum: ${minHeap.minimum}`);
    console.log();
    console.log("Heap List:");
    console.log(minHeap.elements);

    console.log();

    while (minHeap.count > 0)
    {
        console.log("Removing Minimum...");
        minHeap.removeMin();
        console.log(`New Minimum: ${minHeap.minimum}`);
        console.log();
        console.log("Heap List:");
        console.log(minHeap.elements);
        console.log();
    }
    
}