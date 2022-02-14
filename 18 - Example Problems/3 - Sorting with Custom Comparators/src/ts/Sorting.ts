
const ascendingOrderComparator = (a : (number | string), b : (number | string)) : number => {
    // This will work on numbers and strings
    if (a < b)
    {
        return -1;
    }
    else if (a > b)
    {
        return 1;
    }
    else
    {
        return 0;
    }

    // Faster way of doing the above, but will only work on numbers
    //return a - b;
};

const sortByLengthComparator = (a : string, b : string) : number => {
    if (a.length === b.length)
    {
        return ascendingOrderComparator(a, b);
    }

    return a.length - b.length;
};

function explicitSortWithComparator(inputArray : any[], order : any[]) : any[]
{
    const explicitComparator = (a : any, b : any) : number => {
        let indexA : number = order.length;
        let indexB : number = order.length;

        if (order.includes(a))
        {
            indexA = order.indexOf(a);
        }

        if (order.includes(b))
        {
            indexB = order.indexOf(b);
        }

        return indexA - indexB;
    };

    return inputArray.sort(explicitComparator);
}

(function main()
{
    const testArray : number[] = [10, 43, 5, 0, -2, -20, 4, 3, 2, 1, 11];
    const testStringArray : string[] = ['car', 'bat', 'train', 'plane', 'bike', 'skateboard', 'jet'];

    console.log("Sorted Array with Default Comparator:");
    testArray.sort();
    console.log(testArray);

    console.log();

    console.log("Sorted Test Array with Custom Comparator:");
    testArray.sort(ascendingOrderComparator);
    console.log(testArray);

    console.log();

    console.log("Array Sorted by Length:");
    testStringArray.sort(sortByLengthComparator);
    console.log(testStringArray);

    console.log();

    const inputArray : string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'n', 'y', 'g'];
    const order : string[] = ['a', 'n', 'd', 'y'];

    console.log("Sorted Array with Custom Order:");
    console.log(explicitSortWithComparator(inputArray, order));
})();