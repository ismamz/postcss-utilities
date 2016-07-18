/**
 * Clear Fix
 */
module.exports = function (decl) {
    var parentDecl = decl.parent,
        ruleSelectors = parentDecl.selectors,
        newRule;

    ruleSelectors = ruleSelectors.map(function (ruleSelector) {
        return ruleSelector + ':after';
    }).join(',\n');

    newRule = parentDecl.cloneAfter({
        selector: ruleSelectors
    }).removeAll();

    newRule.append({
        prop: 'content',
        value: '\'\'',
        source: decl.source
    }, {
        prop: 'display',
        value: 'block',
        source: decl.source
    }, {
        prop: 'clear',
        value: 'both',
        source: decl.source
    });

    if (decl.prev() === undefined && decl.next() === undefined) {
        parentDecl.remove();
    } else {
        decl.remove();
    }
};
