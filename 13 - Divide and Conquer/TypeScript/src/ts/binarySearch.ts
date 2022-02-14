
type SortedListType = (string | number)[];

/**
 * The Binary Search Algorithm implemented using recursion and index pointers instead of array copying on division.
 * 
 * Running Time Complexity: O(log n)
 * Space Complexity: O(1) - Because we are using index pointers instead of copying half of the array on each division.
 * 
 * Note: To make this function a bit more user friendly, you could give the index pointers default values and put them
 * as the last parameters so that the user doesn't have to pass them in on the first call.
 * 
 * @param sortedList The sorted list to search in.
 * @param leftPointer A number specifying the start of the list (or current sub-list) we're searching.
 * @param rightPointer A number specfying the end of the list (or current sub-list) we're searching.
 * @param target The target value to look for in the sorted list.
 * @returns The index of where the value was located, otherwise, -1 if not found.
 */
export function binarySearch(sortedList : SortedListType, leftPointer : number, rightPointer : number, target : (string | number)) : number
{
    if (leftPointer >= rightPointer)
    {
        return -1;
    }

    const midIndex : number = Math.floor((leftPointer + rightPointer) / 2);
    const midValue : (string | number) = sortedList[midIndex];

    if (midValue > target)
    {
        return binarySearch(sortedList, leftPointer, midIndex, target);
    }
    else if (midValue < target)
    {
        return binarySearch(sortedList, midIndex + 1, rightPointer, target);
    }
    else
    {
        return midIndex;
    }
}

/**
 * The Binary Search Algorithm implemented using iteration instead of recursion.
 * 
 * Running Time Complexity: O(log n)
 * Space Complexity: O(1) - Because we are using index pointers instead of copying half of the array on each division.
 * 
 * Note: Since this is not recursion, we don't need to pass in the index pointers.
 * 
 * @param sortedList The sorted list to search in.
 * @param target The target value to look for in the sorted list.
 * @returns The index of where the value was located, otherwise, -1 if not found.
 */
export function iterativeBinarySearch(sortedList : SortedListType, target : (string | number)) : number
{
    let leftPointer : number = 0;
    let rightPointer : number = sortedList.length;

    while (leftPointer < rightPointer)
    {
        const midIndex : number = Math.floor((leftPointer + rightPointer) / 2);
        const midValue : (string | number) = sortedList[midIndex];

        if (midValue > target)
        {
            rightPointer = midIndex;
        }
        else if (midValue < target)
        {
            leftPointer = midIndex + 1;
        }
        else
        {
            return midIndex;
        }
    }

    return -1;
}

/**
 * The Binary Search Algorithm implemented using recursion and array copying on division.
 * 
 * Running Time Complexity: O(log n)
 * Space Complexity: O(n/2) = O(n): Because we're copying n/2 elements on each recursive call.
 * 
 * @param sortedList The sorted list to search in.
 * @param target The target value to look for in the sorted list.
 * @returns The index of where the value was located, otherwise, -1 if not found.
 */
export function copyBinarySearch(sortedList : SortedListType, target : (string | number)) : number
{
    if (sortedList.length == 0)
    {
        return -1;
    }

    const midIndex : number = Math.floor(sortedList.length / 2);
    const midValue : (string | number) = sortedList[midIndex];


    if (midValue > target)
    {
        const leftHalf : SortedListType = sortedList.filter((value : (string | number)) => {
            return value < midValue;
        });

        return copyBinarySearch(leftHalf, target);
    }
    else if (midValue < target)
    {
        const rightHalf : SortedListType = sortedList.filter((value : (string | number)) => {
            return value > midValue;
        });

        const result : number = copyBinarySearch(rightHalf, target);

        if (result === -1)
        {
            return result;
        }

        return result + midIndex + 1;
    }
    else
    {
        return midIndex;
    }
}