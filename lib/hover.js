/**
 * Hover
 */
module.exports = function (decl, args) {
    var parentDecl = decl.parent,
        ruleSelectors = parentDecl.selectors,
        newRule;

    ruleSelectors = ruleSelectors.map(function (ruleSelector) {
        return '.no-hover ' + ruleSelector;
    }).join(',\n');

    newRule = parentDecl.cloneAfter({
        selector: ruleSelectors
    }).removeAll();

    newRule.append(decl.nodes); // source

    if (decl.prev() === undefined && decl.next() === undefined) {
        parentDecl.remove();
    } else {
        decl.remove();
    }
};
