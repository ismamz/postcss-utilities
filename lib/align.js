/**
 * Align
 */
module.exports = function (decl, args) {
    var horizontal = 'null';
    var vertical = 'null';

    var aux = decl;

    if (args[2]) {
        horizontal = args[2];
    }
    if (args[1]) {
        vertical = args[1];
    }

    aux.append({
        prop: 'position',
        value: 'absolute',
        source: decl.source
    });

    if (horizontal === 'center' && vertical === 'center') {
        aux.append({
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
            aux.append({
                prop: 'left',
                value: '0',
                source: decl.source
            });
        } else if (horizontal === 'center') {
            aux.append({
                prop: 'left',
                value: '50%',
                source: decl.source
            }, {
                prop: 'transform',
                value: 'translateX(-50%)',
                source: decl.source
            });
        } else if (horizontal === 'right') {
            aux.append({
                prop: 'right',
                value: '0',
                source: decl.source
            });
        } else if (horizontal === 'fill') {
            aux.append({
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
            aux.append({
                prop: 'top',
                value: '0',
                source: decl.source
            });
        } else if (vertical === 'center') {
            aux.append({
                prop: 'top',
                value: '50%',
                source: decl.source
            }, {
                prop: 'transform',
                value: 'translateY(-50%)',
                source: decl.source
            });
        } else if (vertical === 'bottom') {
            aux.append({
                prop: 'bottom',
                value: '0',
                source: decl.source
            });
        } else if (vertical === 'fill') {
            aux.append({
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

    decl.replaceWith(aux.nodes);
};
