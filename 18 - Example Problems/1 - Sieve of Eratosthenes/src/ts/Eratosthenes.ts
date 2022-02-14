
function sieveOfEratosthenes(n : number) : number[]
{
    const boolList : boolean[] = [false, false];
    const primeList : number[] = [];
    let boolListLength : number = 0;

    for (let i = 2; i <=n; i++)
    {
        boolList.push(true);
    }

    for (let i = 2; i <= n;)
    {
        //console.log(`Current i: ${i}`);
        let currentIndex = 2;
        let j = i * currentIndex;

        while (j <= n)
        {
            boolList[j] = false;

            currentIndex++;
            j = i * currentIndex;
        }

        i++;
        while (boolList[i] === false)
        {
            i++;
        }
    }

    boolListLength = boolList.length;

    for (let i = 2; i < boolListLength; i++)
    {
        if (boolList[i] === true)
        {
            primeList.push(i);
        }
    }

    return primeList;

}

function sieveOfEratosthenesBetter(n : number) : number[]
{
    const boolList : boolean[] = [false, false];
    const primeList : number[] = [];
    let boolListLength : number = 0;

    for (let i = 2; i <=n; i++)
    {
        boolList.push(true);
    }

    for (let i = 2; i <= n; i++)
    {
        if (boolList[i] === true)
        {
            //console.log(`Current i: ${i}`);
            for (let j = i + i; j <= n; j = j + i)
            {
                boolList[j] = false;
            }
        } 
    }

    boolListLength = boolList.length;

    for (let i = 2; i < boolListLength; i++)
    {
        if (boolList[i] === true)
        {
            primeList.push(i);
        }
    }

    return primeList;

}


function sieveOfEratosthenesOptimized(n : number) : number[]
{
    const boolList : boolean[] = [false, false];
    const primeList : number[] = [];
    let boolListLength : number = 0;

    // Fill the array
    for (let i = 2; i <=n; i++)
    {
        // Optimization: We can initially mark all even numbers after 2 (multiples of 2) false
        if (i % 2 == 0 && i !== 2)
        {
            boolList.push(false);
        }
        else
        {
            boolList.push(true);
        }
    }

    // Optimization: Only iterate up to sqrt(n)
    // Note: We're also starting at index 3 as we did the optimization above were we
    // initially mark all even numbers after 2 (multiple of 2) false.
    for (let i = 3; i < Math.sqrt(n); i++)
    {
        if (boolList[i] === true)
        {
            //console.log(`Current i: ${i}`);

            // Optimization: Start at i^2 as all non-primes before that will already be marked false
            for (let j = Math.pow(i, 2); j <= n; j = j + i)
            {
                boolList[j] = false;
            }
        }
    }

    boolListLength = boolList.length;

    for (let i = 2; i < boolListLength; i++)
    {
        if (boolList[i] === true)
        {
            primeList.push(i);
        }
    }

    return primeList;

}

(function main()
{
    const primes : number[] = sieveOfEratosthenesOptimized(100);
    console.log("Primes:");
    console.log(primes);
})();