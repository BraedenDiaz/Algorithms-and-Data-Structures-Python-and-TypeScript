
//////////////////// Basic Examples ////////////////////

// O(n)
function sumToOne(n : number) : number
{
    if (n == 1)
    {
        return n;
    }

    return n + sumToOne(n - 1);
}

// O(n)
function sumDigits(n : number) : number
{
    if (n < 10)
    {
        return n;
    }

    return (n % 10) + sumDigits(Math.floor(n / 10));
}

// O(n)
function factorial(n : number) : number
{
    if (n == 0)
    {
        return 1;
    }

    return n * factorial(n - 1);
}

// O(n)
function flatten<T>(list : T[]) : T[]
{
    let result : T[] = [];

    for (let elem of list)
    {
        if (elem instanceof Array)
        {
            //console.log("List found");
            const flatList : T[] = flatten(elem);
            result = result.concat(flatList);
        }
        else
        {
            result.push(elem);
        }
    }

    return result;
}

// O(2^n)
// Can improve with memoization (Dynamic Programming), see last chapter (19 - Example Problems)
function fibonacci(n : number) : number
{
    if (n == 0)
    {
        return 0;
    }

    if (n == 1)
    {
        return 1;
    }

    return fibonacci(n - 2) + fibonacci(n - 1);
}

//////////////////// Advanced Examples ////////////////////

// Note: This shows how to do array types differently compared to the flatten() function, but they
// mean the same thing. I.e. T[] == Array<T> and T[][] == Array<Array<T>>
//
// O(2^n), we’ll never do better than that because a set of N elements creates a power set of 2^N elements.
function powerSet<T>(list : Array<T>) : Array<Array<T>>
{
    // base case: an empty list
    if (list.length == 0)
    {
        return [[]];
    }

    // recursive step

    // Splice out the first element so the list heads towards the base case in the recursive calls
    const firstElement = list.splice(0, 1);

    // subsets without first element
    const powerSetWithoutFirst = powerSet(list);
    // subsets with first element
    let withFirst : Array<Array<T>> = [];

    for (let elem of powerSetWithoutFirst)
    {
        withFirst.push(firstElement.concat(elem));
    }

    // return a combination of the two
    return withFirst.concat(powerSetWithoutFirst);
}

// Assumes the list passed in is sorted
// O(nlogn)
function buildBST(list : (string | number)[]) : (object | null)
{
    if (list.length == 0)
    {
        return null;
    }

    const middleIndex : number = Math.floor(list.length / 2);
    const middleValue : (string | number) = list[middleIndex];

    // For testing
    //console.log(`Middle Index: ${middleIndex}`);
    //console.log(`Middle Value: ${middleValue}`);

    let treeNode : object = {
        data: middleValue
    };

    let leftTree = list.filter((value : (string | number), index : number, arr : (string | number)[]) => {
        return index < middleIndex;
    });

    let rightTree = list.filter((value : (string | number), index : number, arr : (string | number)[]) => {
        return index > middleIndex;
    });;

    treeNode["leftChild"] = buildBST(leftTree);
    treeNode["rightChild"] = buildBST(rightTree);

    return treeNode;
}

// For testing the basic recursive functions

const planets = ['mercury', 'venus', ['earth'], 'mars', [['jupiter', 'saturn']], 'uranus', ['neptune', 'pluto']];

console.log();

console.log("sumToOne(4): " + sumToOne(4));

console.log();

console.log("sumDigits(12): " + sumDigits(12));
console.log("sumDigits(194): " + sumDigits(194));

console.log();

console.log("factorial(4): " + factorial(4));
// Will stack overflow due to the allowed max call stack size (recursion depth)
//console.log("factorial(56151643515): " + factorial(56151643515));

console.log();

console.log("Flatten:");

console.log();

console.log(flatten(planets));

console.log();

console.log("fibonnaci(5): " + fibonacci(5));
console.log("fibonnaci(6): " + fibonacci(6));

console.log();


// For testing powerSet

const universities : string[] = ['MIT', 'UCLA', 'Stanford', 'NYU', 'UofU'];
console.log("Power Set of: [" + universities + "]");
const powerSetOfUniversities : any[][] = powerSet(universities);

console.log();
console.log();

for (let set of powerSetOfUniversities)
{
    console.log(set);
}

// For testing buildBST

// buildBST expects a sorted list
const sortedList : number[] = [12, 13, 14, 15, 16];
const binarySearchTree : (object | null) = buildBST(sortedList);

console.log();

console.log("Build Binary Search Tree (BST) From: [" + sortedList + "]");

console.log();

console.log(binarySearchTree);