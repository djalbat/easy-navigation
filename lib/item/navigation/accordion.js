"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _accordion = _interopRequireDefault(require("../../button/navigation/accordion"));
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
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
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
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
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
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
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  height: 4rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var AccordionNavigationItem = /*#__PURE__*/ function(Element) {
    _inherits(AccordionNavigationItem, Element);
    function AccordionNavigationItem() {
        _classCallCheck(this, AccordionNavigationItem);
        return _possibleConstructorReturn(this, _getPrototypeOf(AccordionNavigationItem).apply(this, arguments));
    }
    _createClass(AccordionNavigationItem, [
        {
            key: "getAccordionNavigationButton",
            value: function getAccordionNavigationButton() {
                var AccordionNavigationButton = this.constructor.AccordionNavigationButton;
                return AccordionNavigationButton;
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _properties = this.properties, Articles = _properties.Articles, first = _properties.first, last = _properties.last, showArticle = _properties.showArticle, _Articles = _slicedToArray(Articles, 1), Article = _Articles[0], AccordionNavigationButton = this.getAccordionNavigationButton();
                return(/*#__PURE__*/ React.createElement(AccordionNavigationButton, {
                    Article: Article,
                    first: first,
                    last: last,
                    showArticle: showArticle
                }));
            }
        }
    ]);
    return AccordionNavigationItem;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(AccordionNavigationItem, "AccordionNavigationButton", _accordion.default);
_defineProperty(AccordionNavigationItem, "tagName", "li");
_defineProperty(AccordionNavigationItem, "defaultProperties", {
    className: "accordion navigation"
});
var _default = (0, _easyWithStyle).default(AccordionNavigationItem)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL25hdmlnYXRpb24vYWNjb3JkaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBBY2NvcmRpb25OYXZpZ2F0aW9uQnV0dG9uIGZyb20gXCIuLi8uLi9idXR0b24vbmF2aWdhdGlvbi9hY2NvcmRpb25cIjtcblxuY2xhc3MgQWNjb3JkaW9uTmF2aWdhdGlvbkl0ZW0gZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0QWNjb3JkaW9uTmF2aWdhdGlvbkJ1dHRvbigpIHtcbiAgICBjb25zdCB7IEFjY29yZGlvbk5hdmlnYXRpb25CdXR0b24gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gQWNjb3JkaW9uTmF2aWdhdGlvbkJ1dHRvbjtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBBcnRpY2xlcywgZmlyc3QsIGxhc3QsIHNob3dBcnRpY2xlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgWyBBcnRpY2xlIF0gPSBBcnRpY2xlcyxcbiAgICAgICAgICBBY2NvcmRpb25OYXZpZ2F0aW9uQnV0dG9uID0gdGhpcy5nZXRBY2NvcmRpb25OYXZpZ2F0aW9uQnV0dG9uKCk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8QWNjb3JkaW9uTmF2aWdhdGlvbkJ1dHRvbiBBcnRpY2xlPXtBcnRpY2xlfSBmaXJzdD17Zmlyc3R9IGxhc3Q9e2xhc3R9IHNob3dBcnRpY2xlPXtzaG93QXJ0aWNsZX0gLz5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgQWNjb3JkaW9uTmF2aWdhdGlvbkJ1dHRvbiA9IEFjY29yZGlvbk5hdmlnYXRpb25CdXR0b247XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImxpXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJhY2NvcmRpb24gbmF2aWdhdGlvblwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShBY2NvcmRpb25OYXZpZ2F0aW9uSXRlbSlgXG5cbiAgaGVpZ2h0OiA0cmVtO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiQWNjb3JkaW9uTmF2aWdhdGlvbkl0ZW0iLCJnZXRBY2NvcmRpb25OYXZpZ2F0aW9uQnV0dG9uIiwiQWNjb3JkaW9uTmF2aWdhdGlvbkJ1dHRvbiIsImNvbnN0cnVjdG9yIiwiY2hpbGRFbGVtZW50cyIsInByb3BlcnRpZXMiLCJBcnRpY2xlcyIsImZpcnN0IiwibGFzdCIsInNob3dBcnRpY2xlIiwiQXJ0aWNsZSIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFpQixDQUFqQixjQUFpQjtBQUVmLEdBQU0sQ0FBTixLQUFNO0FBRVEsR0FBbUMsQ0FBbkMsVUFBbUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQThCdkIsQ0FJbEQ7Ozs7Ozs7SUFoQ01BLHVCQUF1QixpQkFBN0IsUUFBUTtjQUFGQSx1QkFBdUI7YUFBdkJBLHVCQUF1Qjs4QkFBdkJBLHVCQUF1QjtnRUFBdkJBLHVCQUF1Qjs7aUJBQXZCQSx1QkFBdUI7O1lBQzNCQyxHQUE0QixFQUE1QkEsQ0FBNEI7bUJBQTVCQSxRQUFRLENBQVJBLDRCQUE0QixHQUFHLENBQUM7Z0JBQzlCLEdBQUssQ0FBR0MseUJBQXlCLEdBQUssSUFBSSxDQUFDQyxXQUFXLENBQTlDRCx5QkFBeUI7Z0JBRWpDLE1BQU0sQ0FBQ0EseUJBQXlCO1lBQ2xDLENBQUM7OztZQUVERSxHQUFhLEVBQWJBLENBQWE7bUJBQWJBLFFBQVEsQ0FBUkEsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsR0FBSyxDQUEwQyxXQUFlLEdBQWYsSUFBSSxDQUFDQyxVQUFVLEVBQXREQyxRQUFRLEdBQStCLFdBQWUsQ0FBdERBLFFBQVEsRUFBRUMsS0FBSyxHQUF3QixXQUFlLENBQTVDQSxLQUFLLEVBQUVDLElBQUksR0FBa0IsV0FBZSxDQUFyQ0EsSUFBSSxFQUFFQyxXQUFXLEdBQUssV0FBZSxDQUEvQkEsV0FBVyxFQUN0QkgsU0FBUSxrQkFBUkEsUUFBUSxNQUFwQkksT0FBTyxHQUFLSixTQUFRLEtBQ3RCSix5QkFBeUIsR0FBRyxJQUFJLENBQUNELDRCQUE0QjtnQkFFbkUsTUFBTSxtQ0FFSEMseUJBQXlCO29CQUFDUSxPQUFPLEVBQUVBLE9BQU87b0JBQUVILEtBQUssRUFBRUEsS0FBSztvQkFBRUMsSUFBSSxFQUFFQSxJQUFJO29CQUFFQyxXQUFXLEVBQUVBLFdBQVc7O1lBR25HLENBQUM7OztXQWpCR1QsdUJBQXVCO21CQUpMLEtBQU07Z0JBSXhCQSx1QkFBdUIsRUFtQnBCRSxDQUF5Qiw0QkFyQkksVUFBbUM7Z0JBRW5FRix1QkFBdUIsRUFxQnBCVyxDQUFPLFVBQUcsQ0FBSTtnQkFyQmpCWCx1QkFBdUIsRUF1QnBCWSxDQUFpQixvQkFBRyxDQUFDO0lBQzFCQyxTQUFTLEVBQUUsQ0FBc0I7QUFDbkMsQ0FBQzttQkEvQm1CLGNBQWlCLFVBa0NkYix1QkFBdUIifQ==