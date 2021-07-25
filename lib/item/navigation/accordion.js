"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
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
var AccordionNavigationItem = /*#__PURE__*/ function(Element1) {
    _inherits(AccordionNavigationItem, Element1);
    function AccordionNavigationItem() {
        _classCallCheck(this, AccordionNavigationItem);
        return _possibleConstructorReturn(this, _getPrototypeOf(AccordionNavigationItem).apply(this, arguments));
    }
    _createClass(AccordionNavigationItem, [
        {
            key: "getAccordionNavigationButton",
            value: function getAccordionNavigationButton() {
                var _constructor = this.constructor, AccordionNavigationButton = _constructor.AccordionNavigationButton;
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
exports.default = AccordionNavigationItem;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL25hdmlnYXRpb24vYWNjb3JkaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IEFjY29yZGlvbk5hdmlnYXRpb25CdXR0b24gZnJvbSBcIi4uLy4uL2J1dHRvbi9uYXZpZ2F0aW9uL2FjY29yZGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvcmRpb25OYXZpZ2F0aW9uSXRlbSBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRBY2NvcmRpb25OYXZpZ2F0aW9uQnV0dG9uKCkge1xuICAgIGNvbnN0IHsgQWNjb3JkaW9uTmF2aWdhdGlvbkJ1dHRvbiB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBBY2NvcmRpb25OYXZpZ2F0aW9uQnV0dG9uO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IEFydGljbGVzLCBmaXJzdCwgbGFzdCwgc2hvd0FydGljbGUgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBbIEFydGljbGUgXSA9IEFydGljbGVzLFxuICAgICAgICAgIEFjY29yZGlvbk5hdmlnYXRpb25CdXR0b24gPSB0aGlzLmdldEFjY29yZGlvbk5hdmlnYXRpb25CdXR0b24oKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxBY2NvcmRpb25OYXZpZ2F0aW9uQnV0dG9uIEFydGljbGU9e0FydGljbGV9IGZpcnN0PXtmaXJzdH0gbGFzdD17bGFzdH0gc2hvd0FydGljbGU9e3Nob3dBcnRpY2xlfSAvPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBBY2NvcmRpb25OYXZpZ2F0aW9uQnV0dG9uID0gQWNjb3JkaW9uTmF2aWdhdGlvbkJ1dHRvbjtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwibGlcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImFjY29yZGlvbiBuYXZpZ2F0aW9uXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVZLEdBQU0sQ0FBTixLQUFNO0FBRVEsR0FBbUMsQ0FBbkMsVUFBbUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVwRCx1QkFBdUI7Y0FBdkIsdUJBQXVCO2FBQXZCLHVCQUF1Qjs4QkFBdkIsdUJBQXVCO2dFQUF2Qix1QkFBdUI7O2lCQUF2Qix1QkFBdUI7O1lBQzFDLEdBQTRCLEdBQTVCLDRCQUE0Qjs0QkFBNUIsNEJBQTRCLEdBQUcsQ0FBQztnQkFDOUIsR0FBSyxDQUFpQyxZQUFnQixRQUFYLFdBQVcsRUFBOUMseUJBQXlCLEdBQUssWUFBZ0IsQ0FBOUMseUJBQXlCO3VCQUUxQix5QkFBeUI7WUFDbEMsQ0FBQzs7O1lBRUQsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsR0FBSyxDQUEwQyxXQUFlLFFBQVYsVUFBVSxFQUF0RCxRQUFRLEdBQStCLFdBQWUsQ0FBdEQsUUFBUSxFQUFFLEtBQUssR0FBd0IsV0FBZSxDQUE1QyxLQUFLLEVBQUUsSUFBSSxHQUFrQixXQUFlLENBQXJDLElBQUksRUFBRSxXQUFXLEdBQUssV0FBZSxDQUEvQixXQUFXLEVBQ3RCLFNBQVEsa0JBQVIsUUFBUSxNQUFwQixPQUFPLEdBQUssU0FBUSxLQUN0Qix5QkFBeUIsUUFBUSw0QkFBNEI7eURBSWhFLHlCQUF5QjtvQkFBQyxPQUFPLEVBQUUsT0FBTztvQkFBRSxLQUFLLEVBQUUsS0FBSztvQkFBRSxJQUFJLEVBQUUsSUFBSTtvQkFBRSxXQUFXLEVBQUUsV0FBVzs7WUFHbkcsQ0FBQzs7O1dBakJrQix1QkFBdUI7bUJBSnBCLEtBQU07Z0JBSVQsdUJBQXVCLEdBbUJuQyx5QkFBeUIsR0FyQkksVUFBbUM7Z0JBRXBELHVCQUF1QixHQXFCbkMsT0FBTyxJQUFHLEVBQUk7Z0JBckJGLHVCQUF1QixHQXVCbkMsaUJBQWlCO0lBQ3RCLFNBQVMsR0FBRSxvQkFBc0I7O2tCQXhCaEIsdUJBQXVCIn0=