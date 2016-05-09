/**
 * Center
 */
module.exports = function (decl) {
    var parentDecl = decl.parent;

    parentDecl.append({
        prop: 'position',
        value: 'absolute',
        source: decl.source
    }, {
        prop: 'top',
        value: '50%',
        source: decl.source
    }, {
        prop: 'left',
        value: '50%',
        source: decl.source
    }, {
        prop: 'transform',
        value: 'translate(-50%, -50%)',
        source: decl.source
    });

    decl.remove();
};
