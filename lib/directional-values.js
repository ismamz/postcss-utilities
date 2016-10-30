/**
 * Directional Values
 */
var collapseDirectionals = require('./collapse-directionals');

module.exports = function (pre, suf, values) {
    var decls = [];
    if (suf !== undefined && suf !== '') {
        suf = '-' + suf;
    }

    var top = pre + '-top' + suf;
    var bottom = pre + '-bottom' + suf;
    var left = pre + '-left' + suf;
    var right = pre + '-right' + suf;
    var all = pre + suf;

    // position.js
    if (pre === '') {
        top = 'top' + suf;
        bottom = 'bottom' + suf;
        left = 'left' + suf;
        right = 'right' + suf;
        all = suf;
    }

    values = collapseDirectionals(values);

    if (values.length === 1) {
        if (values[0] !== 'null') {
            if (pre === '' && suf === '') {
                decls.push({
                    prop: top,
                    value: values[0]
                }, {
                    prop: right,
                    value: values[0]
                }, {
                    prop: bottom,
                    value: values[0]
                }, {
                    prop: left,
                    value: values[0]
                });
            } else {
                decls.push({
                    prop: all,
                    value: values[0]
                });
            }

            return decls;
        }
    } else {
        if (values[0] !== 'null') {
            decls.push({
                prop: top,
                value: values[0]
            });
        }

        if (values[1] !== 'null') {
            decls.push({
                prop: right,
                value: values[1]
            });
        }
    }

    if (values.length === 2) {
        if (values[0] !== 'null') {
            decls.push({
                prop: bottom,
                value: values[0]
            });
        }
        if (values[1] !== 'null') {
            decls.push({
                prop: left,
                value: values[1]
            });
        }
    } else if (values.length === 3) {
        if (values[2] !== 'null') {
            decls.push({
                prop: bottom,
                value: values[2]
            });
        }
        if (values[1] !== 'null') {
            decls.push({
                prop: left,
                value: values[1]
            });
        }
    } else if (values.length === 4) {
        if (values[2] !== 'null') {
            decls.push({
                prop: bottom,
                value: values[2]
            });
        }
        if (values[3] !== 'null') {
            decls.push({
                prop: left,
                value: values[3]
            });
        }
    }

    return decls;
};
