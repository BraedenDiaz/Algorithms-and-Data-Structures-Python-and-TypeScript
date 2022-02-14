import { OAHashMap } from "./OAHashMap";

const oaHashMap = new OAHashMap(15);
oaHashMap.assign("gabbro", "igneous");
oaHashMap.assign("sandstone", "sedimentary");
oaHashMap.assign("gneiss", "metamorphic");

console.log(oaHashMap.retrieve("gabbro"));
console.log(oaHashMap.retrieve("sandstone"));
console.log(oaHashMap.retrieve("gneiss"));
console.log(oaHashMap.retrieve("ruby"));