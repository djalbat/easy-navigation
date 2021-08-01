"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _accordion = _interopRequireDefault(require("./accordion"));
var _articlesArray = _interopRequireDefault(require("./articlesArray"));
var _accordion1 = _interopRequireDefault(require("./navigation/accordion"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  display: block;\n  \n  @media (min-width: 1000px) {\n\n    display: grid;\n    \n    column-gap: 2rem;\n    grid-template-rows: 1fr;\n    grid-template-areas: \"accordion-navigation accordion\";\n    grid-template-columns: 20rem auto;\n\n  }\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var View = function(properties) {
    /*#__PURE__*/ return React.createElement("div", {
        className: "view"
    }, /*#__PURE__*/ React.createElement(_accordion.default, {
        ArticlesArray: _articlesArray.default
    }), /*#__PURE__*/ React.createElement(_accordion1.default, {
        ArticlesArray: _articlesArray.default
    }));
};
var _default = (0, _easyWithStyle).default(View)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBBY2NvcmRpb24gZnJvbSBcIi4vYWNjb3JkaW9uXCI7XG5pbXBvcnQgQXJ0aWNsZXNBcnJheSBmcm9tIFwiLi9hcnRpY2xlc0FycmF5XCI7XG5pbXBvcnQgQWNjb3JkaW9uTmF2aWdhdGlvbiBmcm9tIFwiLi9uYXZpZ2F0aW9uL2FjY29yZGlvblwiO1xuXG5jb25zdCBWaWV3ID0gKHByb3BlcnRpZXMpID0+XG5cbiAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3XCI+XG4gICAgPEFjY29yZGlvbiBBcnRpY2xlc0FycmF5PXtBcnRpY2xlc0FycmF5fSAvPlxuICAgIDxBY2NvcmRpb25OYXZpZ2F0aW9uIEFydGljbGVzQXJyYXk9e0FydGljbGVzQXJyYXl9IC8+XG4gIDwvZGl2PlxuXG47XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBkaXNwbGF5OiBibG9jaztcbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgXG4gICAgY29sdW1uLWdhcDogMnJlbTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImFjY29yZGlvbi1uYXZpZ2F0aW9uIGFjY29yZGlvblwiO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjByZW0gYXV0bztcblxuICB9XG5cbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFVSxHQUFpQixDQUFqQixjQUFpQjtBQUVqQixHQUFhLENBQWIsVUFBYTtBQUNULEdBQWlCLENBQWpCLGNBQWlCO0FBQ1gsR0FBd0IsQ0FBeEIsV0FBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQVd6QiwyUEFlL0I7Ozs7Ozs7QUF4QkEsR0FBSyxDQUFDLElBQUksWUFBSSxVQUFVOzhDQUVyQixHQUFHO1FBQUMsU0FBUyxHQUFDLElBQU07eUNBTkQsVUFBYTtRQU9wQixhQUFhLEVBTkYsY0FBaUI7MENBQ1gsV0FBd0I7UUFNL0IsYUFBYSxFQVBaLGNBQWlCOzs7bUJBSHJCLGNBQWlCLFVBZWQsSUFBSSJ9