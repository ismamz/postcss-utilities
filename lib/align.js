/**
 * Align
 */
module.exports = function (decl, args) {
    var horizontal = 'null';
    var vertical = 'null';

    if (args[2]) {
        horizontal = args[2];
    }
    if (args[1]) {
        vertical = args[1];
    }

    var nodes = [{
        prop: 'position',
        value: 'absolute',
        source: decl.source
    }];

    if (horizontal === 'center' && vertical === 'center') {
        nodes.push({
            prop: 'top',
            value: '50%',
            source: decl.source
        }, {
            prop: 'left',
            value: '50%',
            source: decl.source
        }, {
            prop: 'transform',
            value: 'translate(-50%, -50%)',
            source: decl.source
        });
    } else {
        if (horizontal === 'left') {
            nodes.push({
                prop: 'left',
                value: '0',
                source: decl.source
            });
        } else if (horizontal === 'center') {
            nodes.push({
                prop: 'left',
                value: '50%',
                source: decl.source
            }, {
                prop: 'transform',
                value: 'translateX(-50%)',
                source: decl.source
            });
        } else if (horizontal === 'right') {
            nodes.push({
                prop: 'right',
                value: '0',
                source: decl.source
            });
        } else if (horizontal === 'fill') {
            nodes.push({
                prop: 'left',
                value: '0',
                source: decl.source
            }, {
                prop: 'right',
                value: '0',
                source: decl.source
            });
        }

        if (vertical === 'top') {
            nodes.push({
                prop: 'top',
                value: '0',
                source: decl.source
            });
        } else if (horizontal === 'center') {
            nodes.push({
                prop: 'top',
                value: '50%',
                source: decl.source
            }, {
                prop: 'transform',
                value: 'translateY(-50%)',
                source: decl.source
            });
        } else if (horizontal === 'bottom') {
            nodes.push({
                prop: 'bottom',
                value: '0',
                source: decl.source
            });
        } else if (horizontal === 'fill') {
            nodes.push({
                prop: 'top',
                value: '0',
                source: decl.source
            }, {
                prop: 'bottom',
                value: '0',
                source: decl.source
            });
        }
    }

    decl.replaceWith(nodes);
};
