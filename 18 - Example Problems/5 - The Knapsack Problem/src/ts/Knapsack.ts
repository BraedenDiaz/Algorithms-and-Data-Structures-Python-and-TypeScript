
/**
 * Solves the Knapsack Problem. The goal is to maximize the total value of items while remaining
 * within the weight limit of our knapsack.
 * 
 * Runtime: O(2^n) - In the worst case, each step would require us to evaluate two subproblems,
 * sometimes repeatedly, as there’s overlap between subproblems. We can drastically improve on this
 * runtime by using dynamic programming. See the next function.
 * 
 * @param weightCap The total amount of weight you can carry.
 * @param weights The weights of all of the items in an array.
 * @param values The values of all of the items in an array.
 * @param i Where we are in the list of items. Default: The length of weights or values which represent
 * the number of items and should be the same. I.e. the end of the list of items.
 * @returns The maximum value that we will be able to carry in our knapsack.
 */
function recursiveKnapsack(weightCap : number, weights : number[], values : number[], i : number = weights.length) : number
{
    if (weightCap === 0 || i === 0)
    {
        return 0;
    }
    else if (weights[i - 1] > weightCap)
    {
        return recursiveKnapsack(weightCap, weights, values, i - 1);
    }
    else
    {
        const includeItem = values[i - 1] + recursiveKnapsack(weightCap - weights[i - 1], weights, values, i - 1);
        const excludeItem = recursiveKnapsack(weightCap, weights, values, i - 1);

        return Math.max(includeItem, excludeItem);
    }
}

function dynamicKnapsack(weightCap : number, weights : number[], values : number[]) : number
{
    const numItem : number = weights.length;
    // Array with length equal to the number of items
    const matrix = new Array(numItem);

    // For every number of items we can carry (index)
    for (let index = 0; index <= numItem; index++)
    {
        // Fill the matrix with an array of length weightCap + 1
        matrix[index] = new Array(weightCap + 1);

        // For every weight < weightCap
        for (let weight = 0; weight <= weightCap; weight++)
        {
            if (index === 0 || weight === 0)
            {
                matrix[index][weight] = 0;
            }
            else if (weights[index - 1] <= weight)
            {
                const includeItem = values[index - 1] + matrix[index - 1][weight - weights[index - 1]];
                const excludeItem = matrix[index - 1][weight];

                matrix[index][weight] = Math.max(includeItem, excludeItem);
            }
            else
            {
                matrix[index][weight] = matrix[index - 1][weight];
            }
        }
    }

    return matrix[numItem][weightCap];
}

(function main() {

    const weightCap : number = 50;
    const weights : number[] = [31, 10, 20, 19, 4, 3, 6];
    const values : number[] = [70, 20, 39, 37, 7, 5, 10];

    console.log("Answer to the provided Knapsack Problem:");

    // Uncomment the line below to try the recursive version
    //console.log(recursiveKnapsack(weightCap, weights, values));

    console.log(dynamicKnapsack(weightCap, weights, values));
})();