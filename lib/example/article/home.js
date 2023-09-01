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
var _article = /*#__PURE__*/ _interop_require_default(require("../article"));
var _link = /*#__PURE__*/ _interop_require_default(require("../button/link"));
var _paths = require("../paths");
var _uris = require("../uris");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var HomeArticle = /*#__PURE__*/ function(Article) {
    _inherits(HomeArticle, Article);
    var _super = _create_super(HomeArticle);
    function HomeArticle() {
        _class_call_check(this, HomeArticle);
        return _super.apply(this, arguments);
    }
    _create_class(HomeArticle, [
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
_define_property(HomeArticle, "uri", _uris.homeURI);
_define_property(HomeArticle, "path", _paths.homePath);
_define_property(HomeArticle, "title", "Home");
_define_property(HomeArticle, "defaultProperties", {
    className: "home"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2FydGljbGUvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEFydGljbGUgZnJvbSBcIi4uL2FydGljbGVcIjtcblxuaW1wb3J0IExpbmtCdXR0b24gZnJvbSBcIi4uL2J1dHRvbi9saW5rXCI7XG5cbmltcG9ydCB7IGhvbWVQYXRoIH0gZnJvbSBcIi4uL3BhdGhzXCI7XG5pbXBvcnQgeyBob21lVVJJLCBsaW5rc1VSSSwgYnV0dG9uc1VSSSwgaGVhZGluZ3NVUkkgfSBmcm9tIFwiLi4vdXJpc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lQXJ0aWNsZSBleHRlbmRzIEFydGljbGUge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5cbiAgICAgICAgICBIb21lXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGlua0J1dHRvbiBvbkNsaWNrPXsoZXZlbnQsIGVsZW1lbnQpID0+IGNvbnRyb2xsZXIuc2hvd0FydGljbGUobGlua3NVUkkpfT5cbiAgICAgICAgICAgICAgTGlua3NcbiAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rQnV0dG9uIG9uQ2xpY2s9eyhldmVudCwgZWxlbWVudCkgPT4gY29udHJvbGxlci5zaG93QXJ0aWNsZShidXR0b25zVVJJKX0+XG4gICAgICAgICAgICAgIEJ1dHRvbnNcbiAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rQnV0dG9uIG9uQ2xpY2s9eyhldmVudCwgZWxlbWVudCkgPT4gY29udHJvbGxlci5zaG93QXJ0aWNsZShoZWFkaW5nc1VSSSl9PlxuICAgICAgICAgICAgICBIZWFkaW5nc1xuICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgdXJpID0gaG9tZVVSSTtcblxuICBzdGF0aWMgcGF0aCA9IGhvbWVQYXRoO1xuXG4gIHN0YXRpYyB0aXRsZSA9IFwiSG9tZVwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiaG9tZVwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiSG9tZUFydGljbGUiLCJjaGlsZEVsZW1lbnRzIiwiZGl2IiwiaDEiLCJ1bCIsImxpIiwiTGlua0J1dHRvbiIsIm9uQ2xpY2siLCJldmVudCIsImVsZW1lbnQiLCJjb250cm9sbGVyIiwic2hvd0FydGljbGUiLCJsaW5rc1VSSSIsImJ1dHRvbnNVUkkiLCJoZWFkaW5nc1VSSSIsIkFydGljbGUiLCJ1cmkiLCJob21lVVJJIiwicGF0aCIsImhvbWVQYXRoIiwidGl0bGUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7OERBUEQ7MkRBRUc7cUJBRUU7b0JBQ2tDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QyxJQUFBLEFBQU1BLDRCQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UscUJBRUUsb0JBQUNDLDJCQUNDLG9CQUFDQyxZQUFHLHVCQUdKLG9CQUFDQywwQkFDQyxvQkFBQ0MsMEJBQ0Msb0JBQUNDLGFBQVU7b0JBQUNDLFNBQVMsU0FBQ0MsT0FBT0M7K0JBQVlDLFdBQVdDLFdBQVcsQ0FBQ0MsY0FBUTs7bUJBQUcseUJBSTdFLG9CQUFDUCwwQkFDQyxvQkFBQ0MsYUFBVTtvQkFBQ0MsU0FBUyxTQUFDQyxPQUFPQzsrQkFBWUMsV0FBV0MsV0FBVyxDQUFDRSxnQkFBVTs7bUJBQUcsMkJBSS9FLG9CQUFDUiwwQkFDQyxvQkFBQ0MsYUFBVTtvQkFBQ0MsU0FBUyxTQUFDQyxPQUFPQzsrQkFBWUMsV0FBV0MsV0FBVyxDQUFDRyxpQkFBVzs7bUJBQUc7WUFReEY7OztXQTVCbUJkO0VBQW9CZSxnQkFBTztBQThCOUMsaUJBOUJtQmYsYUE4QlpnQixPQUFNQyxhQUFPO0FBRXBCLGlCQWhDbUJqQixhQWdDWmtCLFFBQU9DLGVBQVE7QUFFdEIsaUJBbENtQm5CLGFBa0Nab0IsU0FBUTtBQUVmLGlCQXBDbUJwQixhQW9DWnFCLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=