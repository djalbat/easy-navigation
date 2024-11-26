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
var _constants = require("../constants");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
        "\n\n  overflow: hidden;\n\n  display: block;\n  \n  .collapsed {\n    display: none;\n  }\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var AccordionDiv = /*#__PURE__*/ function(Element) {
    _inherits(AccordionDiv, Element);
    function AccordionDiv() {
        _class_call_check(this, AccordionDiv);
        return _call_super(this, AccordionDiv, arguments);
    }
    _create_class(AccordionDiv, [
        {
            key: "expand",
            value: function expand(initialHeight, instantly) {
                var height = this.getHeight(), finalHeight = height; ///
                this.removeClass("collapsed");
                this.resize(initialHeight, finalHeight, instantly);
            }
        },
        {
            key: "collapse",
            value: function collapse(instantly, done) {
                var _this = this;
                var height = this.getHeight(), finalHeight = 0, initialHeight = height; ///
                this.resize(initialHeight, finalHeight, instantly, function() {
                    _this.addClass("collapsed");
                    done();
                });
            }
        },
        {
            key: "getHeight",
            value: function getHeight() {
                var height;
                var display = this.style("display");
                this.show();
                height = _get(_get_prototype_of(AccordionDiv.prototype), "getHeight", this).call(this);
                this.display(display);
                return height;
            }
        },
        {
            key: "isCollapsed",
            value: function isCollapsed() {
                var collapsed = this.hasClass("collapsed");
                return collapsed;
            }
        },
        {
            key: "setHeight",
            value: function setHeight(height) {
                height = height === _constants.AUTO ? height : "".concat(height, "px"); ///
                this.style("height", height);
            }
        },
        {
            key: "resize",
            value: function resize(initialHeight, finalHeight, instantly, done) {
                var _this = this;
                if (instantly) {
                    done && done(); ///
                    return;
                }
                var initialTime = Date.now();
                this.animate(initialTime, initialHeight, finalHeight, function() {
                    _this.setHeight(_constants.AUTO);
                    done && done(); ///
                });
            }
        },
        {
            key: "animate",
            value: function animate(initialTime, initialHeight, finalHeight, done) {
                var _this = this;
                var currentTime = Date.now(), elapsedTime = currentTime - initialTime, scale = elapsedTime / _constants.ACCORDION_SCALE_FACTOR, completed = scale > 1;
                if (completed) {
                    done();
                    return;
                }
                var heightDifference = finalHeight - initialHeight, height = initialHeight + scale * heightDifference;
                this.setHeight(height);
                requestAnimationFrame(function() {
                    _this.animate(initialTime, initialHeight, finalHeight, done);
                });
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var context = this.getContext(), resizeDiv = this.resize.bind(this), expandDiv = this.expand.bind(this), collapseDiv = this.collapse.bind(this), getDivHeight = this.getHeight.bind(this), isCollapsed = this.isCollapsed.bind(this);
                return _object_spread_props(_object_spread({}, context), {
                    resizeDiv: resizeDiv,
                    expandDiv: expandDiv,
                    collapseDiv: collapseDiv,
                    getDivHeight: getDivHeight,
                    isCollapsed: isCollapsed
                });
            }
        }
    ]);
    return AccordionDiv;
}(_wrap_native_super(_easy.Element));
_define_property(AccordionDiv, "tagName", "div");
_define_property(AccordionDiv, "defaultProperties", {
    className: "accordion"
});
var _default = (0, _easywithstyle.default)(AccordionDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvYWNjb3JkaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHsgQVVUTywgQUNDT1JESU9OX1NDQUxFX0ZBQ1RPUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY2xhc3MgQWNjb3JkaW9uRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGV4cGFuZChpbml0aWFsSGVpZ2h0LCBpbnN0YW50bHkpIHtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpLFxuICAgICAgICAgIGZpbmFsSGVpZ2h0ID0gaGVpZ2h0OyAvLy9cblxuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJjb2xsYXBzZWRcIik7XG5cbiAgICB0aGlzLnJlc2l6ZShpbml0aWFsSGVpZ2h0LCBmaW5hbEhlaWdodCwgaW5zdGFudGx5KTtcbiAgfVxuXG4gIGNvbGxhcHNlKGluc3RhbnRseSwgZG9uZSkge1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgZmluYWxIZWlnaHQgPSAwLFxuICAgICAgICAgIGluaXRpYWxIZWlnaHQgPSBoZWlnaHQ7IC8vL1xuXG4gICAgdGhpcy5yZXNpemUoaW5pdGlhbEhlaWdodCwgZmluYWxIZWlnaHQsIGluc3RhbnRseSwgKCkgPT4ge1xuICAgICAgdGhpcy5hZGRDbGFzcyhcImNvbGxhcHNlZFwiKTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGxldCBoZWlnaHQ7XG5cbiAgICBjb25zdCBkaXNwbGF5ID0gdGhpcy5zdHlsZShcImRpc3BsYXlcIik7XG5cbiAgICB0aGlzLnNob3coKTtcblxuICAgIGhlaWdodCA9IHN1cGVyLmdldEhlaWdodCgpO1xuXG4gICAgdGhpcy5kaXNwbGF5KGRpc3BsYXkpO1xuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIGlzQ29sbGFwc2VkKCkge1xuICAgIGNvbnN0IGNvbGxhcHNlZCA9IHRoaXMuaGFzQ2xhc3MoXCJjb2xsYXBzZWRcIik7XG5cbiAgICByZXR1cm4gY29sbGFwc2VkO1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkge1xuICAgIGhlaWdodCA9IChoZWlnaHQgPT09IEFVVE8pID9cbiAgICAgIGhlaWdodCA6XG4gICAgICBgJHtoZWlnaHR9cHhgOyAvLy9cblxuICAgIHRoaXMuc3R5bGUoXCJoZWlnaHRcIiwgaGVpZ2h0KTtcbiAgfVxuXG4gIHJlc2l6ZShpbml0aWFsSGVpZ2h0LCBmaW5hbEhlaWdodCwgaW5zdGFudGx5LCBkb25lKSB7XG4gICAgaWYgKGluc3RhbnRseSkge1xuICAgICAgZG9uZSAmJiBkb25lKCk7IC8vL1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW5pdGlhbFRpbWUgPSBEYXRlLm5vdygpO1xuXG4gICAgdGhpcy5hbmltYXRlKGluaXRpYWxUaW1lLCBpbml0aWFsSGVpZ2h0LCBmaW5hbEhlaWdodCwgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRIZWlnaHQoQVVUTyk7XG5cbiAgICAgIGRvbmUgJiYgZG9uZSgpOyAvLy9cbiAgICB9KTtcbiAgfVxuXG4gIGFuaW1hdGUoaW5pdGlhbFRpbWUsIGluaXRpYWxIZWlnaHQsIGZpbmFsSGVpZ2h0LCBkb25lKSB7XG4gICAgY29uc3QgY3VycmVudFRpbWUgPSBEYXRlLm5vdygpLCAvLy9cbiAgICAgICAgICBlbGFwc2VkVGltZSA9IGN1cnJlbnRUaW1lIC0gaW5pdGlhbFRpbWUsXG4gICAgICAgICAgc2NhbGUgPSBlbGFwc2VkVGltZSAvIEFDQ09SRElPTl9TQ0FMRV9GQUNUT1IsXG4gICAgICAgICAgY29tcGxldGVkID0gKHNjYWxlID4gMSk7XG5cbiAgICBpZiAoY29tcGxldGVkKSB7XG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBoZWlnaHREaWZmZXJlbmNlID0gKGZpbmFsSGVpZ2h0IC0gaW5pdGlhbEhlaWdodCksXG4gICAgICAgICAgaGVpZ2h0ID0gaW5pdGlhbEhlaWdodCArIHNjYWxlICogaGVpZ2h0RGlmZmVyZW5jZTtcblxuICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5hbmltYXRlKGluaXRpYWxUaW1lLCBpbml0aWFsSGVpZ2h0LCBmaW5hbEhlaWdodCwgZG9uZSk7XG4gICAgfSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICByZXNpemVEaXYgPSB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBleHBhbmREaXYgPSB0aGlzLmV4cGFuZC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBjb2xsYXBzZURpdiA9IHRoaXMuY29sbGFwc2UuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgZ2V0RGl2SGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgaXNDb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIC4uLmNvbnRleHQsXG4gICAgICByZXNpemVEaXYsXG4gICAgICBleHBhbmREaXYsXG4gICAgICBjb2xsYXBzZURpdixcbiAgICAgIGdldERpdkhlaWdodCxcbiAgICAgIGlzQ29sbGFwc2VkXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJhY2NvcmRpb25cIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQWNjb3JkaW9uRGl2KWBcblxuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBcbiAgLmNvbGxhcHNlZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbmA7XG4iXSwibmFtZXMiOlsiQWNjb3JkaW9uRGl2IiwiZXhwYW5kIiwiaW5pdGlhbEhlaWdodCIsImluc3RhbnRseSIsImhlaWdodCIsImdldEhlaWdodCIsImZpbmFsSGVpZ2h0IiwicmVtb3ZlQ2xhc3MiLCJyZXNpemUiLCJjb2xsYXBzZSIsImRvbmUiLCJhZGRDbGFzcyIsImRpc3BsYXkiLCJzdHlsZSIsInNob3ciLCJpc0NvbGxhcHNlZCIsImNvbGxhcHNlZCIsImhhc0NsYXNzIiwic2V0SGVpZ2h0IiwiQVVUTyIsImluaXRpYWxUaW1lIiwiRGF0ZSIsIm5vdyIsImFuaW1hdGUiLCJjdXJyZW50VGltZSIsImVsYXBzZWRUaW1lIiwic2NhbGUiLCJBQ0NPUkRJT05fU0NBTEVfRkFDVE9SIiwiY29tcGxldGVkIiwiaGVpZ2h0RGlmZmVyZW5jZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInBhcmVudENvbnRleHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsInJlc2l6ZURpdiIsImJpbmQiLCJleHBhbmREaXYiLCJjb2xsYXBzZURpdiIsImdldERpdkhlaWdodCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXlIQTs7O2VBQUE7OztvRUF2SHNCO29CQUVFO3lCQUVxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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