const metrics = require("./src/metrics");
const exportCSV = require("./src/export");
const csv = exportCSV(metrics);

if ( csv.includes("home,120") && csv.includes("pricing,45") ) {
 console.log("pass")
 process.exit(0);
}
console.log("fail")
process.exit(1);
