
"use strict";

export class Node
{
    value: any;
    link_node: (Node | null);

    constructor(value : any, link_node : (Node | null) = null)
    {
        this.value = value;
        this.link_node = link_node;
    }

    set_link_node(link_node : (Node | null)) : void
    {
        this.link_node = link_node;
    }

    get_link_node() : (Node | null)
    {
        return this.link_node;
    }

    get_value() : any
    {
        return this.value;
    }
}