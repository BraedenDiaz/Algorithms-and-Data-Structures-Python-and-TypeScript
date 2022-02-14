
/**
 * A naive pattern search algorithm.
 * 
 * Running Time: O(nk) where k is the length of the pattern string. If the pattern is simply repeated multiple times in
 * the main text string such that the pattern string matches every character on every outer-loop iteration, then we have
 * a running time of O(n^2) in this worst case.
 * 
 * For a more efficient pattern search algorithm, look into the Knuth-Morris-Pratt algorithm which is O(n+k)
 * 
 * @param text The text to search.
 * @param pattern The pattern to find in the text.
 * @returns A list of indecies of where the pattern was found in the text.
 */
function patternSearch(text : string, pattern : string) : number[]
{
    console.log(`Input Text: ${text}`);
    console.log(`Input Pattern: ${pattern}`);

    const textLength : number = text.length;
    const patternLength : number = pattern.length;
    const foundIndecies : number[] = [];

    for (let i = 0; i < textLength; i++)
    {
        console.log(`Text Index: ${i}`);

        let matchCount : number = 0;

        for (let j = 0; j < patternLength; j++)
        {
            console.log(`Pattern Index ${j}`);

            if (pattern[j] === text[i+j])
            {
                matchCount++;
            }
            else
            {
                break;
            }
        }

        if (matchCount == patternLength)
        {
            console.log(`${pattern} was found at index ${i}`);
            foundIndecies.push(i);
        }
    }

    return foundIndecies;
}

const text : string = "HAYHAYNEEDLEHAYHAYHAYNEEDLEHAYHAYHAYHAYNEEDLE"
const pattern : string = "NEEDLE"

const text2 = "SOMEMORERANDOMWORDSTOpatternSEARCHTHROUGH"
const pattern2 = "pattern"

const text3 = "This   still      works with    spaces"
const pattern3 = "works"

const text4 = "722615457824612704202682179992552072047396"
const pattern4 = "42"

// Worst Case, there is only one match, but the algorithm checks every character in the pattern
// string starting from every character in the text string.
const text5 = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
const pattern5 = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";


// Tests, uncomment the ones you want to try
console.log(`Pattern found at indecies: ${patternSearch(text, pattern)}`);
//console.log(`Pattern found at indecies: ${patternSearch(text2, pattern2)}`);
//console.log(`Pattern found at indecies: ${patternSearch(text3, pattern3)}`);
//console.log(`Pattern found at indecies: ${patternSearch(text4, pattern4)}`);
//console.log(`Pattern found at indecies: ${patternSearch(text5, pattern5)}`);