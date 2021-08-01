"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = require("../../../index");
var _uris = require("../../uris");
var _paths = require("../../paths");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var LinksAccordionArticle = /*#__PURE__*/ function(AccordionArticle) {
    _inherits(LinksAccordionArticle, AccordionArticle);
    function LinksAccordionArticle() {
        _classCallCheck(this, LinksAccordionArticle);
        return _possibleConstructorReturn(this, _getPrototypeOf(LinksAccordionArticle).apply(this, arguments));
    }
    _createClass(LinksAccordionArticle, [
        {
            key: "childElements",
            value: function childElements() {
                return(/*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("h1", null, "Links")));
            }
        }
    ]);
    return LinksAccordionArticle;
}(_index.AccordionArticle);
_defineProperty(LinksAccordionArticle, "uri", _uris.linksURI);
_defineProperty(LinksAccordionArticle, "path", _paths.linksPath);
_defineProperty(LinksAccordionArticle, "title", "Links");
_defineProperty(LinksAccordionArticle, "defaultProperties", {
    className: "code"
});
exports.default = LinksAccordionArticle;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2FydGljbGUvYWNjb3JkaW9uL2xpbmtzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBBY2NvcmRpb25BcnRpY2xlIH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IHsgbGlua3NVUkkgfSBmcm9tIFwiLi4vLi4vdXJpc1wiO1xuaW1wb3J0IHsgbGlua3NQYXRoIH0gZnJvbSBcIi4uLy4uL3BhdGhzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmtzQWNjb3JkaW9uQXJ0aWNsZSBleHRlbmRzIEFjY29yZGlvbkFydGljbGUge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5cbiAgICAgICAgICBMaW5rc1xuICAgICAgICA8L2gxPlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIHVyaSA9IGxpbmtzVVJJO1xuXG4gIHN0YXRpYyBwYXRoID0gbGlua3NQYXRoO1xuXG4gIHN0YXRpYyB0aXRsZSA9IFwiTGlua3NcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImNvZGVcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRXFCLEdBQWdCLENBQWhCLE1BQWdCO0FBRXhCLEdBQVksQ0FBWixLQUFZO0FBQ1gsR0FBYSxDQUFiLE1BQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWxCLHFCQUFxQjtjQUFyQixxQkFBcUI7YUFBckIscUJBQXFCOzhCQUFyQixxQkFBcUI7Z0VBQXJCLHFCQUFxQjs7aUJBQXJCLHFCQUFxQjs7WUFDeEMsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYSxHQUFHLENBQUM7MERBR1osR0FBRyw0Q0FDRCxFQUFFLFVBQUMsS0FFSjtZQUlOLENBQUM7OztXQVhrQixxQkFBcUI7RUFMVCxNQUFnQjtnQkFLNUIscUJBQXFCLEdBYWpDLEdBQUcsR0FoQmEsS0FBWTtnQkFHaEIscUJBQXFCLEdBZWpDLElBQUksR0FqQmEsTUFBYTtnQkFFbEIscUJBQXFCLEdBaUJqQyxLQUFLLElBQUcsS0FBTztnQkFqQkgscUJBQXFCLEdBbUJqQyxpQkFBaUI7SUFDdEIsU0FBUyxHQUFFLElBQU07O2tCQXBCQSxxQkFBcUIifQ==