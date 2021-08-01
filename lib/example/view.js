"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _index = require("../index");
var _articlesArray = _interopRequireDefault(require("./articlesArray"));
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
    }, /*#__PURE__*/ React.createElement(_index.Accordion, {
        ArticlesArray: _articlesArray.default
    }), /*#__PURE__*/ React.createElement(_index.AccordionNavigation, {
        ArticlesArray: _articlesArray.default
    }));
};
var _default = (0, _easyWithStyle).default(View)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEFjY29yZGlvbiwgQWNjb3JkaW9uTmF2aWdhdGlvbiB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBBcnRpY2xlc0FycmF5IGZyb20gXCIuL2FydGljbGVzQXJyYXlcIjtcblxuY29uc3QgVmlldyA9IChwcm9wZXJ0aWVzKSA9PlxuXG4gIDxkaXYgY2xhc3NOYW1lPVwidmlld1wiPlxuICAgIDxBY2NvcmRpb24gQXJ0aWNsZXNBcnJheT17QXJ0aWNsZXNBcnJheX0gLz5cbiAgICA8QWNjb3JkaW9uTmF2aWdhdGlvbiBBcnRpY2xlc0FycmF5PXtBcnRpY2xlc0FycmF5fSAvPlxuICA8L2Rpdj5cblxuO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgZGlzcGxheTogYmxvY2s7XG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIFxuICAgIGNvbHVtbi1nYXA6IDJyZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJhY2NvcmRpb24tbmF2aWdhdGlvbiBhY2NvcmRpb25cIjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcmVtIGF1dG87XG5cbiAgfVxuXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVUsR0FBaUIsQ0FBakIsY0FBaUI7QUFFUSxHQUFVLENBQVYsTUFBVTtBQUUvQixHQUFpQixDQUFqQixjQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBV1osMlBBZS9COzs7Ozs7O0FBeEJBLEdBQUssQ0FBQyxJQUFJLFlBQUksVUFBVTs4Q0FFckIsR0FBRztRQUFDLFNBQVMsR0FBQyxJQUFNO3lDQU53QixNQUFVO1FBTzFDLGFBQWEsRUFMRixjQUFpQjswQ0FGSSxNQUFVO1FBUWhDLGFBQWEsRUFOWixjQUFpQjs7O21CQUpyQixjQUFpQixVQWVkLElBQUkifQ==