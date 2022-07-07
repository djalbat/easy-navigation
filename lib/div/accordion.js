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
var _easyWithStyle = /*#__PURE__*/ _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _constants = require("../constants");
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
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
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
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  overflow: hidden;\n\n  display: block;\n  \n  .collapsed {\n    display: none;\n  }\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var AccordionDiv = /*#__PURE__*/ function(Element) {
    _inherits(AccordionDiv, Element);
    var _super = _createSuper(AccordionDiv);
    function AccordionDiv() {
        _classCallCheck(this, AccordionDiv);
        return _super.apply(this, arguments);
    }
    _createClass(AccordionDiv, [
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
                height = _get(_getPrototypeOf(AccordionDiv.prototype), "getHeight", this).call(this);
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
                var context = this.getContext(), resizeDiv = this.resize.bind(this), expandDiv = this.expand.bind(this), collapseDiv = this.collapse.bind(this), isCollapsed = this.isCollapsed.bind(this), getDivHeight = this.getHeight.bind(this), parentContext1 = Object.assign({}, context, {
                    resizeDiv: resizeDiv,
                    expandDiv: expandDiv,
                    collapseDiv: collapseDiv,
                    isCollapsed: isCollapsed,
                    getDivHeight: getDivHeight
                });
                return parentContext1;
            }
        }
    ]);
    return AccordionDiv;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(AccordionDiv, "tagName", "div");
_defineProperty(AccordionDiv, "defaultProperties", {
    className: "accordion"
});
var _default = (0, _easyWithStyle.default)(AccordionDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvYWNjb3JkaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHsgQVVUTywgQUNDT1JESU9OX1NDQUxFX0ZBQ1RPUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY2xhc3MgQWNjb3JkaW9uRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGV4cGFuZChpbml0aWFsSGVpZ2h0LCBpbnN0YW50bHkpIHtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpLFxuICAgICAgICAgIGZpbmFsSGVpZ2h0ID0gaGVpZ2h0OyAvLy9cblxuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJjb2xsYXBzZWRcIik7XG5cbiAgICB0aGlzLnJlc2l6ZShpbml0aWFsSGVpZ2h0LCBmaW5hbEhlaWdodCwgaW5zdGFudGx5KTtcbiAgfVxuXG4gIGNvbGxhcHNlKGluc3RhbnRseSwgZG9uZSkge1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgZmluYWxIZWlnaHQgPSAwLFxuICAgICAgICAgIGluaXRpYWxIZWlnaHQgPSBoZWlnaHQ7IC8vL1xuXG4gICAgdGhpcy5yZXNpemUoaW5pdGlhbEhlaWdodCwgZmluYWxIZWlnaHQsIGluc3RhbnRseSwgKCkgPT4ge1xuICAgICAgdGhpcy5hZGRDbGFzcyhcImNvbGxhcHNlZFwiKTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGxldCBoZWlnaHQ7XG5cbiAgICBjb25zdCBkaXNwbGF5ID0gdGhpcy5zdHlsZShcImRpc3BsYXlcIik7XG5cbiAgICB0aGlzLnNob3coKTtcblxuICAgIGhlaWdodCA9IHN1cGVyLmdldEhlaWdodCgpO1xuXG4gICAgdGhpcy5kaXNwbGF5KGRpc3BsYXkpO1xuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIGlzQ29sbGFwc2VkKCkge1xuICAgIGNvbnN0IGNvbGxhcHNlZCA9IHRoaXMuaGFzQ2xhc3MoXCJjb2xsYXBzZWRcIik7XG5cbiAgICByZXR1cm4gY29sbGFwc2VkO1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkge1xuICAgIGhlaWdodCA9IChoZWlnaHQgPT09IEFVVE8pID9cbiAgICAgIGhlaWdodCA6XG4gICAgICBgJHtoZWlnaHR9cHhgOyAvLy9cblxuICAgIHRoaXMuc3R5bGUoXCJoZWlnaHRcIiwgaGVpZ2h0KTtcbiAgfVxuXG4gIHJlc2l6ZShpbml0aWFsSGVpZ2h0LCBmaW5hbEhlaWdodCwgaW5zdGFudGx5LCBkb25lKSB7XG4gICAgaWYgKGluc3RhbnRseSkge1xuICAgICAgZG9uZSAmJiBkb25lKCk7IC8vL1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW5pdGlhbFRpbWUgPSBEYXRlLm5vdygpO1xuXG4gICAgdGhpcy5hbmltYXRlKGluaXRpYWxUaW1lLCBpbml0aWFsSGVpZ2h0LCBmaW5hbEhlaWdodCwgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRIZWlnaHQoQVVUTyk7XG5cbiAgICAgIGRvbmUgJiYgZG9uZSgpOyAvLy9cbiAgICB9KTtcbiAgfVxuXG4gIGFuaW1hdGUoaW5pdGlhbFRpbWUsIGluaXRpYWxIZWlnaHQsIGZpbmFsSGVpZ2h0LCBkb25lKSB7XG4gICAgY29uc3QgY3VycmVudFRpbWUgPSBEYXRlLm5vdygpLCAvLy9cbiAgICAgICAgICBlbGFwc2VkVGltZSA9IGN1cnJlbnRUaW1lIC0gaW5pdGlhbFRpbWUsXG4gICAgICAgICAgc2NhbGUgPSBlbGFwc2VkVGltZSAvIEFDQ09SRElPTl9TQ0FMRV9GQUNUT1IsXG4gICAgICAgICAgY29tcGxldGVkID0gKHNjYWxlID4gMSk7XG5cbiAgICBpZiAoY29tcGxldGVkKSB7XG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBoZWlnaHREaWZmZXJlbmNlID0gKGZpbmFsSGVpZ2h0IC0gaW5pdGlhbEhlaWdodCksXG4gICAgICAgICAgaGVpZ2h0ID0gaW5pdGlhbEhlaWdodCArIHNjYWxlICogaGVpZ2h0RGlmZmVyZW5jZTtcblxuICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5hbmltYXRlKGluaXRpYWxUaW1lLCBpbml0aWFsSGVpZ2h0LCBmaW5hbEhlaWdodCwgZG9uZSk7XG4gICAgfSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICByZXNpemVEaXYgPSB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBleHBhbmREaXYgPSB0aGlzLmV4cGFuZC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBjb2xsYXBzZURpdiA9IHRoaXMuY29sbGFwc2UuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgaXNDb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkLmJpbmQodGhpcyksXG4gICAgICAgICAgZ2V0RGl2SGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQuYmluZCh0aGlzKSxcbiAgICAgICAgICBwYXJlbnRDb250ZXh0ID0gT2JqZWN0LmFzc2lnbih7fSwgY29udGV4dCwge1xuICAgICAgICAgICAgcmVzaXplRGl2LFxuICAgICAgICAgICAgZXhwYW5kRGl2LFxuICAgICAgICAgICAgY29sbGFwc2VEaXYsXG4gICAgICAgICAgICBpc0NvbGxhcHNlZCxcbiAgICAgICAgICAgIGdldERpdkhlaWdodFxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhcmVudENvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJhY2NvcmRpb25cIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQWNjb3JkaW9uRGl2KWBcblxuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBcbiAgLmNvbGxhcHNlZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbmA7XG4iXSwibmFtZXMiOlsiQWNjb3JkaW9uRGl2IiwiZXhwYW5kIiwiaW5pdGlhbEhlaWdodCIsImluc3RhbnRseSIsImhlaWdodCIsImdldEhlaWdodCIsImZpbmFsSGVpZ2h0IiwicmVtb3ZlQ2xhc3MiLCJyZXNpemUiLCJjb2xsYXBzZSIsImRvbmUiLCJhZGRDbGFzcyIsImRpc3BsYXkiLCJzdHlsZSIsInNob3ciLCJpc0NvbGxhcHNlZCIsImNvbGxhcHNlZCIsImhhc0NsYXNzIiwic2V0SGVpZ2h0IiwiQVVUTyIsImluaXRpYWxUaW1lIiwiRGF0ZSIsIm5vdyIsImFuaW1hdGUiLCJjdXJyZW50VGltZSIsImVsYXBzZWRUaW1lIiwic2NhbGUiLCJBQ0NPUkRJT05fU0NBTEVfRkFDVE9SIiwiY29tcGxldGVkIiwiaGVpZ2h0RGlmZmVyZW5jZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInBhcmVudENvbnRleHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsInJlc2l6ZURpdiIsImJpbmQiLCJleHBhbmREaXYiLCJjb2xsYXBzZURpdiIsImdldERpdkhlaWdodCIsIk9iamVjdCIsImFzc2lnbiIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7OztrRUFFUyxpQkFBaUI7b0JBRWYsTUFBTTt5QkFFZSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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