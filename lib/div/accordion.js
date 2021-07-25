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
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  overflow: hidden;\n\n  display: block;\n  \n  .collapsed {\n    display: none;\n  }\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var AccordionDiv = /*#__PURE__*/ function(Element1) {
    _inherits(AccordionDiv, Element1);
    function AccordionDiv() {
        _classCallCheck(this, AccordionDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(AccordionDiv).apply(this, arguments));
    }
    _createClass(AccordionDiv, [
        {
            key: "expand",
            value: function expand(initialHeight, instantly, callback) {
                var height = this.getHeight(), finalHeight = height; ///
                this.removeClass("collapsed");
                this.resize(initialHeight, finalHeight, instantly, callback);
            }
        },
        {
            key: "collapse",
            value: function collapse(instantly, done) {
                var height = this.getHeight(), finalHeight = 0, initialHeight = height, callback = (function() {
                    this.addClass("collapsed");
                    done();
                }).bind(this);
                this.resize(initialHeight, finalHeight, instantly, callback);
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
            value: function resize(initialHeight, finalHeight, instantly, callback) {
                if (instantly) {
                    callback && callback();
                    return;
                }
                var initialTime = Date.now();
                this.animate(initialTime, initialHeight, finalHeight, (function() {
                    this.setHeight("auto");
                    callback && callback();
                }).bind(this));
            }
        },
        {
            key: "animate",
            value: function animate(initialTime, initialHeight, finalHeight, done) {
                var currentTime = Date.now(), elapsedTime = currentTime - initialTime, scale = elapsedTime / _constants.ACCORDION_SCALE_FACTOR, completed = scale > 1;
                if (completed) {
                    done();
                    return;
                }
                var heightDifference = finalHeight - initialHeight, height = initialHeight + scale * heightDifference;
                this.setHeight(height);
                requestAnimationFrame((function() {
                    this.animate(initialTime, initialHeight, finalHeight, done);
                }).bind(this));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvYWNjb3JkaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHsgQUNDT1JESU9OX1NDQUxFX0ZBQ1RPUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY2xhc3MgQWNjb3JkaW9uRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGV4cGFuZChpbml0aWFsSGVpZ2h0LCBpbnN0YW50bHksIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICBmaW5hbEhlaWdodCA9IGhlaWdodDsgLy8vXG5cbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwiY29sbGFwc2VkXCIpO1xuXG4gICAgdGhpcy5yZXNpemUoaW5pdGlhbEhlaWdodCwgZmluYWxIZWlnaHQsIGluc3RhbnRseSwgY2FsbGJhY2spO1xuICB9XG5cbiAgY29sbGFwc2UoaW5zdGFudGx5LCBkb25lKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICBmaW5hbEhlaWdodCA9IDAsXG4gICAgICAgICAgaW5pdGlhbEhlaWdodCA9IGhlaWdodCwgLy8vXG4gICAgICAgICAgY2FsbGJhY2sgPSAoKSA9PiB7ICAvLy9cbiAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MoXCJjb2xsYXBzZWRcIik7XG5cbiAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICB9O1xuXG4gICAgdGhpcy5yZXNpemUoaW5pdGlhbEhlaWdodCwgZmluYWxIZWlnaHQsIGluc3RhbnRseSwgY2FsbGJhY2spO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGxldCBoZWlnaHQ7XG5cbiAgICBjb25zdCBkaXNwbGF5ID0gdGhpcy5zdHlsZShcImRpc3BsYXlcIik7XG5cbiAgICB0aGlzLnNob3coKTtcblxuICAgIGhlaWdodCA9IHN1cGVyLmdldEhlaWdodCgpO1xuXG4gICAgdGhpcy5kaXNwbGF5KGRpc3BsYXkpO1xuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIGlzQ29sbGFwc2VkKCkge1xuICAgIGNvbnN0IGNvbGxhcHNlZCA9IHRoaXMuaGFzQ2xhc3MoXCJjb2xsYXBzZWRcIik7XG5cbiAgICByZXR1cm4gY29sbGFwc2VkO1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkge1xuICAgIGhlaWdodCA9IChoZWlnaHQgPT09IFwiYXV0b1wiKSA/XG4gICAgICBoZWlnaHQgOlxuICAgICAgYCR7aGVpZ2h0fXB4YDsgLy8vXG5cbiAgICB0aGlzLnN0eWxlKFwiaGVpZ2h0XCIsIGhlaWdodCk7XG4gIH1cblxuICByZXNpemUoaW5pdGlhbEhlaWdodCwgZmluYWxIZWlnaHQsIGluc3RhbnRseSwgY2FsbGJhY2spIHtcbiAgICBpZiAoaW5zdGFudGx5KSB7XG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW5pdGlhbFRpbWUgPSBEYXRlLm5vdygpO1xuXG4gICAgdGhpcy5hbmltYXRlKGluaXRpYWxUaW1lLCBpbml0aWFsSGVpZ2h0LCBmaW5hbEhlaWdodCwgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRIZWlnaHQoXCJhdXRvXCIpO1xuXG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgYW5pbWF0ZShpbml0aWFsVGltZSwgaW5pdGlhbEhlaWdodCwgZmluYWxIZWlnaHQsIGRvbmUpIHtcbiAgICBjb25zdCBjdXJyZW50VGltZSA9IERhdGUubm93KCksIC8vL1xuICAgICAgICAgIGVsYXBzZWRUaW1lID0gY3VycmVudFRpbWUgLSBpbml0aWFsVGltZSxcbiAgICAgICAgICBzY2FsZSA9IGVsYXBzZWRUaW1lIC8gQUNDT1JESU9OX1NDQUxFX0ZBQ1RPUixcbiAgICAgICAgICBjb21wbGV0ZWQgPSAoc2NhbGUgPiAxKTtcblxuICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGhlaWdodERpZmZlcmVuY2UgPSAoZmluYWxIZWlnaHQgLSBpbml0aWFsSGVpZ2h0KSxcbiAgICAgICAgICBoZWlnaHQgPSBpbml0aWFsSGVpZ2h0ICsgc2NhbGUgKiBoZWlnaHREaWZmZXJlbmNlO1xuXG4gICAgdGhpcy5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLmFuaW1hdGUoaW5pdGlhbFRpbWUsIGluaXRpYWxIZWlnaHQsIGZpbmFsSGVpZ2h0LCBkb25lKTtcbiAgICB9KTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJlc2l6ZURpdiA9IHRoaXMucmVzaXplLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGV4cGFuZERpdiA9IHRoaXMuZXhwYW5kLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGNvbGxhcHNlRGl2ID0gdGhpcy5jb2xsYXBzZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBpc0NvbGxhcHNlZCA9IHRoaXMuaXNDb2xsYXBzZWQuYmluZCh0aGlzKSxcbiAgICAgICAgICBnZXREaXZIZWlnaHQgPSB0aGlzLmdldEhlaWdodC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHBhcmVudENvbnRleHQgPSBPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LCB7XG4gICAgICAgICAgICByZXNpemVEaXYsXG4gICAgICAgICAgICBleHBhbmREaXYsXG4gICAgICAgICAgICBjb2xsYXBzZURpdixcbiAgICAgICAgICAgIGlzQ29sbGFwc2VkLFxuICAgICAgICAgICAgZ2V0RGl2SGVpZ2h0XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcGFyZW50Q29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImFjY29yZGlvblwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShBY2NvcmRpb25EaXYpYFxuXG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgZGlzcGxheTogYmxvY2s7XG4gIFxuICAuY29sbGFwc2VkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuYDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVVLEdBQWlCLENBQWpCLGNBQWlCO0FBRWYsR0FBTSxDQUFOLEtBQU07QUFFUyxHQUFjLENBQWQsVUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQW9IZCwrRkFVdkM7Ozs7Ozs7SUE1SE0sWUFBWTtjQUFaLFlBQVk7YUFBWixZQUFZOzhCQUFaLFlBQVk7Z0VBQVosWUFBWTs7aUJBQVosWUFBWTs7WUFDaEIsR0FBTSxHQUFOLE1BQU07NEJBQU4sTUFBTSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLENBQUM7Z0JBQzFDLEdBQUssQ0FBQyxNQUFNLFFBQVEsU0FBUyxJQUN2QixXQUFXLEdBQUcsTUFBTSxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztxQkFFMUIsV0FBVyxFQUFDLFNBQVc7cUJBRXZCLE1BQU0sQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRO1lBQzdE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