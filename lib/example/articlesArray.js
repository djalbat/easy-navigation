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
const _home = /*#__PURE__*/ _interop_require_default(require("./article/home"));
const _links = /*#__PURE__*/ _interop_require_default(require("./article/links"));
const _codes = /*#__PURE__*/ _interop_require_default(require("./article/codes"));
const _inputs = /*#__PURE__*/ _interop_require_default(require("./article/inputs"));
const _buttons = /*#__PURE__*/ _interop_require_default(require("./article/buttons"));
const _sections = /*#__PURE__*/ _interop_require_default(require("./article/sections"));
const _headings = /*#__PURE__*/ _interop_require_default(require("./article/headings"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const ArticlesArray = [
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
const _default = ArticlesArray;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL2FydGljbGVzQXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIb21lQXJ0aWNsZSBmcm9tIFwiLi9hcnRpY2xlL2hvbWVcIlxuaW1wb3J0IExpbmtzQXJ0aWNsZSBmcm9tIFwiLi9hcnRpY2xlL2xpbmtzXCJcbmltcG9ydCBDb2Rlc0FydGljbGUgZnJvbSBcIi4vYXJ0aWNsZS9jb2Rlc1wiXG5pbXBvcnQgSW5wdXRzQXJ0aWNsZSBmcm9tIFwiLi9hcnRpY2xlL2lucHV0c1wiXG5pbXBvcnQgQnV0dG9uc0FydGljbGUgZnJvbSBcIi4vYXJ0aWNsZS9idXR0b25zXCI7XG5pbXBvcnQgU2VjdGlvbnNBcnRpY2xlIGZyb20gXCIuL2FydGljbGUvc2VjdGlvbnNcIlxuaW1wb3J0IEhlYWRpbmdzQXJ0aWNsZSBmcm9tIFwiLi9hcnRpY2xlL2hlYWRpbmdzXCI7XG5cbmNvbnN0IEFydGljbGVzQXJyYXkgPSBbIC8vL1xuICBbIEhvbWVBcnRpY2xlLCBMaW5rc0FydGljbGUsIEJ1dHRvbnNBcnRpY2xlLCBIZWFkaW5nc0FydGljbGUgXSxcbiAgQ29kZXNBcnRpY2xlLFxuICBJbnB1dHNBcnRpY2xlLFxuICBTZWN0aW9uc0FydGljbGVcbl07XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVzQXJyYXk7XG4iXSwibmFtZXMiOlsiQXJ0aWNsZXNBcnJheSIsIkhvbWVBcnRpY2xlIiwiTGlua3NBcnRpY2xlIiwiQnV0dG9uc0FydGljbGUiLCJIZWFkaW5nc0FydGljbGUiLCJDb2Rlc0FydGljbGUiLCJJbnB1dHNBcnRpY2xlIiwiU2VjdGlvbnNBcnRpY2xlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpQkE7OztlQUFBOzs7NkRBZndCOzhEQUNDOzhEQUNBOytEQUNDO2dFQUNDO2lFQUNDO2lFQUNBOzs7Ozs7QUFFNUIsTUFBTUEsZ0JBQWdCO0lBQ3BCO1FBQUVDLGFBQVc7UUFBRUMsY0FBWTtRQUFFQyxnQkFBYztRQUFFQyxpQkFBZTtLQUFFO0lBQzlEQyxjQUFZO0lBQ1pDLGVBQWE7SUFDYkMsaUJBQWU7Q0FDaEI7TUFFRCxXQUFlUCJ9