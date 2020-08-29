var q = require('./questData.json');

exports.json = function () {

    return q;
}
exports.hello = function () {
    console.log("if you need help use the .help() method");
    console.log("This is a message from the demo package");
}

// exports = (str) => {
//     return `💩${str}💩`;
// }
exports.help = function () {
    console.log("import q from \"osrs-quest-tool\";\n console.log(q.json());");
}