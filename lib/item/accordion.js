"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easy = require("easy");
var _accordion = _interopRequireDefault(require("../div/accordion"));
var _accordion1 = _interopRequireDefault(require("../button/accordion"));
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
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
function _iterableToArrayLimit(arr, i) {
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
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
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
var AccordionItem = /*#__PURE__*/ function(Element) {
    _inherits(AccordionItem, Element);
    var _super = _createSuper(AccordionItem);
    function AccordionItem() {
        _classCallCheck(this, AccordionItem);
        return _super.apply(this, arguments);
    }
    _createClass(AccordionItem, [
        {
            key: "getArticles",
            value: function getArticles() {
                var maximumDepth = 2, descendantArticleElements = this.getDescendantElements("article", maximumDepth), articles = descendantArticleElements; ///
                return articles;
            }
        },
        {
            key: "getAccordionDiv",
            value: function getAccordionDiv() {
                var _$AccordionDiv = this.constructor.AccordionDiv;
                return _$AccordionDiv;
            }
        },
        {
            key: "getAccordionButton",
            value: function getAccordionButton() {
                var _$AccordionButton = this.constructor.AccordionButton;
                return _$AccordionButton;
            }
        },
        {
            key: "getArticleIndex",
            value: function getArticleIndex(uri) {
                var Articles = this.properties.Articles, articleIndex = Articles.findIndex(function(Article) {
                    var path = Article.path, uriArticleURI = path.test(uri);
                    if (uriArticleURI) {
                        return true;
                    }
                });
                return articleIndex;
            }
        },
        {
            key: "getInitialHeight",
            value: function getInitialHeight(collapsed) {
                var initialHeight;
                if (collapsed) {
                    initialHeight = 0;
                } else {
                    var divHeight = this.getDivHeight();
                    initialHeight = divHeight; ///
                }
                return initialHeight;
            }
        },
        {
            key: "isArticlePresent",
            value: function isArticlePresent(uri) {
                var articleIndex = this.getArticleIndex(uri), articlePresent = articleIndex !== -1;
                return articlePresent;
            }
        },
        {
            key: "update",
            value: function update(uri, instantly) {
                var article1 = null;
                var buttonDisplayed = this.isButtonDisplayed();
                if (!buttonDisplayed) {
                    instantly = true;
                }
                var collapsed = this.isCollapsed(), articlePresent = this.isArticlePresent(uri);
                if (!articlePresent) {
                    if (!collapsed) {
                        this.collapse(instantly);
                    }
                } else {
                    var articles = this.getArticles(), articleIndex = this.getArticleIndex(uri), initialHeight = this.getInitialHeight(collapsed);
                    articles.forEach(function(article, index) {
                        index === articleIndex ? article.show() : article.hide();
                    });
                    this.disable(uri);
                    this.expand(initialHeight, instantly);
                    article1 = articles[articleIndex];
                }
                return article1;
            }
        },
        {
            key: "enable",
            value: function enable() {
                this.enableButton();
            }
        },
        {
            key: "disable",
            value: function disable(uri) {
                var articleIndex = this.getArticleIndex(uri), articleFirstArticle = articleIndex === 0;
                articleFirstArticle ? this.disableButton() : this.enableButton();
            }
        },
        {
            key: "expand",
            value: function expand(initialHeight, instantly) {
                this.expandDiv(initialHeight, instantly);
            }
        },
        {
            key: "collapse",
            value: function collapse(instantly) {
                var _this = this;
                this.collapseDiv(instantly, function() {
                    return _this.enable();
                });
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _properties = this.properties, Articles = _properties.Articles, first = _properties.first, last = _properties.last, showArticle = _properties.showArticle, _Articles = _slicedToArray(Articles, 1), Article1 = _Articles[0], _$AccordionDiv = this.getAccordionDiv(), _$AccordionButton = this.getAccordionButton(), articles = Articles.map(function(Article, index) {
                    return /*#__PURE__*/ React.createElement(Article, {
                        index: index
                    });
                });
                return [
                    /*#__PURE__*/ React.createElement(_$AccordionButton, {
                        Article: Article1,
                        first: first,
                        last: last,
                        showArticle: showArticle
                    }),
                    /*#__PURE__*/ React.createElement(_$AccordionDiv, null, articles)
                ];
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext([
                    "getDivHeight",
                    "resizeDiv",
                    "expandDiv",
                    "isCollapsed",
                    "collapseDiv",
                    "enableButton",
                    "disableButton",
                    "activateButton",
                    "deactivateButton",
                    "isButtonDisplayed"
                ]);
            }
        }
    ]);
    return AccordionItem;
}(_wrapNativeSuper(_easy.Element));
exports.default = AccordionItem;
_defineProperty(AccordionItem, "AccordionDiv", _accordion.default);
_defineProperty(AccordionItem, "AccordionButton", _accordion1.default);
_defineProperty(AccordionItem, "tagName", "li");
_defineProperty(AccordionItem, "defaultProperties", {
    className: "accordion"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pdGVtL2FjY29yZGlvbi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBBY2NvcmRpb25EaXYgZnJvbSBcIi4uL2Rpdi9hY2NvcmRpb25cIjtcbmltcG9ydCBBY2NvcmRpb25CdXR0b24gZnJvbSBcIi4uL2J1dHRvbi9hY2NvcmRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3JkaW9uSXRlbSBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRBcnRpY2xlcygpIHtcbiAgICBjb25zdCBtYXhpbXVtRGVwdGggPSAyLFxuICAgICAgICAgIGRlc2NlbmRhbnRBcnRpY2xlRWxlbWVudHMgPSB0aGlzLmdldERlc2NlbmRhbnRFbGVtZW50cyhcImFydGljbGVcIiwgbWF4aW11bURlcHRoKSxcbiAgICAgICAgICBhcnRpY2xlcyA9IGRlc2NlbmRhbnRBcnRpY2xlRWxlbWVudHM7IC8vL1xuXG4gICAgcmV0dXJuIGFydGljbGVzO1xuICB9XG5cbiAgZ2V0QWNjb3JkaW9uRGl2KCkge1xuICAgIGNvbnN0IHsgQWNjb3JkaW9uRGl2IH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIEFjY29yZGlvbkRpdjtcbiAgfVxuXG4gIGdldEFjY29yZGlvbkJ1dHRvbigpIHtcbiAgICBjb25zdCB7IEFjY29yZGlvbkJ1dHRvbiB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBBY2NvcmRpb25CdXR0b247XG4gIH1cblxuICBnZXRBcnRpY2xlSW5kZXgodXJpKSB7XG4gICAgY29uc3QgeyBBcnRpY2xlcyB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGFydGljbGVJbmRleCA9IEFydGljbGVzLmZpbmRJbmRleCgoQXJ0aWNsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBwYXRoIH0gPSBBcnRpY2xlLFxuICAgICAgICAgICAgICAgICAgdXJpQXJ0aWNsZVVSSSA9IHBhdGgudGVzdCh1cmkpO1xuXG4gICAgICAgICAgICBpZiAodXJpQXJ0aWNsZVVSSSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBhcnRpY2xlSW5kZXg7XG4gIH1cblxuICBnZXRJbml0aWFsSGVpZ2h0KGNvbGxhcHNlZCkge1xuICAgIGxldCBpbml0aWFsSGVpZ2h0O1xuXG4gICAgaWYgKGNvbGxhcHNlZCkge1xuICAgICAgaW5pdGlhbEhlaWdodCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRpdkhlaWdodCA9IHRoaXMuZ2V0RGl2SGVpZ2h0KCk7XG5cbiAgICAgIGluaXRpYWxIZWlnaHQgPSBkaXZIZWlnaHQ7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gaW5pdGlhbEhlaWdodDtcbiAgfVxuXG4gIGlzQXJ0aWNsZVByZXNlbnQodXJpKSB7XG4gICAgY29uc3QgYXJ0aWNsZUluZGV4ID0gdGhpcy5nZXRBcnRpY2xlSW5kZXgodXJpKSxcbiAgICAgICAgICBhcnRpY2xlUHJlc2VudCA9IChhcnRpY2xlSW5kZXggIT09IC0xKTtcblxuICAgIHJldHVybiBhcnRpY2xlUHJlc2VudDtcbiAgfVxuXG4gIHVwZGF0ZSh1cmksIGluc3RhbnRseSkge1xuICAgIGxldCBhcnRpY2xlID0gbnVsbDtcblxuICAgIGNvbnN0IGJ1dHRvbkRpc3BsYXllZCA9IHRoaXMuaXNCdXR0b25EaXNwbGF5ZWQoKTtcblxuICAgIGlmICghYnV0dG9uRGlzcGxheWVkKSB7XG4gICAgICBpbnN0YW50bHkgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbGxhcHNlZCA9IHRoaXMuaXNDb2xsYXBzZWQoKSxcbiAgICAgICAgICBhcnRpY2xlUHJlc2VudCA9IHRoaXMuaXNBcnRpY2xlUHJlc2VudCh1cmkpO1xuXG4gICAgaWYgKCFhcnRpY2xlUHJlc2VudCkge1xuICAgICAgaWYgKCFjb2xsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5jb2xsYXBzZShpbnN0YW50bHkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhcnRpY2xlcyA9IHRoaXMuZ2V0QXJ0aWNsZXMoKSxcbiAgICAgICAgICAgIGFydGljbGVJbmRleCA9IHRoaXMuZ2V0QXJ0aWNsZUluZGV4KHVyaSksXG4gICAgICAgICAgICBpbml0aWFsSGVpZ2h0ID0gdGhpcy5nZXRJbml0aWFsSGVpZ2h0KGNvbGxhcHNlZCk7XG5cbiAgICAgIGFydGljbGVzLmZvckVhY2goKGFydGljbGUsIGluZGV4KSA9PiB7XG4gICAgICAgIChpbmRleCA9PT0gYXJ0aWNsZUluZGV4KSA/XG4gICAgICAgICAgYXJ0aWNsZS5zaG93KCkgOlxuICAgICAgICAgICAgYXJ0aWNsZS5oaWRlKCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5kaXNhYmxlKHVyaSk7XG5cbiAgICAgIHRoaXMuZXhwYW5kKGluaXRpYWxIZWlnaHQsIGluc3RhbnRseSk7XG5cbiAgICAgIGFydGljbGUgPSBhcnRpY2xlc1thcnRpY2xlSW5kZXhdO1xuICAgIH1cblxuICAgIHJldHVybiBhcnRpY2xlO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuZW5hYmxlQnV0dG9uKCk7XG4gIH1cblxuICBkaXNhYmxlKHVyaSkge1xuICAgIGNvbnN0IGFydGljbGVJbmRleCA9IHRoaXMuZ2V0QXJ0aWNsZUluZGV4KHVyaSksXG4gICAgICAgICAgYXJ0aWNsZUZpcnN0QXJ0aWNsZSA9IChhcnRpY2xlSW5kZXggPT09IDApO1xuXG4gICAgYXJ0aWNsZUZpcnN0QXJ0aWNsZSA/XG4gICAgICB0aGlzLmRpc2FibGVCdXR0b24oKTpcbiAgICAgICAgdGhpcy5lbmFibGVCdXR0b24oKTtcbiAgfVxuXG4gIGV4cGFuZChpbml0aWFsSGVpZ2h0LCBpbnN0YW50bHkpIHtcbiAgICB0aGlzLmV4cGFuZERpdihpbml0aWFsSGVpZ2h0LCBpbnN0YW50bHkpO1xuICB9XG5cbiAgY29sbGFwc2UoaW5zdGFudGx5KSB7XG4gICAgdGhpcy5jb2xsYXBzZURpdihpbnN0YW50bHksICgpID0+IHRoaXMuZW5hYmxlKCkpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IEFydGljbGVzLCBmaXJzdCwgbGFzdCwgc2hvd0FydGljbGUgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBbIEFydGljbGUgXSA9IEFydGljbGVzLFxuICAgICAgICAgIEFjY29yZGlvbkRpdiA9IHRoaXMuZ2V0QWNjb3JkaW9uRGl2KCksXG4gICAgICAgICAgQWNjb3JkaW9uQnV0dG9uID0gdGhpcy5nZXRBY2NvcmRpb25CdXR0b24oKSxcbiAgICAgICAgICBhcnRpY2xlcyA9IEFydGljbGVzLm1hcCgoQXJ0aWNsZSwgaW5kZXgpID0+XG5cbiAgICAgICAgICAgIDxBcnRpY2xlIGluZGV4PXtpbmRleH0gLz5cblxuICAgICAgICAgICk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPEFjY29yZGlvbkJ1dHRvbiBBcnRpY2xlPXtBcnRpY2xlfSBmaXJzdD17Zmlyc3R9IGxhc3Q9e2xhc3R9IHNob3dBcnRpY2xlPXtzaG93QXJ0aWNsZX0gLz4sXG4gICAgICA8QWNjb3JkaW9uRGl2PlxuICAgICAgICB7YXJ0aWNsZXN9XG4gICAgICA8L0FjY29yZGlvbkRpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoW1xuICAgICAgXCJnZXREaXZIZWlnaHRcIixcbiAgICAgIFwicmVzaXplRGl2XCIsXG4gICAgICBcImV4cGFuZERpdlwiLFxuICAgICAgXCJpc0NvbGxhcHNlZFwiLFxuICAgICAgXCJjb2xsYXBzZURpdlwiLFxuICAgICAgXCJlbmFibGVCdXR0b25cIixcbiAgICAgIFwiZGlzYWJsZUJ1dHRvblwiLFxuICAgICAgXCJhY3RpdmF0ZUJ1dHRvblwiLFxuICAgICAgXCJkZWFjdGl2YXRlQnV0dG9uXCIsXG4gICAgICBcImlzQnV0dG9uRGlzcGxheWVkXCJcbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBBY2NvcmRpb25EaXYgPSBBY2NvcmRpb25EaXY7XG5cbiAgc3RhdGljIEFjY29yZGlvbkJ1dHRvbiA9IEFjY29yZGlvbkJ1dHRvbjtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwibGlcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImFjY29yZGlvblwiXG4gIH07XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkFjY29yZGlvbkl0ZW0iLCJnZXRBcnRpY2xlcyIsIm1heGltdW1EZXB0aCIsImRlc2NlbmRhbnRBcnRpY2xlRWxlbWVudHMiLCJnZXREZXNjZW5kYW50RWxlbWVudHMiLCJhcnRpY2xlcyIsImdldEFjY29yZGlvbkRpdiIsIkFjY29yZGlvbkRpdiIsImNvbnN0cnVjdG9yIiwiZ2V0QWNjb3JkaW9uQnV0dG9uIiwiQWNjb3JkaW9uQnV0dG9uIiwiZ2V0QXJ0aWNsZUluZGV4IiwidXJpIiwiQXJ0aWNsZXMiLCJwcm9wZXJ0aWVzIiwiYXJ0aWNsZUluZGV4IiwiZmluZEluZGV4IiwiQXJ0aWNsZSIsInBhdGgiLCJ1cmlBcnRpY2xlVVJJIiwidGVzdCIsImdldEluaXRpYWxIZWlnaHQiLCJjb2xsYXBzZWQiLCJpbml0aWFsSGVpZ2h0IiwiZGl2SGVpZ2h0IiwiZ2V0RGl2SGVpZ2h0IiwiaXNBcnRpY2xlUHJlc2VudCIsImFydGljbGVQcmVzZW50IiwidXBkYXRlIiwiaW5zdGFudGx5IiwiYXJ0aWNsZSIsImJ1dHRvbkRpc3BsYXllZCIsImlzQnV0dG9uRGlzcGxheWVkIiwiaXNDb2xsYXBzZWQiLCJjb2xsYXBzZSIsImZvckVhY2giLCJpbmRleCIsInNob3ciLCJoaWRlIiwiZGlzYWJsZSIsImV4cGFuZCIsImVuYWJsZSIsImVuYWJsZUJ1dHRvbiIsImFydGljbGVGaXJzdEFydGljbGUiLCJkaXNhYmxlQnV0dG9uIiwiZXhwYW5kRGl2IiwiY29sbGFwc2VEaXYiLCJjaGlsZEVsZW1lbnRzIiwiZmlyc3QiLCJsYXN0Iiwic2hvd0FydGljbGUiLCJtYXAiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFVyxJQUFBLEtBQU0sV0FBTixNQUFNLENBQUE7QUFFTCxJQUFBLFVBQWtCLGtDQUFsQixrQkFBa0IsRUFBQTtBQUNmLElBQUEsV0FBcUIsa0NBQXJCLHFCQUFxQixFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsSUFBQSxBQUFNQSxhQUFhLGlCQ1AvQixBRE9ZOzs7YUFBTUEsYUFBYTs7Ozs7O1lBQ2hDQyxHQUFXLEVBQVhBLGFBQVc7bUJBQVhBLFNBQUFBLFdBQVcsR0FBRztnQkFDWixJQUFNQyxZQUFZLEdBQUcsQ0FBQyxFQUNoQkMseUJBQXlCLEdBQUcsSUFBSSxDQUFDQyxxQkFBcUIsQ0FBQyxTQUFTLEVBQUVGLFlBQVksQ0FBQyxFQUMvRUcsUUFBUSxHQUFHRix5QkFBeUIsQUFBQyxFQUFDLEdBQUc7Z0JBRS9DLE9BQU9FLFFBQVEsQ0FBQzthQUNqQjs7O1lBRURDLEdBQWUsRUFBZkEsaUJBQWU7bUJBQWZBLFNBQUFBLGVBQWUsR0FBRztnQkFDaEIsSUFBTSxBQUFFQyxjQUFZLEdBQUssSUFBSSxDQUFDQyxXQUFXLENBQWpDRCxZQUFZLEFBQXFC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