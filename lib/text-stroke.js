/**
 * Text Stroke
 */
var helpers = require('./helpers');

module.exports = function (decl, args) {
    var size = args[1] || '1px';
    var color = args[2] || '#000';
    var smooth = false;
    var textShadow = '';

    if (args[3] === 'smooth') {
        smooth = true;
    }

    var unit = helpers.unit(size);
    if (unit === undefined) {
        throw decl.error('Undefined unit value');
    }
    var value = helpers.value(size); // si no existe => error

    for (var w = value * -1; w <= value; w++) {
        for (var h = value * -1; h <= value; h++) {
            if (smooth) {
                textShadow += w + unit + ' ' + h + unit + ' 1' +
                              unit + ' ' + color + ',';
            } else {
                textShadow += w + unit + ' ' + h + unit + ' 0 ' + color + ',';
            }
        }
    }

    textShadow = textShadow.slice(0, -1);
    textShadow = textShadow.replace(/0px/g, 0);

    decl.replaceWith({
        prop: 'text-shadow',
        value: textShadow,
        source: decl.source
    });
};
