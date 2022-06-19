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
var SectionsArticle = /*#__PURE__*/ function(Article) {
    _inherits(SectionsArticle, Article);
    var _super = _createSuper(SectionsArticle);
    function SectionsArticle() {
        _classCallCheck(this, SectionsArticle);
        return _super.apply(this, arguments);
    }
    _createClass(SectionsArticle, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("h1", null, "Sections"));
            }
        }
    ]);
    return SectionsArticle;
}(_article.default);
_defineProperty(SectionsArticle, "uri", _uris.sectionsURI);
_defineProperty(SectionsArticle, "path", _paths.sectionsPath);
_defineProperty(SectionsArticle, "title", "Sections");
_defineProperty(SectionsArticle, "defaultProperties", {
    className: "sections"
});
exports.default = SectionsArticle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2FydGljbGUvc2VjdGlvbnMuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBcnRpY2xlIGZyb20gXCIuLi9hcnRpY2xlXCI7XG5cbmltcG9ydCB7IHNlY3Rpb25zVVJJIH0gZnJvbSBcIi4uL3VyaXNcIjtcbmltcG9ydCB7IHNlY3Rpb25zUGF0aCB9IGZyb20gXCIuLi9wYXRoc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uc0FydGljbGUgZXh0ZW5kcyBBcnRpY2xlIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+XG4gICAgICAgICAgU2VjdGlvbnNcbiAgICAgICAgPC9oMT5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyB1cmkgPSBzZWN0aW9uc1VSSTtcblxuICBzdGF0aWMgcGF0aCA9IHNlY3Rpb25zUGF0aDtcblxuICBzdGF0aWMgdGl0bGUgPSBcIlNlY3Rpb25zXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJzZWN0aW9uc1wiXG4gIH07XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlNlY3Rpb25zQXJ0aWNsZSIsImNoaWxkRWxlbWVudHMiLCJkaXYiLCJoMSIsIkFydGljbGUiLCJ1cmkiLCJzZWN0aW9uc1VSSSIsInBhdGgiLCJzZWN0aW9uc1BhdGgiLCJ0aXRsZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRU8sSUFBQSxRQUFZLGtDQUFaLFlBQVksRUFBQTtBQUVKLElBQUEsS0FBUyxXQUFULFNBQVMsQ0FBQTtBQUNSLElBQUEsTUFBVSxXQUFWLFVBQVUsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEIsSUFBQSxBQUFNQSxlQUFlLGlCQUFyQjs7O2FBQU1BLGVBQWU7Ozs7OztZQUNsQ0MsR0FBYSxFQUFiQSxlQUFhO21CQUFiQSxTQUFBQSxhQUFhLEdBQUc7Z0JBQ2QscUJBRUUsb0JBQUNDLEtBQUcsc0JBQ0Ysb0JBQUNDLElBQUUsUUFBQyxVQUVKLENBQUssQ0FDRCxDQUVOO2FBQ0g7Ozs7Q0FXRixDQXRCNENDLFFBQU8sUUFBQSxDQXNCbkQ7QUFUQyxnQkFibUJKLGVBQWUsRUFhM0JLLEtBQUcsRUFBR0MsS0FBVyxZQUFBLENBQUM7QUFFekIsZ0JBZm1CTixlQUFlLEVBZTNCTyxNQUFJLEVBQUdDLE1BQVksYUFBQSxDQUFDO0FBRTNCLGdCQWpCbUJSLGVBQWUsRUFpQjNCUyxPQUFLLEVBQUcsVUFBVSxDQUFDO0FBRTFCLGdCQW5CbUJULGVBQWUsRUFtQjNCVSxtQkFBaUIsRUFBRztJQUN6QkMsU0FBUyxFQUFFLFVBQVU7Q0FDdEIsQ0FBQztrQkFyQmlCWCxlQUFlIn0=