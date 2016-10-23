/**
 * Sticky Footer
 */
module.exports = function (decl, args) {
    var current = decl;
    var father = decl.parent;
    var ruleSelectors = father.selectors;

    var height = args[1].trim();
    var wrapperSelector = 'body';

    if (args[2]) {
        wrapperSelector = args[2].trim();
    }

    current.replaceWith(
        {
            prop: 'position',
            value: 'absolute',
            source: decl.source
        },
        {
            prop: 'left',
            value: 0,
            source: decl.source
        },
        {
            prop: 'bottom',
            value: 0,
            source: decl.source
        },
        {
            prop: 'height',
            value: height,
            source: decl.source
        },
        {
            prop: 'width',
            value: '100%',
            source: decl.source
        }
    );

    father.cloneBefore();

    father.prev().walkDecls(function (node) {
        node.remove();
    });

    father.prev().append({
        prop: 'margin-bottom',
        value: height,
        source: decl.source
    });

    ruleSelectors = ruleSelectors.map(function () {
        var ruleSelectors1 = wrapperSelector;
        return ruleSelectors1;
    });

    father.prev().selectors = ruleSelectors;
};
