"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return AccordionNavigation;
    }
});
var _easy = require("easy");
var _accordion = /*#__PURE__*/ _interopRequireDefault(require("../list/navigation/accordion"));
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
    "@swc/helpers - typeof";
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
            key: "childElements",
            value: function childElements() {
                var _$AccordionNavigationList = this.constructor.AccordionNavigationList, _properties = this.properties, ArticlesArray = _properties.ArticlesArray, showArticle = _properties.showArticle;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9uYXZpZ2F0aW9uL2FjY29yZGlvbi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBBY2NvcmRpb25OYXZpZ2F0aW9uTGlzdCBmcm9tIFwiLi4vbGlzdC9uYXZpZ2F0aW9uL2FjY29yZGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvcmRpb25OYXZpZ2F0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBBY2NvcmRpb25OYXZpZ2F0aW9uTGlzdCB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICB7IEFydGljbGVzQXJyYXksIHNob3dBcnRpY2xlIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8QWNjb3JkaW9uTmF2aWdhdGlvbkxpc3QgQXJ0aWNsZXNBcnJheT17QXJ0aWNsZXNBcnJheX0gc2hvd0FydGljbGU9e3Nob3dBcnRpY2xlfSAvPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBBY2NvcmRpb25OYXZpZ2F0aW9uTGlzdCA9IEFjY29yZGlvbk5hdmlnYXRpb25MaXN0O1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJuYXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImFjY29yZGlvblwiXG4gIH07XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkFjY29yZGlvbk5hdmlnYXRpb24iLCJjaGlsZEVsZW1lbnRzIiwiQWNjb3JkaW9uTmF2aWdhdGlvbkxpc3QiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJBcnRpY2xlc0FycmF5Iiwic2hvd0FydGljbGUiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFNUUEsbUJBQW1COzs7b0JBSmhCLE1BQU07OERBRU0sOEJBQThCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRCxJQUFBLEFBQU1BLG1CQUFtQixpQkFBekI7OzthQUFNQSxtQkFBbUI7Ozs7OztZQUN0Q0MsR0FBYSxFQUFiQSxlQUFhO21CQUFiQSxTQUFBQSxhQUFhLEdBQUc7Z0JBQ2QsSUFBTSxBQUFFQyx5QkFBdUIsR0FBSyxJQUFJLENBQUNDLFdBQVcsQ0FBNUNELHVCQUF1QixBQUFxQixFQUNiLFdBQWUsR0FBZixJQUFJLENBQUNFLFVBQVUsRUFBOUNDLGFBQWEsR0FBa0IsV0FBZSxDQUE5Q0EsYUFBYSxFQUFFQyxXQUFXLEdBQUssV0FBZSxDQUEvQkEsV0FBVyxBQUFxQjtnQkFFdkQscUJBRUUsb0JBQUNKLHlCQUF1QjtvQkFBQ0csYUFBYSxFQUFFQSxhQUFhO29CQUFFQyxXQUFXLEVBQUVBLFdBQVc7a0JBQUksQ0FFbkY7YUFDSDs7OztDQVNGLGtCQW5CZ0RDLEtBQU8sUUFBQSxFQW1CdkQ7QUFQQyxnQkFabUJQLG1CQUFtQixFQVkvQkUseUJBQXVCLEVBQUdBLFVBQXVCLFFBQUEsQ0FBQztBQUV6RCxnQkFkbUJGLG1CQUFtQixFQWMvQlEsU0FBTyxFQUFHLEtBQUssQ0FBQztBQUV2QixnQkFoQm1CUixtQkFBbUIsRUFnQi9CUyxtQkFBaUIsRUFBRztJQUN6QkMsU0FBUyxFQUFFLFdBQVc7Q0FDdkIsQ0FBQyJ9