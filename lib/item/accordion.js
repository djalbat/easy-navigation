"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easy = require("easy");
var _accordion = _interopRequireDefault(require("../div/accordion"));
var _accordion1 = _interopRequireDefault(require("../button/accordion"));
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
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
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
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
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
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
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
var AccordionItem = /*#__PURE__*/ function(Element1) {
    _inherits(AccordionItem, Element1);
    function AccordionItem() {
        _classCallCheck(this, AccordionItem);
        return _possibleConstructorReturn(this, _getPrototypeOf(AccordionItem).apply(this, arguments));
    }
    _createClass(AccordionItem, [
        {
            key: "getArticles",
            value: function getArticles() {
                var descendantArticleElements = this.getDescendantElements("article", 2), articles = descendantArticleElements; ///
                return articles;
            }
        },
        {
            key: "getAccordionDiv",
            value: function getAccordionDiv() {
                var _constructor = this.constructor, AccordionDiv = _constructor.AccordionDiv;
                return AccordionDiv;
            }
        },
        {
            key: "getAccordionButton",
            value: function getAccordionButton() {
                var _constructor = this.constructor, AccordionButton = _constructor.AccordionButton;
                return AccordionButton;
            }
        },
        {
            key: "getArticleIndex",
            value: function getArticleIndex(uri) {
                var _properties = this.properties, Articles = _properties.Articles, articleIndex = Articles.findIndex(function(Article) {
                    var uriArticleURI = Article.isURIArticleURI(uri);
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
                var buttonDisplayed = this.isButtonDisplayed();
                if (!buttonDisplayed) {
                    instantly = true;
                }
                var collapsed = this.isCollapsed(), articlePresent = this.isArticlePresent(uri);
                if (!articlePresent) {
                    if (!collapsed) {
                        this.collapse(instantly);
                    }
                    return;
                }
                var _properties = this.properties, Articles = _properties.Articles, articles = this.getArticles(), initialHeight = this.getInitialHeight(collapsed);
                Articles.forEach(function(Article, index) {
                    var article = articles[index], uriArticleURI = Article.isURIArticleURI(uri);
                    uriArticleURI ? article.show() : article.hide();
                });
                this.disable(uri);
                this.expand(initialHeight, instantly);
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
                this.collapseDiv(instantly, (function() {
                    return this.enable();
                }).bind(this));
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _properties = this.properties, Articles = _properties.Articles, first = _properties.first, last = _properties.last, showArticle = _properties.showArticle, _Articles = _slicedToArray(Articles, 1), Article = _Articles[0], AccordionDiv = this.getAccordionDiv(), AccordionButton = this.getAccordionButton(), articles = Articles.map(function(Article1, index) {
                    /*#__PURE__*/ return React.createElement(Article1, {
                        index: index
                    });
                });
                return [
                    /*#__PURE__*/ React.createElement(AccordionButton, {
                        Article: Article,
                        first: first,
                        last: last,
                        showArticle: showArticle
                    }),
                    /*#__PURE__*/ React.createElement(AccordionDiv, null, articles)
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
_defineProperty(AccordionItem, "AccordionDiv", _accordion.default);
_defineProperty(AccordionItem, "AccordionButton", _accordion1.default);
_defineProperty(AccordionItem, "tagName", "li");
_defineProperty(AccordionItem, "defaultProperties", {
    className: "accordion"
});
exports.default = AccordionItem;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pdGVtL2FjY29yZGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBBY2NvcmRpb25EaXYgZnJvbSBcIi4uL2Rpdi9hY2NvcmRpb25cIjtcbmltcG9ydCBBY2NvcmRpb25CdXR0b24gZnJvbSBcIi4uL2J1dHRvbi9hY2NvcmRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3JkaW9uSXRlbSBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRBcnRpY2xlcygpIHtcbiAgICBjb25zdCBkZXNjZW5kYW50QXJ0aWNsZUVsZW1lbnRzID0gdGhpcy5nZXREZXNjZW5kYW50RWxlbWVudHMoXCJhcnRpY2xlXCIsIDIpLFxuICAgICAgICAgIGFydGljbGVzID0gZGVzY2VuZGFudEFydGljbGVFbGVtZW50czsgLy8vXG5cbiAgICByZXR1cm4gYXJ0aWNsZXM7XG4gIH1cblxuICBnZXRBY2NvcmRpb25EaXYoKSB7XG4gICAgY29uc3QgeyBBY2NvcmRpb25EaXYgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gQWNjb3JkaW9uRGl2O1xuICB9XG5cbiAgZ2V0QWNjb3JkaW9uQnV0dG9uKCkge1xuICAgIGNvbnN0IHsgQWNjb3JkaW9uQnV0dG9uIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIEFjY29yZGlvbkJ1dHRvbjtcbiAgfVxuXG4gIGdldEFydGljbGVJbmRleCh1cmkpIHtcbiAgICBjb25zdCB7IEFydGljbGVzIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgYXJ0aWNsZUluZGV4ID0gQXJ0aWNsZXMuZmluZEluZGV4KChBcnRpY2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cmlBcnRpY2xlVVJJID0gQXJ0aWNsZS5pc1VSSUFydGljbGVVUkkodXJpKTtcblxuICAgICAgICAgICAgaWYgKHVyaUFydGljbGVVUkkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gYXJ0aWNsZUluZGV4O1xuICB9XG5cbiAgZ2V0SW5pdGlhbEhlaWdodChjb2xsYXBzZWQpIHtcbiAgICBsZXQgaW5pdGlhbEhlaWdodDtcblxuICAgIGlmIChjb2xsYXBzZWQpIHtcbiAgICAgIGluaXRpYWxIZWlnaHQgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkaXZIZWlnaHQgPSB0aGlzLmdldERpdkhlaWdodCgpO1xuXG4gICAgICBpbml0aWFsSGVpZ2h0ID0gZGl2SGVpZ2h0OyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGluaXRpYWxIZWlnaHQ7XG4gIH1cblxuICBpc0FydGljbGVQcmVzZW50KHVyaSkge1xuICAgIGNvbnN0IGFydGljbGVJbmRleCA9IHRoaXMuZ2V0QXJ0aWNsZUluZGV4KHVyaSksXG4gICAgICAgICAgYXJ0aWNsZVByZXNlbnQgPSAoYXJ0aWNsZUluZGV4ICE9PSAtMSk7XG5cbiAgICByZXR1cm4gYXJ0aWNsZVByZXNlbnQ7XG4gIH1cblxuICB1cGRhdGUodXJpLCBpbnN0YW50bHkpIHtcbiAgICBjb25zdCBidXR0b25EaXNwbGF5ZWQgPSB0aGlzLmlzQnV0dG9uRGlzcGxheWVkKCk7XG5cbiAgICBpZiAoIWJ1dHRvbkRpc3BsYXllZCkge1xuICAgICAgaW5zdGFudGx5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBjb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCksXG4gICAgICAgICAgYXJ0aWNsZVByZXNlbnQgPSB0aGlzLmlzQXJ0aWNsZVByZXNlbnQodXJpKTtcblxuICAgIGlmICghYXJ0aWNsZVByZXNlbnQpIHtcbiAgICAgIGlmICghY29sbGFwc2VkKSB7XG4gICAgICAgIHRoaXMuY29sbGFwc2UoaW5zdGFudGx5KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgQXJ0aWNsZXMgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBhcnRpY2xlcyA9IHRoaXMuZ2V0QXJ0aWNsZXMoKSxcbiAgICAgICAgICBpbml0aWFsSGVpZ2h0ID0gdGhpcy5nZXRJbml0aWFsSGVpZ2h0KGNvbGxhcHNlZCk7XG5cbiAgICBBcnRpY2xlcy5mb3JFYWNoKChBcnRpY2xlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgYXJ0aWNsZSA9IGFydGljbGVzW2luZGV4XSxcbiAgICAgICAgICAgIHVyaUFydGljbGVVUkkgPSBBcnRpY2xlLmlzVVJJQXJ0aWNsZVVSSSh1cmkpO1xuXG4gICAgICB1cmlBcnRpY2xlVVJJID9cbiAgICAgICAgYXJ0aWNsZS5zaG93KCkgOlxuICAgICAgICAgIGFydGljbGUuaGlkZSgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kaXNhYmxlKHVyaSk7XG5cbiAgICB0aGlzLmV4cGFuZChpbml0aWFsSGVpZ2h0LCBpbnN0YW50bHkpO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuZW5hYmxlQnV0dG9uKCk7XG4gIH1cblxuICBkaXNhYmxlKHVyaSkge1xuICAgIGNvbnN0IGFydGljbGVJbmRleCA9IHRoaXMuZ2V0QXJ0aWNsZUluZGV4KHVyaSksXG4gICAgICAgICAgYXJ0aWNsZUZpcnN0QXJ0aWNsZSA9IChhcnRpY2xlSW5kZXggPT09IDApO1xuXG4gICAgYXJ0aWNsZUZpcnN0QXJ0aWNsZSA/XG4gICAgICB0aGlzLmRpc2FibGVCdXR0b24oKTpcbiAgICAgICAgdGhpcy5lbmFibGVCdXR0b24oKTtcbiAgfVxuXG4gIGV4cGFuZChpbml0aWFsSGVpZ2h0LCBpbnN0YW50bHkpIHtcbiAgICB0aGlzLmV4cGFuZERpdihpbml0aWFsSGVpZ2h0LCBpbnN0YW50bHkpO1xuICB9XG5cbiAgY29sbGFwc2UoaW5zdGFudGx5KSB7XG4gICAgdGhpcy5jb2xsYXBzZURpdihpbnN0YW50bHksICgpID0+IHRoaXMuZW5hYmxlKCkpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IEFydGljbGVzLCBmaXJzdCwgbGFzdCwgc2hvd0FydGljbGUgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBbIEFydGljbGUgXSA9IEFydGljbGVzLFxuICAgICAgICAgIEFjY29yZGlvbkRpdiA9IHRoaXMuZ2V0QWNjb3JkaW9uRGl2KCksXG4gICAgICAgICAgQWNjb3JkaW9uQnV0dG9uID0gdGhpcy5nZXRBY2NvcmRpb25CdXR0b24oKSxcbiAgICAgICAgICBhcnRpY2xlcyA9IEFydGljbGVzLm1hcCgoQXJ0aWNsZSwgaW5kZXgpID0+XG5cbiAgICAgICAgICAgIDxBcnRpY2xlIGluZGV4PXtpbmRleH0gLz5cblxuICAgICAgICAgICk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPEFjY29yZGlvbkJ1dHRvbiBBcnRpY2xlPXtBcnRpY2xlfSBmaXJzdD17Zmlyc3R9IGxhc3Q9e2xhc3R9IHNob3dBcnRpY2xlPXtzaG93QXJ0aWNsZX0gLz4sXG4gICAgICA8QWNjb3JkaW9uRGl2PlxuICAgICAgICB7YXJ0aWNsZXN9XG4gICAgICA8L0FjY29yZGlvbkRpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoW1xuICAgICAgXCJnZXREaXZIZWlnaHRcIixcbiAgICAgIFwicmVzaXplRGl2XCIsXG4gICAgICBcImV4cGFuZERpdlwiLFxuICAgICAgXCJpc0NvbGxhcHNlZFwiLFxuICAgICAgXCJjb2xsYXBzZURpdlwiLFxuICAgICAgXCJlbmFibGVCdXR0b25cIixcbiAgICAgIFwiZGlzYWJsZUJ1dHRvblwiLFxuICAgICAgXCJhY3RpdmF0ZUJ1dHRvblwiLFxuICAgICAgXCJkZWFjdGl2YXRlQnV0dG9uXCIsXG4gICAgICBcImlzQnV0dG9uRGlzcGxheWVkXCJcbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBBY2NvcmRpb25EaXYgPSBBY2NvcmRpb25EaXY7XG5cbiAgc3RhdGljIEFjY29yZGlvbkJ1dHRvbiA9IEFjY29yZGlvbkJ1dHRvbjtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwibGlcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImFjY29yZGlvblwiXG4gIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFWSxHQUFNLENBQU4sS0FBTTtBQUVMLEdBQWtCLENBQWxCLFVBQWtCO0FBQ2YsR0FBcUIsQ0FBckIsV0FBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU1QixhQUFhO2NBQWIsYUFBYTthQUFiLGFBQWE7OEJBQWIsYUFBYTtnRUFBYixhQUFhOztpQkFBYixhQUFhOztZQUNoQyxHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXLEdBQUcsQ0FBQztnQkFDYixHQUFLLENBQUMseUJBQXlCLFFBQVEscUJBQXFCLEVBQUMsT0FBUyxHQUFFLENBQUMsR0FDbkUsUUFBUSxHQUFHLHlCQUF5QixDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzt1QkFFeEMsUUFBUTtZQUNqQixDQUFDOzs7WUFFRCxHQUFlLEdBQWYsZUFBZTs0QkFBZixlQUFlLEdBQUcsQ0FBQztnQkFDakIsR0FBSyxDQUFvQixZQUFnQixRQUFYLFdBQVcsRUFBakMsWUFBWSxHQUFLLFlBQWdCLENBQWpDLFlBQVk7dUJBRWIsWUFBWTtZQUNyQixDQUFDOzs7WUFFRCxHQUFrQixHQUFsQixrQkFBa0I7NEJBQWxCLGtCQUFrQixHQUFHLENBQUM7Z0JBQ3BCLEdBQUssQ0FBdUIsWUFBZ0IsUUFBWCxXQUFXLEVBQXBDLGVBQWUsR0FB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