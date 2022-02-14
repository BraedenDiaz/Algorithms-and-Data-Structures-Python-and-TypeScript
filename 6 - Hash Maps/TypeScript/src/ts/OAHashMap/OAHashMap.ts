
/**
 * Some things to note:
 *      1. This HashMap doesn't handle deletion of items from it. Specifically for HashMaps that use Open Addressing for
 *      their collision handling, look into Lazy Deletion (https://en.wikipedia.org/wiki/Lazy_deletion).
 * 
 *      2. If the HashMap is full, it will currently go into an infinite loop when trying to add another item to it. You
 *      can think about how to handle this here, or look into the LinkedList version of a HashMap.
 * 
 *      3. Some parts of this code are repetitive. You may want to look into how you could refactor it a bit.
 * 
 *  All in all, the LinkedList version is easier and solves a lot of these issues. But this is here for reference if
 *  needed.
 */

// The allowed types for the OAHashMap's keys
type KeyType = (string | number | boolean);

// A HashMap that uses an Open Addressing (hence the OA in the class name) strategy for collision resolution
export class OAHashMap
{
    _array_size : number;
    // The OAHashMap array can have null values or a tuple of two values [a key of type KeyType, a value of type any]
    _array : (null | [KeyType, any])[];

    constructor(array_size : number)
    {
        this._array_size = array_size;
        this._array = new Array(this._array_size);
        this._array.fill(null);
    }

    // A custom function to convert strings to a "byte" array based off the
    // character code of each character.
    //
    // Note that this only works for character code integers between 0 and
    // 65535 representing the UTF-16 code unit which is fine for most uses.
    toByteIntArray(someString : string) : Array<number>
    {
        let byteArr : Array<number> = [];
        const strLen : number = someString.length;

        for (let i = 0; i < strLen; i++)
        {
            byteArr.push(someString[i].charCodeAt(0));
        }

        return byteArr;
    }

    hash(key : KeyType, collisionsCount : number = 0) : number
    {
        // You could use Buffer.from() provided by Node instead, but
        // that wouldn't work in the browser.
        const buffer : Array<number> = this.toByteIntArray(key.toString());
        const hashCode : number = buffer.reduce((total : number, currentNum : number) : number => {
            return total + currentNum;
        });

        return hashCode + collisionsCount;
    }

    compressor(hashCode : number) : number
    {
        return hashCode % this._array_size;
    }

    assign(key : KeyType, value : any) : void
    {
        const arrayIndex : number = this.compressor(this.hash(key));
        let currentArrayValue : (null | [KeyType, any])  = this._array[arrayIndex];
        let numberOfCollisions : number = 0;

        if (currentArrayValue === null)
        {
            this._array[arrayIndex] = [key, value];
            return;
        }

        if (currentArrayValue[0] === key)
        {
            this._array[arrayIndex] = [key, value];
            return;
        }

        // If we passed the two above "if" statements, we have a collision here
        numberOfCollisions = 1;

        while (currentArrayValue[0] !== key)
        {
            const newHashCode = this.hash(key, numberOfCollisions);
            const newArrayIndex = this.compressor(newHashCode);
            currentArrayValue = this._array[newArrayIndex];

            if (currentArrayValue === null)
            {
                this._array[newArrayIndex] = [key, value];
                return;
            }

            if (currentArrayValue[0] === key)
            {
                this._array[newArrayIndex] = [key, value];
                return;
            }

            // Another collision here
            numberOfCollisions++;
        }

        return;

    }

    retrieve(key : KeyType) : any
    {
        const arrayIndex : number = this.compressor(this.hash(key));
        let possibleReturnValue : (null | [KeyType, any]) = this._array[arrayIndex];
        let retrievalCollisions : number = 0;

        if (possibleReturnValue === null)
        {
            return null;
        }

        if (possibleReturnValue[0] === key)
        {
            return possibleReturnValue[1];
        }

        // Retrieval collision here
        retrievalCollisions = 1;

        while (possibleReturnValue[0] != key)
        {
            const newHashCode : number = this.hash(key, retrievalCollisions);
            const newArrayIndex : number = this.compressor(newHashCode);
            possibleReturnValue = this._array[newArrayIndex];

            if (possibleReturnValue === null)
            {
                return null;
            }

            if (possibleReturnValue[0] === key)
            {
                return possibleReturnValue[1];
            }

            // Another retrieval collision here
            retrievalCollisions++;
        }

        return;
    }

}