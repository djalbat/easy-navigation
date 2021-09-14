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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBndWFyYW50ZWVBcnJheShhcnJheU9yRWxlbWVudCkge1xuICBjb25zdCBhcnJheSAgPSAoYXJyYXlPckVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICAgICBhcnJheU9yRWxlbWVudCA6XG4gICAgICAgICAgICAgICAgICAgICAgWyBhcnJheU9yRWxlbWVudCBdO1xuXG4gIHJldHVybiBhcnJheTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBRUksY0FBYyxHQUFkLGNBQWM7Ozs7Ozs7O1NBQWQsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzlDLEdBQUssQ0FBQyxLQUFLLEdBQUssV0FBK0IsQ0FBL0IsY0FBYyxFQUFZLEtBQUssSUFDN0IsY0FBYztRQUNWLGNBQWM7O1dBRTdCLEtBQUs7QUFDZCxDQUFDIn0=