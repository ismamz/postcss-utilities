/**
 * Border Style
 */
var directionalValues = require('./directional-values');

module.exports = function (decl, args) {
    var parentDecl = decl.parent;

    args.shift();
    var decls = directionalValues('border', 'style', args);

    decls.forEach( function (i) {
        parentDecl.append({
            prop: i.prop,
            value: i.value,
            source: decl.source
        });
    });

    decl.remove();
};
