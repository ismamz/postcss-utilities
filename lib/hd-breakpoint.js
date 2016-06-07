/**
 * HD Breakpoint
 * @link https://git.io/voIp7
 */
function unit(x) {
    return x.match(/[a-zA-Z]+/g)[0];
}

function value(x) {
    return x.match(/[0-9&.]+/g)[0];
}

module.exports = function (decl, args, postcss) {
    var minResDppx = 1.25;
    var minResDpi = minResDppx * 96; // 1dppx == 96dpi

    if (args[1]) {
        if (unit(args[1]) === 'dppx') {
            minResDppx = value(args[1]);
            minResDpi = value(args[1]) * 96;
        }
    }

    if (args[1]) {
        if (unit(args[1]) === 'dpi') {
            minResDpi = value(args[1]);
            minResDppx = value(args[1]) / 96;
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
