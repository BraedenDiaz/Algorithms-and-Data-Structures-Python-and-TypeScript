import { LinkedList } from "./LinkedList";

type KeyType = (string | number | boolean);

/**
 * Author: Braeden Diaz
 */

// A HashMap that uses a Seprate Chaining strategy for collision resolution
// The underlying data structure used for seprate chaining is a Linked List (hence the LL in the class name)
export class LLHashMap
{
    _array : Array<(null | LinkedList)>;
    _arraySize : number;

    constructor(arraySize : number = 100)
    {
        this._arraySize = arraySize;
        this._array = new Array(this._arraySize);
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

    hash(key : KeyType) : number
    {
        const buffer : Array<number> = this.toByteIntArray(key.toString());
        const bufferSum : number = buffer.reduce((total : number, currentNum : number) : number => {
            return total + currentNum;
        });

        return bufferSum;
    }

    compressor(hashCode : number) : number
    {
        return hashCode % this._arraySize;
    }

    set(key : KeyType, value : any) : void
    {
        const arrayIndex : number = this.compressor(this.hash(key));
        const arrayIndexLinkedList : (LinkedList | null) = this._array[arrayIndex];

        if (arrayIndexLinkedList === null)
        {
            this._array[arrayIndex] = new LinkedList();
            this._array[arrayIndex]?.addToBeginning([key, value]);
        }
        else
        {
            for (let listVal of arrayIndexLinkedList)
            {
                if (listVal[0] === key)
                {
                    arrayIndexLinkedList.set(listVal, [key, value]);
                    return;
                }
            }
        }
    }

    get(key : KeyType) : any
    {
        const arrayIndex : number = this.compressor(this.hash(key));
        let arrayIndexLinkedList : (LinkedList | null) = this._array[arrayIndex];

        if (arrayIndexLinkedList === null)
        {
            return;
        }

        for (let listVal of arrayIndexLinkedList)
        {
            if (listVal[0] === key)
            {
                return listVal[1];
            }
        }

        return;
    }

    remove(key : KeyType) : any
    {
        const arrayIndex : number = this.compressor(this.hash(key));
        const arrayIndexLinkedList : (LinkedList | null) = this._array[arrayIndex];

        if (arrayIndexLinkedList === null)
        {
            return;
        }
        else
        {
            for (let listVal of arrayIndexLinkedList)
            {
                if (listVal[0] === key)
                {
                    arrayIndexLinkedList.remove(listVal);
                    return;
                }
            }
        }
    }

    isEmpty() : boolean
    {
        return this._arraySize === 0;
    }
}