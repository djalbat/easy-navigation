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
var _accordion = /*#__PURE__*/ _interopRequireDefault(require("./item/accordion"));
var _array = require("./utilities/array");
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
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
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
function _objectSpreadProps(target, source) {
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
        "\n\n  list-style-type: none;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var Accordion = /*#__PURE__*/ function(Element) {
    _inherits(Accordion, Element);
    var _super = _createSuper(Accordion);
    function Accordion() {
        _classCallCheck(this, Accordion);
        return _super.apply(this, arguments);
    }
    _createClass(Accordion, [
        {
            key: "getItems",
            value: function getItems() {
                var childElements = this.getChildElements(), items = childElements; ///
                return items;
            }
        },
        {
            key: "update",
            value: function update(uri, instantly) {
                var items = this.getItems(), article = items.reduce(function(article, item) {
                    var itemArticle = item.update(uri, instantly);
                    if (itemArticle !== null) {
                        article = itemArticle; ///
                    }
                    return article;
                }, null);
                return article;
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var items = this.getItems(), instantly = true;
                items.forEach(function(item) {
                    return item.collapse(instantly);
                });
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
            ///
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _$AccordionItem = this.constructor.AccordionItem, _properties = this.properties, ArticlesArray = _properties.ArticlesArray, showArticle = _properties.showArticle, ArticlesArrayLength = ArticlesArray.length, lastIndex = ArticlesArrayLength - 1, firstIndex = 0, items = ArticlesArray.map(function(ArticleOrArticles, index) {
                    var last = index === lastIndex, first = index === firstIndex, Articles = (0, _array.guaranteeArray)(ArticleOrArticles); ///
                    return /*#__PURE__*/ React.createElement(_$AccordionItem, {
                        Articles: Articles,
                        first: first,
                        last: last,
                        showArticle: showArticle
                    });
                }), childElements1 = items; ///
                return childElements1;
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var context = this.getContext(), updateAccordion = this.update.bind(this); ///
                return _objectSpreadProps(_objectSpread({}, context), {
                    updateAccordion: updateAccordion
                });
            }
        }
    ]);
    return Accordion;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(Accordion, "AccordionItem", _accordion.default);
_defineProperty(Accordion, "tagName", "ul") ///
;
_defineProperty(Accordion, "defaultProperties", {
    className: "accordion"
});
var _default = (0, _easyWithStyle.default)(Accordion)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hY2NvcmRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgQWNjb3JkaW9uSXRlbSBmcm9tIFwiLi9pdGVtL2FjY29yZGlvblwiO1xuXG5pbXBvcnQgeyBndWFyYW50ZWVBcnJheSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jbGFzcyBBY2NvcmRpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0SXRlbXMoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIGl0ZW1zID0gY2hpbGRFbGVtZW50czsgIC8vL1xuXG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9XG5cbiAgdXBkYXRlKHVyaSwgaW5zdGFudGx5KSB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLmdldEl0ZW1zKCksXG4gICAgICAgICAgYXJ0aWNsZSA9IGl0ZW1zLnJlZHVjZSgoYXJ0aWNsZSwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbUFydGljbGUgPSBpdGVtLnVwZGF0ZSh1cmksIGluc3RhbnRseSk7XG5cbiAgICAgICAgICAgIGlmIChpdGVtQXJ0aWNsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBhcnRpY2xlID0gaXRlbUFydGljbGU7ICAvLy9cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGFydGljbGU7XG4gICAgICAgICAgfSwgbnVsbCk7XG5cbiAgICByZXR1cm4gYXJ0aWNsZTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRJdGVtcygpLFxuICAgICAgICAgIGluc3RhbnRseSA9IHRydWU7XG5cbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNvbGxhcHNlKGluc3RhbnRseSkpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgQWNjb3JkaW9uSXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICB7IEFydGljbGVzQXJyYXksIHNob3dBcnRpY2xlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgQXJ0aWNsZXNBcnJheUxlbmd0aCA9IEFydGljbGVzQXJyYXkubGVuZ3RoLFxuICAgICAgICAgIGxhc3RJbmRleCA9IEFydGljbGVzQXJyYXlMZW5ndGggLSAxLFxuICAgICAgICAgIGZpcnN0SW5kZXggPSAwLFxuICAgICAgICAgIGl0ZW1zID0gQXJ0aWNsZXNBcnJheS5tYXAoKEFydGljbGVPckFydGljbGVzLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFzdCA9IChpbmRleCA9PT0gbGFzdEluZGV4KSxcbiAgICAgICAgICAgICAgICAgIGZpcnN0ID0gKGluZGV4ID09PSBmaXJzdEluZGV4KSxcbiAgICAgICAgICAgICAgICAgIEFydGljbGVzID0gZ3VhcmFudGVlQXJyYXkoQXJ0aWNsZU9yQXJ0aWNsZXMpOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbSBBcnRpY2xlcz17QXJ0aWNsZXN9IGZpcnN0PXtmaXJzdH0gbGFzdD17bGFzdH0gc2hvd0FydGljbGU9e3Nob3dBcnRpY2xlfSAvPlxuXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBpdGVtczsgIC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB1cGRhdGVBY2NvcmRpb24gPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgLi4uY29udGV4dCxcbiAgICAgIHVwZGF0ZUFjY29yZGlvblxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIEFjY29yZGlvbkl0ZW0gPSBBY2NvcmRpb25JdGVtO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJ1bFwiOyAgLy8vXG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJhY2NvcmRpb25cIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQWNjb3JkaW9uKWBcblxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJBY2NvcmRpb24iLCJnZXRJdGVtcyIsImNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiaXRlbXMiLCJ1cGRhdGUiLCJ1cmkiLCJpbnN0YW50bHkiLCJhcnRpY2xlIiwicmVkdWNlIiwiaXRlbSIsIml0ZW1BcnRpY2xlIiwiZGlkTW91bnQiLCJmb3JFYWNoIiwiY29sbGFwc2UiLCJ3aWxsVW5tb3VudCIsIkFjY29yZGlvbkl0ZW0iLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJBcnRpY2xlc0FycmF5Iiwic2hvd0FydGljbGUiLCJBcnRpY2xlc0FycmF5TGVuZ3RoIiwibGVuZ3RoIiwibGFzdEluZGV4IiwiZmlyc3RJbmRleCIsIm1hcCIsIkFydGljbGVPckFydGljbGVzIiwiaW5kZXgiLCJsYXN0IiwiZmlyc3QiLCJBcnRpY2xlcyIsImd1YXJhbnRlZUFycmF5IiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwidXBkYXRlQWNjb3JkaW9uIiwiYmluZCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVks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