/**
 * Center Block
 */
module.exports = function (decl) {
    decl.replaceWith({
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
};
