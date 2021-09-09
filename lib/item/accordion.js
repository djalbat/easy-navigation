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
var AccordionItem = /*#__PURE__*/ function(Element) {
    _inherits(AccordionItem, Element);
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
                var _properties = this.properties, Articles = _properties.Articles, first = _properties.first, last = _properties.last, showArticle = _properties.showArticle, _Articles = _slicedToArray(Articles, 1), Article = _Articles[0], AccordionDiv = this.getAccordionDiv(), AccordionButton = this.getAccordionButton(), articles = Articles.map(function(Article, index) {
                    /*#__PURE__*/ return React.createElement(Article, {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pdGVtL2FjY29yZGlvbi5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwiQWNjb3JkaW9uRGl2IiwiQWNjb3JkaW9uQnV0dG9uIiwiQWNjb3JkaW9uSXRlbSIsImdldEFydGljbGVzIiwiZGVzY2VuZGFudEFydGljbGVFbGVtZW50cyIsImdldERlc2NlbmRhbnRFbGVtZW50cyIsImFydGljbGVzIiwiZ2V0QWNjb3JkaW9uRGl2IiwiY29uc3RydWN0b3IiLCJnZXRBY2NvcmRpb25CdXR0b24iLCJnZXRBcnRpY2xlSW5kZXgiLCJ1cmkiLCJBcnRpY2xlcyIsInByb3BlcnRpZXMiLCJhcnRpY2xlSW5kZXgiLCJmaW5kSW5kZXgiLCJBcnRpY2xlIiwidXJpQXJ0aWNsZVVSSSIsImlzVVJJQXJ0aWNsZVVSSSIsImdldEluaXRpYWxIZWlnaHQiLCJjb2xsYXBzZWQiLCJpbml0aWFsSGVpZ2h0IiwiZGl2SGVpZ2h0IiwiZ2V0RGl2SGVpZ2h0IiwiaXNBcnRpY2xlUHJlc2VudCIsImFydGljbGVQcmVzZW50IiwidXBkYXRlIiwiaW5zdGFudGx5IiwiYnV0dG9uRGlzcGxheWVkIiwiaXNCdXR0b25EaXNwbGF5ZWQiLCJpc0NvbGxhcHNlZCIsImNvbGxhcHNlIiwiZm9yRWFjaCIsImluZGV4IiwiYXJ0aWNsZSIsInNob3ciLCJoaWRlIiwiZGlzYWJsZSIsImV4cGFuZCIsImVuYWJsZSIsImVuYWJsZUJ1dHRvbiIsImFydGljbGVGaXJzdEFydGljbGUiLCJkaXNhYmxlQnV0dG9uIiwiZXhwYW5kRGl2IiwiY29sbGFwc2VEaXYiLCJjaGlsZEVsZW1lbnRzIiwiZmlyc3QiLCJsYXN0Iiwic2hvd0FydGljbGUiLCJtYXAiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFWSxHQUFNLENBQU4sS0FBTTtBQUVMLEdBQWtCLENBQWxC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