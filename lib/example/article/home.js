"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return HomeArticle;
    }
});
var _article = /*#__PURE__*/ _interopRequireDefault(require("../article"));
var _link = /*#__PURE__*/ _interopRequireDefault(require("../button/link"));
var _paths = require("../paths");
var _uris = require("../uris");
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
var HomeArticle = /*#__PURE__*/ function(Article) {
    _inherits(HomeArticle, Article);
    var _super = _createSuper(HomeArticle);
    function HomeArticle() {
        _classCallCheck(this, HomeArticle);
        return _super.apply(this, arguments);
    }
    _createClass(HomeArticle, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("h1", null, "Home"), /*#__PURE__*/ React.createElement("ul", null, /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement(_link.default, {
                    onClick: function(event, element) {
                        return controller.showArticle(_uris.linksURI);
                    }
                }, "Links")), /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement(_link.default, {
                    onClick: function(event, element) {
                        return controller.showArticle(_uris.buttonsURI);
                    }
                }, "Buttons")), /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement(_link.default, {
                    onClick: function(event, element) {
                        return controller.showArticle(_uris.headingsURI);
                    }
                }, "Headings"))));
            }
        }
    ]);
    return HomeArticle;
}(_article.default);
_defineProperty(HomeArticle, "uri", _uris.homeURI);
_defineProperty(HomeArticle, "path", _paths.homePath);
_defineProperty(HomeArticle, "title", "Home");
_defineProperty(HomeArticle, "defaultProperties", {
    className: "home"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2FydGljbGUvaG9tZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEFydGljbGUgZnJvbSBcIi4uL2FydGljbGVcIjtcblxuaW1wb3J0IExpbmtCdXR0b24gZnJvbSBcIi4uL2J1dHRvbi9saW5rXCI7XG5cbmltcG9ydCB7IGhvbWVQYXRoIH0gZnJvbSBcIi4uL3BhdGhzXCI7XG5pbXBvcnQgeyBob21lVVJJLCBsaW5rc1VSSSwgYnV0dG9uc1VSSSwgaGVhZGluZ3NVUkkgfSBmcm9tIFwiLi4vdXJpc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lQXJ0aWNsZSBleHRlbmRzIEFydGljbGUge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5cbiAgICAgICAgICBIb21lXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGlua0J1dHRvbiBvbkNsaWNrPXsoZXZlbnQsIGVsZW1lbnQpID0+IGNvbnRyb2xsZXIuc2hvd0FydGljbGUobGlua3NVUkkpfT5cbiAgICAgICAgICAgICAgTGlua3NcbiAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rQnV0dG9uIG9uQ2xpY2s9eyhldmVudCwgZWxlbWVudCkgPT4gY29udHJvbGxlci5zaG93QXJ0aWNsZShidXR0b25zVVJJKX0+XG4gICAgICAgICAgICAgIEJ1dHRvbnNcbiAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rQnV0dG9uIG9uQ2xpY2s9eyhldmVudCwgZWxlbWVudCkgPT4gY29udHJvbGxlci5zaG93QXJ0aWNsZShoZWFkaW5nc1VSSSl9PlxuICAgICAgICAgICAgICBIZWFkaW5nc1xuICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgdXJpID0gaG9tZVVSSTtcblxuICBzdGF0aWMgcGF0aCA9IGhvbWVQYXRoO1xuXG4gIHN0YXRpYyB0aXRsZSA9IFwiSG9tZVwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiaG9tZVwiXG4gIH07XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkhvbWVBcnRpY2xlIiwiY2hpbGRFbGVtZW50cyIsImRpdiIsImgxIiwidWwiLCJsaSIsIkxpbmtCdXR0b24iLCJvbkNsaWNrIiwiZXZlbnQiLCJlbGVtZW50IiwiY29udHJvbGxlciIsInNob3dBcnRpY2xlIiwibGlua3NVUkkiLCJidXR0b25zVVJJIiwiaGVhZGluZ3NVUkkiLCJBcnRpY2xlIiwidXJpIiwiaG9tZVVSSSIsInBhdGgiLCJob21lUGF0aCIsInRpdGxlIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQVNRQSxXQUFXOzs7NERBUFosWUFBWTt5REFFVCxnQkFBZ0I7cUJBRWQsVUFBVTtvQkFDd0IsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckQsSUFBQSxBQUFNQSxXQUFXLGlCQUFqQjs7O2FBQU1BLFdBQVc7Ozs7OztZQUM5QkMsR0FBYSxFQUFiQSxlQUFhO21CQUFiQSxTQUFBQSxhQUFhLEdBQUc7Z0JBQ2QscUJBRUUsb0JBQUNDLEtBQUcsc0JBQ0Ysb0JBQUNDLElBQUUsUUFBQyxNQUVKLENBQUssZ0JBQ0wsb0JBQUNDLElBQUUsc0JBQ0Qsb0JBQUNDLElBQUUsc0JBQ0Qsb0JBQUNDLEtBQVUsUUFBQTtvQkFBQ0MsT0FBTyxFQUFFLFNBQUNDLEtBQUssRUFBRUMsT0FBTzsrQkFBS0MsVUFBVSxDQUFDQyxXQUFXLENBQUNDLEtBQVEsU0FBQSxDQUFDO3FCQUFBO21CQUFFLE9BRTNFLENBQWEsQ0FDVixnQkFDTCxvQkFBQ1AsSUFBRSxzQkFDRCxvQkFBQ0MsS0FBVSxRQUFBO29CQUFDQyxPQUFPLEVBQUUsU0FBQ0MsS0FBSyxFQUFFQyxPQUFPOytCQUFLQyxVQUFVLENBQUNDLFdBQVcsQ0FBQ0UsS0FBVSxXQUFBLENBQUM7cUJBQUE7bUJBQUUsU0FFN0UsQ0FBYSxDQUNWLGdCQUNMLG9CQUFDUixJQUFFLHNCQUNELG9CQUFDQyxLQUFVLFFBQUE7b0JBQUNDLE9BQU8sRUFBRSxTQUFDQyxLQUFLLEVBQUVDLE9BQU87K0JBQUtDLFVBQVUsQ0FBQ0MsV0FBVyxDQUFDRyxLQUFXLFlBQUEsQ0FBQztxQkFBQTttQkFBRSxVQUU5RSxDQUFhLENBQ1YsQ0FDRixDQUNELENBRU47YUFDSDs7OztDQVdGLENBdkN3Q0MsUUFBTyxRQUFBLENBdUMvQztBQVRDLGdCQTlCbUJmLFdBQVcsRUE4QnZCZ0IsS0FBRyxFQUFHQyxLQUFPLFFBQUEsQ0FBQztBQUVyQixnQkFoQ21CakIsV0FBVyxFQWdDdkJrQixNQUFJLEVBQUdDLE1BQVEsU0FBQSxDQUFDO0FBRXZCLGdCQWxDbUJuQixXQUFXLEVBa0N2Qm9CLE9BQUssRUFBRyxNQUFNLENBQUM7QUFFdEIsZ0JBcENtQnBCLFdBQVcsRUFvQ3ZCcUIsbUJBQWlCLEVBQUc7SUFDekJDLFNBQVMsRUFBRSxNQUFNO0NBQ2xCLENBQUMifQ==