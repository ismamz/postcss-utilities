/**
 * Word Wrap
 */
module.exports = function (decl, args) {
    var wrap = 'break-word';
    var wordBreak = 'break-all';

    if (args[1]) {
        wrap = args[1].trim();

        if (wrap !== 'break-word') {
            wordBreak = wrap;
        }
    }

    decl.replaceWith({
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
};
