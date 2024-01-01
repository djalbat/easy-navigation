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
var _accordion = /*#__PURE__*/ _interop_require_default(require("../div/accordion"));
var _accordion1 = /*#__PURE__*/ _interop_require_default(require("../button/accordion"));
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _iterable_to_array_limit(arr, i) {
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
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var AccordionItem = /*#__PURE__*/ function(Element) {
    _inherits(AccordionItem, Element);
    var _super = _create_super(AccordionItem);
    function AccordionItem() {
        _class_call_check(this, AccordionItem);
        return _super.apply(this, arguments);
    }
    _create_class(AccordionItem, [
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
                var _this_constructor = this.constructor, _$AccordionDiv = _this_constructor.AccordionDiv, _$AccordionButton = _this_constructor.AccordionButton, _this_properties = this.properties, Articles = _this_properties.Articles, first = _this_properties.first, last = _this_properties.last, showArticle = _this_properties.showArticle, _Articles = _sliced_to_array(Articles, 1), Article = _Articles[0], articles = Articles.map(function(Article, index) {
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
}(_wrap_native_super(_easy.Element));
_define_property(AccordionItem, "AccordionDiv", _accordion.default);
_define_property(AccordionItem, "AccordionButton", _accordion1.default);
_define_property(AccordionItem, "tagName", "li");
_define_property(AccordionItem, "defaultProperties", {
    className: "accordion"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pdGVtL2FjY29yZGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBBY2NvcmRpb25EaXYgZnJvbSBcIi4uL2Rpdi9hY2NvcmRpb25cIjtcbmltcG9ydCBBY2NvcmRpb25CdXR0b24gZnJvbSBcIi4uL2J1dHRvbi9hY2NvcmRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3JkaW9uSXRlbSBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRBcnRpY2xlcygpIHtcbiAgICBjb25zdCBtYXhpbXVtRGVwdGggPSAyLFxuICAgICAgICAgIGRlc2NlbmRhbnRBcnRpY2xlRWxlbWVudHMgPSB0aGlzLmdldERlc2NlbmRhbnRFbGVtZW50cyhcImFydGljbGVcIiwgbWF4aW11bURlcHRoKSxcbiAgICAgICAgICBhcnRpY2xlcyA9IGRlc2NlbmRhbnRBcnRpY2xlRWxlbWVudHM7IC8vL1xuXG4gICAgcmV0dXJuIGFydGljbGVzO1xuICB9XG5cbiAgZ2V0QXJ0aWNsZUluZGV4KHVyaSkge1xuICAgIGNvbnN0IHsgQXJ0aWNsZXMgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBhcnRpY2xlSW5kZXggPSBBcnRpY2xlcy5maW5kSW5kZXgoKEFydGljbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aCB9ID0gQXJ0aWNsZSxcbiAgICAgICAgICAgICAgICAgIHVyaUFydGljbGVVUkkgPSBwYXRoLnRlc3QodXJpKTtcblxuICAgICAgICAgICAgaWYgKHVyaUFydGljbGVVUkkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gYXJ0aWNsZUluZGV4O1xuICB9XG5cbiAgZ2V0SW5pdGlhbEhlaWdodChjb2xsYXBzZWQpIHtcbiAgICBsZXQgaW5pdGlhbEhlaWdodDtcblxuICAgIGlmIChjb2xsYXBzZWQpIHtcbiAgICAgIGluaXRpYWxIZWlnaHQgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkaXZIZWlnaHQgPSB0aGlzLmdldERpdkhlaWdodCgpO1xuXG4gICAgICBpbml0aWFsSGVpZ2h0ID0gZGl2SGVpZ2h0OyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGluaXRpYWxIZWlnaHQ7XG4gIH1cblxuICBpc0FydGljbGVQcmVzZW50KHVyaSkge1xuICAgIGNvbnN0IGFydGljbGVJbmRleCA9IHRoaXMuZ2V0QXJ0aWNsZUluZGV4KHVyaSksXG4gICAgICAgICAgYXJ0aWNsZVByZXNlbnQgPSAoYXJ0aWNsZUluZGV4ICE9PSAtMSk7XG5cbiAgICByZXR1cm4gYXJ0aWNsZVByZXNlbnQ7XG4gIH1cblxuICB1cGRhdGUodXJpLCBpbnN0YW50bHkpIHtcbiAgICBsZXQgYXJ0aWNsZSA9IG51bGw7XG5cbiAgICBjb25zdCBidXR0b25EaXNwbGF5ZWQgPSB0aGlzLmlzQnV0dG9uRGlzcGxheWVkKCk7XG5cbiAgICBpZiAoIWJ1dHRvbkRpc3BsYXllZCkge1xuICAgICAgaW5zdGFudGx5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBjb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCksXG4gICAgICAgICAgYXJ0aWNsZVByZXNlbnQgPSB0aGlzLmlzQXJ0aWNsZVByZXNlbnQodXJpKTtcblxuICAgIGlmICghYXJ0aWNsZVByZXNlbnQpIHtcbiAgICAgIGlmICghY29sbGFwc2VkKSB7XG4gICAgICAgIHRoaXMuY29sbGFwc2UoaW5zdGFudGx5KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYXJ0aWNsZXMgPSB0aGlzLmdldEFydGljbGVzKCksXG4gICAgICAgICAgICBhcnRpY2xlSW5kZXggPSB0aGlzLmdldEFydGljbGVJbmRleCh1cmkpLFxuICAgICAgICAgICAgaW5pdGlhbEhlaWdodCA9IHRoaXMuZ2V0SW5pdGlhbEhlaWdodChjb2xsYXBzZWQpO1xuXG4gICAgICBhcnRpY2xlcy5mb3JFYWNoKChhcnRpY2xlLCBpbmRleCkgPT4ge1xuICAgICAgICAoaW5kZXggPT09IGFydGljbGVJbmRleCkgP1xuICAgICAgICAgIGFydGljbGUuc2hvdygpIDpcbiAgICAgICAgICAgIGFydGljbGUuaGlkZSgpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZGlzYWJsZSh1cmkpO1xuXG4gICAgICB0aGlzLmV4cGFuZChpbml0aWFsSGVpZ2h0LCBpbnN0YW50bHkpO1xuXG4gICAgICBhcnRpY2xlID0gYXJ0aWNsZXNbYXJ0aWNsZUluZGV4XTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJ0aWNsZTtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLmVuYWJsZUJ1dHRvbigpO1xuICB9XG5cbiAgZGlzYWJsZSh1cmkpIHtcbiAgICBjb25zdCBhcnRpY2xlSW5kZXggPSB0aGlzLmdldEFydGljbGVJbmRleCh1cmkpLFxuICAgICAgICAgIGFydGljbGVGaXJzdEFydGljbGUgPSAoYXJ0aWNsZUluZGV4ID09PSAwKTtcblxuICAgIGlmIChhcnRpY2xlRmlyc3RBcnRpY2xlKSB7XG4gICAgICB0aGlzLmRpc2FibGVCdXR0b24oKTtcbiAgICAgIHRoaXMuYmx1ckJ1dHRvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVuYWJsZUJ1dHRvbigpO1xuICAgIH1cbiAgfVxuXG4gIGV4cGFuZChpbml0aWFsSGVpZ2h0LCBpbnN0YW50bHkpIHtcbiAgICB0aGlzLmV4cGFuZERpdihpbml0aWFsSGVpZ2h0LCBpbnN0YW50bHkpO1xuICB9XG5cbiAgY29sbGFwc2UoaW5zdGFudGx5KSB7XG4gICAgdGhpcy5jb2xsYXBzZURpdihpbnN0YW50bHksICgpID0+IHRoaXMuZW5hYmxlKCkpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IEFjY29yZGlvbkRpdiwgQWNjb3JkaW9uQnV0dG9uIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHsgQXJ0aWNsZXMsIGZpcnN0LCBsYXN0LCBzaG93QXJ0aWNsZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIFsgQXJ0aWNsZSBdID0gQXJ0aWNsZXMsXG4gICAgICAgICAgYXJ0aWNsZXMgPSBBcnRpY2xlcy5tYXAoKEFydGljbGUsIGluZGV4KSA9PlxuXG4gICAgICAgICAgICA8QXJ0aWNsZSBpbmRleD17aW5kZXh9IC8+XG5cbiAgICAgICAgICApO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxBY2NvcmRpb25CdXR0b24gQXJ0aWNsZT17QXJ0aWNsZX0gZmlyc3Q9e2ZpcnN0fSBsYXN0PXtsYXN0fSBzaG93QXJ0aWNsZT17c2hvd0FydGljbGV9IC8+LFxuICAgICAgPEFjY29yZGlvbkRpdj5cbiAgICAgICAge2FydGljbGVzfVxuICAgICAgPC9BY2NvcmRpb25EaXY+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KFtcbiAgICAgIFwiZ2V0RGl2SGVpZ2h0XCIsXG4gICAgICBcInJlc2l6ZURpdlwiLFxuICAgICAgXCJleHBhbmREaXZcIixcbiAgICAgIFwiaXNDb2xsYXBzZWRcIixcbiAgICAgIFwiY29sbGFwc2VEaXZcIixcbiAgICAgIFwiYmx1ckJ1dHRvblwiLFxuICAgICAgXCJlbmFibGVCdXR0b25cIixcbiAgICAgIFwiZGlzYWJsZUJ1dHRvblwiLFxuICAgICAgXCJhY3RpdmF0ZUJ1dHRvblwiLFxuICAgICAgXCJkZWFjdGl2YXRlQnV0dG9uXCIsXG4gICAgICBcImlzQnV0dG9uRGlzcGxheWVkXCJcbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBBY2NvcmRpb25EaXYgPSBBY2NvcmRpb25EaXY7XG5cbiAgc3RhdGljIEFjY29yZGlvbkJ1dHRvbiA9IEFjY29yZGlvbkJ1dHRvbjtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwibGlcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImFjY29yZGlvblwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiQWNjb3JkaW9uSXRlbSIsImdldEFydGljbGVzIiwibWF4aW11bURlcHRoIiwiZGVzY2VuZGFudEFydGljbGVFbGVtZW50cyIsImdldERlc2NlbmRhbnRFbGVtZW50cyIsImFydGljbGVzIiwiZ2V0QXJ0aWNsZUluZGV4IiwidXJpIiwiQXJ0aWNsZXMiLCJwcm9wZXJ0aWVzIiwiYXJ0aWNsZUluZGV4IiwiZmluZEluZGV4IiwiQXJ0aWNsZSIsInBhdGgiLCJ1cmlBcnRpY2xlVVJJIiwidGVzdCIsImdldEluaXRpYWxIZWlnaHQiLCJjb2xsYXBzZWQiLCJpbml0aWFsSGVpZ2h0IiwiZGl2SGVpZ2h0IiwiZ2V0RGl2SGVpZ2h0IiwiaXNBcnRpY2xlUHJlc2VudCIsImFydGljbGVQcmVzZW50IiwidXBkYXRlIiwiaW5zdGFudGx5IiwiYXJ0aWNsZSIsImJ1dHRvbkRpc3BsYXllZCIsImlzQnV0dG9uRGlzcGxheWVkIiwiaXNDb2xsYXBzZWQiLCJjb2xsYXBzZSIsImZvckVhY2giLCJpbmRleCIsInNob3ciLCJoaWRlIiwiZGlzYWJsZSIsImV4cGFuZCIsImVuYWJsZSIsImVuYWJsZUJ1dHRvbiIsImFydGljbGVGaXJzdEFydGljbGUiLCJkaXNhYmxlQnV0dG9uIiwiYmx1ckJ1dHRvbiIsImV4cGFuZERpdiIsImNvbGxhcHNlRGl2IiwiY2hpbGRFbGVtZW50cyIsImNvbnN0cnVjdG9yIiwiQWNjb3JkaW9uRGl2IiwiQWNjb3JkaW9uQnV0dG9uIiwiZmlyc3QiLCJsYXN0Iiwic2hvd0FydGljbGUiLCJtYXAiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7O29CQUxHO2dFQUVDO2lFQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7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