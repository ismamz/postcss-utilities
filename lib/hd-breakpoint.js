/**
 * HD Breakpoint
 */
module.exports = function (decl, args, postcss) {
    var parentDecl = decl.parent,
        ruleSelectors = parentDecl.selectors,
        newRule;

    var pixelRatio;

    if (args[1]) {
        pixelRatio = args[1];
    } else {
        pixelRatio = 2;
    }

    var rule = postcss.rule({
        selector: ruleSelectors,
        nodes: decl.nodes,
        raws: {
            before: '\n    ',
        }
    });

    var atRule = postcss.atRule({
        name: "media",
        params: '(-o-min-device-pixel-ratio: ' + pixelRatio +
                '), (-webkit-min-device-pixel-ratio: ' + pixelRatio +
                '), (min-resolution: 192dpi)',
    })

    atRule.append(rule);
    parentDecl.parent.append(atRule);

    decl.remove();
};
