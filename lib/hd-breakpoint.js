/**
 * HD Breakpoint
 */
function toFraction(n) {
    var gcd = function (a, b) {
        if (!b) return a;
        return gcd(b, a % b);
    };

    var len = n.toString().length - 2;
    var denominator = Math.pow(10, len);
    var numerator = n * denominator;

    var divisor = gcd(numerator, denominator);

    numerator /= divisor;
    denominator /= divisor;

    return numerator + '/' + denominator;
}

module.exports = function (decl, args, postcss) {
    var minResolution = '120dpi';
    var pixelRatio = 1.25;

    if (args[1]) {
        pixelRatio = args[1];
    }

    var pixelRatioFraction = toFraction(pixelRatio);

    if (args[2]) {
        minResolution = args[2];
    }

    var atRule = postcss.atRule({
        name: 'media',
        params: 'print, (-o-min-device-pixel-ratio: ' + pixelRatioFraction +
                '), (-webkit-min-device-pixel-ratio: ' + pixelRatio +
                '), (min-resolution: ' + minResolution + ')',
        nodes: decl.nodes
    });

    decl.replaceWith(atRule);
};
