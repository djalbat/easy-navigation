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
                    var path = Article.path, article = articles[index], uriArticleURI = path.test(uri);
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
                var _properties = this.properties, Articles = _properties.Articles, first = _properties.first, last = _properties.last, showArticle = _properties.showArticle, _Articles = _slicedToArray(Articles, 1), Article1 = _Articles[0], _$AccordionDiv = this.getAccordionDiv(), _$AccordionButton = this.getAccordionButton(), articles = Articles.map(function(Article, index) {
                    /*#__PURE__*/ return React.createElement(Article, {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pdGVtL2FjY29yZGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBBY2NvcmRpb25EaXYgZnJvbSBcIi4uL2Rpdi9hY2NvcmRpb25cIjtcbmltcG9ydCBBY2NvcmRpb25CdXR0b24gZnJvbSBcIi4uL2J1dHRvbi9hY2NvcmRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3JkaW9uSXRlbSBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRBcnRpY2xlcygpIHtcbiAgICBjb25zdCBtYXhpbXVtRGVwdGggPSAyLFxuICAgICAgICAgIGRlc2NlbmRhbnRBcnRpY2xlRWxlbWVudHMgPSB0aGlzLmdldERlc2NlbmRhbnRFbGVtZW50cyhcImFydGljbGVcIiwgbWF4aW11bURlcHRoKSxcbiAgICAgICAgICBhcnRpY2xlcyA9IGRlc2NlbmRhbnRBcnRpY2xlRWxlbWVudHM7IC8vL1xuXG4gICAgcmV0dXJuIGFydGljbGVzO1xuICB9XG5cbiAgZ2V0QWNjb3JkaW9uRGl2KCkge1xuICAgIGNvbnN0IHsgQWNjb3JkaW9uRGl2IH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIEFjY29yZGlvbkRpdjtcbiAgfVxuXG4gIGdldEFjY29yZGlvbkJ1dHRvbigpIHtcbiAgICBjb25zdCB7IEFjY29yZGlvbkJ1dHRvbiB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBBY2NvcmRpb25CdXR0b247XG4gIH1cblxuICBnZXRBcnRpY2xlSW5kZXgodXJpKSB7XG4gICAgY29uc3QgeyBBcnRpY2xlcyB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGFydGljbGVJbmRleCA9IEFydGljbGVzLmZpbmRJbmRleCgoQXJ0aWNsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBwYXRoIH0gPSBBcnRpY2xlLFxuICAgICAgICAgICAgICAgICAgdXJpQXJ0aWNsZVVSSSA9IHBhdGgudGVzdCh1cmkpO1xuXG4gICAgICAgICAgICBpZiAodXJpQXJ0aWNsZVVSSSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBhcnRpY2xlSW5kZXg7XG4gIH1cblxuICBnZXRJbml0aWFsSGVpZ2h0KGNvbGxhcHNlZCkge1xuICAgIGxldCBpbml0aWFsSGVpZ2h0O1xuXG4gICAgaWYgKGNvbGxhcHNlZCkge1xuICAgICAgaW5pdGlhbEhlaWdodCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRpdkhlaWdodCA9IHRoaXMuZ2V0RGl2SGVpZ2h0KCk7XG5cbiAgICAgIGluaXRpYWxIZWlnaHQgPSBkaXZIZWlnaHQ7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gaW5pdGlhbEhlaWdodDtcbiAgfVxuXG4gIGlzQXJ0aWNsZVByZXNlbnQodXJpKSB7XG4gICAgY29uc3QgYXJ0aWNsZUluZGV4ID0gdGhpcy5nZXRBcnRpY2xlSW5kZXgodXJpKSxcbiAgICAgICAgICBhcnRpY2xlUHJlc2VudCA9IChhcnRpY2xlSW5kZXggIT09IC0xKTtcblxuICAgIHJldHVybiBhcnRpY2xlUHJlc2VudDtcbiAgfVxuXG4gIHVwZGF0ZSh1cmksIGluc3RhbnRseSkge1xuICAgIGNvbnN0IGJ1dHRvbkRpc3BsYXllZCA9IHRoaXMuaXNCdXR0b25EaXNwbGF5ZWQoKTtcblxuICAgIGlmICghYnV0dG9uRGlzcGxheWVkKSB7XG4gICAgICBpbnN0YW50bHkgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbGxhcHNlZCA9IHRoaXMuaXNDb2xsYXBzZWQoKSxcbiAgICAgICAgICBhcnRpY2xlUHJlc2VudCA9IHRoaXMuaXNBcnRpY2xlUHJlc2VudCh1cmkpO1xuXG4gICAgaWYgKCFhcnRpY2xlUHJlc2VudCkge1xuICAgICAgaWYgKCFjb2xsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5jb2xsYXBzZShpbnN0YW50bHkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBBcnRpY2xlcyB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGFydGljbGVzID0gdGhpcy5nZXRBcnRpY2xlcygpLFxuICAgICAgICAgIGluaXRpYWxIZWlnaHQgPSB0aGlzLmdldEluaXRpYWxIZWlnaHQoY29sbGFwc2VkKTtcblxuICAgIEFydGljbGVzLmZvckVhY2goKEFydGljbGUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB7IHBhdGggfSA9IEFydGljbGUsXG4gICAgICAgICAgICBhcnRpY2xlID0gYXJ0aWNsZXNbaW5kZXhdLFxuICAgICAgICAgICAgdXJpQXJ0aWNsZVVSSSA9IHBhdGgudGVzdCh1cmkpO1xuXG4gICAgICB1cmlBcnRpY2xlVVJJID9cbiAgICAgICAgYXJ0aWNsZS5zaG93KCkgOlxuICAgICAgICAgIGFydGljbGUuaGlkZSgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kaXNhYmxlKHVyaSk7XG5cbiAgICB0aGlzLmV4cGFuZChpbml0aWFsSGVpZ2h0LCBpbnN0YW50bHkpO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuZW5hYmxlQnV0dG9uKCk7XG4gIH1cblxuICBkaXNhYmxlKHVyaSkge1xuICAgIGNvbnN0IGFydGljbGVJbmRleCA9IHRoaXMuZ2V0QXJ0aWNsZUluZGV4KHVyaSksXG4gICAgICAgICAgYXJ0aWNsZUZpcnN0QXJ0aWNsZSA9IChhcnRpY2xlSW5kZXggPT09IDApO1xuXG4gICAgYXJ0aWNsZUZpcnN0QXJ0aWNsZSA/XG4gICAgICB0aGlzLmRpc2FibGVCdXR0b24oKTpcbiAgICAgICAgdGhpcy5lbmFibGVCdXR0b24oKTtcbiAgfVxuXG4gIGV4cGFuZChpbml0aWFsSGVpZ2h0LCBpbnN0YW50bHkpIHtcbiAgICB0aGlzLmV4cGFuZERpdihpbml0aWFsSGVpZ2h0LCBpbnN0YW50bHkpO1xuICB9XG5cbiAgY29sbGFwc2UoaW5zdGFudGx5KSB7XG4gICAgdGhpcy5jb2xsYXBzZURpdihpbnN0YW50bHksICgpID0+IHRoaXMuZW5hYmxlKCkpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IEFydGljbGVzLCBmaXJzdCwgbGFzdCwgc2hvd0FydGljbGUgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBbIEFydGljbGUgXSA9IEFydGljbGVzLFxuICAgICAgICAgIEFjY29yZGlvbkRpdiA9IHRoaXMuZ2V0QWNjb3JkaW9uRGl2KCksXG4gICAgICAgICAgQWNjb3JkaW9uQnV0dG9uID0gdGhpcy5nZXRBY2NvcmRpb25CdXR0b24oKSxcbiAgICAgICAgICBhcnRpY2xlcyA9IEFydGljbGVzLm1hcCgoQXJ0aWNsZSwgaW5kZXgpID0+XG5cbiAgICAgICAgICAgIDxBcnRpY2xlIGluZGV4PXtpbmRleH0gLz5cblxuICAgICAgICAgICk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPEFjY29yZGlvbkJ1dHRvbiBBcnRpY2xlPXtBcnRpY2xlfSBmaXJzdD17Zmlyc3R9IGxhc3Q9e2xhc3R9IHNob3dBcnRpY2xlPXtzaG93QXJ0aWNsZX0gLz4sXG4gICAgICA8QWNjb3JkaW9uRGl2PlxuICAgICAgICB7YXJ0aWNsZXN9XG4gICAgICA8L0FjY29yZGlvbkRpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoW1xuICAgICAgXCJnZXREaXZIZWlnaHRcIixcbiAgICAgIFwicmVzaXplRGl2XCIsXG4gICAgICBcImV4cGFuZERpdlwiLFxuICAgICAgXCJpc0NvbGxhcHNlZFwiLFxuICAgICAgXCJjb2xsYXBzZURpdlwiLFxuICAgICAgXCJlbmFibGVCdXR0b25cIixcbiAgICAgIFwiZGlzYWJsZUJ1dHRvblwiLFxuICAgICAgXCJhY3RpdmF0ZUJ1dHRvblwiLFxuICAgICAgXCJkZWFjdGl2YXRlQnV0dG9uXCIsXG4gICAgICBcImlzQnV0dG9uRGlzcGxheWVkXCJcbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBBY2NvcmRpb25EaXYgPSBBY2NvcmRpb25EaXY7XG5cbiAgc3RhdGljIEFjY29yZGlvbkJ1dHRvbiA9IEFjY29yZGlvbkJ1dHRvbjtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwibGlcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImFjY29yZGlvblwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiQWNjb3JkaW9uSXRlbSIsImdldEFydGljbGVzIiwibWF4aW11bURlcHRoIiwiZGVzY2VuZGFudEFydGljbGVFbGVtZW50cyIsImdldERlc2NlbmRhbnRFbGVtZW50cyIsImFydGljbGVzIiwiZ2V0QWNjb3JkaW9uRGl2IiwiQWNjb3JkaW9uRGl2IiwiY29uc3RydWN0b3IiLCJnZXRBY2NvcmRpb25CdXR0b24iLCJBY2NvcmRpb25CdXR0b24iLCJnZXRBcnRpY2xlSW5kZXgiLCJ1cmkiLCJBcnRpY2xlcyIsInByb3BlcnRpZXMiLCJhcnRpY2xlSW5kZXgiLCJmaW5kSW5kZXgiLCJBcnRpY2xlIiwicGF0aCIsInVyaUFydGljbGVVUkkiLCJ0ZXN0IiwiZ2V0SW5pdGlhbEhlaWdodCIsImNvbGxhcHNlZCIsImluaXRpYWxIZWlnaHQiLCJkaXZIZWlnaHQiLCJnZXREaXZIZWlnaHQiLCJpc0FydGljbGVQcmVzZW50IiwiYXJ0aWNsZVByZXNlbnQiLCJ1cGRhdGUiLCJpbnN0YW50bHkiLCJidXR0b25EaXNwbGF5ZWQiLCJpc0J1dHRvbkRpc3BsYXllZCIsImlzQ29sbGFwc2VkIiwiY29sbGFwc2UiLCJmb3JFYWNoIiwiaW5kZXgiLCJhcnRpY2xlIiwic2hvdyIsImhpZGUiLCJkaXNhYmxlIiwiZXhwYW5kIiwiZW5hYmxlIiwiZW5hYmxlQnV0dG9uIiwiYXJ0aWNsZUZpcnN0QXJ0aWNsZSIsImRpc2FibGVCdXR0b24iLCJleHBhbmREaXYiLCJjb2xsYXBzZURpdiIsImNoaWxkRWxlbWVudHMiLCJmaXJzdCIsImxhc3QiLCJzaG93QXJ0aWNsZSIsIm1hcCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWSxXQUFBLENBQUM7OztFO3dCO0FBRVcsR0FBTSxDQUFOLEtBQU07QUFFTCxHQUFrQixDQUFsQixVQUFrQjtBQUNmLEdBQXFCLENBQXJCLFdBQXFCOzt5RDt1RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnRjs7Ozs7Ozs7c0M7Ozs7OztpQzs7O2lFOztTOzs7Ozs7OzhEO3NDOzZEO2lFOzs7O3dFO2dFOzs7Ozs7Ozs7O1U7O3dCOzs7Ozs7O0s7Ozs7Ozs7Ozs7Ozs7TTt5RDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQjs7OztpQjtnQjs7OzJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7dUI7O0s7Ozs7Ozs7MkI7Ozs7Ozs7K0Q7Ozs7Ozs7Ozs7Ozs7c0M7Ozs7Ozs7Ozs7OztVOztLOzs7Ozs7OztxRjs7Ozs7Ozs7Ozs7O21FOztpRDs7Ozs7SUFFNUJBLGFBQWEsaUJBQW5CLFFBQVE7cUM7O2FBQUZBLGFBQWE7NEM7Ozs7O1lBQ2hDQyxHQUFXLEVBQVhBLENBQVc7bUJBQVhBLFFBQVEsQ0FBUkEsV0FBVyxHQUFHLENBQUM7Z0JBQ2IsR0FBSyxDQUFDQyxZQUFZLEdBQUcsQ0FBQyxFQUNoQkMseUJBQXlCLEdBQUcsSUFBSSxDQUFDQyxxQkFBcUIsQ0FBQyxDQUFTLFVBQUVGLFlBQVksR0FDOUVHLFFBQVEsR0FBR0YseUJBQXlCLEVBQUUsRUFBRyxBQUFILENBQUc7Z0JBRS9DLE1BQU0sQ0FBQ0UsUUFBUTtZQUNqQixDQUFDOzs7WUFFREMsR0FBZSxFQUFmQSxDQUFlO21CQUFmQSxRQUFRLENBQVJBLGVBQWUsR0FBRyxDQUFDO2dCQUNqQixHQUFLLENBQUdDLGNBQVksR0FBSyxJQUFJLENBQUNDLFdBQVcsQ0FBakNELFlBQVk7Z0JBRXBCLE1B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