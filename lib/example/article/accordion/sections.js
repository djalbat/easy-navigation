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
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var SectionsAccordionArticle = /*#__PURE__*/ function(AccordionArticle) {
    _inherits(SectionsAccordionArticle, AccordionArticle);
    var _super = _createSuper(SectionsAccordionArticle);
    function SectionsAccordionArticle() {
        _classCallCheck(this, SectionsAccordionArticle);
        return _super.apply(this, arguments);
    }
    _createClass(SectionsAccordionArticle, [
        {
            key: "childElements",
            value: function childElements() {
                return(/*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("h1", null, "Sections")));
            }
        }
    ]);
    return SectionsAccordionArticle;
}(_accordion.default);
_defineProperty(SectionsAccordionArticle, "uri", _uris.sectionsURI);
_defineProperty(SectionsAccordionArticle, "path", _paths.sectionsPath);
_defineProperty(SectionsAccordionArticle, "title", "Sections");
_defineProperty(SectionsAccordionArticle, "defaultProperties", {
    className: "sections"
});
exports.default = SectionsAccordionArticle;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2FydGljbGUvYWNjb3JkaW9uL3NlY3Rpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQWNjb3JkaW9uQXJ0aWNsZSBmcm9tIFwiLi4vLi4vYXJ0aWNsZS9hY2NvcmRpb25cIjtcblxuaW1wb3J0IHsgc2VjdGlvbnNVUkkgfSBmcm9tIFwiLi4vLi4vdXJpc1wiO1xuaW1wb3J0IHsgc2VjdGlvbnNQYXRoIH0gZnJvbSBcIi4uLy4uL3BhdGhzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb25zQWNjb3JkaW9uQXJ0aWNsZSBleHRlbmRzIEFjY29yZGlvbkFydGljbGUge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5cbiAgICAgICAgICBTZWN0aW9uc1xuICAgICAgICA8L2gxPlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIHVyaSA9IHNlY3Rpb25zVVJJO1xuXG4gIHN0YXRpYyBwYXRoID0gc2VjdGlvbnNQYXRoO1xuXG4gIHN0YXRpYyB0aXRsZSA9IFwiU2VjdGlvbnNcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInNlY3Rpb25zXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJTZWN0aW9uc0FjY29yZGlvbkFydGljbGUiLCJjaGlsZEVsZW1lbnRzIiwiZGl2IiwiaDEiLCJ1cmkiLCJwYXRoIiwidGl0bGUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFaUIsR0FBeUIsQ0FBekIsVUFBeUI7QUFFMUIsR0FBWSxDQUFaLEtBQVk7QUFDWCxHQUFhLENBQWIsTUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFckJBLHdCQUF3QixpQkFBOUIsUUFBUTtjQUFGQSx3QkFBd0I7OEJBQXhCQSx3QkFBd0I7YUFBeEJBLHdCQUF3Qjs4QkFBeEJBLHdCQUF3Qjs7O2lCQUF4QkEsd0JBQXdCOztZQUMzQ0MsR0FBYSxFQUFiQSxDQUFhO21CQUFiQSxRQUFRLENBQVJBLGFBQWEsR0FBRyxDQUFDO2dCQUNmLE1BQU0sbUNBRUhDLENBQUcsOENBQ0RDLENBQUUsV0FBQyxDQUVKO1lBSU4sQ0FBQzs7O1dBWGtCSCx3QkFBd0I7RUFMaEIsVUFBeUI7Z0JBS2pDQSx3QkFBd0IsRUFhcENJLENBQUcsTUFoQmdCLEtBQVk7Z0JBR25CSix3QkFBd0IsRUFlcENLLENBQUksT0FqQmdCLE1BQWE7Z0JBRXJCTCx3QkFBd0IsRUFpQnBDTSxDQUFLLFFBQUcsQ0FBVTtnQkFqQk5OLHdCQUF3QixFQW1CcENPLENBQWlCLG9CQUFHLENBQUM7SUFDMUJDLFNBQVMsRUFBRSxDQUFVO0FBQ3ZCLENBQUM7a0JBckJrQlIsd0JBQXdCIn0=