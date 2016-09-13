/**
 * Triangle
 */
module.exports = function (decl, args) {
    var color = '#000';
    var size = '20px';

    if (args[1]) {
        size = args[1];
    }
    if (args[2]) {
        color = args[2];
    }

    var border;

    if (args[3]) {
        switch (args[3]) {
        case 'down':
            border = [true, 't', false, 't'];
            break;
        case 'up':
            border = [false, 't', true, 't'];
            break;
        case 'left':
            border = ['t', true, 't', false];
            break;
        case 'right':
            border = ['t', false, 't', true];
            break;
        case 'up-right':
            border = [true, false, false, 't'];
            break;
        case 'up-left':
            border = [true, 't', false, false];
            break;
        case 'down-right':
            border = [false, false, true, 't'];
            break;
        case 'down-left':
            border = [false, 't', true, false];
            break;
        default:
            throw decl.error('Circle orientation is not valid.');
        }
    } else {
        border = [true, 't', false, 't']; // down as default
    }

    var aux = decl;

    aux.append({
        prop: 'height',
        value: 0,
        source: decl.source
    }, {
        prop: 'width',
        value: 0,
        source: decl.source
    });

    if (border[0] === true) { // top
        aux.append({
            prop: 'border-top',
            value: size + ' solid ' + color,
            source: decl.source
        });
    }

    if (border[1] === true) { // right
        aux.append({
            prop: 'border-right',
            value: size + ' solid ' + color,
            source: decl.source
        });
    }

    if (border[2] === true) { // bottom
        aux.append({
            prop: 'border-bottom',
            value: size + ' solid ' + color,
            source: decl.source
        });
    }

    if (border[3] === true) { // left
        aux.append({
            prop: 'border-left',
            value: size + ' solid ' + color,
            source: decl.source
        });
    }

    // transparent
    if (border[0] === 't') { // top
        aux.append({
            prop: 'border-top',
            value: size + ' solid transparent',
            source: decl.source
        });
    }

    if (border[1] === 't') { // right
        aux.append({
            prop: 'border-right',
            value: size + ' solid transparent',
            source: decl.source
        });
    }

    if (border[2] === 't') { // bottom
        aux.append({
            prop: 'border-bottom',
            value: size + ' solid transparent',
            source: decl.source
        });
    }

    if (border[3] === 't') { // left
        aux.append({
            prop: 'border-left',
            value: size + ' solid transparent',
            source: decl.source
        });
    }

    decl.replaceWith(aux.nodes);
};
