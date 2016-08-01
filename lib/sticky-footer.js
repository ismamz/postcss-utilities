/**
 * Sticky Footer
 */
module.exports = function (decl, args) {
    var current = decl;
    var father = decl.parent;

    var height = args[1].trim();
    var wrapperSelector = '.wrapper';

    if (args[2]) {
        wrapperSelector = args[2].trim();
    }

    father.remove(current);
    father.cloneBefore(father);

    father.prev().walkDecls(function (node) {
        node.remove();
    });

    father.prev().append({
        prop: 'display',
        value: 'block'
    }, {
        prop: 'content',
        value: '\"\"'
    }, {
        prop: 'height',
        value: height
    });

    var ruleSelectors = father.selectors;

    ruleSelectors = ruleSelectors.map(function () {
        var ruleSelectors1 = wrapperSelector + ':after';
        return ruleSelectors1;
    });

    father.prev().selectors = ruleSelectors;

    father.prev().cloneBefore();

    father.prev().prev().walkDecls(function (node) {
        node.remove();
    });

    father.prev().prev().append({
        prop: 'min-height',
        value: '100%'
    }, {
        prop: 'margin-bottom',
        value: '-' + height
    });

    ruleSelectors = father.selectors;

    ruleSelectors = ruleSelectors.map(function () {
        var ruleSelectors1 = wrapperSelector;
        return ruleSelectors1;
    });

    father.prev().prev().selectors = ruleSelectors;

    father.append({
        prop: 'height',
        value: height,
        source: decl.source
    });

    decl.remove();
};
