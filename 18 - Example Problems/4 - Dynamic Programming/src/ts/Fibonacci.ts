
function fibonacci(n : number) : number
{
    if (n === 0 || n === 1)
    {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Using a closure to protect the memo object from be accessed by other functions
const fibonacciMemoized = (() => {

    const memo : object = {};

    return  (n : number) : number => {
        if (memo[n])
        {
            return memo[n];
        }
        else
        {
            if (n == 0 || n == 1)
            {
                memo[n] = n;
                return n;
            }

            const currentFibonacciNum : number = fibonacciMemoized(n - 1) + fibonacciMemoized(n - 2);
            memo[n] = currentFibonacciNum;
            return currentFibonacciNum;
        }
    };

})();


(function main()
{
    const n : number = 100;

    // Uncomment the line below to try the unmemoized version
    //console.log(`The ${n}th fibonacci number is: ${fibonacci(n)}`);

    console.log(`The ${n}th fibonacci number is: ${fibonacciMemoized(n)}`);
})();