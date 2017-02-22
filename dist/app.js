'use strict';

var _generators = require('./generators');

var _generators2 = _interopRequireDefault(_generators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nums = [1, 2, 3];
var doubleNums = nums.map(function (e) {
    return e * 2;
});

var test = 'any string literal.';
console.log(test);

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = _generators2.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var f = _step.value;

        console.log(f);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}