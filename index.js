var questObject = require('./questData.json');
var questArray = require('./questDataArray.json');
exports.json = function () {
    return questObject;
}
exports.questArray = function () {
    return questArray;
}
exports.hello = function () {
    console.log("if you need help use the .help() method");
    console.log("This is a message from the demo package");
}

// exports = (str) => {
//     return `💩${str}💩`;
// }
exports.help = function () {
    console.log("import q from \"osrs-quest-tool\";\n console.log(q.json());\n console.log(q.questArray());");
}