/**
 * No Hover
 */
module.exports = function (decl, postcss) {
    var prefix = '.no-hover';

    decl.each(function (rule) {
        var ruleSelectors = rule.selectors;

        ruleSelectors = ruleSelectors.map(function (ruleSelector) {
            return prefix + ' ' + ruleSelector;
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
