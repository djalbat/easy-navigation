"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return AccordionItem;
    }
});
var _easy = require("easy");
var _accordion = /*#__PURE__*/ _interopRequireDefault(require("../div/accordion"));
var _accordion1 = /*#__PURE__*/ _interopRequireDefault(require("../button/accordion"));
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
                var article = null;
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
                    article = articles[articleIndex];
                }
                return article;
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
                if (articleFirstArticle) {
                    this.disableButton();
                    this.blurButton();
                } else {
                    this.enableButton();
                }
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
                var _constructor = this.constructor, _$AccordionDiv = _constructor.AccordionDiv, _$AccordionButton = _constructor.AccordionButton, _properties = this.properties, Articles = _properties.Articles, first = _properties.first, last = _properties.last, showArticle = _properties.showArticle, _Articles = _slicedToArray(Articles, 1), Article = _Articles[0], articles = Articles.map(function(Article, index) {
                    return /*#__PURE__*/ React.createElement(Article, {
                        index: index
                    });
                });
                return [
                    /*#__PURE__*/ React.createElement(_$AccordionButton, {
                        Article: Article,
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
                    "blurButton",
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
_defineProperty(AccordionItem, "AccordionDiv", _accordion.default);
_defineProperty(AccordionItem, "AccordionButton", _accordion1.default);
_defineProperty(AccordionItem, "tagName", "li");
_defineProperty(AccordionItem, "defaultProperties", {
    className: "accordion"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pdGVtL2FjY29yZGlvbi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBBY2NvcmRpb25EaXYgZnJvbSBcIi4uL2Rpdi9hY2NvcmRpb25cIjtcbmltcG9ydCBBY2NvcmRpb25CdXR0b24gZnJvbSBcIi4uL2J1dHRvbi9hY2NvcmRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3JkaW9uSXRlbSBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRBcnRpY2xlcygpIHtcbiAgICBjb25zdCBtYXhpbXVtRGVwdGggPSAyLFxuICAgICAgICAgIGRlc2NlbmRhbnRBcnRpY2xlRWxlbWVudHMgPSB0aGlzLmdldERlc2NlbmRhbnRFbGVtZW50cyhcImFydGljbGVcIiwgbWF4aW11bURlcHRoKSxcbiAgICAgICAgICBhcnRpY2xlcyA9IGRlc2NlbmRhbnRBcnRpY2xlRWxlbWVudHM7IC8vL1xuXG4gICAgcmV0dXJuIGFydGljbGVzO1xuICB9XG5cbiAgZ2V0QXJ0aWNsZUluZGV4KHVyaSkge1xuICAgIGNvbnN0IHsgQXJ0aWNsZXMgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBhcnRpY2xlSW5kZXggPSBBcnRpY2xlcy5maW5kSW5kZXgoKEFydGljbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aCB9ID0gQXJ0aWNsZSxcbiAgICAgICAgICAgICAgICAgIHVyaUFydGljbGVVUkkgPSBwYXRoLnRlc3QodXJpKTtcblxuICAgICAgICAgICAgaWYgKHVyaUFydGljbGVVUkkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gYXJ0aWNsZUluZGV4O1xuICB9XG5cbiAgZ2V0SW5pdGlhbEhlaWdodChjb2xsYXBzZWQpIHtcbiAgICBsZXQgaW5pdGlhbEhlaWdodDtcblxuICAgIGlmIChjb2xsYXBzZWQpIHtcbiAgICAgIGluaXRpYWxIZWlnaHQgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkaXZIZWlnaHQgPSB0aGlzLmdldERpdkhlaWdodCgpO1xuXG4gICAgICBpbml0aWFsSGVpZ2h0ID0gZGl2SGVpZ2h0OyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGluaXRpYWxIZWlnaHQ7XG4gIH1cblxuICBpc0FydGljbGVQcmVzZW50KHVyaSkge1xuICAgIGNvbnN0IGFydGljbGVJbmRleCA9IHRoaXMuZ2V0QXJ0aWNsZUluZGV4KHVyaSksXG4gICAgICAgICAgYXJ0aWNsZVByZXNlbnQgPSAoYXJ0aWNsZUluZGV4ICE9PSAtMSk7XG5cbiAgICByZXR1cm4gYXJ0aWNsZVByZXNlbnQ7XG4gIH1cblxuICB1cGRhdGUodXJpLCBpbnN0YW50bHkpIHtcbiAgICBsZXQgYXJ0aWNsZSA9IG51bGw7XG5cbiAgICBjb25zdCBidXR0b25EaXNwbGF5ZWQgPSB0aGlzLmlzQnV0dG9uRGlzcGxheWVkKCk7XG5cbiAgICBpZiAoIWJ1dHRvbkRpc3BsYXllZCkge1xuICAgICAgaW5zdGFudGx5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBjb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCksXG4gICAgICAgICAgYXJ0aWNsZVByZXNlbnQgPSB0aGlzLmlzQXJ0aWNsZVByZXNlbnQodXJpKTtcblxuICAgIGlmICghYXJ0aWNsZVByZXNlbnQpIHtcbiAgICAgIGlmICghY29sbGFwc2VkKSB7XG4gICAgICAgIHRoaXMuY29sbGFwc2UoaW5zdGFudGx5KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYXJ0aWNsZXMgPSB0aGlzLmdldEFydGljbGVzKCksXG4gICAgICAgICAgICBhcnRpY2xlSW5kZXggPSB0aGlzLmdldEFydGljbGVJbmRleCh1cmkpLFxuICAgICAgICAgICAgaW5pdGlhbEhlaWdodCA9IHRoaXMuZ2V0SW5pdGlhbEhlaWdodChjb2xsYXBzZWQpO1xuXG4gICAgICBhcnRpY2xlcy5mb3JFYWNoKChhcnRpY2xlLCBpbmRleCkgPT4ge1xuICAgICAgICAoaW5kZXggPT09IGFydGljbGVJbmRleCkgP1xuICAgICAgICAgIGFydGljbGUuc2hvdygpIDpcbiAgICAgICAgICAgIGFydGljbGUuaGlkZSgpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZGlzYWJsZSh1cmkpO1xuXG4gICAgICB0aGlzLmV4cGFuZChpbml0aWFsSGVpZ2h0LCBpbnN0YW50bHkpO1xuXG4gICAgICBhcnRpY2xlID0gYXJ0aWNsZXNbYXJ0aWNsZUluZGV4XTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJ0aWNsZTtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLmVuYWJsZUJ1dHRvbigpO1xuICB9XG5cbiAgZGlzYWJsZSh1cmkpIHtcbiAgICBjb25zdCBhcnRpY2xlSW5kZXggPSB0aGlzLmdldEFydGljbGVJbmRleCh1cmkpLFxuICAgICAgICAgIGFydGljbGVGaXJzdEFydGljbGUgPSAoYXJ0aWNsZUluZGV4ID09PSAwKTtcblxuICAgIGlmIChhcnRpY2xlRmlyc3RBcnRpY2xlKSB7XG4gICAgICB0aGlzLmRpc2FibGVCdXR0b24oKTtcbiAgICAgIHRoaXMuYmx1ckJ1dHRvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVuYWJsZUJ1dHRvbigpO1xuICAgIH1cbiAgfVxuXG4gIGV4cGFuZChpbml0aWFsSGVpZ2h0LCBpbnN0YW50bHkpIHtcbiAgICB0aGlzLmV4cGFuZERpdihpbml0aWFsSGVpZ2h0LCBpbnN0YW50bHkpO1xuICB9XG5cbiAgY29sbGFwc2UoaW5zdGFudGx5KSB7XG4gICAgdGhpcy5jb2xsYXBzZURpdihpbnN0YW50bHksICgpID0+IHRoaXMuZW5hYmxlKCkpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IEFjY29yZGlvbkRpdiwgQWNjb3JkaW9uQnV0dG9uIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHsgQXJ0aWNsZXMsIGZpcnN0LCBsYXN0LCBzaG93QXJ0aWNsZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIFsgQXJ0aWNsZSBdID0gQXJ0aWNsZXMsXG4gICAgICAgICAgYXJ0aWNsZXMgPSBBcnRpY2xlcy5tYXAoKEFydGljbGUsIGluZGV4KSA9PlxuXG4gICAgICAgICAgICA8QXJ0aWNsZSBpbmRleD17aW5kZXh9IC8+XG5cbiAgICAgICAgICApO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxBY2NvcmRpb25CdXR0b24gQXJ0aWNsZT17QXJ0aWNsZX0gZmlyc3Q9e2ZpcnN0fSBsYXN0PXtsYXN0fSBzaG93QXJ0aWNsZT17c2hvd0FydGljbGV9IC8+LFxuICAgICAgPEFjY29yZGlvbkRpdj5cbiAgICAgICAge2FydGljbGVzfVxuICAgICAgPC9BY2NvcmRpb25EaXY+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KFtcbiAgICAgIFwiZ2V0RGl2SGVpZ2h0XCIsXG4gICAgICBcInJlc2l6ZURpdlwiLFxuICAgICAgXCJleHBhbmREaXZcIixcbiAgICAgIFwiaXNDb2xsYXBzZWRcIixcbiAgICAgIFwiY29sbGFwc2VEaXZcIixcbiAgICAgIFwiYmx1ckJ1dHRvblwiLFxuICAgICAgXCJlbmFibGVCdXR0b25cIixcbiAgICAgIFwiZGlzYWJsZUJ1dHRvblwiLFxuICAgICAgXCJhY3RpdmF0ZUJ1dHRvblwiLFxuICAgICAgXCJkZWFjdGl2YXRlQnV0dG9uXCIsXG4gICAgICBcImlzQnV0dG9uRGlzcGxheWVkXCJcbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBBY2NvcmRpb25EaXYgPSBBY2NvcmRpb25EaXY7XG5cbiAgc3RhdGljIEFjY29yZGlvbkJ1dHRvbiA9IEFjY29yZGlvbkJ1dHRvbjtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwibGlcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImFjY29yZGlvblwiXG4gIH07XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkFjY29yZGlvbkl0ZW0iLCJnZXRBcnRpY2xlcyIsIm1heGltdW1EZXB0aCIsImRlc2NlbmRhbnRBcnRpY2xlRWxlbWVudHMiLCJnZXREZXNjZW5kYW50RWxlbWVudHMiLCJhcnRpY2xlcyIsImdldEFydGljbGVJbmRleCIsInVyaSIsIkFydGljbGVzIiwicHJvcGVydGllcyIsImFydGljbGVJbmRleCIsImZpbmRJbmRleCIsIkFydGljbGUiLCJwYXRoIiwidXJpQXJ0aWNsZVVSSSIsInRlc3QiLCJnZXRJbml0aWFsSGVpZ2h0IiwiY29sbGFwc2VkIiwiaW5pdGlhbEhlaWdodCIsImRpdkhlaWdodCIsImdldERpdkhlaWdodCIsImlzQXJ0aWNsZVByZXNlbnQiLCJhcnRpY2xlUHJlc2VudCIsInVwZGF0ZSIsImluc3RhbnRseSIsImFydGljbGUiLCJidXR0b25EaXNwbGF5ZWQiLCJpc0J1dHRvbkRpc3BsYXllZCIsImlzQ29sbGFwc2VkIiwiY29sbGFwc2UiLCJmb3JFYWNoIiwiaW5kZXgiLCJzaG93IiwiaGlkZSIsImRpc2FibGUiLCJleHBhbmQiLCJlbmFibGUiLCJlbmFibGVCdXR0b24iLCJhcnRpY2xlRmlyc3RBcnRpY2xlIiwiZGlzYWJsZUJ1dHRvbiIsImJsdXJCdXR0b24iLCJleHBhbmREaXYiLCJjb2xsYXBzZURpdiIsImNoaWxkRWxlbWVudHMiLCJjb25zdHJ1Y3RvciIsIkFjY29yZGlvbkRpdiIsIkFjY29yZGlvbkJ1dHRvbiIsImZpcnN0IiwibGFzdCIsInNob3dBcnRpY2xlIiwibWFwIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxZ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