/**
 * Reset List
 */
module.exports = function (decl, args) {
    var parentDecl = decl.parent;

    var newRule;
    var ruleSelectors = parentDecl.selectors;

    ruleSelectors = ruleSelectors.map(function (ruleSelector) {
        return ruleSelector + ' li';
    }).join(',\n');

    // Insert the :after rule before the original rule
    newRule = parentDecl.cloneAfter({
        selector: ruleSelectors
    }).removeAll();

    newRule.append({
        prop: 'list-style',
        value: 'none',
        source: decl.source
    });

    parentDecl.append({
        prop: 'margin-top',
        value: 0,
        source: decl.source
    },{
        prop: 'margin-bottom',
        value: 0,
        source: decl.source
    },{
        prop: 'padding-left',
        value: 0,
        source: decl.source
    });

    decl.remove();
};
