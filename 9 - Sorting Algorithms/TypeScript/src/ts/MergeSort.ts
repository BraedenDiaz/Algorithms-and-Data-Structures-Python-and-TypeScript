
/**
 * The merge function for the merge sort algorithm.
 * 
 * @param left A sorted left sublist.
 * @param right A sorted right sublist.
 * @returns The left and right sublists merged into a sorted list.
 */
function merge(left : number[], right : number[]) : number[]
{
    let result : number[] = [];

    while (left.length && right.length)
    {
        if (left[0] < right[0])
        {
            result.push(left[0]);
            left.shift();
        }
        else
        {
            result.push(right[0]);
            right.shift();
        }
    }

    if (left.length)
    {
        result = result.concat(left);
    }

    if (right.length)
    {
        result = result.concat(right);
    }

    return result;
}

/**
 * The Mergesort Algorithm.
 * 
 * Sorts an array of numbers.
 * 
 * Runtime Complexity: O(nlogn) - We get n for copying each element to temporary arrays in merge(), and checking (comparing)
 * elements (we don't compare them all, but that's a constant, so it's still n). We get log n for the two recursive
 * calls creating a tree of depth log n.
 * 
 * Space Complexity: O(n) - Because of the temporary arrays created for each split.
 * 
 * @param items An array of numbers to sort.
 * @returns A sorted array of numbers.
 */
function mergeSort(items : number[]) : number[]
{
    if (items.length <= 1)
    {
        return items;
    }

    const middleIndex : number = Math.floor(items.length / 2);
    const leftSplit : number[] = items.slice(0, middleIndex);
    const rightSplit : number[] = items.slice(middleIndex);

    const leftSorted : number[] = mergeSort(leftSplit);
    const rightSorted : number[] = mergeSort(rightSplit);

    return merge(leftSorted, rightSorted);
}

const unordered_list1 : number[] = [356, 746, 264, 569, 949, 895, 125, 455]
const unordered_list2 : number[] = [787, 677, 391, 318, 543, 717, 180, 113, 795, 19, 202, 534, 201, 370, 276, 975, 403, 624, 770, 595, 571, 268, 373]
const unordered_list3 : number[] = [860, 380, 151, 585, 743, 542, 147, 820, 439, 865, 924, 387]

const ordered_list1 : number[] = mergeSort(unordered_list1);
const ordered_list2 : number[] = mergeSort(unordered_list2);
const ordered_list3 : number[] = mergeSort(unordered_list3);

console.log(`Original List 1: ${unordered_list1}`);
console.log(`Sorted List 1: ${ordered_list1}\n`);

console.log(`Original List 2: ${unordered_list2}`);
console.log(`Sorted List 2: ${ordered_list2}\n`);

console.log(`Original List 3: ${unordered_list3}`);
console.log(`Sorted List 3: ${ordered_list3}\n`);