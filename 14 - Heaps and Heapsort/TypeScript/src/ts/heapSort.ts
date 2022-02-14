
import { MaxHeap } from "./MaxHeap";


export function heapsort(list : number[]) : number[]
{
    const sortedList : number[] = [];
    const maxHeap : MaxHeap = new MaxHeap();

    for (let num of list)
    {
        maxHeap.add(num);
    }

    while (maxHeap.count > 0)
    {
        // This will for sure be a number as we only iterate while count > 0
        const maxValue : number = maxHeap.retrieveMax()!;

        sortedList.unshift(maxValue);
    }

    return sortedList;
}