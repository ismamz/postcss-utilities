var postcss = require('postcss');
var parser  = require('postcss-value-parser');

// import functions
var aspectRatio =       require('./lib/aspect-ratio');
var circle =            require('./lib/circle');
var clearfix =          require('./lib/clearfix');
var hdBreakpoint =      require('./lib/hd-breakpoint');
var hideVisually =      require('./lib/hide-visually');
var horizontalRule =    require('./lib/horizontal-rule');
var hover =             require('./lib/hover');
var noJs =              require('./lib/no-js');
var resetList =         require('./lib/reset-list');
var textHide =          require('./lib/text-hide');
var triangle =          require('./lib/triangle');
var truncate =          require('./lib/truncate');
var truncateMultiline = require('./lib/truncate-multiline');

// list of utilities names
var names = [
    'aspect-ratio',
    'circle',
    'clearfix',
    'hd',
    'hide-visually',
    'horizontal-rule',
    'hover',
    'no-js',
    'hr',
    'reset-list',
    'text-hide',
    'triangle',
    'truncate'
];

// main plugin
module.exports = postcss.plugin('postcss-utilities', function (opts) {
    opts = opts || {};

    return function (css, result) {
        css.walkAtRules('util', function (util) {
            // get name
            var name = util.params.split(/\(/, 1)[0].trim();

            // check if the utility is available
            if (names.indexOf(name) <= -1) {
                throw util.error('Unknown utility ' + name);
            }

            // save the params in a args array
            var args = [];
            args.push(name); // name as first argument
            var str = parser(util.params);
            str.nodes.forEach(function (node) {
                if (node.type === 'function') {
                    node.nodes.forEach(function (i) {
                        if (i.type === 'word') {
                            args.push(i.value);
                        }
                    });
                }
            });

            // case by case
            switch (name) {
            case 'truncate':
                if (args.length > 1) {
                    truncateMultiline(util, args);
                } else {
                    truncate(util, args);
                }
                break;
            case 'hide-visually':
                hideVisually(util);
                break;
            case 'clearfix':
                clearfix(util);
                break;
            case 'text-hide':
                textHide(util);
                break;
            case 'aspect-ratio':
                if (args.length > 3) {
                    result.warn('Too many arguments for aspect-ratio utility.');
                }
                aspectRatio(util, args);
                break;
            case 'hr':
                horizontalRule(util, args);
                break;
            case 'circle':
                circle(util, args);
                break;
            case 'triangle':
                triangle(util, args);
                break;
            case 'reset-list':
                resetList(util);
                break;
            case 'hover':
                hover(util);
                break;
            case 'no-js':
                noJs(util);
                break;
            case 'hd':
                hdBreakpoint(util, args, postcss);
                break;
            default:
                break;
            }
        });

    };
});
