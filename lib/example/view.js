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
    var className = properties.className;
    return(/*#__PURE__*/ React.createElement("div", {
        className: "".concat(className, " view")
    }, /*#__PURE__*/ React.createElement(_accordion.default, {
        ArticlesArray: _articlesArray.default
    }), /*#__PURE__*/ React.createElement(_accordion1.default, {
        ArticlesArray: _articlesArray.default
    })));
};
var _default = (0, _easyWithStyle).default(View)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBBY2NvcmRpb24gZnJvbSBcIi4vYWNjb3JkaW9uXCI7XG5pbXBvcnQgQXJ0aWNsZXNBcnJheSBmcm9tIFwiLi9hcnRpY2xlc0FycmF5XCI7XG5pbXBvcnQgQWNjb3JkaW9uTmF2aWdhdGlvbiBmcm9tIFwiLi9uYXZpZ2F0aW9uL2FjY29yZGlvblwiO1xuXG5jb25zdCBWaWV3ID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gdmlld2B9PlxuICAgICAgICA8QWNjb3JkaW9uIEFydGljbGVzQXJyYXk9e0FydGljbGVzQXJyYXl9IC8+XG4gICAgICAgIDxBY2NvcmRpb25OYXZpZ2F0aW9uIEFydGljbGVzQXJyYXk9e0FydGljbGVzQXJyYXl9IC8+XG4gICAgICA8L2Rpdj5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBcbiAgICBjb2x1bW4tZ2FwOiAycmVtO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiYWNjb3JkaW9uLW5hdmlnYXRpb24gYWNjb3JkaW9uXCI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHJlbSBhdXRvO1xuXG4gIH1cblxuYDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVVLEdBQWlCLENBQWpCLGNBQWlCO0FBRWpCLEdBQWEsQ0FBYixVQUFhO0FBQ1QsR0FBaUIsQ0FBakIsY0FBaUI7QUFDWCxHQUF3QixDQUF4QixXQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBZXpCLDJQQWUvQjs7Ozs7OztBQTVCQSxHQUFLLENBQUMsSUFBSSxZQUFJLFVBQVUsRUFBSyxDQUFDO0lBQzVCLEdBQUssQ0FBRyxTQUFTLEdBQUssVUFBVSxDQUF4QixTQUFTOzhDQUlaLEdBQUc7UUFBQyxTQUFTLEtBQWUsTUFBSyxDQUFmLFNBQVMsR0FBQyxLQUFLO3lDQVRsQixVQUFhO1FBVWhCLGFBQWEsRUFUTixjQUFpQjswQ0FDWCxXQUF3QjtRQVMzQixhQUFhLEVBVmhCLGNBQWlCOztBQWMzQyxDQUFDO21CQWpCcUIsY0FBaUIsVUFtQmQsSUFBSSJ9