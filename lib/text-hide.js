/**
 * Text Hide
 */
module.exports = function (decl) {
    var parentDecl = decl.parent;

    parentDecl.append({
        prop: 'font',
        value: '0/0 a',
        source: decl.source
    }, {
        prop: 'color',
        value: 'transparent',
        source: decl.source
    }, {
        prop: 'text-shadow',
        value: 'none',
        source: decl.source
    }, {
        prop: 'background-color',
        value: 'transparent',
        source: decl.source
    }, {
        prop: 'border',
        value: 0,
        source: decl.source
    });

    decl.remove();
};
