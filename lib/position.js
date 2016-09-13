/**
 * Position
 */
var directionalValues = require('./directional-values');

module.exports = function (decl, args) {
    var position = args[1];

    args.shift();
    args.shift();

    var decls = directionalValues('', '', args);
    decls.push({ prop: 'position', value: position });

    var aux = decl;

    decls.forEach( function (i) {
        aux.append({
            prop: i.prop,
            value: i.value,
            source: decl.source
        });
    });

    decl.replaceWith(aux.nodes);
};
