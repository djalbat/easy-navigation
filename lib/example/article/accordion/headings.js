"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
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
var HeadingsAccordionArticle = /*#__PURE__*/ function(AccordionArticle) {
    _inherits(HeadingsAccordionArticle, AccordionArticle);
    function HeadingsAccordionArticle() {
        _classCallCheck(this, HeadingsAccordionArticle);
        return _possibleConstructorReturn(this, _getPrototypeOf(HeadingsAccordionArticle).apply(this, arguments));
    }
    _createClass(HeadingsAccordionArticle, [
        {
            key: "childElements",
            value: function childElements() {
                return(/*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("h1", null, "Headings")));
            }
        }
    ]);
    return HeadingsAccordionArticle;
}(_accordion.default);
_defineProperty(HeadingsAccordionArticle, "uri", _uris.headingsURI);
_defineProperty(HeadingsAccordionArticle, "path", _paths.headingsPath);
_defineProperty(HeadingsAccordionArticle, "title", "Headings");
_defineProperty(HeadingsAccordionArticle, "defaultProperties", {
    className: "headings"
});
exports.default = HeadingsAccordionArticle;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2FydGljbGUvYWNjb3JkaW9uL2hlYWRpbmdzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQWNjb3JkaW9uQXJ0aWNsZSBmcm9tIFwiLi4vLi4vYXJ0aWNsZS9hY2NvcmRpb25cIjtcblxuaW1wb3J0IHsgaGVhZGluZ3NVUkkgfSBmcm9tIFwiLi4vLi4vdXJpc1wiO1xuaW1wb3J0IHsgaGVhZGluZ3NQYXRoIH0gZnJvbSBcIi4uLy4uL3BhdGhzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRpbmdzQWNjb3JkaW9uQXJ0aWNsZSBleHRlbmRzIEFjY29yZGlvbkFydGljbGUge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5cbiAgICAgICAgICBIZWFkaW5nc1xuICAgICAgICA8L2gxPlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIHVyaSA9IGhlYWRpbmdzVVJJO1xuXG4gIHN0YXRpYyBwYXRoID0gaGVhZGluZ3NQYXRoO1xuXG4gIHN0YXRpYyB0aXRsZSA9IFwiSGVhZGluZ3NcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImhlYWRpbmdzXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkaW5nc0FjY29yZGlvbkFydGljbGUiLCJjaGlsZEVsZW1lbnRzIiwiZGl2IiwiaDEiLCJ1cmkiLCJwYXRoIiwidGl0bGUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFaUIsR0FBeUIsQ0FBekIsVUFBeUI7QUFFMUIsR0FBWSxDQUFaLEtBQVk7QUFDWCxHQUFhLENBQWIsTUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVyQkEsd0JBQXdCLGlCQUE5QixRQUFRO2NBQUZBLHdCQUF3QjthQUF4QkEsd0JBQXdCOzhCQUF4QkEsd0JBQXdCO2dFQUF4QkEsd0JBQXdCOztpQkFBeEJBLHdCQUF3Qjs7WUFDM0NDLEdBQWEsRUFBYkEsQ0FBYTttQkFBYkEsUUFBUSxDQUFSQSxhQUFhLEdBQUcsQ0FBQztnQkFDZixNQUFNLG1DQUVIQyxDQUFHLDhDQUNEQyxDQUFFLFdBQUMsQ0FFSjtZQUlOLENBQUM7OztXQVhrQkgsd0JBQXdCO0VBTGhCLFVBQXlCO2dCQUtqQ0Esd0JBQXdCLEVBYXBDSSxDQUFHLE1BaEJnQixLQUFZO2dCQUduQkosd0JBQXdCLEVBZXBDSyxDQUFJLE9BakJnQixNQUFhO2dCQUVyQkwsd0JBQXdCLEVBaUJwQ00sQ0FBSyxRQUFHLENBQVU7Z0JBakJOTix3QkFBd0IsRUFtQnBDTyxDQUFpQixvQkFBRyxDQUFDO0lBQzFCQyxTQUFTLEVBQUUsQ0FBVTtBQUN2QixDQUFDO2tCQXJCa0JSLHdCQUF3QiJ9