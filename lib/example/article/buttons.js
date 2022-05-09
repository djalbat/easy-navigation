"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _article = _interopRequireDefault(require("../article"));
var _uris = require("../uris");
var _paths = require("../paths");
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
var ButtonsArticle = /*#__PURE__*/ function(Article) {
    _inherits(ButtonsArticle, Article);
    var _super = _createSuper(ButtonsArticle);
    function ButtonsArticle() {
        _classCallCheck(this, ButtonsArticle);
        return _super.apply(this, arguments);
    }
    _createClass(ButtonsArticle, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("h1", null, "Buttons"));
            }
        }
    ]);
    return ButtonsArticle;
}(_article.default);
_defineProperty(ButtonsArticle, "uri", _uris.buttonsURI);
_defineProperty(ButtonsArticle, "path", _paths.buttonsPath);
_defineProperty(ButtonsArticle, "title", "Buttons");
_defineProperty(ButtonsArticle, "defaultProperties", {
    className: "buttons"
});
exports.default = ButtonsArticle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2FydGljbGUvYnV0dG9ucy5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEFydGljbGUgZnJvbSBcIi4uL2FydGljbGVcIjtcblxuaW1wb3J0IHsgYnV0dG9uc1VSSSB9IGZyb20gXCIuLi91cmlzXCI7XG5pbXBvcnQgeyBidXR0b25zUGF0aCB9IGZyb20gXCIuLi9wYXRoc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b25zQXJ0aWNsZSBleHRlbmRzIEFydGljbGUge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5cbiAgICAgICAgICBCdXR0b25zXG4gICAgICAgIDwvaDE+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgdXJpID0gYnV0dG9uc1VSSTtcblxuICBzdGF0aWMgcGF0aCA9IGJ1dHRvbnNQYXRoO1xuXG4gIHN0YXRpYyB0aXRsZSA9IFwiQnV0dG9uc1wiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYnV0dG9uc1wiXG4gIH07XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkJ1dHRvbnNBcnRpY2xlIiwiY2hpbGRFbGVtZW50cyIsImRpdiIsImgxIiwiQXJ0aWNsZSIsInVyaSIsImJ1dHRvbnNVUkkiLCJwYXRoIiwiYnV0dG9uc1BhdGgiLCJ0aXRsZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRU8sSUFBQSxRQUFZLGtDQUFaLFlBQVksRUFBQTtBQUVMLElBQUEsS0FBUyxXQUFULFNBQVMsQ0FBQTtBQUNSLElBQUEsTUFBVSxXQUFWLFVBQVUsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkIsSUFBQSxBQUFNQSxjQUFjLGlCQ1BoQyxBRE9ZOzs7YUFBTUEsY0FBYzs7Ozs7O1lBQ2pDQyxHQUFhLEVBQWJBLGVBQWE7bUJBQWJBLFNBQUFBLGFBQWEsR0FBRztnQkFDZCxxQkFFRSxvQkFBQ0MsS0FBRyxzQkFDRixvQkFBQ0MsSUFBRSxRQUFDLFNBRUosQ0FBSyxDQUNELENBRU47YUFDSDs7OztDQVdGLENBdEIyQ0MsUUFBTyxRQUFBLENBc0JsRDtBQVRDLGdCQWJtQkosY0FBYyxFQWExQkssS0FBRyxFQUFHQyxLQUFVLFdBQUEsQ0FBQztBQUV4QixnQkFmbUJOLGNBQWMsRUFlMUJPLE1BQUksRUFBR0MsTUFBVyxZQUFBLENBQUM7QUFFMUIsZ0JBakJtQlIsY0FBYyxFQWlCMUJTLE9BQUssRUFBRyxTQUFTLENBQUM7QUFFekIsZ0JBbkJtQlQsY0FBYyxFQW1CMUJVLG1CQUFpQixFQUFHO0lBQ3pCQyxTQUFTLEVBQUUsU0FBUztDQUNyQixDQUFDO2tCQXJCaUJYLGNBQWMifQ==