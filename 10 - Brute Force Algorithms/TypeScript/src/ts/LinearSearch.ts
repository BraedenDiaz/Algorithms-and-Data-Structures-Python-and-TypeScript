
type SearchType = (number | string | boolean);

/**
 * Uses a linear search to search a list for a target value.
 * 
 * Running Time: O(n)
 * Space Complexity: O(1)
 * 
 * Linear search is best when:
 *      - You know the element is near the beginning of the list.
 *      - You need to search an unordered list. If ordered, use binary search instead.
 * 
 * @param list The list to search in.
 * @param targetValue The value to search for.
 * @returns The index of where the value was found, otherwise, throws an error. Would be better to return -1.
 */
function linearSearch(list : SearchType[], targetValue : SearchType) : number
{
    const listLength : number = list.length;

    for (let i = 0; i < listLength; i++)
    {
        if (list[i] === targetValue)
        {
            return i;
        }
    }

    throw new Error(`${targetValue} was not found in the list.`);
}

/**
 * Same as the linear search function above but returns a list of all indecies where the target
 * value is located. That is, if the target value is found multiple times in the list.
 * 
 * @param list The list to search in.
 * @param targetValue The value to search for.
 * @returns A list of all indecies where the value is located.
 */
function linearSearchDuplicates(list : SearchType[], targetValue : SearchType) : number[]
{
    const matches : number[] = [];
    const listLength : number = list.length;

    for (let i = 0; i < listLength; i++)
    {
        if (list[i] === targetValue)
        {
            matches.push(i);
        }
    }

    return matches;
}

/**
 * This function shows how linear search can be used to find the maximum value in a list. You can
 * make a simple modification to this to easily find the minimum value instead.
 * 
 * Note: The max for strings is found using the string's ASCII representation rather than the character
 * itself as that is what JavaScript's "greater than" comparison operator does on strings. For booleans,
 * true = 1 and false = 0, so true will always be greater than false.
 * 
 * @param list The list to search in.
 * @returns The max value in the list.
 */
function linearSearchMax(list : SearchType[]) : (null | SearchType)
{
    let maxValue : (null | SearchType) = null;
    const listLength : number = list.length;

    for (let i = 0; i < listLength; i++)
    {
        if (maxValue === null || list[i] > maxValue)
        {
            maxValue = list[i];
        }
    }

    return maxValue;
}


// Use a try-catch to catch the error from the first linear search if thrown
try
{
    // linearSearch() tests
    const values : number[] = [54, 22, 46, 99];
    console.log(linearSearch(values, 22));

    const numberList : number[] = [ 10, 14, 19, 26, 27, 31, 33, 35, 42, 44]
    const targetNumber : number = 33
    const foundIndex : number = linearSearch(numberList, targetNumber);
    console.log(`Found ${targetNumber} at index ${foundIndex}\n`);

    // Will throw an error and stop here since the element won't be found
    //console.log(linearSearch(numberList, 100));

    // linearSearchDuplicates() test
    const tourLocations : string[] = [ "New York City", "Los Angeles", "Bangkok", "Istanbul", "London", "New York City", "Toronto", "Salt Lake City"]
    const targetCity : string = "New York City"
    const tourStops : number[] = linearSearchDuplicates(tourLocations, targetCity);
    console.log(`Tour Stops at ${targetCity}: ${tourStops}\n`);

    // linearSearchMax() tests
    const testScores : number[] = [88, 93, 75, 100, 80, 67, 71, 92, 90, 83];
    const highestScore : (null | SearchType) = linearSearchMax(testScores);
    const highestCity : (null | SearchType) = linearSearchMax(tourLocations);
    console.log(`Highest Test Score: ${highestScore}`);
    console.log(`Alphabetically ASCII Highest City: ${highestCity}`);

}
catch (err)
{
    console.log(err.message);
}