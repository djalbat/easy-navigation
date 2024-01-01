"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SectionsArticle;
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
var SectionsArticle = /*#__PURE__*/ function(Article) {
    _inherits(SectionsArticle, Article);
    var _super = _create_super(SectionsArticle);
    function SectionsArticle() {
        _class_call_check(this, SectionsArticle);
        return _super.apply(this, arguments);
    }
    _create_class(SectionsArticle, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("h1", null, "Sections"));
            }
        }
    ]);
    return SectionsArticle;
}(_article.default);
_define_property(SectionsArticle, "uri", _uris.sectionsURI);
_define_property(SectionsArticle, "path", _paths.sectionsPath);
_define_property(SectionsArticle, "title", "Sections");
_define_property(SectionsArticle, "defaultProperties", {
    className: "sections"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2FydGljbGUvc2VjdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBcnRpY2xlIGZyb20gXCIuLi9hcnRpY2xlXCI7XG5cbmltcG9ydCB7IHNlY3Rpb25zVVJJIH0gZnJvbSBcIi4uL3VyaXNcIjtcbmltcG9ydCB7IHNlY3Rpb25zUGF0aCB9IGZyb20gXCIuLi9wYXRoc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uc0FydGljbGUgZXh0ZW5kcyBBcnRpY2xlIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+XG4gICAgICAgICAgU2VjdGlvbnNcbiAgICAgICAgPC9oMT5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyB1cmkgPSBzZWN0aW9uc1VSSTtcblxuICBzdGF0aWMgcGF0aCA9IHNlY3Rpb25zUGF0aDtcblxuICBzdGF0aWMgdGl0bGUgPSBcIlNlY3Rpb25zXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJzZWN0aW9uc1wiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiU2VjdGlvbnNBcnRpY2xlIiwiY2hpbGRFbGVtZW50cyIsImRpdiIsImgxIiwiQXJ0aWNsZSIsInVyaSIsInNlY3Rpb25zVVJJIiwicGF0aCIsInNlY3Rpb25zUGF0aCIsInRpdGxlIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OzhEQUxEO29CQUVRO3FCQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLElBQUEsQUFBTUEsZ0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLHFCQUVFLG9CQUFDQywyQkFDQyxvQkFBQ0MsWUFBRztZQU1WOzs7V0FYbUJIO0VBQXdCSSxnQkFBTztBQWFsRCxpQkFibUJKLGlCQWFaSyxPQUFNQyxpQkFBVztBQUV4QixpQkFmbUJOLGlCQWVaTyxRQUFPQyxtQkFBWTtBQUUxQixpQkFqQm1CUixpQkFpQlpTLFNBQVE7QUFFZixpQkFuQm1CVCxpQkFtQlpVLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=