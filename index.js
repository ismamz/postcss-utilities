var postcss = require('postcss');
var parser  = require('postcss-value-parser');

// import functions
var aspectRatio        = require('./lib/aspect-ratio');
var borderColor        = require('./lib/border-color');
var borderTopRadius    = require('./lib/border-top-radius');
var borderRightRadius  = require('./lib/border-right-radius');
var borderBottomRadius = require('./lib/border-bottom-radius');
var borderLeftRadius   = require('./lib/border-left-radius');
var borderStyle        = require('./lib/border-style');
var borderWidth        = require('./lib/border-width');
var center             = require('./lib/center');
var centerBlock        = require('./lib/center-block');
var circle             = require('./lib/circle');
var clearfix           = require('./lib/clearfix');
var clearfixIE8        = require('./lib/clearfix-ie8');
var hdBreakpoint       = require('./lib/hd-breakpoint');
var hideVisually       = require('./lib/hide-visually');
var horizontalRule     = require('./lib/horizontal-rule');
var margin             = require('./lib/margin');
var noHover            = require('./lib/no-hover');
var noJs               = require('./lib/no-js');
var padding            = require('./lib/padding');
var position           = require('./lib/position');
var resetList          = require('./lib/reset-list');
var resetText          = require('./lib/reset-text');
var size               = require('./lib/size');
var stickyFooter       = require('./lib/sticky-footer');
var textHide           = require('./lib/text-hide');
var textStroke         = require('./lib/text-stroke');
var triangle           = require('./lib/triangle');
var truncate           = require('./lib/truncate');
var truncateMultiline  = require('./lib/truncate-multiline');
var wordWrap           = require('./lib/word-wrap');

// list of utilities names
var names = [
    'aspect-ratio',
    'border-color',
    'border-top-radius',
    'border-right-radius',
    'border-bottom-radius',
    'border-left-radius',
    'border-style',
    'border-width',
    'center',
    'center-block',
    'circle',
    'clearfix',
    'clearfix-ie8',
    'hd',
    'hide-visually',
    'hr',
    'margin',
    'no-hover',
    'no-js',
    'padding',
    'position',
    'reset-list',
    'reset-text',
    'size',
    'sticky-footer',
    'text-hide',
    'text-stroke',
    'triangle',
    'truncate',
    'word-wrap'
];

function stringifyNode(node) {
    if (node.type === 'function') {
        return (node.before || '') + node.value +
                '(' + node.nodes.map(stringifyNode).join('') + ')' +
                (node.after || '');
    } else {
        return (node.before || '') + node.value + (node.after || '');
    }
}

// main plugin
module.exports = postcss.plugin('postcss-utilities', function (opts) {
    opts = opts || {};
    var noHoverSelector = opts.noHoverSelector || '.no-hover';
    var noJsSelector = opts.noJsSelector || '.no-js';
    var ie8 = opts.ie8 || false;

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
                        if (i.type === 'word' || i.type === 'function' ||
                            i.type === 'string') {
                            args.push(stringifyNode(i));
                        }
                    });
                }
            });

            switch (name) {
            case 'aspect-ratio':
                if (args.length > 1 && args.length !== 3) {
                    result.warn('Aspect Ratio utility requires 1 parameter:' +
                                ' [<int>:<int>]');
                }
                aspectRatio(util, args);
                break;
            case 'border-color':
                if (args.length > 1) {
                    borderColor(util, args);
                } else {
                    result.warn('Border Color utility requires at least 1 ' +
                            'parameter: [colors separated by spaces]');
                }
                break;
            case 'border-top-radius':
                borderTopRadius(util, args);
                break;
            case 'border-right-radius':
                borderRightRadius(util, args);
                break;
            case 'border-bottom-radius':
                borderBottomRadius(util, args);
                break;
            case 'border-left-radius':
                borderLeftRadius(util, args);
                break;
            case 'border-style':
                if (args.length > 1) {
                    borderStyle(util, args);
                } else {
                    result.warn('Border Style utility requires at least 1 ' +
                            'parameter: [border styles separated by spaces]');
                }
                break;
            case 'border-width':
                if (args.length > 1) {
                    borderWidth(util, args);
                } else {
                    result.warn('Border Width utility requires at least 1 ' +
                            'parameter: [size values separated by spaces]');
                }
                break;
            case 'center':
                center(util, args, opts);
                break;
            case 'center-block':
                centerBlock(util, args);
                break;
            case 'circle':
                if (args.length !== 3) {
                    result.warn('Circle utility requires 2 parameters:' +
                                ' [radius], [color]');
                }
                circle(util, args);
                break;
            case 'clearfix':
                if (ie8) {
                    clearfixIE8(util);
                } else {
                    clearfix(util);
                }
                break;
            case 'hd':
                if (args.length > 1 && args.length !== 2) {
                    result.warn('HD Breakpoint utility requires 1 ' +
                                'parameter: [min-resolution]');
                }
                hdBreakpoint(util, args, postcss);
                break;
            case 'hide-visually':
                hideVisually(util);
                break;
            case 'hr':
                if (args.length > 1 && args.length !== 3) {
                    result.warn('Horizontal Rule utility requires 2 ' +
                                'parameters: [color], [vertical-margin]');
                }
                horizontalRule(util, args);
                break;
            case 'margin':
                if (args.length > 1) {
                    margin(util, args);
                } else {
                    result.warn('Margin utility requires at least 1 ' +
                            'parameter: [size values separated by spaces]');
                }
                break;
            case 'no-hover':
                noHover(util, postcss, noHoverSelector);
                break;
            case 'no-js':
                noJs(util, postcss, noJsSelector);
                break;
            case 'padding':
                if (args.length > 1) {
                    padding(util, args);
                } else {
                    result.warn('Padding utility requires at least 1 ' +
                            'parameter: [size values separated by spaces]');
                }
                break;
            case 'position':
                if (args.length > 1) {
                    position(util, args);
                } else {
                    result.warn('Position utility requires at least 1 ' +
                            'parameter: [lengths values separated by spaces]');
                }
                break;
            case 'reset-list':
                resetList(util);
                break;
            case 'reset-text':
                resetText(util);
                break;
            case 'size':
                if (args.length === 2 || args.length === 3) {
                    size(util, args);
                } else {
                    result.warn('Invalid number of parameters for Size' +
                                'utility: [width], [height]');
                }
                break;
            case 'sticky-footer':
                if (args.length === 2 || args.length === 3) {
                    stickyFooter(util, args);
                } else {
                    result.warn('Invalid number of parameters for Sticky ' +
                                'Footer utility');
                }
                break;
            case 'text-hide':
                textHide(util, args, opts);
                break;
            case 'text-stroke':
                textStroke(util, args);
                break;
            case 'triangle':
                if (args.length > 1 && args.length !== 4) {
                    result.warn('Triangle utility requires 2 parameters:' +
                                ' [size], [color], [orientation]');
                }
                triangle(util, args);
                break;
            case 'truncate':
                if (args.length > 1) {
                    if (args.length !== 3) {
                        result.warn('Truncate Multiline utility requires ' +
                                    '2 parameters: [lines], [line-height]');
                    }
                    truncateMultiline(util, args);
                } else {
                    truncate(util);
                }
                break;
            case 'word-wrap':
                if (args.length > 1 && args.length !== 2) {
                    result.warn('Word Wrap utility requires 1 ' +
                                'parameters: [wrap]');
                }
                wordWrap(util, args);
                break;
            default:
                break;
            }
        });

    };
});
