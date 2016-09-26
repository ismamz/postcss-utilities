/**
 * Helpers
 */

/**
 * Get unit from a string like: '12px' => 'px'
 * @param  {string} x
 * @return {string}
 */
module.exports.unit = function (x) {
    return x.match(/[a-zA-Z]+/g)[0];
};

/**
 * Get value from a string like: '12px' => 12
 * @param  {string} x
 * @return {number}
 */
module.exports.value = function (x) {
    return x.match(/[0-9&.]+/g)[0];
};
