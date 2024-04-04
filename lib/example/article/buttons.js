"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ButtonsArticle;
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
var ButtonsArticle = /*#__PURE__*/ function(Article) {
    _inherits(ButtonsArticle, Article);
    var _super = _create_super(ButtonsArticle);
    function ButtonsArticle() {
        _class_call_check(this, ButtonsArticle);
        return _super.apply(this, arguments);
    }
    _create_class(ButtonsArticle, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("h1", null, "Buttons"));
            }
        }
    ]);
    return ButtonsArticle;
}(_article.default);
_define_property(ButtonsArticle, "uri", _uris.buttonsURI);
_define_property(ButtonsArticle, "path", _paths.buttonsPath);
_define_property(ButtonsArticle, "title", "Buttons");
_define_property(ButtonsArticle, "defaultProperties", {
    className: "buttons"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2FydGljbGUvYnV0dG9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEFydGljbGUgZnJvbSBcIi4uL2FydGljbGVcIjtcblxuaW1wb3J0IHsgYnV0dG9uc1VSSSB9IGZyb20gXCIuLi91cmlzXCI7XG5pbXBvcnQgeyBidXR0b25zUGF0aCB9IGZyb20gXCIuLi9wYXRoc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b25zQXJ0aWNsZSBleHRlbmRzIEFydGljbGUge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5cbiAgICAgICAgICBCdXR0b25zXG4gICAgICAgIDwvaDE+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgdXJpID0gYnV0dG9uc1VSSTtcblxuICBzdGF0aWMgcGF0aCA9IGJ1dHRvbnNQYXRoO1xuXG4gIHN0YXRpYyB0aXRsZSA9IFwiQnV0dG9uc1wiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYnV0dG9uc1wiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiQnV0dG9uc0FydGljbGUiLCJjaGlsZEVsZW1lbnRzIiwiZGl2IiwiaDEiLCJBcnRpY2xlIiwidXJpIiwiYnV0dG9uc1VSSSIsInBhdGgiLCJidXR0b25zUGF0aCIsInRpdGxlIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7Ozs4REFMRDtvQkFFTztxQkFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFYixJQUFBLEFBQU1BLCtCQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxxQkFFRSxvQkFBQ0MsMkJBQ0Msb0JBQUNDLFlBQUc7WUFNVjs7O1dBWG1CSDtFQUF1QkksZ0JBQU87QUFhakQsaUJBYm1CSixnQkFhWkssT0FBTUMsZ0JBQVU7QUFFdkIsaUJBZm1CTixnQkFlWk8sUUFBT0Msa0JBQVc7QUFFekIsaUJBakJtQlIsZ0JBaUJaUyxTQUFRO0FBRWYsaUJBbkJtQlQsZ0JBbUJaVSxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9