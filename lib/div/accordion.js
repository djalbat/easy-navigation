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
var AccordionDiv = /*#__PURE__*/ function(Element) {
    _inherits(AccordionDiv, Element);
    function AccordionDiv() {
        _classCallCheck(this, AccordionDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(AccordionDiv).apply(this, arguments));
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
                var height = this.getHeight(), finalHeight = 0, initialHeight = height; ///
                this.resize(initialHeight, finalHeight, instantly, (function() {
                    this.addClass("collapsed");
                    done();
                }).bind(this));
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
                if (instantly) {
                    done && done(); ///
                    return;
                }
                var initialTime = Date.now();
                this.animate(initialTime, initialHeight, finalHeight, (function() {
                    this.setHeight("auto");
                    done && done(); ///
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvYWNjb3JkaW9uLmpzIl0sIm5hbWVzIjpbIndpdGhTdHlsZSIsIkVsZW1lbnQiLCJBQ0NPUkRJT05fU0NBTEVfRkFDVE9SIiwiQWNjb3JkaW9uRGl2IiwiZXhwYW5kIiwiaW5pdGlhbEhlaWdodCIsImluc3RhbnRseSIsImhlaWdodCIsImdldEhlaWdodCIsImZpbmFsSGVpZ2h0IiwicmVtb3ZlQ2xhc3MiLCJyZXNpemUiLCJjb2xsYXBzZSIsImRvbmUiLCJhZGRDbGFzcyIsImRpc3BsYXkiLCJzdHlsZSIsInNob3ciLCJpc0NvbGxhcHNlZCIsImNvbGxhcHNlZCIsImhhc0NsYXNzIiwic2V0SGVpZ2h0IiwiaW5pdGlhbFRpbWUiLCJEYXRlIiwibm93IiwiYW5pbWF0ZSIsImN1cnJlbnRUaW1lIiwiZWxhcHNlZFRpbWUiLCJzY2FsZSIsImNvbXBsZXRlZCIsImhlaWdodERpZmZlcmVuY2UiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwYXJlbnRDb250ZXh0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJyZXNpemVEaXYiLCJiaW5kIiwiZXhwYW5kRGl2IiwiY29sbGFwc2VEaXYiLCJnZXREaXZIZWlnaHQiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVUsR0FBaUIsQ0FBakIsY0FBaUI7QUFFZixHQUFNLENBQU4sS0FBTTtBQUVTLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBbUhkLCtGQVV2Qzs7Ozs7OztJQTNITSxZQUFZ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