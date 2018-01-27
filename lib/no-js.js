/**
 * No JS
 */
module.exports = function (decl, postcss, noJsSelector) {
    decl.each(function (rule) {
        var ruleSelectors = rule.selectors;

        ruleSelectors = ruleSelectors.map(function (ruleSelector) {
            return noJsSelector + ' ' + ruleSelector;
        }).join(',\n');

        var newRule = postcss.rule({
            selector: ruleSelectors,
            nodes: rule.nodes
        });

        newRule.nodes.map(function (node, i) {
            newRule.nodes[i].raws = '\n    ';
        });

        rule.replaceWith(newRule);
        decl.parent.insertBefore(decl, newRule);
    });

    decl.remove();
};
