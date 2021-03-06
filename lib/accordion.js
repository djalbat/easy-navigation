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
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
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
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
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
                });
                return _toConsumableArray(items);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var context = this.getContext(), updateAccordion = this.update.bind(this), parentContext1 = Object.assign({}, context, {
                    updateAccordion: updateAccordion
                });
                return parentContext1;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hY2NvcmRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgQWNjb3JkaW9uSXRlbSBmcm9tIFwiLi9pdGVtL2FjY29yZGlvblwiO1xuXG5pbXBvcnQgeyBndWFyYW50ZWVBcnJheSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jbGFzcyBBY2NvcmRpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0SXRlbXMoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIGl0ZW1zID0gY2hpbGRFbGVtZW50czsgIC8vL1xuXG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9XG5cbiAgdXBkYXRlKHVyaSwgaW5zdGFudGx5KSB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLmdldEl0ZW1zKCksXG4gICAgICAgICAgYXJ0aWNsZSA9IGl0ZW1zLnJlZHVjZSgoYXJ0aWNsZSwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbUFydGljbGUgPSBpdGVtLnVwZGF0ZSh1cmksIGluc3RhbnRseSk7XG5cbiAgICAgICAgICAgIGlmIChpdGVtQXJ0aWNsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBhcnRpY2xlID0gaXRlbUFydGljbGU7ICAvLy9cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGFydGljbGU7XG4gICAgICAgICAgfSwgbnVsbCk7XG5cbiAgICByZXR1cm4gYXJ0aWNsZTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRJdGVtcygpLFxuICAgICAgICAgIGluc3RhbnRseSA9IHRydWU7XG5cbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNvbGxhcHNlKGluc3RhbnRseSkpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgQWNjb3JkaW9uSXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICB7IEFydGljbGVzQXJyYXksIHNob3dBcnRpY2xlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgQXJ0aWNsZXNBcnJheUxlbmd0aCA9IEFydGljbGVzQXJyYXkubGVuZ3RoLFxuICAgICAgICAgIGxhc3RJbmRleCA9IEFydGljbGVzQXJyYXlMZW5ndGggLSAxLFxuICAgICAgICAgIGZpcnN0SW5kZXggPSAwLFxuICAgICAgICAgIGl0ZW1zID0gQXJ0aWNsZXNBcnJheS5tYXAoKEFydGljbGVPckFydGljbGVzLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBsYXN0ID0gKGluZGV4ID09PSBsYXN0SW5kZXgpLFxuICAgICAgICAgICAgICAgICAgICBmaXJzdCA9IChpbmRleCA9PT0gZmlyc3RJbmRleCksXG4gICAgICAgICAgICAgICAgICAgIEFydGljbGVzID0gZ3VhcmFudGVlQXJyYXkoQXJ0aWNsZU9yQXJ0aWNsZXMpOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbSBBcnRpY2xlcz17QXJ0aWNsZXN9IGZpcnN0PXtmaXJzdH0gbGFzdD17bGFzdH0gc2hvd0FydGljbGU9e3Nob3dBcnRpY2xlfSAvPlxuXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIC4uLml0ZW1zXG5cbiAgICBdKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHVwZGF0ZUFjY29yZGlvbiA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHBhcmVudENvbnRleHQgPSBPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LCB7XG4gICAgICAgICAgICB1cGRhdGVBY2NvcmRpb25cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBwYXJlbnRDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIEFjY29yZGlvbkl0ZW0gPSBBY2NvcmRpb25JdGVtO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJ1bFwiOyAgLy8vXG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJhY2NvcmRpb25cIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQWNjb3JkaW9uKWBcblxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJBY2NvcmRpb24iLCJnZXRJdGVtcyIsImNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiaXRlbXMiLCJ1cGRhdGUiLCJ1cmkiLCJpbnN0YW50bHkiLCJhcnRpY2xlIiwicmVkdWNlIiwiaXRlbSIsIml0ZW1BcnRpY2xlIiwiZGlkTW91bnQiLCJmb3JFYWNoIiwiY29sbGFwc2UiLCJ3aWxsVW5tb3VudCIsIkFjY29yZGlvbkl0ZW0iLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJBcnRpY2xlc0FycmF5Iiwic2hvd0FydGljbGUiLCJBcnRpY2xlc0FycmF5TGVuZ3RoIiwibGVuZ3RoIiwibGFzdEluZGV4IiwiZmlyc3RJbmRleCIsIm1hcCIsIkFydGljbGVPckFydGljbGVzIiwiaW5kZXgiLCJsYXN0IiwiZmlyc3QiLCJBcnRpY2xlcyIsImd1YXJhbnRlZUFycmF5IiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwidXBkYXRlQWNjb3JkaW9uIiwiYmluZCIsIk9iamVjdCIsImFzc2lnbiIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVm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