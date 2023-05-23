"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _accordion = /*#__PURE__*/ _interop_require_default(require("../../button/navigation/accordion"));
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
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
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  height: 4rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var AccordionNavigationItem = /*#__PURE__*/ function(Element) {
    _inherits(AccordionNavigationItem, Element);
    var _super = _create_super(AccordionNavigationItem);
    function AccordionNavigationItem() {
        _class_call_check(this, AccordionNavigationItem);
        return _super.apply(this, arguments);
    }
    _create_class(AccordionNavigationItem, [
        {
            key: "childElements",
            value: function childElements() {
                var _this_properties = this.properties, Articles = _this_properties.Articles, first = _this_properties.first, last = _this_properties.last, showArticle = _this_properties.showArticle, _$AccordionNavigationButton = this.constructor.AccordionNavigationButton, _Articles = _sliced_to_array(Articles, 1), Article = _Articles[0];
                return /*#__PURE__*/ React.createElement(_$AccordionNavigationButton, {
                    Article: Article,
                    first: first,
                    last: last,
                    showArticle: showArticle
                });
            }
        }
    ]);
    return AccordionNavigationItem;
}(_wrap_native_super(_easy.Element));
_define_property(AccordionNavigationItem, "AccordionNavigationButton", _accordion.default);
_define_property(AccordionNavigationItem, "tagName", "li");
_define_property(AccordionNavigationItem, "defaultProperties", {
    className: "accordion-navigation"
});
var _default = (0, _easywithstyle.default)(AccordionNavigationItem)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL25hdmlnYXRpb24vYWNjb3JkaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IEFjY29yZGlvbk5hdmlnYXRpb25CdXR0b24gZnJvbSBcIi4uLy4uL2J1dHRvbi9uYXZpZ2F0aW9uL2FjY29yZGlvblwiO1xuXG5jbGFzcyBBY2NvcmRpb25OYXZpZ2F0aW9uSXRlbSBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgQXJ0aWNsZXMsIGZpcnN0LCBsYXN0LCBzaG93QXJ0aWNsZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIHsgQWNjb3JkaW9uTmF2aWdhdGlvbkJ1dHRvbiB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBbIEFydGljbGUgXSA9IEFydGljbGVzO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPEFjY29yZGlvbk5hdmlnYXRpb25CdXR0b24gQXJ0aWNsZT17QXJ0aWNsZX0gZmlyc3Q9e2ZpcnN0fSBsYXN0PXtsYXN0fSBzaG93QXJ0aWNsZT17c2hvd0FydGljbGV9IC8+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIEFjY29yZGlvbk5hdmlnYXRpb25CdXR0b24gPSBBY2NvcmRpb25OYXZpZ2F0aW9uQnV0dG9uO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJsaVwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYWNjb3JkaW9uLW5hdmlnYXRpb25cIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQWNjb3JkaW9uTmF2aWdhdGlvbkl0ZW0pYFxuXG4gIGhlaWdodDogNHJlbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIkFjY29yZGlvbk5hdmlnYXRpb25JdGVtIiwiY2hpbGRFbGVtZW50cyIsInByb3BlcnRpZXMiLCJBcnRpY2xlcyIsImZpcnN0IiwibGFzdCIsInNob3dBcnRpY2xlIiwiQWNjb3JkaW9uTmF2aWdhdGlvbkJ1dHRvbiIsImNvbnN0cnVjdG9yIiwiQXJ0aWNsZSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQThCQTs7O2VBQUE7OztvRUE1QnNCO29CQUVFO2dFQUVjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFBLEFBQU1BLHdDQXNCSCxBQXRCSDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBK0MsbUJBQUEsSUFBSSxDQUFDQyxZQUE1Q0MsV0FBdUMsaUJBQXZDQSxVQUFVQyxRQUE2QixpQkFBN0JBLE9BQU9DLE9BQXNCLGlCQUF0QkEsTUFBTUMsY0FBZ0IsaUJBQWhCQSxhQUN6QixBQUFFQyw4QkFBOEIsSUFBSSxDQUFDQyxZQUFuQ0QsMkJBQ1lKLDZCQUFBQSxjQUFaTSxVQUFZTjtnQkFFcEIscUJBRUUsb0JBQUNJO29CQUEwQkUsU0FBU0E7b0JBQVNMLE9BQU9BO29CQUFPQyxNQUFNQTtvQkFBTUMsYUFBYUE7O1lBR3hGOzs7V0FYSU47cUJBQWdDVTtBQWFwQyxpQkFiSVYseUJBYUdPLDZCQUE0QkE7QUFFbkMsaUJBZklQLHlCQWVHVyxXQUFVO0FBRWpCLGlCQWpCSVgseUJBaUJHWSxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHdCQUFVZCJ9