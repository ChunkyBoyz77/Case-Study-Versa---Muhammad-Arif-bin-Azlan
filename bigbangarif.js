const fs = require("fs");
const bigbang = [];

for (let i=1; i<=100; i++) {
    if (i%3 === 0 && i%5 == 0) {
        bigbang.push("BIGBANG");
    } else if (i%3 === 0) {
        bigbang.push("BIG");
    } else if (i%5 === 0) {
        bigbang.push("BANG");
    } else {
        bigbang.push(i.toString());
    }
}

console.log(bigbang);
fs.writeFileSync("output.json", JSON.stringify(bigbang, null, 2));
console.log("\noutput.json has been created!!!")