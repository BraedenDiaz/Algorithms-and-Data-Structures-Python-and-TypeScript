
/**
 * A helper function to that swaps two values in an array.
 * 
 * @param arr Array with the two values to swap.
 * @param index1 The index of the first element to swap with the second element.
 * @param index2 The index of the second element to swap with the first element.
 */
function swap(arr : number[], index1 : number, index2 : number) : void
{
    const temp : number = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

/**
 * The Bubblesort Algorithm.
 * 
 * Sorts an array of numbers.
 * 
 * Running Time: O(n) * O(n-1) = O(n^2)
 * 
 * @param arr Array of numbers to sort.
 */
function bubbleSortUnoptimized(arr : number[]) : void
{
    let iterationCount : number = 0;

    for (let i of arr)
    {
        for (let j = 0; j < arr.length - 1; j++)
        {
            iterationCount++;
            if (arr[j] > arr[j+1])
            {
                swap(arr, j, j+1);
            }
        }
    }

    console.log(`UNOPTIMIZED INNER-LOOP ITERATION COUNT: ${iterationCount}`);
}

/**
 * An Optimized Bubblesort Algorithm.
 * 
 * Sorts an array of numbers in a more optimized way.
 * 
 * Optimizations: The inner-loop only iterates through elements that haven't been placed (sorted) in
 * their final position yet. We also use destructuring assignment to do the swap in parallel instead of 
 * using a seprate swap() function.
 * 
 * Running Time: ( (n-1) + (n-2) + ... + 2 + 1 ) comparisons = (n^2-n)/2 = O(n^2)
 * 
 * Space Complexity: O(1)
 * 
 * As you can see, the running time is still O(n^2) in the long run as n approaches infinity. That is, while
 * there will be fewer overall iterations in the inner-loop, the iterations will not be fewer by an order of
 * magnitude necessary to change the runtime. Neverthless, it is still more performant than the unoptimized
 * version as n remains small.
 * 
 * @param arr Array of numbers to sort.
 */
function bubbleSort(arr : number[]) : void
{
    const arrLength : number = arr.length;
    let iterationCount : number = 0;

    for (let i = 0; i < arrLength; i++)
    {
        // Only iterate through unplaced elements
        for (let j = 0; j < arrLength - i - 1; j++)
        {
            iterationCount++;
            if (arr[j] > arr[j+1])
            {
                // Replacement for swap function
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }

    console.log(`OPTIMIZED INNER-LOOP ITERATION COUNT: ${iterationCount}`);
}

const nums : number[] = [9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(`PRE SORT: ${nums}`);
bubbleSortUnoptimized(nums);
bubbleSort(nums);
console.log(`POST SORT: ${nums}`);