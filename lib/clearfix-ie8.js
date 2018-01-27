/**
 * Clear Fix IE8
 */
module.exports = function (decl) {
    var current = decl;
    var father = decl.parent;

    father.removeChild(current);
    father.cloneBefore(decl.parent);
    father.cloneBefore(decl.parent);

    father.prev().walkDecls(function (node) {
        node.remove();
    });

    father.prev().append({
        prop: 'display',
        value: 'table'
    }, {
        prop: 'content',
        value: '\' \'' }
    );

    var ruleSelectors = father.selectors;
    var ruleSelectorsOld = father.selectors;

    ruleSelectors = ruleSelectors.map(function (ruleSelector) {
        var ruleSelectors1 = ruleSelector + ':after';
        var ruleSelectors2 = ruleSelector + ':before';
        return ruleSelectors1 + ',\n' + ruleSelectors2;
    });

    ruleSelectorsOld = ruleSelectorsOld.map(function (ruleSelector) {
        var ruleSelectors1 = ruleSelector + ':after';
        return ruleSelectors1;
    });

    father.prev().selectors = ruleSelectors;
    father.selectors = ruleSelectorsOld;

    father.walkDecls(function (node) {
        node.remove();
    });

    father.append({
        prop: 'clear',
        value: 'both'
    });

    if (father.prev().prev().first === undefined) {
        father.prev().prev().remove();
    }
};
