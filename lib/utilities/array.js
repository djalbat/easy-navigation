"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.guaranteeArray = guaranteeArray;
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBndWFyYW50ZWVBcnJheShhcnJheU9yRWxlbWVudCkge1xuICBjb25zdCBhcnJheSAgPSAoYXJyYXlPckVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICAgICBhcnJheU9yRWxlbWVudCA6XG4gICAgICAgICAgICAgICAgICAgICAgWyBhcnJheU9yRWxlbWVudCBdO1xuXG4gIHJldHVybiBhcnJheTtcbn1cbiJdLCJuYW1lcyI6WyJndWFyYW50ZWVBcnJheSIsImFycmF5T3JFbGVtZW50IiwiYXJyYXkiLCJBcnJheSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWSxXQUFBLENBQUM7OztFO1FBRUdBLGNBQWMsR0FBZEEsY0FBYyxBOzs7Ozs7OztTQUFkQSxjQUFjLENBQUNDLGNBQWMsRUFBRSxDQUFDO0lBQzlDLEdBQUssQ0FBQ0MsS0FBSyxHQUFLRCxXQUErQixDQUEvQkEsY0FBYyxFQUFZRSxLQUFLLElBQzdCRixjQUFjLEdBQ1osQ0FBQztRQUFDQSxjQUFjO0lBQUMsQ0FBQztJQUV0QyxNQUFNLENBQUNDLEtBQUs7QUFDZCxDQUFDIn0=