/**
 * Word Wrap
 */
module.exports = function (decl, args) {
    var parentDecl = decl.parent;

    var wrap = 'break-word';
    var wordBreak = 'break-all';

    if (args[1]) {
        wrap = args[1].trim();

        if (wrap !== 'break-word') {
            wordBreak = wrap;
        }
    }

    parentDecl.append({
        prop: 'overflow-wrap',
        value: wrap,
        source: decl.source
    }, {
        prop: 'word-break',
        value: wordBreak,
        source: decl.source
    }, {
        prop: 'word-wrap',
        value: wrap,
        source: decl.source
    });

    decl.remove();
};
