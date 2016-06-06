/**
 * Center Block
 */
module.exports = function (decl) {
    var parentDecl = decl.parent;

    parentDecl.append({
        prop: 'display',
        value: 'block',
        source: decl.source
    }, {
        prop: 'margin-left',
        value: 'auto',
        source: decl.source
    }, {
        prop: 'margin-right',
        value: 'auto',
        source: decl.source
    });

    decl.remove();
};
