/**
 * No Hover
 */
module.exports = function (decl, postcss, noHoverSelector) {
    decl.each(function (rule) {
        var ruleSelectors = rule.selectors;

        ruleSelectors = ruleSelectors.map(function (ruleSelector) {
            return noHoverSelector + ' ' + ruleSelector;
        }).join(',\n');

        var newRule = postcss.rule({
            selector: ruleSelectors,
            nodes: rule.nodes
        });

        rule.replaceWith(newRule);
        newRule.moveBefore(decl);
    });

    decl.remove();
};
