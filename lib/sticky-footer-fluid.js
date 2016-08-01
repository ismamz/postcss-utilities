/**
 * Sticky Footer
 */
module.exports = function (decl, args) {
    var current = decl;
    var father = decl.parent;

    var wrapperSelector = '.wrapper';

    if (args[1]) {
        wrapperSelector = args[1].trim();
    }

    father.remove(current);
    father.cloneBefore(father);

    father.prev().walkDecls(function (node) {
        node.remove();
    });

    var ruleSelectors = father.selectors;

    ruleSelectors = ruleSelectors.map(function () {
        var ruleSelectors1 = wrapperSelector;
        return ruleSelectors1;
    });

    father.prev().selectors = ruleSelectors;

    father.append({
        prop: 'display',
        value: 'table-row',
        source: decl.source
    }, {
        prop: 'height',
        value: '1px',
        source: decl.source
    });

    father.prev().append({
        prop: 'display',
        value: 'table'
    }, {
        prop: 'width',
        value: '100%'
    }, {
        prop: 'height',
        value: '100%'
    });

    decl.remove();
};
