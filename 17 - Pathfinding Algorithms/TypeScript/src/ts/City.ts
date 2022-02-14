
export class City
{
    private _name : string;
    private _latitude : number;
    private _longitude : number;

    public constructor(name : string, latitude : number, longitude : number)
    {
        this._name = name;
        this._latitude = latitude;
        this._longitude = longitude;
    }

    public get name() : string
    {
        return this._name;
    }

    public get latitude() : number
    {
        return this._latitude;
    }

    public get longitude() : number
    {
        return this._longitude;
    }
}