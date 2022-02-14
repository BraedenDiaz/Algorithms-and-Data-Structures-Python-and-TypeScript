
/**
 * The SelectionSort Algorithm.
 * 
 * Sorts an array of numbers by finding the minimum element each iteration. This is a typical naive
 * sort one would come up with on first thought.
 * 
 * Running Time: O(n^2)
 * Space Complexity: O(1)
 * 
 * The good thing about selection sort is it never makes more than O(n) swaps and can be useful
 * when memory write is a costly operation. 
 * 
 * @param arr An array of numbers to sort.
 */
function selectionSort(arr : number[]) : void
{
    const arrLength : number = arr.length;

    for (let i = 0; i < arrLength; i++)
    {
        let minIndex : number = i;

        for (let j = i+1; j < arrLength; j++)
        {
            if (arr[j] < arr[minIndex])
            {
                minIndex = j;
            }
        }

        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
}


// Block placed to prevent global scope interference of variable names, can also use a closure
{
    const A : number[] = [64, 25, 12, 22, 11];
    const B : number[] = [5,3,1,7,4,6,2,8];

    console.log(`PRE SORT: ${A}`);
    selectionSort(A);
    console.log(`POST SORT: ${A}`);

    console.log();

    console.log(`PRE SORT: ${B}`);
    selectionSort(B);
    console.log(`POST SORT: ${B}`);
}
