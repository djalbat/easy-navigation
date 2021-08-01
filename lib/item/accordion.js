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
            value: function update(uri, instantly, callback) {
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
                this.expand(initialHeight, instantly, callback);
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
            value: function expand(initialHeight, instantly, callback) {
                this.expandDiv(initialHeight, instantly, callback);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pdGVtL2FjY29yZGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBBY2NvcmRpb25EaXYgZnJvbSBcIi4uL2Rpdi9hY2NvcmRpb25cIjtcbmltcG9ydCBBY2NvcmRpb25CdXR0b24gZnJvbSBcIi4uL2J1dHRvbi9hY2NvcmRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3JkaW9uSXRlbSBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRBcnRpY2xlcygpIHtcbiAgICBjb25zdCBkZXNjZW5kYW50QXJ0aWNsZUVsZW1lbnRzID0gdGhpcy5nZXREZXNjZW5kYW50RWxlbWVudHMoXCJhcnRpY2xlXCIsIDIpLFxuICAgICAgICAgIGFydGljbGVzID0gZGVzY2VuZGFudEFydGljbGVFbGVtZW50czsgLy8vXG5cbiAgICByZXR1cm4gYXJ0aWNsZXM7XG4gIH1cblxuICBnZXRBY2NvcmRpb25EaXYoKSB7XG4gICAgY29uc3QgeyBBY2NvcmRpb25EaXYgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gQWNjb3JkaW9uRGl2O1xuICB9XG5cbiAgZ2V0QWNjb3JkaW9uQnV0dG9uKCkge1xuICAgIGNvbnN0IHsgQWNjb3JkaW9uQnV0dG9uIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIEFjY29yZGlvbkJ1dHRvbjtcbiAgfVxuXG4gIGdldEFydGljbGVJbmRleCh1cmkpIHtcbiAgICBjb25zdCB7IEFydGljbGVzIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgYXJ0aWNsZUluZGV4ID0gQXJ0aWNsZXMuZmluZEluZGV4KChBcnRpY2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cmlBcnRpY2xlVVJJID0gQXJ0aWNsZS5pc1VSSUFydGljbGVVUkkodXJpKTtcblxuICAgICAgICAgICAgaWYgKHVyaUFydGljbGVVUkkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gYXJ0aWNsZUluZGV4O1xuICB9XG5cbiAgZ2V0SW5pdGlhbEhlaWdodChjb2xsYXBzZWQpIHtcbiAgICBsZXQgaW5pdGlhbEhlaWdodDtcblxuICAgIGlmIChjb2xsYXBzZWQpIHtcbiAgICAgIGluaXRpYWxIZWlnaHQgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkaXZIZWlnaHQgPSB0aGlzLmdldERpdkhlaWdodCgpO1xuXG4gICAgICBpbml0aWFsSGVpZ2h0ID0gZGl2SGVpZ2h0OyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGluaXRpYWxIZWlnaHQ7XG4gIH1cblxuICBpc0FydGljbGVQcmVzZW50KHVyaSkge1xuICAgIGNvbnN0IGFydGljbGVJbmRleCA9IHRoaXMuZ2V0QXJ0aWNsZUluZGV4KHVyaSksXG4gICAgICAgICAgYXJ0aWNsZVByZXNlbnQgPSAoYXJ0aWNsZUluZGV4ICE9PSAtMSk7XG5cbiAgICByZXR1cm4gYXJ0aWNsZVByZXNlbnQ7XG4gIH1cblxuICB1cGRhdGUodXJpLCBpbnN0YW50bHksIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYnV0dG9uRGlzcGxheWVkID0gdGhpcy5pc0J1dHRvbkRpc3BsYXllZCgpO1xuXG4gICAgaWYgKCFidXR0b25EaXNwbGF5ZWQpIHtcbiAgICAgIGluc3RhbnRseSA9IHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgY29sbGFwc2VkID0gdGhpcy5pc0NvbGxhcHNlZCgpLFxuICAgICAgICAgIGFydGljbGVQcmVzZW50ID0gdGhpcy5pc0FydGljbGVQcmVzZW50KHVyaSk7XG5cbiAgICBpZiAoIWFydGljbGVQcmVzZW50KSB7XG4gICAgICBpZiAoIWNvbGxhcHNlZCkge1xuICAgICAgICB0aGlzLmNvbGxhcHNlKGluc3RhbnRseSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IEFydGljbGVzIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgYXJ0aWNsZXMgPSB0aGlzLmdldEFydGljbGVzKCksXG4gICAgICAgICAgaW5pdGlhbEhlaWdodCA9IHRoaXMuZ2V0SW5pdGlhbEhlaWdodChjb2xsYXBzZWQpO1xuXG4gICAgQXJ0aWNsZXMuZm9yRWFjaCgoQXJ0aWNsZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGFydGljbGUgPSBhcnRpY2xlc1tpbmRleF0sXG4gICAgICAgICAgICB1cmlBcnRpY2xlVVJJID0gQXJ0aWNsZS5pc1VSSUFydGljbGVVUkkodXJpKTtcblxuICAgICAgdXJpQXJ0aWNsZVVSSSA/XG4gICAgICAgIGFydGljbGUuc2hvdygpIDpcbiAgICAgICAgICBhcnRpY2xlLmhpZGUoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZGlzYWJsZSh1cmkpO1xuXG4gICAgdGhpcy5leHBhbmQoaW5pdGlhbEhlaWdodCwgaW5zdGFudGx5LCBjYWxsYmFjayk7XG4gIH1cblxuICBlbmFibGUoKSB7XG4gICAgdGhpcy5lbmFibGVCdXR0b24oKTtcbiAgfVxuXG4gIGRpc2FibGUodXJpKSB7XG4gICAgY29uc3QgYXJ0aWNsZUluZGV4ID0gdGhpcy5nZXRBcnRpY2xlSW5kZXgodXJpKSxcbiAgICAgICAgICBhcnRpY2xlRmlyc3RBcnRpY2xlID0gKGFydGljbGVJbmRleCA9PT0gMCk7XG5cbiAgICBhcnRpY2xlRmlyc3RBcnRpY2xlID9cbiAgICAgIHRoaXMuZGlzYWJsZUJ1dHRvbigpOlxuICAgICAgICB0aGlzLmVuYWJsZUJ1dHRvbigpO1xuICB9XG5cbiAgZXhwYW5kKGluaXRpYWxIZWlnaHQsIGluc3RhbnRseSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmV4cGFuZERpdihpbml0aWFsSGVpZ2h0LCBpbnN0YW50bHksIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGNvbGxhcHNlKGluc3RhbnRseSkge1xuICAgIHRoaXMuY29sbGFwc2VEaXYoaW5zdGFudGx5LCAoKSA9PiB0aGlzLmVuYWJsZSgpKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBBcnRpY2xlcywgZmlyc3QsIGxhc3QsIHNob3dBcnRpY2xlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgWyBBcnRpY2xlIF0gPSBBcnRpY2xlcyxcbiAgICAgICAgICBBY2NvcmRpb25EaXYgPSB0aGlzLmdldEFjY29yZGlvbkRpdigpLFxuICAgICAgICAgIEFjY29yZGlvbkJ1dHRvbiA9IHRoaXMuZ2V0QWNjb3JkaW9uQnV0dG9uKCksXG4gICAgICAgICAgYXJ0aWNsZXMgPSBBcnRpY2xlcy5tYXAoKEFydGljbGUsIGluZGV4KSA9PlxuXG4gICAgICAgICAgICA8QXJ0aWNsZSBpbmRleD17aW5kZXh9IC8+XG5cbiAgICAgICAgICApO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxBY2NvcmRpb25CdXR0b24gQXJ0aWNsZT17QXJ0aWNsZX0gZmlyc3Q9e2ZpcnN0fSBsYXN0PXtsYXN0fSBzaG93QXJ0aWNsZT17c2hvd0FydGljbGV9IC8+LFxuICAgICAgPEFjY29yZGlvbkRpdj5cbiAgICAgICAge2FydGljbGVzfVxuICAgICAgPC9BY2NvcmRpb25EaXY+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KFtcbiAgICAgIFwiZ2V0RGl2SGVpZ2h0XCIsXG4gICAgICBcInJlc2l6ZURpdlwiLFxuICAgICAgXCJleHBhbmREaXZcIixcbiAgICAgIFwiaXNDb2xsYXBzZWRcIixcbiAgICAgIFwiY29sbGFwc2VEaXZcIixcbiAgICAgIFwiZW5hYmxlQnV0dG9uXCIsXG4gICAgICBcImRpc2FibGVCdXR0b25cIixcbiAgICAgIFwiYWN0aXZhdGVCdXR0b25cIixcbiAgICAgIFwiZGVhY3RpdmF0ZUJ1dHRvblwiLFxuICAgICAgXCJpc0J1dHRvbkRpc3BsYXllZFwiXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgQWNjb3JkaW9uRGl2ID0gQWNjb3JkaW9uRGl2O1xuXG4gIHN0YXRpYyBBY2NvcmRpb25CdXR0b24gPSBBY2NvcmRpb25CdXR0b247XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImxpXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJhY2NvcmRpb25cIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVksR0FBTSxDQUFOLEtBQU07QUFFTCxHQUFrQixDQUFsQixVQUFrQjtBQUNmLEdBQXFCLENBQXJCLFdBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFNUIsYUFBYTtjQUFiLGFBQWE7YUFBYixhQUFhOzhCQUFiLGFBQWE7Z0VBQWIsYUFBYTs7aUJBQWIsYUFBYTs7WUFDaEMsR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVyxHQUFHLENBQUM7Z0JBQ2IsR0FBSyxDQUFDLHlCQUF5QixRQUFRLHFCQUFxQixFQUFDLE9BQVMsR0FBRSxDQUFDLEdBQ25FLFFBQVEsR0FBRyx5QkFBeUIsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7dUJBRXhDLFFBQVE7WUFDakIsQ0FBQzs7O1lBRUQsR0FBZSxHQUFmLGVBQWU7NEJBQWYsZUFBZSxHQUFHLENBQUM7Z0JBQ2pCLEdBQUssQ0FBb0IsWUFBZ0IsUUFBWCxXQUFXLEVBQWpDLFlBQVksR0FBSyxZQUFnQixDQUFqQyxZQUFZO3VCQUViLFlBQVk7WUFDckIsQ0FBQzs7O1lBRUQsR0FBa0IsR0FBbEIsa0JBQWtCOzRCQUFsQixrQkFBa0IsR0FBRyxDQUFDO2dCQUNwQixH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