"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.guaranteeArray = guaranteeArray;
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function guaranteeArray(arrayOrElement) {
    var array = _instanceof(arrayOrElement, Array) ? arrayOrElement : [
        arrayOrElement
    ];
    return array;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwibmFtZXMiOlsiZ3VhcmFudGVlQXJyYXkiLCJhcnJheU9yRWxlbWVudCIsImFycmF5IiwiQXJyYXkiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7UUFFSSxjQUFjLEdBQWQsY0FBYzs7Ozs7Ozs7U0FBZCxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDOUMsR0FBSyxDQUFDLEtBQUssR0FBSyxXQUErQixDQUEvQixjQUFjLEVBQVksS0FBSyxJQUM3QixjQUFjLEdBQ1osQ0FBQztRQUFDLGNBQWM7SUFBQyxDQUFDO0lBRXRDLE1BQU0sQ0FBQyxLQUFLO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ3VhcmFudGVlQXJyYXkoYXJyYXlPckVsZW1lbnQpIHtcbiAgY29uc3QgYXJyYXkgID0gKGFycmF5T3JFbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICAgICAgYXJyYXlPckVsZW1lbnQgOlxuICAgICAgICAgICAgICAgICAgICAgIFsgYXJyYXlPckVsZW1lbnQgXTtcblxuICByZXR1cm4gYXJyYXk7XG59XG4iXX0=