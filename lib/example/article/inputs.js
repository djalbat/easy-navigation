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
var _article = /*#__PURE__*/ _interop_require_default(require("../article"));
var _uris = require("../uris");
var _paths = require("../paths");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var InputsArticle = /*#__PURE__*/ function(Article) {
    _inherits(InputsArticle, Article);
    function InputsArticle() {
        _class_call_check(this, InputsArticle);
        return _call_super(this, InputsArticle, arguments);
    }
    _create_class(InputsArticle, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("h1", null, "Inputs"));
            }
        }
    ]);
    return InputsArticle;
}(_article.default);
_define_property(InputsArticle, "uri", _uris.inputsURI);
_define_property(InputsArticle, "path", _paths.inputsPath);
_define_property(InputsArticle, "title", "Inputs");
_define_property(InputsArticle, "defaultProperties", {
    className: "inputs"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2FydGljbGUvaW5wdXRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXJ0aWNsZSBmcm9tIFwiLi4vYXJ0aWNsZVwiO1xuXG5pbXBvcnQgeyBpbnB1dHNVUkkgfSBmcm9tIFwiLi4vdXJpc1wiO1xuaW1wb3J0IHsgaW5wdXRzUGF0aCB9IGZyb20gXCIuLi9wYXRoc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dHNBcnRpY2xlIGV4dGVuZHMgQXJ0aWNsZSB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPlxuICAgICAgICAgIElucHV0c1xuICAgICAgICA8L2gxPlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIHVyaSA9IGlucHV0c1VSSTtcblxuICBzdGF0aWMgcGF0aCA9IGlucHV0c1BhdGg7XG5cbiAgc3RhdGljIHRpdGxlID0gXCJJbnB1dHNcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImlucHV0c1wiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiSW5wdXRzQXJ0aWNsZSIsImNoaWxkRWxlbWVudHMiLCJkaXYiLCJoMSIsIkFydGljbGUiLCJ1cmkiLCJpbnB1dHNVUkkiLCJwYXRoIiwiaW5wdXRzUGF0aCIsInRpdGxlIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OzhEQUxEO29CQUVNO3FCQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVaLElBQUEsQUFBTUEsOEJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UscUJBRUUsb0JBQUNDLDJCQUNDLG9CQUFDQyxZQUFHO1lBTVY7OztXQVhtQkg7RUFBc0JJLGdCQUFPO0FBYWhELGlCQWJtQkosZUFhWkssT0FBTUMsZUFBUztBQUV0QixpQkFmbUJOLGVBZVpPLFFBQU9DLGlCQUFVO0FBRXhCLGlCQWpCbUJSLGVBaUJaUyxTQUFRO0FBRWYsaUJBbkJtQlQsZUFtQlpVLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=