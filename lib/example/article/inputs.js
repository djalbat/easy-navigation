"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return InputsArticle;
    }
});
var _article = /*#__PURE__*/ _interopRequireDefault(require("../article"));
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
var InputsArticle = /*#__PURE__*/ function(Article) {
    _inherits(InputsArticle, Article);
    var _super = _createSuper(InputsArticle);
    function InputsArticle() {
        _classCallCheck(this, InputsArticle);
        return _super.apply(this, arguments);
    }
    _createClass(InputsArticle, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("h1", null, "Inputs"));
            }
        }
    ]);
    return InputsArticle;
}(_article.default);
_defineProperty(InputsArticle, "uri", _uris.inputsURI);
_defineProperty(InputsArticle, "path", _paths.inputsPath);
_defineProperty(InputsArticle, "title", "Inputs");
_defineProperty(InputsArticle, "defaultProperties", {
    className: "inputs"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2FydGljbGUvaW5wdXRzLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXJ0aWNsZSBmcm9tIFwiLi4vYXJ0aWNsZVwiO1xuXG5pbXBvcnQgeyBpbnB1dHNVUkkgfSBmcm9tIFwiLi4vdXJpc1wiO1xuaW1wb3J0IHsgaW5wdXRzUGF0aCB9IGZyb20gXCIuLi9wYXRoc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dHNBcnRpY2xlIGV4dGVuZHMgQXJ0aWNsZSB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPlxuICAgICAgICAgIElucHV0c1xuICAgICAgICA8L2gxPlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIHVyaSA9IGlucHV0c1VSSTtcblxuICBzdGF0aWMgcGF0aCA9IGlucHV0c1BhdGg7XG5cbiAgc3RhdGljIHRpdGxlID0gXCJJbnB1dHNcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImlucHV0c1wiXG4gIH07XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIklucHV0c0FydGljbGUiLCJjaGlsZEVsZW1lbnRzIiwiZGl2IiwiaDEiLCJBcnRpY2xlIiwidXJpIiwiaW5wdXRzVVJJIiwicGF0aCIsImlucHV0c1BhdGgiLCJ0aXRsZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFPUUEsYUFBYTs7OzREQUxkLFlBQVk7b0JBRU4sU0FBUztxQkFDUixVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QixJQUFBLEFBQU1BLGFBQWEsaUJBQW5COzs7YUFBTUEsYUFBYTs7Ozs7O1lBQ2hDQyxHQUFhLEVBQWJBLGVBQWE7bUJBQWJBLFNBQUFBLGFBQWEsR0FBRztnQkFDZCxxQkFFRSxvQkFBQ0MsS0FBRyxzQkFDRixvQkFBQ0MsSUFBRSxRQUFDLFFBRUosQ0FBSyxDQUNELENBRU47YUFDSDs7OztDQVdGLENBdEIwQ0MsUUFBTyxRQUFBLENBc0JqRDtBQVRDLGdCQWJtQkosYUFBYSxFQWF6QkssS0FBRyxFQUFHQyxLQUFTLFVBQUEsQ0FBQztBQUV2QixnQkFmbUJOLGFBQWEsRUFlekJPLE1BQUksRUFBR0MsTUFBVSxXQUFBLENBQUM7QUFFekIsZ0JBakJtQlIsYUFBYSxFQWlCekJTLE9BQUssRUFBRyxRQUFRLENBQUM7QUFFeEIsZ0JBbkJtQlQsYUFBYSxFQW1CekJVLG1CQUFpQixFQUFHO0lBQ3pCQyxTQUFTLEVBQUUsUUFBUTtDQUNwQixDQUFDIn0=