/**
 * Hide Visually
 */
module.exports = function (decl) {
    var parentDecl = decl.parent;

    parentDecl.append({
        prop: 'border',
        value: 0,
        source: decl.source
    }, {
        prop: 'clip',
        value: 'rect(0 0 0 0)',
        source: decl.source
    }, {
        prop: 'height',
        value: '1px',
        source: decl.source
    }, {
        prop: 'margin',
        value: '-1px',
        source: decl.source
    }, {
        prop: 'overflow',
        value: 'hidden',
        source: decl.source
    }, {
        prop: 'padding',
        value: 0,
        source: decl.source
    }, {
        prop: 'position',
        value: 'absolute',
        source: decl.source
    }, {
        prop: 'width',
        value: '1px',
        source: decl.source,
        raws: {
            semicolon: true
        }
    });

    decl.remove();
};
