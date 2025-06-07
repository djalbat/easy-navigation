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
var _sufficient = require("sufficient");
var _accordion = /*#__PURE__*/ _interop_require_default(require("./accordion"));
var _articlesArray = /*#__PURE__*/ _interop_require_default(require("./articlesArray"));
var _accordion1 = /*#__PURE__*/ _interop_require_default(require("./navigation/accordion"));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
function _templateObject() {
    var data = _tagged_template_literal([
        '\n\n  display: block;\n  \n  @media (min-width: 800px) {\n\n    display: grid;\n    \n    column-gap: 2rem;\n    grid-template-rows: 1fr;\n    grid-template-areas: "accordion-navigation accordion";\n    grid-template-columns: 20rem auto;\n\n  }\n\n'
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    function View() {
        _class_call_check(this, View);
        return _call_super(this, View, arguments);
    }
    _create_class(View, [
        {
            key: "showArticle",
            value: function showArticle(uri, instantly) {
                this.updateAccordion(uri, instantly);
                this.updateAccordionNavigation(uri);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var showArticle = function(uri) {
                    return _sufficient.controller.showArticle(uri);
                };
                return [
                    /*#__PURE__*/ React.createElement(_accordion.default, {
                        ArticlesArray: _articlesArray.default,
                        showArticle: showArticle
                    }),
                    /*#__PURE__*/ React.createElement(_accordion1.default, {
                        ArticlesArray: _articlesArray.default,
                        showArticle: showArticle
                    })
                ];
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgY29udHJvbGxlciB9IGZyb20gXCJzdWZmaWNpZW50XCI7XG5cbmltcG9ydCBBY2NvcmRpb24gZnJvbSBcIi4vYWNjb3JkaW9uXCI7XG5pbXBvcnQgQXJ0aWNsZXNBcnJheSBmcm9tIFwiLi9hcnRpY2xlc0FycmF5XCI7XG5pbXBvcnQgQWNjb3JkaW9uTmF2aWdhdGlvbiBmcm9tIFwiLi9uYXZpZ2F0aW9uL2FjY29yZGlvblwiO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIHNob3dBcnRpY2xlKHVyaSwgaW5zdGFudGx5KSB7XG4gICAgdGhpcy51cGRhdGVBY2NvcmRpb24odXJpLCBpbnN0YW50bHkpO1xuXG4gICAgdGhpcy51cGRhdGVBY2NvcmRpb25OYXZpZ2F0aW9uKHVyaSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHNob3dBcnRpY2xlID0gKHVyaSkgPT4gY29udHJvbGxlci5zaG93QXJ0aWNsZSh1cmkpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxBY2NvcmRpb24gQXJ0aWNsZXNBcnJheT17QXJ0aWNsZXNBcnJheX0gc2hvd0FydGljbGU9e3Nob3dBcnRpY2xlfSAvPixcbiAgICAgIDxBY2NvcmRpb25OYXZpZ2F0aW9uIEFydGljbGVzQXJyYXk9e0FydGljbGVzQXJyYXl9IHNob3dBcnRpY2xlPXtzaG93QXJ0aWNsZX0gLz5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgZGlzcGxheTogYmxvY2s7XG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgXG4gICAgY29sdW1uLWdhcDogMnJlbTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImFjY29yZGlvbi1uYXZpZ2F0aW9uIGFjY29yZGlvblwiO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjByZW0gYXV0bztcblxuICB9XG5cbmA7XG4iXSwibmFtZXMiOlsiVmlldyIsInNob3dBcnRpY2xlIiwidXJpIiwiaW5zdGFudGx5IiwidXBkYXRlQWNjb3JkaW9uIiwidXBkYXRlQWNjb3JkaW9uTmF2aWdhdGlvbiIsImNoaWxkRWxlbWVudHMiLCJjb250cm9sbGVyIiwiQWNjb3JkaW9uIiwiQXJ0aWNsZXNBcnJheSIsIkFjY29yZGlvbk5hdmlnYXRpb24iLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXdDQTs7O2VBQUE7OztvRUF0Q3NCO29CQUVFOzBCQUNHO2dFQUVMO29FQUNJO2lFQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhDLElBQUEsQUFBTUEscUJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlDLEdBQUcsRUFBRUMsU0FBUztnQkFDeEIsSUFBSSxDQUFDQyxlQUFlLENBQUNGLEtBQUtDO2dCQUUxQixJQUFJLENBQUNFLHlCQUF5QixDQUFDSDtZQUNqQzs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNTCxjQUFjLFNBQUNDOzJCQUFRSyxzQkFBVSxDQUFDTixXQUFXLENBQUNDOztnQkFFcEQsT0FBUTtrQ0FFTixvQkFBQ00sa0JBQVM7d0JBQUNDLGVBQWVBLHNCQUFhO3dCQUFFUixhQUFhQTs7a0NBQ3RELG9CQUFDUyxtQkFBbUI7d0JBQUNELGVBQWVBLHNCQUFhO3dCQUFFUixhQUFhQTs7aUJBRWpFO1lBQ0g7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxhQUFhO1lBQ3BCOzs7V0FwQklaO3FCQUFhYSxhQUFPO0FBc0J4QixpQkF0QkliLE1Bc0JHYyxXQUFVO0FBRWpCLGlCQXhCSWQsTUF3QkdlLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ2pCIn0=