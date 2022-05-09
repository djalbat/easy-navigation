"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easy = require("easy");
var _accordion = _interopRequireDefault(require("../list/navigation/accordion"));
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
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent1, args1, Class1) {
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
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _wrapNativeSuper(Class2) {
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
    return _wrapNativeSuper(Class2);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
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
var AccordionNavigation = /*#__PURE__*/ function(Element) {
    _inherits(AccordionNavigation, Element);
    var _super = _createSuper(AccordionNavigation);
    function AccordionNavigation() {
        _classCallCheck(this, AccordionNavigation);
        return _super.apply(this, arguments);
    }
    _createClass(AccordionNavigation, [
        {
            key: "getAccordionNavigationList",
            value: function getAccordionNavigationList() {
                var _$AccordionNavigationList = this.constructor.AccordionNavigationList;
                return _$AccordionNavigationList;
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _properties = this.properties, ArticlesArray = _properties.ArticlesArray, showArticle = _properties.showArticle, _$AccordionNavigationList = this.getAccordionNavigationList();
                return /*#__PURE__*/ React.createElement(_$AccordionNavigationList, {
                    ArticlesArray: ArticlesArray,
                    showArticle: showArticle
                });
            }
        }
    ]);
    return AccordionNavigation;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(AccordionNavigation, "AccordionNavigationList", _accordion.default);
_defineProperty(AccordionNavigation, "tagName", "nav");
_defineProperty(AccordionNavigation, "defaultProperties", {
    className: "accordion"
});
exports.default = AccordionNavigation;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9uYXZpZ2F0aW9uL2FjY29yZGlvbi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBBY2NvcmRpb25OYXZpZ2F0aW9uTGlzdCBmcm9tIFwiLi4vbGlzdC9uYXZpZ2F0aW9uL2FjY29yZGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvcmRpb25OYXZpZ2F0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldEFjY29yZGlvbk5hdmlnYXRpb25MaXN0KCkge1xuICAgIGNvbnN0IHsgQWNjb3JkaW9uTmF2aWdhdGlvbkxpc3QgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gQWNjb3JkaW9uTmF2aWdhdGlvbkxpc3Q7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgQXJ0aWNsZXNBcnJheSwgc2hvd0FydGljbGUgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBBY2NvcmRpb25OYXZpZ2F0aW9uTGlzdCA9IHRoaXMuZ2V0QWNjb3JkaW9uTmF2aWdhdGlvbkxpc3QoKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxBY2NvcmRpb25OYXZpZ2F0aW9uTGlzdCBBcnRpY2xlc0FycmF5PXtBcnRpY2xlc0FycmF5fSBzaG93QXJ0aWNsZT17c2hvd0FydGljbGV9IC8+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIEFjY29yZGlvbk5hdmlnYXRpb25MaXN0ID0gQWNjb3JkaW9uTmF2aWdhdGlvbkxpc3Q7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcIm5hdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYWNjb3JkaW9uXCJcbiAgfTtcbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiQWNjb3JkaW9uTmF2aWdhdGlvbiIsImdldEFjY29yZGlvbk5hdmlnYXRpb25MaXN0IiwiQWNjb3JkaW9uTmF2aWdhdGlvbkxpc3QiLCJjb25zdHJ1Y3RvciIsImNoaWxkRWxlbWVudHMiLCJwcm9wZXJ0aWVzIiwiQXJ0aWNsZXNBcnJheSIsInNob3dBcnRpY2xlIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVXLElBQUEsS0FBTSxXQUFOLE1BQU0sQ0FBQTtBQUVNLElBQUEsVUFBOEIsa0NBQTlCLDhCQUE4QixFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRCxJQUFBLEFBQU1BLG1CQUFtQixpQkNOckMsQURNWTs7O2FBQU1BLG1CQUFtQjs7Ozs7O1lBQ3RDQyxHQUEwQixFQUExQkEsNEJBQTBCO21CQUExQkEsU0FBQUEsMEJBQTBCLEdBQUc7Z0JBQzNCLElBQU0sQUFBRUMseUJBQXVCLEdBQUssSUFBSSxDQUFDQyxXQUFXLENBQTVDRCx1QkFBdUIsQUFBcUIsQUFBQztnQkFFckQsT0FBT0EseUJBQXVCLENBQUM7YUFDaEM7OztZQUVERSxHQUFhLEVBQWJBLGVBQWE7bUJBQWJBLFNBQUFBLGFBQWEsR0FBRztnQkFDZCxJQUF1QyxXQUFlLEdBQWYsSUFBSSxDQUFDQyxVQUFVLEVBQTlDQyxhQUFhLEdBQWtCLFdBQWUsQ0FBOUNBLGFBQWEsRUFBRUMsV0FBVyxHQUFLLFdBQWUsQ0FBL0JBLFdBQVcsRUFDNUJMLHlCQUF1QixHQUFHLElBQUksQ0FBQ0QsMEJBQTBCLEVBQUUsQUFBQztnQkFFbEUscUJBRUUsb0JBQUNDLHlCQUF1QjtvQkFBQ0ksYUFBYSxFQUFFQSxhQUFhO29CQUFFQyxXQUFXLEVBQUVBLFdBQVc7a0JBQUksQ0FFbkY7YUFDSDs7OztDQVNGLGtCQXpCZ0RDLEtBQU8sUUFBQSxFQXlCdkQ7QUFQQyxnQkFsQm1CUixtQkFBbUIsRUFrQi9CRSx5QkFBdUIsRUFBR0EsVUFBdUIsUUFBQSxDQUFDO0FBRXpELGdCQXBCbUJGLG1CQUFtQixFQW9CL0JTLFNBQU8sRUFBRyxLQUFLLENBQUM7QUFFdkIsZ0JBdEJtQlQsbUJBQW1CLEVBc0IvQlUsbUJBQWlCLEVBQUc7SUFDekJDLFNBQVMsRUFBRSxXQUFXO0NBQ3ZCLENBQUM7a0JBeEJpQlgsbUJBQW1CIn0=