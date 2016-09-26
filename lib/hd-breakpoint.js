/**
 * HD Breakpoint
 * @link https://git.io/voIp7
 */
var helpers = require('./helpers');

module.exports = function (decl, args, postcss) {
    var minResDppx = 1.25;
    var minResDpi = minResDppx * 96; // 1dppx == 96dpi

    if (args[1]) {
        if (helpers.unit(args[1]) === 'dppx') {
            minResDppx = helpers.value(args[1]);
            minResDpi = helpers.value(args[1]) * 96;
        }
    }

    if (args[1]) {
        if (helpers.unit(args[1]) === 'dpi') {
            minResDpi = helpers.value(args[1]);
            minResDppx = helpers.value(args[1]) / 96;
        }
    }

    var atRule = postcss.atRule({
        name: 'media',
        params: 'print, (min-resolution: ' + minResDppx + 'dppx' +
                '), (min-resolution: ' + minResDpi + 'dpi' + ')',
        nodes: decl.nodes
    });

    decl.replaceWith(atRule);
};
