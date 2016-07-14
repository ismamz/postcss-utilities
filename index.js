var postcss = require('postcss');
var parser  = require('postcss-value-parser');

// import functions
var aspectRatio       = require('./lib/aspect-ratio');
var center            = require('./lib/center');
var centerBlock       = require('./lib/center-block');
var circle            = require('./lib/circle');
var clearfix          = require('./lib/clearfix');
var clearfixIE8       = require('./lib/clearfix-ie8');
var hdBreakpoint      = require('./lib/hd-breakpoint');
var hideVisually      = require('./lib/hide-visually');
var horizontalRule    = require('./lib/horizontal-rule');
var noHover           = require('./lib/no-hover');
var noJs              = require('./lib/no-js');
var resetList         = require('./lib/reset-list');
var textHide          = require('./lib/text-hide');
var triangle          = require('./lib/triangle');
var truncate          = require('./lib/truncate');
var truncateMultiline = require('./lib/truncate-multiline');

// list of utilities names
var names = [
    'aspect-ratio',
    'center',
    'center-block',
    'circle',
    'clearfix',
    'clearfix-ie8',
    'hd',
    'hide-visually',
    'hr',
    'no-hover',
    'no-js',
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
                        } else if (i.type === 'function' && i.value === "var" &&
                                   i.nodes.length === 1) {
                            args.push('var(' + i.nodes[0].value + ')');
                        }
                    });
                }
            });

            switch (name) {
            case 'aspect-ratio':
                if (args.length > 1 && args.length !== 3) {
                    result.warn('Aspect Ratio utility requires 1 parameter:' +
                                ' [ratio]' +
                                ' Two integers separates by ":". Ex: 16:9');
                }
                aspectRatio(util, args);
                break;
            case 'center':
                center(util, args);
                break;
            case 'center-block':
                centerBlock(util, args);
                break;
            case 'circle':
                if (args.length !== 3) {
                    result.warn('Circle utility requires 2 parameters:' +
                                ' [radius], [color].');
                }
                circle(util, args);
                break;
            case 'clearfix':
                clearfix(util);
                break;
            case 'clearfix-ie8':
                clearfixIE8(util);
                break;
            case 'hd':
                if (args.length > 1 && args.length !== 2) {
                    result.warn('HD Breakpoint utility requires 1 ' +
                                'parameters: [min-resolution].');
                }
                hdBreakpoint(util, args, postcss);
                break;
            case 'hide-visually':
                hideVisually(util);
                break;
            case 'hr':
                if (args.length > 1 && args.length !== 3) {
                    result.warn('Horizontal Rule utility requires 2 ' +
                                'parameters: [color], [vertical-margin].');
                }
                horizontalRule(util, args);
                break;
            case 'no-hover':
                noHover(util, postcss);
                break;
            case 'no-js':
                noJs(util, postcss);
                break;
            case 'reset-list':
                resetList(util);
                break;
            case 'text-hide':
                textHide(util);
                break;
            case 'triangle':
                if (args.length > 1 && args.length !== 4) {
                    result.warn('Triangle utility requires 2 parameters:' +
                                ' [size], [color], [orientation].');
                }
                triangle(util, args);
                break;
            case 'truncate':
                if (args.length > 1) {
                    if (args.length !== 3) {
                        result.warn('Truncate Multiline utility requires ' +
                                    '2 parameters: [lines], [line-height].');
                    }
                    truncateMultiline(util, args);
                } else {
                    truncate(util);
                }
                break;
            default:
                break;
            }
        });

    };
});
