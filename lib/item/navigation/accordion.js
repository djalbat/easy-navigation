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
var _default = (0, _easyWithStyle).default(AccordionNavigationItem)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL25hdmlnYXRpb24vYWNjb3JkaW9uLmpzIl0sIm5hbWVzIjpbIndpdGhTdHlsZSIsIkVsZW1lbnQiLCJBY2NvcmRpb25OYXZpZ2F0aW9uQnV0dG9uIiwiQWNjb3JkaW9uTmF2aWdhdGlvbkl0ZW0iLCJnZXRBY2NvcmRpb25OYXZpZ2F0aW9uQnV0dG9uIiwiY29uc3RydWN0b3IiLCJjaGlsZEVsZW1lbnRzIiwiQXJ0aWNsZXMiLCJmaXJzdCIsImxhc3QiLCJzaG93QXJ0aWNsZSIsInByb3BlcnRpZXMiLCJBcnRpY2xlIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVVLEdBQWlCLENBQWpCLGNBQWlCO0FBRWYsR0FBTSxDQUFOLEtBQU07QUFFUSxHQUFtQyxDQUFuQyxVQUFtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBOEJ2QixDQUlsRDs7Ozs7OztJQWhDTSx1QkFBdUIsaUJBQTdCLFFBQVE7Y0FBRix1QkFBdUI7YUFBdkIsdUJBQXVCOzhCQUF2Qix1QkFBdUI7Z0VBQXZCLHVCQUF1Qjs7aUJBQXZCLHVCQUF1Qjs7WUFDM0IsR0FBNEIsRUFBNUIsQ0FBNEI7bUJBQTVCLFFBQVEsQ0FBUiw0QkFBNEIsR0FBRyxDQUFDO2dCQUM5QixHQUFLLENBQWlDLFlBQWdCLEdBQWhCLElBQUksQ0FBQyxXQUFXLEVBQTlDLHlCQUF5QixHQUFLLFlBQWdCLENBQTlDLHlCQUF5QjtnQkFFakMsTUFBTSxDQUFDLHlCQUF5QjtZQUNsQyxDQUFDOzs7WUFFRCxHQUFhLEVBQWIsQ0FBYTttQkFBYixRQUFRLENBQVIsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsR0FBSyxDQUEwQyxXQUFlLEdBQWYsSUFBSSxDQUFDLFVBQVUsRUFBdEQsUUFBUSxHQUErQixXQUFlLENBQXRELFFBQVEsRUFBRSxLQUFLLEdBQXdCLFdBQWUsQ0FBNUMsS0FBSyxFQUFFLElBQUksR0FBa0IsV0FBZSxDQUFyQyxJQUFJLEVBQUUsV0FBVyxHQUFLLFdBQWUsQ0FBL0IsV0FBVyxFQUN0QixTQUFRLGtCQUFSLFFBQVEsTUFBcEIsT0FBTyxHQUFLLFNBQVEsS0FDdEIseUJBQXlCLEdBQUcsSUFBSSxDQUFDLDRCQUE0QjtnQkFFbkUsTUFBTSxtQ0FFSCx5QkFBeUI7b0JBQUMsT0FBTyxFQUFFLE9BQU87b0JBQUUsS0FBSyxFQUFFLEtBQUs7b0JBQUUsSUFBSSxFQUFFLElBQUk7b0JBQUUsV0FBVyxFQUFFLFdBQVc7O1lBR25HLENBQUM7OztXQWpCRyx1QkFBdUI7bUJBSkwsS0FBTTtnQkFJeEIsdUJBQXVCLEVBbUJwQixDQUF5Qiw0QkFyQkksVUFBbUM7Z0JBRW5FLHVCQUF1QixFQXFCcEIsQ0FBTyxVQUFHLENBQUk7Z0JBckJqQix1QkFBdUIsRUF1QnBCLENBQWlCLG9CQUFHLENBQUM7SUFDMUIsU0FBUyxFQUFFLENBQXNCO0FBQ25DLENBQUM7bUJBL0JtQixjQUFpQixVQWtDZCx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgQWNjb3JkaW9uTmF2aWdhdGlvbkJ1dHRvbiBmcm9tIFwiLi4vLi4vYnV0dG9uL25hdmlnYXRpb24vYWNjb3JkaW9uXCI7XG5cbmNsYXNzIEFjY29yZGlvbk5hdmlnYXRpb25JdGVtIGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldEFjY29yZGlvbk5hdmlnYXRpb25CdXR0b24oKSB7XG4gICAgY29uc3QgeyBBY2NvcmRpb25OYXZpZ2F0aW9uQnV0dG9uIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIEFjY29yZGlvbk5hdmlnYXRpb25CdXR0b247XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgQXJ0aWNsZXMsIGZpcnN0LCBsYXN0LCBzaG93QXJ0aWNsZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIFsgQXJ0aWNsZSBdID0gQXJ0aWNsZXMsXG4gICAgICAgICAgQWNjb3JkaW9uTmF2aWdhdGlvbkJ1dHRvbiA9IHRoaXMuZ2V0QWNjb3JkaW9uTmF2aWdhdGlvbkJ1dHRvbigpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPEFjY29yZGlvbk5hdmlnYXRpb25CdXR0b24gQXJ0aWNsZT17QXJ0aWNsZX0gZmlyc3Q9e2ZpcnN0fSBsYXN0PXtsYXN0fSBzaG93QXJ0aWNsZT17c2hvd0FydGljbGV9IC8+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIEFjY29yZGlvbk5hdmlnYXRpb25CdXR0b24gPSBBY2NvcmRpb25OYXZpZ2F0aW9uQnV0dG9uO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJsaVwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYWNjb3JkaW9uIG5hdmlnYXRpb25cIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQWNjb3JkaW9uTmF2aWdhdGlvbkl0ZW0pYFxuXG4gIGhlaWdodDogNHJlbTtcbiAgXG5gO1xuIl19