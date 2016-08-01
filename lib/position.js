/**
 * Position
 */
var directionalValues = require('./directional-values');

module.exports = function (decl, args) {
    var parentDecl = decl.parent;

    var position = args[1];

    args.shift();
    args.shift();

    var decls = directionalValues('', '', args);
    decls.push({ prop: 'position', value: position });

    decls.forEach( function (i) {
        parentDecl.append({
            prop: i.prop,
            value: i.value,
            source: decl.source
        });
    });

    decl.remove();
};
