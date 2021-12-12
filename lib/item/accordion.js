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
                var AccordionDiv = this.constructor.AccordionDiv;
                return AccordionDiv;
            }
        },
        {
            key: "getAccordionButton",
            value: function getAccordionButton() {
                var AccordionButton = this.constructor.AccordionButton;
                return AccordionButton;
            }
        },
        {
            key: "getArticleIndex",
            value: function getArticleIndex(uri) {
                var Articles = this.properties.Articles, articleIndex = Articles.findIndex(function(Article) {
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
                var Articles = this.properties.Articles, articles = this.getArticles(), initialHeight = this.getInitialHeight(collapsed);
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
                var _this = this;
                this.collapseDiv(instantly, function() {
                    return _this.enable();
                });
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _properties = this.properties, Articles = _properties.Articles, first = _properties.first, last = _properties.last, showArticle = _properties.showArticle, _Articles = _slicedToArray(Articles, 1), Article1 = _Articles[0], AccordionDiv = this.getAccordionDiv(), AccordionButton = this.getAccordionButton(), articles = Articles.map(function(Article, index) {
                    /*#__PURE__*/ return React.createElement(Article, {
                        index: index
                    });
                });
                return [
                    /*#__PURE__*/ React.createElement(AccordionButton, {
                        Article: Article1,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pdGVtL2FjY29yZGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBBY2NvcmRpb25EaXYgZnJvbSBcIi4uL2Rpdi9hY2NvcmRpb25cIjtcbmltcG9ydCBBY2NvcmRpb25CdXR0b24gZnJvbSBcIi4uL2J1dHRvbi9hY2NvcmRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3JkaW9uSXRlbSBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRBcnRpY2xlcygpIHtcbiAgICBjb25zdCBtYXhpbXVtRGVwdGggPSAyLFxuICAgICAgICAgIGRlc2NlbmRhbnRBcnRpY2xlRWxlbWVudHMgPSB0aGlzLmdldERlc2NlbmRhbnRFbGVtZW50cyhcImFydGljbGVcIiwgbWF4aW11bURlcHRoKSxcbiAgICAgICAgICBhcnRpY2xlcyA9IGRlc2NlbmRhbnRBcnRpY2xlRWxlbWVudHM7IC8vL1xuXG4gICAgcmV0dXJuIGFydGljbGVzO1xuICB9XG5cbiAgZ2V0QWNjb3JkaW9uRGl2KCkge1xuICAgIGNvbnN0IHsgQWNjb3JkaW9uRGl2IH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIEFjY29yZGlvbkRpdjtcbiAgfVxuXG4gIGdldEFjY29yZGlvbkJ1dHRvbigpIHtcbiAgICBjb25zdCB7IEFjY29yZGlvbkJ1dHRvbiB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBBY2NvcmRpb25CdXR0b247XG4gIH1cblxuICBnZXRBcnRpY2xlSW5kZXgodXJpKSB7XG4gICAgY29uc3QgeyBBcnRpY2xlcyB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGFydGljbGVJbmRleCA9IEFydGljbGVzLmZpbmRJbmRleCgoQXJ0aWNsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXJpQXJ0aWNsZVVSSSA9IEFydGljbGUuaXNVUklBcnRpY2xlVVJJKHVyaSk7XG5cbiAgICAgICAgICAgIGlmICh1cmlBcnRpY2xlVVJJKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGFydGljbGVJbmRleDtcbiAgfVxuXG4gIGdldEluaXRpYWxIZWlnaHQoY29sbGFwc2VkKSB7XG4gICAgbGV0IGluaXRpYWxIZWlnaHQ7XG5cbiAgICBpZiAoY29sbGFwc2VkKSB7XG4gICAgICBpbml0aWFsSGVpZ2h0ID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGl2SGVpZ2h0ID0gdGhpcy5nZXREaXZIZWlnaHQoKTtcblxuICAgICAgaW5pdGlhbEhlaWdodCA9IGRpdkhlaWdodDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBpbml0aWFsSGVpZ2h0O1xuICB9XG5cbiAgaXNBcnRpY2xlUHJlc2VudCh1cmkpIHtcbiAgICBjb25zdCBhcnRpY2xlSW5kZXggPSB0aGlzLmdldEFydGljbGVJbmRleCh1cmkpLFxuICAgICAgICAgIGFydGljbGVQcmVzZW50ID0gKGFydGljbGVJbmRleCAhPT0gLTEpO1xuXG4gICAgcmV0dXJuIGFydGljbGVQcmVzZW50O1xuICB9XG5cbiAgdXBkYXRlKHVyaSwgaW5zdGFudGx5KSB7XG4gICAgY29uc3QgYnV0dG9uRGlzcGxheWVkID0gdGhpcy5pc0J1dHRvbkRpc3BsYXllZCgpO1xuXG4gICAgaWYgKCFidXR0b25EaXNwbGF5ZWQpIHtcbiAgICAgIGluc3RhbnRseSA9IHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgY29sbGFwc2VkID0gdGhpcy5pc0NvbGxhcHNlZCgpLFxuICAgICAgICAgIGFydGljbGVQcmVzZW50ID0gdGhpcy5pc0FydGljbGVQcmVzZW50KHVyaSk7XG5cbiAgICBpZiAoIWFydGljbGVQcmVzZW50KSB7XG4gICAgICBpZiAoIWNvbGxhcHNlZCkge1xuICAgICAgICB0aGlzLmNvbGxhcHNlKGluc3RhbnRseSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IEFydGljbGVzIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgYXJ0aWNsZXMgPSB0aGlzLmdldEFydGljbGVzKCksXG4gICAgICAgICAgaW5pdGlhbEhlaWdodCA9IHRoaXMuZ2V0SW5pdGlhbEhlaWdodChjb2xsYXBzZWQpO1xuXG4gICAgQXJ0aWNsZXMuZm9yRWFjaCgoQXJ0aWNsZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGFydGljbGUgPSBhcnRpY2xlc1tpbmRleF0sXG4gICAgICAgICAgICB1cmlBcnRpY2xlVVJJID0gQXJ0aWNsZS5pc1VSSUFydGljbGVVUkkodXJpKTtcblxuICAgICAgdXJpQXJ0aWNsZVVSSSA/XG4gICAgICAgIGFydGljbGUuc2hvdygpIDpcbiAgICAgICAgICBhcnRpY2xlLmhpZGUoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZGlzYWJsZSh1cmkpO1xuXG4gICAgdGhpcy5leHBhbmQoaW5pdGlhbEhlaWdodCwgaW5zdGFudGx5KTtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLmVuYWJsZUJ1dHRvbigpO1xuICB9XG5cbiAgZGlzYWJsZSh1cmkpIHtcbiAgICBjb25zdCBhcnRpY2xlSW5kZXggPSB0aGlzLmdldEFydGljbGVJbmRleCh1cmkpLFxuICAgICAgICAgIGFydGljbGVGaXJzdEFydGljbGUgPSAoYXJ0aWNsZUluZGV4ID09PSAwKTtcblxuICAgIGFydGljbGVGaXJzdEFydGljbGUgP1xuICAgICAgdGhpcy5kaXNhYmxlQnV0dG9uKCk6XG4gICAgICAgIHRoaXMuZW5hYmxlQnV0dG9uKCk7XG4gIH1cblxuICBleHBhbmQoaW5pdGlhbEhlaWdodCwgaW5zdGFudGx5KSB7XG4gICAgdGhpcy5leHBhbmREaXYoaW5pdGlhbEhlaWdodCwgaW5zdGFudGx5KTtcbiAgfVxuXG4gIGNvbGxhcHNlKGluc3RhbnRseSkge1xuICAgIHRoaXMuY29sbGFwc2VEaXYoaW5zdGFudGx5LCAoKSA9PiB0aGlzLmVuYWJsZSgpKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBBcnRpY2xlcywgZmlyc3QsIGxhc3QsIHNob3dBcnRpY2xlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgWyBBcnRpY2xlIF0gPSBBcnRpY2xlcyxcbiAgICAgICAgICBBY2NvcmRpb25EaXYgPSB0aGlzLmdldEFjY29yZGlvbkRpdigpLFxuICAgICAgICAgIEFjY29yZGlvbkJ1dHRvbiA9IHRoaXMuZ2V0QWNjb3JkaW9uQnV0dG9uKCksXG4gICAgICAgICAgYXJ0aWNsZXMgPSBBcnRpY2xlcy5tYXAoKEFydGljbGUsIGluZGV4KSA9PlxuXG4gICAgICAgICAgICA8QXJ0aWNsZSBpbmRleD17aW5kZXh9IC8+XG5cbiAgICAgICAgICApO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxBY2NvcmRpb25CdXR0b24gQXJ0aWNsZT17QXJ0aWNsZX0gZmlyc3Q9e2ZpcnN0fSBsYXN0PXtsYXN0fSBzaG93QXJ0aWNsZT17c2hvd0FydGljbGV9IC8+LFxuICAgICAgPEFjY29yZGlvbkRpdj5cbiAgICAgICAge2FydGljbGVzfVxuICAgICAgPC9BY2NvcmRpb25EaXY+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KFtcbiAgICAgIFwiZ2V0RGl2SGVpZ2h0XCIsXG4gICAgICBcInJlc2l6ZURpdlwiLFxuICAgICAgXCJleHBhbmREaXZcIixcbiAgICAgIFwiaXNDb2xsYXBzZWRcIixcbiAgICAgIFwiY29sbGFwc2VEaXZcIixcbiAgICAgIFwiZW5hYmxlQnV0dG9uXCIsXG4gICAgICBcImRpc2FibGVCdXR0b25cIixcbiAgICAgIFwiYWN0aXZhdGVCdXR0b25cIixcbiAgICAgIFwiZGVhY3RpdmF0ZUJ1dHRvblwiLFxuICAgICAgXCJpc0J1dHRvbkRpc3BsYXllZFwiXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgQWNjb3JkaW9uRGl2ID0gQWNjb3JkaW9uRGl2O1xuXG4gIHN0YXRpYyBBY2NvcmRpb25CdXR0b24gPSBBY2NvcmRpb25CdXR0b247XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImxpXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJhY2NvcmRpb25cIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkFjY29yZGlvbkl0ZW0iLCJnZXRBcnRpY2xlcyIsIm1heGltdW1EZXB0aCIsImRlc2NlbmRhbnRBcnRpY2xlRWxlbWVudHMiLCJnZXREZXNjZW5kYW50RWxlbWVudHMiLCJhcnRpY2xlcyIsImdldEFjY29yZGlvbkRpdiIsIkFjY29yZGlvbkRpdiIsImNvbnN0cnVjdG9yIiwiZ2V0QWNjb3JkaW9uQnV0dG9uIiwiQWNjb3JkaW9uQnV0dG9uIiwiZ2V0QXJ0aWNsZUluZGV4IiwidXJpIiwiQXJ0aWNsZXMiLCJwcm9wZXJ0aWVzIiwiYXJ0aWNsZUluZGV4IiwiZmluZEluZGV4IiwiQXJ0aWNsZSIsInVyaUFydGljbGVVUkkiLCJpc1VSSUFydGljbGVVUkkiLCJnZXRJbml0aWFsSGVpZ2h0IiwiY29sbGFwc2VkIiwiaW5pdGlhbEhlaWdodCIsImRpdkhlaWdodCIsImdldERpdkhlaWdodCIsImlzQXJ0aWNsZVByZXNlbnQiLCJhcnRpY2xlUHJlc2VudCIsInVwZGF0ZSIsImluc3RhbnRseSIsImJ1dHRvbkRpc3BsYXllZCIsImlzQnV0dG9uRGlzcGxheWVkIiwiaXNDb2xsYXBzZWQiLCJjb2xsYXBzZSIsImZvckVhY2giLCJpbmRleCIsImFydGljbGUiLCJzaG93IiwiaGlkZSIsImRpc2FibGUiLCJleHBhbmQiLCJlbmFibGUiLCJlbmFibGVCdXR0b24iLCJhcnRpY2xlRmlyc3RBcnRpY2xlIiwiZGlzYWJsZUJ1dHRvbiIsImV4cGFuZERpdiIsImNvbGxhcHNlRGl2IiwiY2hpbGRFbGVtZW50cyIsImZpcnN0IiwibGFzdCIsInNob3dBcnRpY2xlIiwibWFwIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVksR0FBTSxDQUFOLEtBQU07QUFFTCxHQUFrQixDQUFsQixVQUFrQjtBQUNmLEdBQXFCLENBQXJCLFdBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTVCQSxhQUFhLGlCQUFuQixRQUFRO2NBQUZBLGFBQWE7OEJBQWJBLGFBQWE7YUFBYkEsYUFBYTs4QkFBYkEsYUFBYTs7O2lCQUFiQSxhQUFhOztZQUNoQ0MsR0FBVyxFQUFYQSxDQUFXO21CQUFYQSxRQUFRLENBQVJBLFdBQVcsR0FBRyxDQUFDO2dCQUNiLEdBQUssQ0FBQ0MsWUFBWSxHQUFHLENBQUMsRUFDaEJDLHlCQUF5QixHQUFHLElBQUksQ0FBQ0MscUJBQXFCLENBQUMsQ0FBUyxVQUFFRixZQUFZLEdBQzlFRyxRQUFRLEdBQUdGLHlCQUF5QixDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFL0MsTUFBTSxDQUFDRSxRQUFRO1lBQ2pCLENBQUM7OztZQUVEQyxHQUFlLEVBQWZBLENBQWU7bUJBQWZBLFFBQVEsQ0FBUkEsZUFBZSxHQUFHLENBQUM7Z0JBQ2pCLEdBQUssQ0FBR0MsWUFBWSxHQUFLLElBQUksQ0FBQ0MsV0FBVyxDQUFqQ0QsWUFBWTtnQkFFcEIsTUFBTSxDQUFDQSxZQUFZO1lBQ3JCLENBQUM7OztZQUVERSxHQUFrQixFQUFsQkEsQ0FBa0I7bUJBQWxCQSxRQUFRLENBQVJBLGtCQUFrQixHQUFHLENBQUM7Z0JBQ3BCLEdBQUssQ0FBR0MsZUFBZSxHQUFLLElBQUksQ0FBQ0YsV0FBVyxDQUFwQ0UsZUFBZTtnQkFFdkIsTUFBTSxDQUFDQSxlQUFlO1lBQ3hCLENBQUM7OztZQUVEQyxHQUFlLEVBQWZBLENBQWU7bUJBQWZBLFFBQVEsQ0FBUkEsZUFBZSxDQUFDQyxHQUFHLEVBQUUsQ0FBQztnQkFDcEIsR0FBSyxDQUFHQyxRQUFRLEdBQUssSUFBSSxDQUFDQyxVQUFVLENBQTVCRCxRQUFRLEVBQ1ZFLFlBQVksR0FBR0YsUUFBUSxDQUFDRyxTQUFTLENBQUMsUUFBUSxDQUFQQyxPQUFPLEVBQUssQ0FBQztvQkFDOUMsR0FBSyxDQUFDQyxhQUFhLEdBQUdELE9BQU8sQ0FBQ0UsZUFBZSxDQUFDUCxHQUFHO29CQUVqRCxFQUFFLEVBQUVNLGFBQWEsRUFBRSxDQUFDO3dCQUNsQixNQUFNLENBQUMsSUFBSTtvQkFDYixDQUFDO2dCQUNILENBQUM7Z0JBRVAsTUFBTSxDQUFDSCxZQUFZO1lBQ3JCLENBQUM7OztZQUVESyxHQUFnQixFQUFoQkEsQ0FBZ0I7bUJBQWhCQSxRQUFRLENBQVJBLGdCQUFnQixDQUFDQyxTQUFTLEVBQUUsQ0FBQztnQkFDM0IsR0FBRyxDQUFDQyxhQUFhO2dCQUVqQixFQUFFLEVBQUVELFNBQVMsRUFBRSxDQUFDO29CQUNkQyxhQUFhLEdBQUcsQ0FBQztnQkFDbkIsQ0FBQyxNQUFNLENBQUM7b0JBQ04sR0FBSyxDQUFDQyxTQUFTLEdBQUcsSUFBSSxDQUFDQyxZQUFZO29CQUVuQ0YsYUFBYSxHQUFHQyxTQUFTLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUNqQyxDQUFDO2dCQUVELE1BQU0sQ0FBQ0QsYUFBYTtZQUN0QixDQUFDOzs7WUFFREcsR0FBZ0IsRUFBaEJBLENBQWdCO21CQUFoQkEsUUFBUSxDQUFSQSxnQkFBZ0IsQ0FBQ2IsR0FBRyxFQUFFLENBQUM7Z0JBQ3JCLEdBQUssQ0FBQ0csWUFBWSxHQUFHLElBQUksQ0FBQ0osZUFBZSxDQUFDQyxHQUFHLEdBQ3ZDYyxjQUFjLEdBQUlYLFlBQVksTUFBTSxDQUFDO2dCQUUzQyxNQUFNLENBQUNXLGNBQWM7WUFDdkIsQ0FBQzs7O1lBRURDLEdBQU0sRUFBTkEsQ0FBTTttQkFBTkEsUUFBUSxDQUFSQSxNQUFNLENBQUNmLEdBQUcsRUFBRWdCLFNBQVMsRUFBRSxDQUFDO2dCQUN0QixHQUFLLENBQUNDLGVBQWUsR0FBRyxJQUFJLENBQUNDLGlCQUFpQjtnQkFFOUMsRUFBRSxHQUFHRCxlQUFlLEVBQUUsQ0FBQztvQkFDckJELFNBQVMsR0FBRyxJQUFJO2dCQUNsQixDQUFDO2dCQUVELEdBQUssQ0FBQ1AsU0FBUyxHQUFHLElBQUksQ0FBQ1UsV0FBVyxJQUM1QkwsY0FBYyxHQUFHLElBQUksQ0FBQ0QsZ0JBQWdCLENBQUNiLEdBQUc7Z0JBRWhELEVBQUUsR0FBR2MsY0FBYyxFQUFFLENBQUM7b0JBQ3BCLEVBQUUsR0FBR0wsU0FBUyxFQUFFLENBQUM7d0JBQ2YsSUFBSSxDQUFDVyxRQUFRLENBQUNKLFNBQVM7b0JBQ3pCLENBQUM7b0JBRUQsTUFBTTtnQkFDUixDQUFDO2dCQUVELEdBQUssQ0FBR2YsUUFBUSxHQUFLLElBQUksQ0FBQ0MsVUFBVSxDQUE1QkQsUUFBUSxFQUNWUixRQUFRLEdBQUcsSUFBSSxDQUFDSixXQUFXLElBQzNCcUIsYUFBYSxHQUFHLElBQUksQ0FBQ0YsZ0JBQWdCLENBQUNDLFNBQVM7Z0JBRXJEUixRQUFRLENBQUNvQixPQUFPLENBQUMsUUFBUSxDQUFQaEIsT0FBTyxFQUFFaUIsS0FBSyxFQUFLLENBQUM7b0JBQ3BDLEdBQUssQ0FBQ0MsT0FBTyxHQUFHOUIsUUFBUSxDQUFDNkIsS0FBSyxHQUN4QmhCLGFBQWEsR0FBR0QsT0FBTyxDQUFDRSxlQUFlLENBQUNQLEdBQUc7b0JBRWpETSxhQUFhLEdBQ1hpQixPQUFPLENBQUNDLElBQUksS0FDVkQsT0FBTyxDQUFDRSxJQUFJO2dCQUNsQixDQUFDO2dCQUVELElBQUksQ0FBQ0MsT0FBTyxDQUFDMUIsR0FBRztnQkFFaEIsSUFBSSxDQUFDMkIsTUFBTSxDQUFDakIsYUFBYSxFQUFFTSxTQUFTO1lBQ3RDLENBQUM7OztZQUVEWSxHQUFNLEVBQU5BLENBQU07bUJBQU5BLFFBQVEsQ0FBUkEsTUFBTSxHQUFHLENBQUM7Z0JBQ1IsSUFBSSxDQUFDQyxZQUFZO1lBQ25CLENBQUM7OztZQUVESCxHQUFPLEVBQVBBLENBQU87bUJBQVBBLFFBQVExQixDQUFSMEIsT0FBTyxDQUFDMUIsR0FBRyxFQUFFLENBQUM7Z0JBQ1osR0FBSyxDQUFDRyxZQUFZLEdBQUcsSUFBSSxDQUFDSixlQUFlLENBQUNDLEdBQUcsR0FDdkM4QixtQkFBbUIsR0FBSTNCLFlBQVksS0FBSyxDQUFDO2dCQUUvQzJCLG1CQUFtQixHQUNqQixJQUFJLENBQUNDLGFBQWEsS0FDaEIsSUFBSSxDQUFDRixZQUFZO1lBQ3ZCLENBQUM7OztZQUVERixHQUFNLEVBQU5BLENBQU07bUJBQU5BLFFBQVEsQ0FBUkEsTUFBTSxDQUFDakIsYUFBYSxFQUFFTSxTQUFTLEVBQUUsQ0FBQztnQkFDaEMsSUFBSSxDQUFDZ0IsU0FBUyxDQUFDdEIsYUFBYSxFQUFFTSxTQUFTO1lBQ3pDLENBQUM7OztZQUVESSxHQUFRLEVBQVJBLENBQVE7bUJBQVJBLFFBQVEsQ0FBUkEsUUFBUSxDQUFDSixTQUFTLEVBQUUsQ0FBQzs7Z0JBQ25CLElBQUksQ0FBQ2lCLFdBQVcsQ0FBQ2pCLFNBQVMsRUFBRSxRQUFRO29CQUFGLE1BQU0sT0FBRFksTUFBTTs7WUFDL0MsQ0FBQzs7O1lBRURNLEdBQWEsRUFBYkEsQ0FBYTttQkFBYkEsUUFBUSxDQUFSQSxhQUFhLEdBQUcsQ0FBQztnQkFDZixHQUFLLENBQTBDLFdBQWUsR0FBZixJQUFJLENBQUNoQyxVQUFVLEVBQXRERCxRQUFRLEdBQStCLFdBQWUsQ0FBdERBLFFBQVEsRUFBRWtDLEtBQUssR0FBd0IsV0FBZSxDQUE1Q0EsS0FBSyxFQUFFQyxJQUFJLEdBQWtCLFdBQWUsQ0FBckNBLElBQUksRUFBRUMsV0FBVyxHQUFLLFdBQWUsQ0FBL0JBLFdBQVcsRUFDdEJwQyxTQUFRLGtCQUFSQSxRQUFRLE1BQXBCSSxRQUFPLEdBQUtKLFNBQVEsS0FDdEJOLFlBQVksR0FBRyxJQUFJLENBQUNELGVBQWUsSUFDbkNJLGVBQWUsR0FBRyxJQUFJLENBQUNELGtCQUFrQixJQUN6Q0osUUFBUSxHQUFHUSxRQUFRLENBQUNxQyxHQUFHLENBQUMsUUFBUSxDQUFQakMsT0FBTyxFQUFFaUIsS0FBSztrQ0FFckMsTUFBTSxxQkFBTGpCLE9BQU87d0JBQUNpQixLQUFLLEVBQUVBLEtBQUs7OztnQkFJN0IsTUFBTSxDQUFFLENBQUM7c0RBRU54QixlQUFlO3dCQUFDTyxPQUFPLEVBQUVBLFFBQU87d0JBQUU4QixLQUFLLEVBQUVBLEtBQUs7d0JBQUVDLElBQUksRUFBRUEsSUFBSTt3QkFBRUMsV0FBVyxFQUFFQSxXQUFXOztzREFDcEYxQyxZQUFZLFFBQ1ZGLFFBQVE7Z0JBR2IsQ0FBQztZQUNILENBQUM7OztZQUVEOEMsR0FBVSxFQUFWQSxDQUFVO21CQUFWQSxRQUFRLENBQVJBLFVBQVUsR0FBRyxDQUFDO2dCQUNaLElBQUksQ0FBQ0MsYUFBYSxDQUFDLENBQUM7b0JBQ2xCLENBQWM7b0JBQ2QsQ0FBVztvQkFDWCxDQUFXO29CQUNYLENBQWE7b0JBQ2IsQ0FBYTtvQkFDYixDQUFjO29CQUNkLENBQWU7b0JBQ2YsQ0FBZ0I7b0JBQ2hCLENBQWtCO29CQUNsQixDQUFtQjtnQkFDckIsQ0FBQztZQUNILENBQUM7OztXQWxKa0JwRCxhQUFhO21CQUxWLEtBQU07Z0JBS1RBLGFBQWEsRUFvSnpCTyxDQUFZLGVBdkpJLFVBQWtCO2dCQUd0QlAsYUFBYSxFQXNKekJVLENBQWUsa0JBeEpJLFdBQXFCO2dCQUU1QlYsYUFBYSxFQXdKekJxRCxDQUFPLFVBQUcsQ0FBSTtnQkF4SkZyRCxhQUFhLEVBMEp6QnNELENBQWlCLG9CQUFHLENBQUM7SUFDMUJDLFNBQVMsRUFBRSxDQUFXO0FBQ3hCLENBQUM7a0JBNUprQnZELGFBQWEifQ==