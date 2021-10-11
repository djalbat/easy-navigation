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
                var maximumDepth = 2, descendantArticleElements = this.getDescendantElements("article", maximumDepth), articles = descendantArticleElements; ///
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pdGVtL2FjY29yZGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBBY2NvcmRpb25EaXYgZnJvbSBcIi4uL2Rpdi9hY2NvcmRpb25cIjtcbmltcG9ydCBBY2NvcmRpb25CdXR0b24gZnJvbSBcIi4uL2J1dHRvbi9hY2NvcmRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3JkaW9uSXRlbSBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRBcnRpY2xlcygpIHtcbiAgICBjb25zdCBtYXhpbXVtRGVwdGggPSAyLFxuICAgICAgICAgIGRlc2NlbmRhbnRBcnRpY2xlRWxlbWVudHMgPSB0aGlzLmdldERlc2NlbmRhbnRFbGVtZW50cyhcImFydGljbGVcIiwgbWF4aW11bURlcHRoKSxcbiAgICAgICAgICBhcnRpY2xlcyA9IGRlc2NlbmRhbnRBcnRpY2xlRWxlbWVudHM7IC8vL1xuXG4gICAgcmV0dXJuIGFydGljbGVzO1xuICB9XG5cbiAgZ2V0QWNjb3JkaW9uRGl2KCkge1xuICAgIGNvbnN0IHsgQWNjb3JkaW9uRGl2IH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIEFjY29yZGlvbkRpdjtcbiAgfVxuXG4gIGdldEFjY29yZGlvbkJ1dHRvbigpIHtcbiAgICBjb25zdCB7IEFjY29yZGlvbkJ1dHRvbiB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBBY2NvcmRpb25CdXR0b247XG4gIH1cblxuICBnZXRBcnRpY2xlSW5kZXgodXJpKSB7XG4gICAgY29uc3QgeyBBcnRpY2xlcyB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGFydGljbGVJbmRleCA9IEFydGljbGVzLmZpbmRJbmRleCgoQXJ0aWNsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXJpQXJ0aWNsZVVSSSA9IEFydGljbGUuaXNVUklBcnRpY2xlVVJJKHVyaSk7XG5cbiAgICAgICAgICAgIGlmICh1cmlBcnRpY2xlVVJJKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGFydGljbGVJbmRleDtcbiAgfVxuXG4gIGdldEluaXRpYWxIZWlnaHQoY29sbGFwc2VkKSB7XG4gICAgbGV0IGluaXRpYWxIZWlnaHQ7XG5cbiAgICBpZiAoY29sbGFwc2VkKSB7XG4gICAgICBpbml0aWFsSGVpZ2h0ID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGl2SGVpZ2h0ID0gdGhpcy5nZXREaXZIZWlnaHQoKTtcblxuICAgICAgaW5pdGlhbEhlaWdodCA9IGRpdkhlaWdodDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBpbml0aWFsSGVpZ2h0O1xuICB9XG5cbiAgaXNBcnRpY2xlUHJlc2VudCh1cmkpIHtcbiAgICBjb25zdCBhcnRpY2xlSW5kZXggPSB0aGlzLmdldEFydGljbGVJbmRleCh1cmkpLFxuICAgICAgICAgIGFydGljbGVQcmVzZW50ID0gKGFydGljbGVJbmRleCAhPT0gLTEpO1xuXG4gICAgcmV0dXJuIGFydGljbGVQcmVzZW50O1xuICB9XG5cbiAgdXBkYXRlKHVyaSwgaW5zdGFudGx5KSB7XG4gICAgY29uc3QgYnV0dG9uRGlzcGxheWVkID0gdGhpcy5pc0J1dHRvbkRpc3BsYXllZCgpO1xuXG4gICAgaWYgKCFidXR0b25EaXNwbGF5ZWQpIHtcbiAgICAgIGluc3RhbnRseSA9IHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgY29sbGFwc2VkID0gdGhpcy5pc0NvbGxhcHNlZCgpLFxuICAgICAgICAgIGFydGljbGVQcmVzZW50ID0gdGhpcy5pc0FydGljbGVQcmVzZW50KHVyaSk7XG5cbiAgICBpZiAoIWFydGljbGVQcmVzZW50KSB7XG4gICAgICBpZiAoIWNvbGxhcHNlZCkge1xuICAgICAgICB0aGlzLmNvbGxhcHNlKGluc3RhbnRseSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IEFydGljbGVzIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgYXJ0aWNsZXMgPSB0aGlzLmdldEFydGljbGVzKCksXG4gICAgICAgICAgaW5pdGlhbEhlaWdodCA9IHRoaXMuZ2V0SW5pdGlhbEhlaWdodChjb2xsYXBzZWQpO1xuXG4gICAgQXJ0aWNsZXMuZm9yRWFjaCgoQXJ0aWNsZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGFydGljbGUgPSBhcnRpY2xlc1tpbmRleF0sXG4gICAgICAgICAgICB1cmlBcnRpY2xlVVJJID0gQXJ0aWNsZS5pc1VSSUFydGljbGVVUkkodXJpKTtcblxuICAgICAgdXJpQXJ0aWNsZVVSSSA/XG4gICAgICAgIGFydGljbGUuc2hvdygpIDpcbiAgICAgICAgICBhcnRpY2xlLmhpZGUoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZGlzYWJsZSh1cmkpO1xuXG4gICAgdGhpcy5leHBhbmQoaW5pdGlhbEhlaWdodCwgaW5zdGFudGx5KTtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLmVuYWJsZUJ1dHRvbigpO1xuICB9XG5cbiAgZGlzYWJsZSh1cmkpIHtcbiAgICBjb25zdCBhcnRpY2xlSW5kZXggPSB0aGlzLmdldEFydGljbGVJbmRleCh1cmkpLFxuICAgICAgICAgIGFydGljbGVGaXJzdEFydGljbGUgPSAoYXJ0aWNsZUluZGV4ID09PSAwKTtcblxuICAgIGFydGljbGVGaXJzdEFydGljbGUgP1xuICAgICAgdGhpcy5kaXNhYmxlQnV0dG9uKCk6XG4gICAgICAgIHRoaXMuZW5hYmxlQnV0dG9uKCk7XG4gIH1cblxuICBleHBhbmQoaW5pdGlhbEhlaWdodCwgaW5zdGFudGx5KSB7XG4gICAgdGhpcy5leHBhbmREaXYoaW5pdGlhbEhlaWdodCwgaW5zdGFudGx5KTtcbiAgfVxuXG4gIGNvbGxhcHNlKGluc3RhbnRseSkge1xuICAgIHRoaXMuY29sbGFwc2VEaXYoaW5zdGFudGx5LCAoKSA9PiB0aGlzLmVuYWJsZSgpKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBBcnRpY2xlcywgZmlyc3QsIGxhc3QsIHNob3dBcnRpY2xlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgWyBBcnRpY2xlIF0gPSBBcnRpY2xlcyxcbiAgICAgICAgICBBY2NvcmRpb25EaXYgPSB0aGlzLmdldEFjY29yZGlvbkRpdigpLFxuICAgICAgICAgIEFjY29yZGlvbkJ1dHRvbiA9IHRoaXMuZ2V0QWNjb3JkaW9uQnV0dG9uKCksXG4gICAgICAgICAgYXJ0aWNsZXMgPSBBcnRpY2xlcy5tYXAoKEFydGljbGUsIGluZGV4KSA9PlxuXG4gICAgICAgICAgICA8QXJ0aWNsZSBpbmRleD17aW5kZXh9IC8+XG5cbiAgICAgICAgICApO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxBY2NvcmRpb25CdXR0b24gQXJ0aWNsZT17QXJ0aWNsZX0gZmlyc3Q9e2ZpcnN0fSBsYXN0PXtsYXN0fSBzaG93QXJ0aWNsZT17c2hvd0FydGljbGV9IC8+LFxuICAgICAgPEFjY29yZGlvbkRpdj5cbiAgICAgICAge2FydGljbGVzfVxuICAgICAgPC9BY2NvcmRpb25EaXY+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KFtcbiAgICAgIFwiZ2V0RGl2SGVpZ2h0XCIsXG4gICAgICBcInJlc2l6ZURpdlwiLFxuICAgICAgXCJleHBhbmREaXZcIixcbiAgICAgIFwiaXNDb2xsYXBzZWRcIixcbiAgICAgIFwiY29sbGFwc2VEaXZcIixcbiAgICAgIFwiZW5hYmxlQnV0dG9uXCIsXG4gICAgICBcImRpc2FibGVCdXR0b25cIixcbiAgICAgIFwiYWN0aXZhdGVCdXR0b25cIixcbiAgICAgIFwiZGVhY3RpdmF0ZUJ1dHRvblwiLFxuICAgICAgXCJpc0J1dHRvbkRpc3BsYXllZFwiXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgQWNjb3JkaW9uRGl2ID0gQWNjb3JkaW9uRGl2O1xuXG4gIHN0YXRpYyBBY2NvcmRpb25CdXR0b24gPSBBY2NvcmRpb25CdXR0b247XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImxpXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJhY2NvcmRpb25cIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVksR0FBTSxDQUFOLEtBQU07QUFFTCxHQUFrQixDQUFsQixVQUFrQjtBQUNmLEdBQXFCLENBQXJCLFdBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFNUIsYUFBYTtjQUFiLGFBQWE7YUFBYixhQUFhOzhCQUFiLGFBQWE7Z0VBQWIsYUFBYTs7aUJBQWIsYUFBYTs7WUFDaEMsR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVyxHQUFHLENBQUM7Z0JBQ2IsR0FBSyxDQUFDLFlBQVksR0FBRyxDQUFDLEVBQ2hCLHlCQUF5QixRQUFRLHFCQUFxQixFQUFDLE9BQVMsR0FBRSxZQUFZLEdBQzlFLFFBQVEsR0FBRyx5QkFBeUIsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7dUJBRXhDLFFBQVE7WUFDakIsQ0FBQzs7O1lBRUQsR0FBZSxHQUFmLGVBQWU7NEJBQWYsZUFBZSxHQUFHLENBQUM7Z0JBQ2pCLEdBQUssQ0FBb0IsWUFBZ0IsUUFBWCxXQUFXLEVBQWpDLFlBQVksR0FBSyxZQUFnQixDQUFqQyxZQUFZO3VCQUViLFlBQVk7WUFDckIsQ0FBQzs7O1lBRUQsR0FBa0IsR0FBbEIsa0JBQWtCOzRCQUFsQixrQkFBa0IsR0FBRyxDQUFDO2dCQUNwQixHQUFLLENBQXVCLFlBQWdCLFFBQVgsV0FBVyxFQUFwQyxlQUFlLEdBQUssWUFBZ0IsQ0FBcEMsZUFBZTt1QkFFaEIsZUFBZTtZQUN4QixDQUFDOzs7WUFFRCxHQUFlLEdBQWYsZUFBZTs0QkFBZixlQUFlLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ3BCLEdBQUssQ0FBZ0IsV0FBZSxRQUFWLFVBQVUsRUFBNUIsUUFBUSxHQUFLLFdBQWUsQ0FBNUIsUUFBUSxFQUNWLFlBQVksR0FBRyxRQUFRLENBQUMsU0FBUyxVQUFFLE9BQU8sRUFBSyxDQUFDO29CQUM5QyxHQUFLLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsR0FBRztvQkFFakQsRUFBRSxFQUFFLGFBQWEsRUFBRSxDQUFDOytCQUNYLElBQUk7b0JBQ2IsQ0FBQztnQkFDSCxDQUFDO3VCQUVBLFlBQVk7WUFDckIsQ0FBQzs7O1lBRUQsR0FBZ0IsR0FBaEIsZ0JBQWdCOzRCQUFoQixnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDM0IsR0FBRyxDQUFDLGFBQWE7Z0JBRWpCLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQztvQkFDZCxhQUFhLEdBQUcsQ0FBQztnQkFDbkIsQ0FBQyxNQUFNLENBQUM7b0JBQ04sR0FBSyxDQUFDLFNBQVMsUUFBUSxZQUFZO29CQUVuQyxhQUFhLEdBQUcsU0FBUyxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFDakMsQ0FBQzt1QkFFTSxhQUFhO1lBQ3RCLENBQUM7OztZQUVELEdBQWdCLEdBQWhCLGdCQUFnQjs0QkFBaEIsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ3JCLEdBQUssQ0FBQyxZQUFZLFFBQVEsZUFBZSxDQUFDLEdBQUcsR0FDdkMsY0FBYyxHQUFJLFlBQVksTUFBTSxDQUFDO3VCQUVwQyxjQUFjO1lBQ3ZCLENBQUM7OztZQUVELEdBQU0sR0FBTixNQUFNOzRCQUFOLE1BQU0sQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUM7Z0JBQ3RCLEdBQUssQ0FBQyxlQUFlLFFBQVEsaUJBQWlCO2dCQUU5QyxFQUFFLEdBQUcsZUFBZSxFQUFFLENBQUM7b0JBQ3JCLFNBQVMsR0FBRyxJQUFJO2dCQUNsQixDQUFDO2dCQUVELEdBQUssQ0FBQyxTQUFTLFFBQVEsV0FBVyxJQUM1QixjQUFjLFFBQVEsZ0JBQWdCLENBQUMsR0FBRztnQkFFaEQsRUFBRSxHQUFHLGNBQWMsRUFBRSxDQUFDO29CQUNwQixFQUFFLEdBQUcsU0FBUyxFQUFFLENBQUM7NkJBQ1YsUUFBUSxDQUFDLFNBQVM7b0JBQ3pCLENBQUM7O2dCQUdILENBQUM7Z0JBRUQsR0FBSyxDQUFnQixXQUFlLFFBQVYsVUFBVSxFQUE1QixRQUFRLEdBQUssV0FBZSxDQUE1QixRQUFRLEVBQ1YsUUFBUSxRQUFRLFdBQVcsSUFDM0IsYUFBYSxRQUFRLGdCQUFnQixDQUFDLFNBQVM7Z0JBRXJELFFBQVEsQ0FBQyxPQUFPLFVBQUUsT0FBTyxFQUFFLEtBQUssRUFBSyxDQUFDO29CQUNwQyxHQUFLLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEdBQ3hCLGFBQWEsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLEdBQUc7b0JBRWpELGFBQWEsR0FDWCxPQUFPLENBQUMsSUFBSSxLQUNWLE9BQU8sQ0FBQyxJQUFJO2dCQUNsQixDQUFDO3FCQUVJLE9BQU8sQ0FBQyxHQUFHO3FCQUVYLE1BQU0sQ0FBQyxhQUFhLEVBQUUsU0FBUztZQUN0QyxDQUFDOzs7WUFFRCxHQUFNLEdBQU4sTUFBTTs0QkFBTixNQUFNLEdBQUcsQ0FBQztxQkFDSCxZQUFZO1lBQ25CLENBQUM7OztZQUVELEdBQU8sR0FBUCxPQUFPOzRCQUFQLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDWixHQUFLLENBQUMsWUFBWSxRQUFRLGVBQWUsQ0FBQyxHQUFHLEdBQ3ZDLG1CQUFtQixHQUFJLFlBQVksS0FBSyxDQUFDO2dCQUUvQyxtQkFBbUIsUUFDWixhQUFhLFVBQ1gsWUFBWTtZQUN2QixDQUFDOzs7WUFFRCxHQUFNLEdBQU4sTUFBTTs0QkFBTixNQUFNLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxDQUFDO3FCQUMzQixTQUFTLENBQUMsYUFBYSxFQUFFLFNBQVM7WUFDekMsQ0FBQzs7O1lBRUQsR0FBUSxHQUFSLFFBQVE7NEJBQVIsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDO3FCQUNkLFdBQVcsQ0FBQyxTQUFTO2dDQUFhLE1BQU07O1lBQy9DLENBQUM7OztZQUVELEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWEsR0FBRyxDQUFDO2dCQUNmLEdBQUssQ0FBMEMsV0FBZSxRQUFWLFVBQVUsRUFBdEQsUUFBUSxHQUErQixXQUFlLENBQXRELFFBQVEsRUFBRSxLQUFLLEdBQXdCLFdBQWUsQ0FBNUMsS0FBSyxFQUFFLElBQUksR0FBa0IsV0FBZSxDQUFyQyxJQUFJLEVBQUUsV0FBVyxHQUFLLFdBQWUsQ0FBL0IsV0FBVyxFQUN0QixTQUFRLGtCQUFSLFFBQVEsTUFBcEIsT0FBTyxHQUFLLFNBQVEsS0FDdEIsWUFBWSxRQUFRLGVBQWUsSUFDbkMsZUFBZSxRQUFRLGtCQUFrQixJQUN6QyxRQUFRLEdBQUcsUUFBUSxDQUFDLEdBQUcsVUFBRSxRQUFPLEVBQUUsS0FBSzs2REFFcEMsUUFBTzt3QkFBQyxLQUFLLEVBQUUsS0FBSzs7OztzREFNMUIsZUFBZTt3QkFBQyxPQUFPLEVBQUUsT0FBTzt3QkFBRSxLQUFLLEVBQUUsS0FBSzt3QkFBRSxJQUFJLEVBQUUsSUFBSTt3QkFBRSxXQUFXLEVBQUUsV0FBVzs7c0RBQ3BGLFlBQVksUUFDVixRQUFROztZQUlmLENBQUM7OztZQUVELEdBQVUsR0FBVixVQUFVOzRCQUFWLFVBQVUsR0FBRyxDQUFDO3FCQUNQLGFBQWE7cUJBQ2hCLFlBQWM7cUJBQ2QsU0FBVztxQkFDWCxTQUFXO3FCQUNYLFdBQWE7cUJBQ2IsV0FBYTtxQkFDYixZQUFjO3FCQUNkLGFBQWU7cUJBQ2YsY0FBZ0I7cUJBQ2hCLGdCQUFrQjtxQkFDbEIsaUJBQW1COztZQUV2QixDQUFDOzs7V0FsSmtCLGFBQWE7bUJBTFYsS0FBTTtnQkFLVCxhQUFhLEdBb0p6QixZQUFZLEdBdkpJLFVBQWtCO2dCQUd0QixhQUFhLEdBc0p6QixlQUFlLEdBeEpJLFdBQXFCO2dCQUU1QixhQUFhLEdBd0p6QixPQUFPLElBQUcsRUFBSTtnQkF4SkYsYUFBYSxHQTBKekIsaUJBQWlCO0lBQ3RCLFNBQVMsR0FBRSxTQUFXOztrQkEzSkwsYUFBYSJ9