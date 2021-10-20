"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _accordion = _interopRequireDefault(require("../../article/accordion"));
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
}(_accordion.default);
_defineProperty(LinksAccordionArticle, "uri", _uris.linksURI);
_defineProperty(LinksAccordionArticle, "path", _paths.linksPath);
_defineProperty(LinksAccordionArticle, "title", "Links");
_defineProperty(LinksAccordionArticle, "defaultProperties", {
    className: "code"
});
exports.default = LinksAccordionArticle;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2FydGljbGUvYWNjb3JkaW9uL2xpbmtzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjtcblxuaW1wb3J0IEFjY29yZGlvbkFydGljbGUgZnJvbSBcIi4uLy4uL2FydGljbGUvYWNjb3JkaW9uXCI7XG5cbmltcG9ydCB7IGxpbmtzVVJJIH0gZnJvbSBcIi4uLy4uL3VyaXNcIjtcbmltcG9ydCB7IGxpbmtzUGF0aCB9IGZyb20gXCIuLi8uLi9wYXRoc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5rc0FjY29yZGlvbkFydGljbGUgZXh0ZW5kcyBBY2NvcmRpb25BcnRpY2xlIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+XG4gICAgICAgICAgTGlua3NcbiAgICAgICAgPC9oMT5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyB1cmkgPSBsaW5rc1VSSTtcblxuICBzdGF0aWMgcGF0aCA9IGxpbmtzUGF0aDtcblxuICBzdGF0aWMgdGl0bGUgPSBcIkxpbmtzXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJjb2RlXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJMaW5rc0FjY29yZGlvbkFydGljbGUiLCJjaGlsZEVsZW1lbnRzIiwiZGl2IiwiaDEiLCJ1cmkiLCJwYXRoIiwidGl0bGUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFpQixDQUFqQixjQUFpQjtBQUVWLEdBQXlCLENBQXpCLFVBQXlCO0FBRTdCLEdBQVksQ0FBWixLQUFZO0FBQ1gsR0FBYSxDQUFiLE1BQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFbEJBLHFCQUFxQixpQkFBM0IsUUFBUTtjQUFGQSxxQkFBcUI7YUFBckJBLHFCQUFxQjs4QkFBckJBLHFCQUFxQjtnRUFBckJBLHFCQUFxQjs7aUJBQXJCQSxxQkFBcUI7O1lBQ3hDQyxHQUFhLEVBQWJBLENBQWE7bUJBQWJBLFFBQVEsQ0FBUkEsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsTUFBTSxtQ0FFSEMsQ0FBRyw4Q0FDREMsQ0FBRSxXQUFDLENBRUo7WUFJTixDQUFDOzs7V0FYa0JILHFCQUFxQjtFQUxiLFVBQXlCO2dCQUtqQ0EscUJBQXFCLEVBYWpDSSxDQUFHLE1BaEJhLEtBQVk7Z0JBR2hCSixxQkFBcUIsRUFlakNLLENBQUksT0FqQmEsTUFBYTtnQkFFbEJMLHFCQUFxQixFQWlCakNNLENBQUssUUFBRyxDQUFPO2dCQWpCSE4scUJBQXFCLEVBbUJqQ08sQ0FBaUIsb0JBQUcsQ0FBQztJQUMxQkMsU0FBUyxFQUFFLENBQU07QUFDbkIsQ0FBQztrQkFyQmtCUixxQkFBcUIifQ==