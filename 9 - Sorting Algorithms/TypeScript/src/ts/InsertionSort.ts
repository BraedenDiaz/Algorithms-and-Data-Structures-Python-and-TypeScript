
/**
 * The InsertionSort Algorithm.
 * 
 * Sorts an array of numbers by moving the currentElement to its correct lower position and shifting
 * all elements greater than the currentElement up to create a spot for the currentElement's new lower
 * position.
 * 
 * Running Time: O(n^2)
 * Space Complexity: O(1)
 * 
 * Has best performance on already sorted lists or on already partially sorted (or k-sorted) lists. This
 * is why this sort is used over SelectionSort in algorithms that switch to another sorting algorithm at
 * some threshold.
 * 
 * Has worst performance when list is sorted and you want to sort in the other way. I.e. when a list
 * is sorted in descending order but you are sorting in ascending order which this function does.
 * 
 * InsertionSort may not be the best when memory write is a costly operation due to the many swaps. Use
 * SelectionSort if memory write is of concern.
 * 
 * @param arr An array of numbers to sort.
 */
function insertionSort(arr : number[]) : void
{
    const arrLength : number = arr.length;

    for (let i = 1; i < arrLength; i++)
    {
        let currentElement : number = arr[i];

        let j : number = i-1;

        while (j >= 0 && currentElement < arr[j])
        {
            arr[j+1] = arr[j];
            j--;
        }

        arr[j+1] = currentElement;
    }
}


// Block placed to prevent global scope interference of variable names, can also use a closure
{
    const A : number[] = [64, 25, 12, 22, 11];
    const B : number[] = [5,3,1,7,4,6,2,8];

    console.log(`PRE SORT: ${A}`);
    insertionSort(A);
    console.log(`POST SORT: ${A}`);

    console.log();

    console.log(`PRE SORT: ${B}`);
    insertionSort(B);
    console.log(`POST SORT: ${B}`);
}