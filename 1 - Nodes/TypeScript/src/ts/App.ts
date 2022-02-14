
"use strict";

import { Node } from "./Node";

(function main()
{
    const yacko : Node = new Node("likes to yak");
    const wacko : Node = new Node("has a penchant for hoarding snacks");
    const dot : Node = new Node("enjoys spending time in movie lots");

    let dots_data : any, wackos_data : any;

    yacko.set_link_node(dot);
    dot.set_link_node(wacko);

    dots_data = yacko.get_link_node()?.get_value();
    //yacko.get_link_node()?.set_link_node(null);
    wackos_data = yacko.get_link_node()?.get_link_node()?.value;

    console.log(`Dots Data Through Yacko: ${dots_data}`);
    console.log(`Wacko's Data Through Dot: ${wackos_data}`);
})();
