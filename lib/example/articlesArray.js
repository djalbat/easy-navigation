"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _home = /*#__PURE__*/ _interopRequireDefault(require("./article/home"));
var _links = /*#__PURE__*/ _interopRequireDefault(require("./article/links"));
var _codes = /*#__PURE__*/ _interopRequireDefault(require("./article/codes"));
var _inputs = /*#__PURE__*/ _interopRequireDefault(require("./article/inputs"));
var _buttons = /*#__PURE__*/ _interopRequireDefault(require("./article/buttons"));
var _sections = /*#__PURE__*/ _interopRequireDefault(require("./article/sections"));
var _headings = /*#__PURE__*/ _interopRequireDefault(require("./article/headings"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var ArticlesArray = [
    [
        _home.default,
        _links.default,
        _buttons.default,
        _headings.default
    ],
    _codes.default,
    _inputs.default,
    _sections.default
];
var _default = ArticlesArray;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL2FydGljbGVzQXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIb21lQXJ0aWNsZSBmcm9tIFwiLi9hcnRpY2xlL2hvbWVcIlxuaW1wb3J0IExpbmtzQXJ0aWNsZSBmcm9tIFwiLi9hcnRpY2xlL2xpbmtzXCJcbmltcG9ydCBDb2Rlc0FydGljbGUgZnJvbSBcIi4vYXJ0aWNsZS9jb2Rlc1wiXG5pbXBvcnQgSW5wdXRzQXJ0aWNsZSBmcm9tIFwiLi9hcnRpY2xlL2lucHV0c1wiXG5pbXBvcnQgQnV0dG9uc0FydGljbGUgZnJvbSBcIi4vYXJ0aWNsZS9idXR0b25zXCI7XG5pbXBvcnQgU2VjdGlvbnNBcnRpY2xlIGZyb20gXCIuL2FydGljbGUvc2VjdGlvbnNcIlxuaW1wb3J0IEhlYWRpbmdzQXJ0aWNsZSBmcm9tIFwiLi9hcnRpY2xlL2hlYWRpbmdzXCI7XG5cbmNvbnN0IEFydGljbGVzQXJyYXkgPSBbIC8vL1xuICBbIEhvbWVBcnRpY2xlLCBMaW5rc0FydGljbGUsIEJ1dHRvbnNBcnRpY2xlLCBIZWFkaW5nc0FydGljbGUgXSxcbiAgQ29kZXNBcnRpY2xlLFxuICBJbnB1dHNBcnRpY2xlLFxuICBTZWN0aW9uc0FydGljbGVcbl07XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVzQXJyYXk7XG4iXSwibmFtZXMiOlsiQXJ0aWNsZXNBcnJheSIsIkhvbWVBcnRpY2xlIiwiTGlua3NBcnRpY2xlIiwiQnV0dG9uc0FydGljbGUiLCJIZWFkaW5nc0FydGljbGUiLCJDb2Rlc0FydGljbGUiLCJJbnB1dHNBcnRpY2xlIiwiU2VjdGlvbnNBcnRpY2xlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpQkE7OztlQUFBOzs7eURBZndCOzBEQUNDOzBEQUNBOzJEQUNDOzREQUNDOzZEQUNDOzZEQUNBOzs7Ozs7QUFFNUIsSUFBTUEsZ0JBQWdCO0lBQ3BCO1FBQUVDLGFBQVc7UUFBRUMsY0FBWTtRQUFFQyxnQkFBYztRQUFFQyxpQkFBZTtLQUFFO0lBQzlEQyxjQUFZO0lBQ1pDLGVBQWE7SUFDYkMsaUJBQWU7Q0FDaEI7SUFFRCxXQUFlUCJ9