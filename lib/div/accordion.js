"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
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
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
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
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
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
                height = height === "auto" ? height : "".concat(height, "px"); ///
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
                    _this.setHeight("auto");
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
                var context = this.getContext(), resizeDiv = this.resize.bind(this), expandDiv = this.expand.bind(this), collapseDiv = this.collapse.bind(this), isCollapsed = this.isCollapsed.bind(this), getDivHeight = this.getHeight.bind(this), parentContext1 = Object.assign({
                }, context, {
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
var _default = (0, _easyWithStyle).default(AccordionDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvYWNjb3JkaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHsgQUNDT1JESU9OX1NDQUxFX0ZBQ1RPUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY2xhc3MgQWNjb3JkaW9uRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGV4cGFuZChpbml0aWFsSGVpZ2h0LCBpbnN0YW50bHkpIHtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpLFxuICAgICAgICAgIGZpbmFsSGVpZ2h0ID0gaGVpZ2h0OyAvLy9cblxuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJjb2xsYXBzZWRcIik7XG5cbiAgICB0aGlzLnJlc2l6ZShpbml0aWFsSGVpZ2h0LCBmaW5hbEhlaWdodCwgaW5zdGFudGx5KTtcbiAgfVxuXG4gIGNvbGxhcHNlKGluc3RhbnRseSwgZG9uZSkge1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgZmluYWxIZWlnaHQgPSAwLFxuICAgICAgICAgIGluaXRpYWxIZWlnaHQgPSBoZWlnaHQ7IC8vL1xuXG4gICAgdGhpcy5yZXNpemUoaW5pdGlhbEhlaWdodCwgZmluYWxIZWlnaHQsIGluc3RhbnRseSwgKCkgPT4ge1xuICAgICAgdGhpcy5hZGRDbGFzcyhcImNvbGxhcHNlZFwiKTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGxldCBoZWlnaHQ7XG5cbiAgICBjb25zdCBkaXNwbGF5ID0gdGhpcy5zdHlsZShcImRpc3BsYXlcIik7XG5cbiAgICB0aGlzLnNob3coKTtcblxuICAgIGhlaWdodCA9IHN1cGVyLmdldEhlaWdodCgpO1xuXG4gICAgdGhpcy5kaXNwbGF5KGRpc3BsYXkpO1xuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIGlzQ29sbGFwc2VkKCkge1xuICAgIGNvbnN0IGNvbGxhcHNlZCA9IHRoaXMuaGFzQ2xhc3MoXCJjb2xsYXBzZWRcIik7XG5cbiAgICByZXR1cm4gY29sbGFwc2VkO1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkge1xuICAgIGhlaWdodCA9IChoZWlnaHQgPT09IFwiYXV0b1wiKSA/XG4gICAgICBoZWlnaHQgOlxuICAgICAgYCR7aGVpZ2h0fXB4YDsgLy8vXG5cbiAgICB0aGlzLnN0eWxlKFwiaGVpZ2h0XCIsIGhlaWdodCk7XG4gIH1cblxuICByZXNpemUoaW5pdGlhbEhlaWdodCwgZmluYWxIZWlnaHQsIGluc3RhbnRseSwgZG9uZSkge1xuICAgIGlmIChpbnN0YW50bHkpIHtcbiAgICAgIGRvbmUgJiYgZG9uZSgpOyAvLy9cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGluaXRpYWxUaW1lID0gRGF0ZS5ub3coKTtcblxuICAgIHRoaXMuYW5pbWF0ZShpbml0aWFsVGltZSwgaW5pdGlhbEhlaWdodCwgZmluYWxIZWlnaHQsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0SGVpZ2h0KFwiYXV0b1wiKTtcblxuICAgICAgZG9uZSAmJiBkb25lKCk7IC8vL1xuICAgIH0pO1xuICB9XG5cbiAgYW5pbWF0ZShpbml0aWFsVGltZSwgaW5pdGlhbEhlaWdodCwgZmluYWxIZWlnaHQsIGRvbmUpIHtcbiAgICBjb25zdCBjdXJyZW50VGltZSA9IERhdGUubm93KCksIC8vL1xuICAgICAgICAgIGVsYXBzZWRUaW1lID0gY3VycmVudFRpbWUgLSBpbml0aWFsVGltZSxcbiAgICAgICAgICBzY2FsZSA9IGVsYXBzZWRUaW1lIC8gQUNDT1JESU9OX1NDQUxFX0ZBQ1RPUixcbiAgICAgICAgICBjb21wbGV0ZWQgPSAoc2NhbGUgPiAxKTtcblxuICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGhlaWdodERpZmZlcmVuY2UgPSAoZmluYWxIZWlnaHQgLSBpbml0aWFsSGVpZ2h0KSxcbiAgICAgICAgICBoZWlnaHQgPSBpbml0aWFsSGVpZ2h0ICsgc2NhbGUgKiBoZWlnaHREaWZmZXJlbmNlO1xuXG4gICAgdGhpcy5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLmFuaW1hdGUoaW5pdGlhbFRpbWUsIGluaXRpYWxIZWlnaHQsIGZpbmFsSGVpZ2h0LCBkb25lKTtcbiAgICB9KTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJlc2l6ZURpdiA9IHRoaXMucmVzaXplLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGV4cGFuZERpdiA9IHRoaXMuZXhwYW5kLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGNvbGxhcHNlRGl2ID0gdGhpcy5jb2xsYXBzZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBpc0NvbGxhcHNlZCA9IHRoaXMuaXNDb2xsYXBzZWQuYmluZCh0aGlzKSxcbiAgICAgICAgICBnZXREaXZIZWlnaHQgPSB0aGlzLmdldEhlaWdodC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHBhcmVudENvbnRleHQgPSBPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LCB7XG4gICAgICAgICAgICByZXNpemVEaXYsXG4gICAgICAgICAgICBleHBhbmREaXYsXG4gICAgICAgICAgICBjb2xsYXBzZURpdixcbiAgICAgICAgICAgIGlzQ29sbGFwc2VkLFxuICAgICAgICAgICAgZ2V0RGl2SGVpZ2h0XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcGFyZW50Q29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImFjY29yZGlvblwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShBY2NvcmRpb25EaXYpYFxuXG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgZGlzcGxheTogYmxvY2s7XG4gIFxuICAuY29sbGFwc2VkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJBY2NvcmRpb25EaXYiLCJleHBhbmQiLCJpbml0aWFsSGVpZ2h0IiwiaW5zdGFudGx5IiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0IiwiZmluYWxIZWlnaHQiLCJyZW1vdmVDbGFzcyIsInJlc2l6ZSIsImNvbGxhcHNlIiwiZG9uZSIsImFkZENsYXNzIiwiZGlzcGxheSIsInN0eWxlIiwic2hvdyIsImlzQ29sbGFwc2VkIiwiY29sbGFwc2VkIiwiaGFzQ2xhc3MiLCJzZXRIZWlnaHQiLCJpbml0aWFsVGltZSIsIkRhdGUiLCJub3ciLCJhbmltYXRlIiwiY3VycmVudFRpbWUiLCJlbGFwc2VkVGltZSIsInNjYWxlIiwiY29tcGxldGVkIiwiaGVpZ2h0RGlmZmVyZW5jZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInBhcmVudENvbnRleHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsInJlc2l6ZURpdiIsImJpbmQiLCJleHBhbmREaXYiLCJjb2xsYXBzZURpdiIsImdldERpdkhlaWdodCIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFpQixDQUFqQixjQUFpQjtBQUVmLEdBQU0sQ0FBTixLQUFNO0FBRVMsR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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