
/**
 * A function that returns a random number in the range between min and max.
 * 
 * Note that max is exclusive. That is, it will not be included as a possible random number. This is common
 * with random range functions provided in a lot of other programming languages, so we follow that here. To
 * include max, simply pass in max+1.
 * 
 * @param min The minimum number in the range
 * @param max The maxinim number in the range
 * @returns A random number between min (inclusive) and max (exclusive)
 */
function randomRange(min : number, max : number) : number
{
    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * A shuffle function based on the Fisher-Yates (aka Knuth) Shuffle which is the accepted de-facto unbiased
 * shuffle algorithm.
 * 
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 * 
 * Note: The key to the Fisher-Yates Knuth Shuffle is that we skip the first index in the array when shuffling
 * when the naive version obvously wouldn't. This may not be an issue in small applications, but it is an issue
 * when shuffling a lot of elements and can be exploited.
 * 
 * Refer to the following to see the issue with the naive approach:
 *      https://blog.codinghorror.com/the-danger-of-naivete/
 * 
 * @param arr An array of anything to shuffle.
 */
function shuffle<T>(arr : T[]) : void
{
    let currentIndex : number = arr.length;
    let randomIndex : number;

    // Note how we skip the first index in this loop, this is the key to this algorithm!
    // We use a while-loop instead of a for-loop which is okay as long as we're skipping the first index!
    while (currentIndex != 0)
    {
        randomIndex = randomRange(0, currentIndex);
        currentIndex--;

        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }
}

/**
 * The Quicksort Algorithm.
 * 
 * Sorts an array of numbers.
 * 
 * Uses in-place swaps with index pointers instead of making sub-array (or sub-list) copies. This is why you may
 * notice that the term "sub-lists" is wrapped in quotes in other comments in this function as we are not actually
 * creating sub-lists or sub-arrays, instead, we are just altering the index pointers to work with different parts
 * of the main list passed in.
 * 
 * Running Time:
 *      Best and Average Case: O(nlogn)
 * 
 *      Worst Case: O(n^2) - Would occur when all the pivots always end up being the min or max element in the current
 *      sub-list list. However, this is extremely rare and very unlikely due to the shuffling and randomness. Therefore,
 *      we usually refer to quicksort as being O(nlogn) all the time.
 * 
 * Space Complexity: O(log n) - After partitioning, the partition with the fewest elements is (recursively) sorted first,
 * requiring at most O(log n) space. Then the other partition is sorted using tail recursion or iteration, which doesn't
 * add to the call stack. It would be O(n) in the other version of quicksort where you create copies for the less-than and
 * greater-than sub-arrays and combine them instead.
 * 
 * Possible Optimizations:
 *      1. Use tail recursion on the "greater than" sub-array after recursing on the "less than" sub-array. This is
 *      implmeneted here.
 * 
 *      2. When the number of elements is below some threshold (perhaps ten elements), switch to a non-recursive sorting
 *      algorithm such as insertion sort that performs fewer swaps, comparisons or other operations on such small arrays.
 *      The ideal 'threshold' will vary based on the details of the specific implementation.
 * 
 * @param list An array of numbers to sort.
 * @param start The starting index of the list or sublist
 * @param end The ending index of the list or sublist. E.g. list.length - 1 for the very first call.
 * @returns Nothing, but the list passed in will be sorted as it's passed in by reference.
 */
function quicksort(list : number[], start : number, end : number) : void
{
    // Base case (end of the list), this portion of the list has been sorted (may be a "sub-list" or the whole list)
    if (start >= end)
    {
        return;
    }

    // Select a random element in the list to be the pivot
    const pivotIndex : number = randomRange(start, end + 1);
    const pivotElement : number = list[pivotIndex];

    // Swap the random element with the last element so we always know ehere the pivot is at
    [list[end], list[pivotIndex]] = [list[pivotIndex], list[end]];

    // Tracks all elements which should be to the left (lesser than) of the pivot
    let lessThanPointer : number = start;

    for (let i = start; i < end; i++)
    {
        // We found an element out of place (unsorted, less than the pivot)
        if (list[i] < pivotElement)
        {
            // Swap the element to the right-most portion of the less-than elements
            [list[i], list[lessThanPointer]] = [list[lessThanPointer], list[i]];
            // Tally that we have one more element less than the pivot
            lessThanPointer++;
        }
    }

    // Move the pivot element to the right-most portion of the less-than elements. I.e. it puts the pivot
    // element into its correct sorted spot because at this point, the list has been partitioned and everything
    // with a lesser index than less_than_pointer has a value lower than pivot_element.
    [list[end], list[lessThanPointer]] = [list[lessThanPointer], list[end]];

    // Recursively sort left and right "sub-lists"
    quicksort(list, start, lessThanPointer - 1);
    // Tail-recursive call on the "greater than (upper half)" "sub-list"
    quicksort(list, lessThanPointer + 1, end);
}

const list : number[] = [5,3,1,7,4,6,2,8];

console.log(`PRE SHUFFLE: ${list}`);

// Shuffling helps with trying to sort already ordered lists
// In addition to the random pivot selecting, shuffling may also help to avoid the worst-case running time
shuffle<number>(list);

console.log(`POST SHUFFLE: ${list}`);

quicksort(list, 0, list.length - 1);

console.log(`POST SORT: ${list}`);