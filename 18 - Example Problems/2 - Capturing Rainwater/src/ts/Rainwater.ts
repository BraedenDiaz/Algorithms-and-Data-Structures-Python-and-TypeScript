
/**
 * Runtime: O(n^2) - Because of the nested loop going through n elements for each element.
 * Space Compexity: O(1)
 * 
 * @param heights An array of numbers representing the height of a histogram bar.
 * @returns The total amount of water the histogram would hold.
 */
function captureRainwaterNaive(heights : number[]) : number
{
    let totalWater : number = 0;

    for (let i = 1; i < heights.length - 1; i++)
    {
        let leftBound : number = 0;
        let rightBound : number = 0;

        for (let j = 0; j <= i; j++)
        {
            leftBound = Math.max(leftBound, heights[j]);
        }

        for (let j = i; j < heights.length; j++)
        {
            rightBound = Math.max(rightBound, heights[j]);
        }

        totalWater += Math.min(leftBound, rightBound) - heights[i];
    }

    return totalWater;
}

/**
 * Runtime: O(n) - Because we only loop once and use index pointers instead.
 * Space Compexity: O(1)
 * 
 * @param heights An array of numbers representing the height of a histogram bar.
 * @returns The total amount of water the histogram would hold.
 */
function captureRainwaterOptimized(heights : number[]) : number
{
    let totalWater : number = 0;
    let leftPointer : number = 0;
    let rightPointer : number = heights.length - 1;
    let leftBound : number = 0;
    let rightBound : number = 0;

    while (leftPointer < rightPointer)
    {
        if (heights[leftPointer] <= heights[rightPointer])
        {
            // Using Math.max() instead
            // if (heights[leftPointer] > leftBound)
            // {
            //     leftBound = heights[leftPointer];
            // }

            leftBound = Math.max(leftBound, heights[leftPointer]);
            totalWater += leftBound - heights[leftPointer];
            leftPointer++;
        }
        else
        {
            // Using Math.max() instead
            // if (heights[rightPointer] > rightBound)
            // {
            //     rightBound = heights[rightPointer];
            // }

            rightBound = Math.max(rightBound, heights[rightPointer]);
            totalWater += rightBound - heights[rightPointer];
            rightPointer--;
        }
    }

    return totalWater;
}

(function main()
{
    const testArray : number[] = [4, 2, 1, 3, 0, 1, 2];
    console.log("Total Water:");
    console.log(captureRainwaterOptimized(testArray));
})();