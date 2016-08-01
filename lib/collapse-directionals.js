/**
 * Collapse Directionals
 */
module.exports = function (values) {
    var output;
    var a, b, c, d;

    a = values[0];

    if (values.length < 2) {
        b = a;
    } else {
        b = values[1];
    }

    if (values.length < 3) {
        c = a;
    } else {
        c = values[2];
    }

    if (values.length < 2) {
        d = a;
    } else if (values.length < 4) {
        d = b;
    } else {
        d = values[3];
    }

    if (a === b && a === c && a === d) {
        output = [a];
    } else if (a === c && b === d) {
        output = [a, b];
    } else if (b === d) {
        output = [a, b, c];
    } else {
        output = [a, b, c, d];
    }

    return output;
};
