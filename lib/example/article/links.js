"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LinksArticle;
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
var LinksArticle = /*#__PURE__*/ function(Article) {
    _inherits(LinksArticle, Article);
    var _super = _createSuper(LinksArticle);
    function LinksArticle() {
        _classCallCheck(this, LinksArticle);
        return _super.apply(this, arguments);
    }
    _createClass(LinksArticle, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("h1", null, "Links"));
            }
        }
    ]);
    return LinksArticle;
}(_article.default);
_defineProperty(LinksArticle, "uri", _uris.linksURI);
_defineProperty(LinksArticle, "path", _paths.linksPath);
_defineProperty(LinksArticle, "title", "Links");
_defineProperty(LinksArticle, "defaultProperties", {
    className: "code"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2FydGljbGUvbGlua3MuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBcnRpY2xlIGZyb20gXCIuLi9hcnRpY2xlXCI7XG5cbmltcG9ydCB7IGxpbmtzVVJJIH0gZnJvbSBcIi4uL3VyaXNcIjtcbmltcG9ydCB7IGxpbmtzUGF0aCB9IGZyb20gXCIuLi9wYXRoc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5rc0FydGljbGUgZXh0ZW5kcyBBcnRpY2xlIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+XG4gICAgICAgICAgTGlua3NcbiAgICAgICAgPC9oMT5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyB1cmkgPSBsaW5rc1VSSTtcblxuICBzdGF0aWMgcGF0aCA9IGxpbmtzUGF0aDtcblxuICBzdGF0aWMgdGl0bGUgPSBcIkxpbmtzXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJjb2RlXCJcbiAgfTtcbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiTGlua3NBcnRpY2xlIiwiY2hpbGRFbGVtZW50cyIsImRpdiIsImgxIiwiQXJ0aWNsZSIsInVyaSIsImxpbmtzVVJJIiwicGF0aCIsImxpbmtzUGF0aCIsInRpdGxlIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQU9RQSxZQUFZOzs7NERBTGIsWUFBWTtvQkFFUCxTQUFTO3FCQUNSLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJCLElBQUEsQUFBTUEsWUFBWSxpQkFBbEI7OzthQUFNQSxZQUFZOzs7Ozs7WUFDL0JDLEdBQWEsRUFBYkEsZUFBYTttQkFBYkEsU0FBQUEsYUFBYSxHQUFHO2dCQUNkLHFCQUVFLG9CQUFDQyxLQUFHLHNCQUNGLG9CQUFDQyxJQUFFLFFBQUMsT0FFSixDQUFLLENBQ0QsQ0FFTjthQUNIOzs7O0NBV0YsQ0F0QnlDQyxRQUFPLFFBQUEsQ0FzQmhEO0FBVEMsZ0JBYm1CSixZQUFZLEVBYXhCSyxLQUFHLEVBQUdDLEtBQVEsU0FBQSxDQUFDO0FBRXRCLGdCQWZtQk4sWUFBWSxFQWV4Qk8sTUFBSSxFQUFHQyxNQUFTLFVBQUEsQ0FBQztBQUV4QixnQkFqQm1CUixZQUFZLEVBaUJ4QlMsT0FBSyxFQUFHLE9BQU8sQ0FBQztBQUV2QixnQkFuQm1CVCxZQUFZLEVBbUJ4QlUsbUJBQWlCLEVBQUc7SUFDekJDLFNBQVMsRUFBRSxNQUFNO0NBQ2xCLENBQUMifQ==