/**
 * Circle
 */
module.exports = function (decl, args) {
    var color = '#000';
    var size = '100px';

    if (args[2]) {
        color = args[2];
    }
    if (args[1]) {
        size = args[1];
    }

    decl.replaceWith({
        prop: 'border-radius',
        value: '50%',
        source: decl.source
    }, {
        prop: 'width',
        value: size,
        source: decl.source
    }, {
        prop: 'height',
        value: size,
        source: decl.source
    }, {
        prop: 'background-color',
        value: color,
        source: decl.source
    });
};
