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
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var AccordionItem = /*#__PURE__*/ function(Element) {
    _inherits(AccordionItem, Element);
    function AccordionItem() {
        _class_call_check(this, AccordionItem);
        return _call_super(this, AccordionItem, arguments);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pdGVtL2FjY29yZGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBBY2NvcmRpb25EaXYgZnJvbSBcIi4uL2Rpdi9hY2NvcmRpb25cIjtcbmltcG9ydCBBY2NvcmRpb25CdXR0b24gZnJvbSBcIi4uL2J1dHRvbi9hY2NvcmRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3JkaW9uSXRlbSBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRBcnRpY2xlcygpIHtcbiAgICBjb25zdCBtYXhpbXVtRGVwdGggPSAyLFxuICAgICAgICAgIGRlc2NlbmRhbnRBcnRpY2xlRWxlbWVudHMgPSB0aGlzLmdldERlc2NlbmRhbnRFbGVtZW50cyhcImFydGljbGVcIiwgbWF4aW11bURlcHRoKSxcbiAgICAgICAgICBhcnRpY2xlcyA9IGRlc2NlbmRhbnRBcnRpY2xlRWxlbWVudHM7IC8vL1xuXG4gICAgcmV0dXJuIGFydGljbGVzO1xuICB9XG5cbiAgZ2V0QXJ0aWNsZUluZGV4KHVyaSkge1xuICAgIGNvbnN0IHsgQXJ0aWNsZXMgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBhcnRpY2xlSW5kZXggPSBBcnRpY2xlcy5maW5kSW5kZXgoKEFydGljbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aCB9ID0gQXJ0aWNsZSxcbiAgICAgICAgICAgICAgICAgIHVyaUFydGljbGVVUkkgPSBwYXRoLnRlc3QodXJpKTtcblxuICAgICAgICAgICAgaWYgKHVyaUFydGljbGVVUkkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gYXJ0aWNsZUluZGV4O1xuICB9XG5cbiAgZ2V0SW5pdGlhbEhlaWdodChjb2xsYXBzZWQpIHtcbiAgICBsZXQgaW5pdGlhbEhlaWdodDtcblxuICAgIGlmIChjb2xsYXBzZWQpIHtcbiAgICAgIGluaXRpYWxIZWlnaHQgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkaXZIZWlnaHQgPSB0aGlzLmdldERpdkhlaWdodCgpO1xuXG4gICAgICBpbml0aWFsSGVpZ2h0ID0gZGl2SGVpZ2h0OyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGluaXRpYWxIZWlnaHQ7XG4gIH1cblxuICBpc0FydGljbGVQcmVzZW50KHVyaSkge1xuICAgIGNvbnN0IGFydGljbGVJbmRleCA9IHRoaXMuZ2V0QXJ0aWNsZUluZGV4KHVyaSksXG4gICAgICAgICAgYXJ0aWNsZVByZXNlbnQgPSAoYXJ0aWNsZUluZGV4ICE9PSAtMSk7XG5cbiAgICByZXR1cm4gYXJ0aWNsZVByZXNlbnQ7XG4gIH1cblxuICB1cGRhdGUodXJpLCBpbnN0YW50bHkpIHtcbiAgICBsZXQgYXJ0aWNsZSA9IG51bGw7XG5cbiAgICBjb25zdCBidXR0b25EaXNwbGF5ZWQgPSB0aGlzLmlzQnV0dG9uRGlzcGxheWVkKCk7XG5cbiAgICBpZiAoIWJ1dHRvbkRpc3BsYXllZCkge1xuICAgICAgaW5zdGFudGx5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBjb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCksXG4gICAgICAgICAgYXJ0aWNsZVByZXNlbnQgPSB0aGlzLmlzQXJ0aWNsZVByZXNlbnQodXJpKTtcblxuICAgIGlmICghYXJ0aWNsZVByZXNlbnQpIHtcbiAgICAgIGlmICghY29sbGFwc2VkKSB7XG4gICAgICAgIHRoaXMuY29sbGFwc2UoaW5zdGFudGx5KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYXJ0aWNsZXMgPSB0aGlzLmdldEFydGljbGVzKCksXG4gICAgICAgICAgICBhcnRpY2xlSW5kZXggPSB0aGlzLmdldEFydGljbGVJbmRleCh1cmkpLFxuICAgICAgICAgICAgaW5pdGlhbEhlaWdodCA9IHRoaXMuZ2V0SW5pdGlhbEhlaWdodChjb2xsYXBzZWQpO1xuXG4gICAgICBhcnRpY2xlcy5mb3JFYWNoKChhcnRpY2xlLCBpbmRleCkgPT4ge1xuICAgICAgICAoaW5kZXggPT09IGFydGljbGVJbmRleCkgP1xuICAgICAgICAgIGFydGljbGUuc2hvdygpIDpcbiAgICAgICAgICAgIGFydGljbGUuaGlkZSgpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZGlzYWJsZSh1cmkpO1xuXG4gICAgICB0aGlzLmV4cGFuZChpbml0aWFsSGVpZ2h0LCBpbnN0YW50bHkpO1xuXG4gICAgICBhcnRpY2xlID0gYXJ0aWNsZXNbYXJ0aWNsZUluZGV4XTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJ0aWNsZTtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLmVuYWJsZUJ1dHRvbigpO1xuICB9XG5cbiAgZGlzYWJsZSh1cmkpIHtcbiAgICBjb25zdCBhcnRpY2xlSW5kZXggPSB0aGlzLmdldEFydGljbGVJbmRleCh1cmkpLFxuICAgICAgICAgIGFydGljbGVGaXJzdEFydGljbGUgPSAoYXJ0aWNsZUluZGV4ID09PSAwKTtcblxuICAgIGlmIChhcnRpY2xlRmlyc3RBcnRpY2xlKSB7XG4gICAgICB0aGlzLmRpc2FibGVCdXR0b24oKTtcbiAgICAgIHRoaXMuYmx1ckJ1dHRvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVuYWJsZUJ1dHRvbigpO1xuICAgIH1cbiAgfVxuXG4gIGV4cGFuZChpbml0aWFsSGVpZ2h0LCBpbnN0YW50bHkpIHtcbiAgICB0aGlzLmV4cGFuZERpdihpbml0aWFsSGVpZ2h0LCBpbnN0YW50bHkpO1xuICB9XG5cbiAgY29sbGFwc2UoaW5zdGFudGx5KSB7XG4gICAgdGhpcy5jb2xsYXBzZURpdihpbnN0YW50bHksICgpID0+IHRoaXMuZW5hYmxlKCkpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IEFjY29yZGlvbkRpdiwgQWNjb3JkaW9uQnV0dG9uIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHsgQXJ0aWNsZXMsIGZpcnN0LCBsYXN0LCBzaG93QXJ0aWNsZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIFsgQXJ0aWNsZSBdID0gQXJ0aWNsZXMsXG4gICAgICAgICAgYXJ0aWNsZXMgPSBBcnRpY2xlcy5tYXAoKEFydGljbGUsIGluZGV4KSA9PlxuXG4gICAgICAgICAgICA8QXJ0aWNsZSBpbmRleD17aW5kZXh9IC8+XG5cbiAgICAgICAgICApO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxBY2NvcmRpb25CdXR0b24gQXJ0aWNsZT17QXJ0aWNsZX0gZmlyc3Q9e2ZpcnN0fSBsYXN0PXtsYXN0fSBzaG93QXJ0aWNsZT17c2hvd0FydGljbGV9IC8+LFxuICAgICAgPEFjY29yZGlvbkRpdj5cbiAgICAgICAge2FydGljbGVzfVxuICAgICAgPC9BY2NvcmRpb25EaXY+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KFtcbiAgICAgIFwiZ2V0RGl2SGVpZ2h0XCIsXG4gICAgICBcInJlc2l6ZURpdlwiLFxuICAgICAgXCJleHBhbmREaXZcIixcbiAgICAgIFwiaXNDb2xsYXBzZWRcIixcbiAgICAgIFwiY29sbGFwc2VEaXZcIixcbiAgICAgIFwiYmx1ckJ1dHRvblwiLFxuICAgICAgXCJlbmFibGVCdXR0b25cIixcbiAgICAgIFwiZGlzYWJsZUJ1dHRvblwiLFxuICAgICAgXCJhY3RpdmF0ZUJ1dHRvblwiLFxuICAgICAgXCJkZWFjdGl2YXRlQnV0dG9uXCIsXG4gICAgICBcImlzQnV0dG9uRGlzcGxheWVkXCJcbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBBY2NvcmRpb25EaXYgPSBBY2NvcmRpb25EaXY7XG5cbiAgc3RhdGljIEFjY29yZGlvbkJ1dHRvbiA9IEFjY29yZGlvbkJ1dHRvbjtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwibGlcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImFjY29yZGlvblwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiQWNjb3JkaW9uSXRlbSIsImdldEFydGljbGVzIiwibWF4aW11bURlcHRoIiwiZGVzY2VuZGFudEFydGljbGVFbGVtZW50cyIsImdldERlc2NlbmRhbnRFbGVtZW50cyIsImFydGljbGVzIiwiZ2V0QXJ0aWNsZUluZGV4IiwidXJpIiwiQXJ0aWNsZXMiLCJwcm9wZXJ0aWVzIiwiYXJ0aWNsZUluZGV4IiwiZmluZEluZGV4IiwiQXJ0aWNsZSIsInBhdGgiLCJ1cmlBcnRpY2xlVVJJIiwidGVzdCIsImdldEluaXRpYWxIZWlnaHQiLCJjb2xsYXBzZWQiLCJpbml0aWFsSGVpZ2h0IiwiZGl2SGVpZ2h0IiwiZ2V0RGl2SGVpZ2h0IiwiaXNBcnRpY2xlUHJlc2VudCIsImFydGljbGVQcmVzZW50IiwidXBkYXRlIiwiaW5zdGFudGx5IiwiYXJ0aWNsZSIsImJ1dHRvbkRpc3BsYXllZCIsImlzQnV0dG9uRGlzcGxheWVkIiwiaXNDb2xsYXBzZWQiLCJjb2xsYXBzZSIsImZvckVhY2giLCJpbmRleCIsInNob3ciLCJoaWRlIiwiZGlzYWJsZSIsImV4cGFuZCIsImVuYWJsZSIsImVuYWJsZUJ1dHRvbiIsImFydGljbGVGaXJzdEFydGljbGUiLCJkaXNhYmxlQnV0dG9uIiwiYmx1ckJ1dHRvbiIsImV4cGFuZERpdiIsImNvbGxhcHNlRGl2IiwiY2hpbGRFbGVtZW50cyIsIkFjY29yZGlvbkRpdiIsIkFjY29yZGlvbkJ1dHRvbiIsImZpcnN0IiwibGFzdCIsInNob3dBcnRpY2xlIiwibWFwIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OztvQkFMRztnRUFFQztpRUFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUViLElBQUEsQUFBTUEsOEJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxlQUFlLEdBQ2ZDLDRCQUE0QixJQUFJLENBQUNDLHFCQUFxQixDQUFDLFdBQVdGLGVBQ2xFRyxXQUFXRiwyQkFBMkIsR0FBRztnQkFFL0MsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JDLEdBQUc7Z0JBQ2pCLElBQU0sQUFBRUMsV0FBYSxJQUFJLENBQUNDLFVBQVUsQ0FBNUJELFVBQ0ZFLGVBQWVGLFNBQVNHLFNBQVMsQ0FBQyxTQUFDQztvQkFDakMsSUFBTSxBQUFFQyxPQUFTRCxRQUFUQyxNQUNGQyxnQkFBZ0JELEtBQUtFLElBQUksQ0FBQ1I7b0JBRWhDLElBQUlPLGVBQWU7d0JBQ2pCLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRU4sT0FBT0o7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLFNBQVM7Z0JBQ3hCLElBQUlDO2dCQUVKLElBQUlELFdBQVc7b0JBQ2JDLGdCQUFnQjtnQkFDbEIsT0FBTztvQkFDTCxJQUFNQyxZQUFZLElBQUksQ0FBQ0MsWUFBWTtvQkFFbkNGLGdCQUFnQkMsV0FBWSxHQUFHO2dCQUNqQztnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQmQsR0FBRztnQkFDbEIsSUFBTUcsZUFBZSxJQUFJLENBQUNKLGVBQWUsQ0FBQ0MsTUFDcENlLGlCQUFrQlosaUJBQWlCLENBQUM7Z0JBRTFDLE9BQU9ZO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT2hCLEdBQUcsRUFBRWlCLFNBQVM7Z0JBQ25CLElBQUlDLFVBQVU7Z0JBRWQsSUFBTUMsa0JBQWtCLElBQUksQ0FBQ0MsaUJBQWlCO2dCQUU5QyxJQUFJLENBQUNELGlCQUFpQjtvQkFDcEJGLFlBQVk7Z0JBQ2Q7Z0JBRUEsSUFBTVAsWUFBWSxJQUFJLENBQUNXLFdBQVcsSUFDNUJOLGlCQUFpQixJQUFJLENBQUNELGdCQUFnQixDQUFDZDtnQkFFN0MsSUFBSSxDQUFDZSxnQkFBZ0I7b0JBQ25CLElBQUksQ0FBQ0wsV0FBVzt3QkFDZCxJQUFJLENBQUNZLFFBQVEsQ0FBQ0w7b0JBQ2hCO2dCQUNGLE9BQU87b0JBQ0wsSUFBTW5CLFdBQVcsSUFBSSxDQUFDSixXQUFXLElBQzNCUyxlQUFlLElBQUksQ0FBQ0osZUFBZSxDQUFDQyxNQUNwQ1csZ0JBQWdCLElBQUksQ0FBQ0YsZ0JBQWdCLENBQUNDO29CQUU1Q1osU0FBU3lCLE9BQU8sQ0FBQyxTQUFDTCxTQUFTTTt3QkFDeEJBLFVBQVVyQixlQUNUZSxRQUFRTyxJQUFJLEtBQ1ZQLFFBQVFRLElBQUk7b0JBQ2xCO29CQUVBLElBQUksQ0FBQ0MsT0FBTyxDQUFDM0I7b0JBRWIsSUFBSSxDQUFDNEIsTUFBTSxDQUFDakIsZUFBZU07b0JBRTNCQyxVQUFVcEIsUUFBUSxDQUFDSyxhQUFhO2dCQUNsQztnQkFFQSxPQUFPZTtZQUNUOzs7WUFFQVcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsWUFBWTtZQUNuQjs7O1lBRUFILEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRM0IsR0FBRztnQkFDVCxJQUFNRyxlQUFlLElBQUksQ0FBQ0osZUFBZSxDQUFDQyxNQUNwQytCLHNCQUF1QjVCLGlCQUFpQjtnQkFFOUMsSUFBSTRCLHFCQUFxQjtvQkFDdkIsSUFBSSxDQUFDQyxhQUFhO29CQUNsQixJQUFJLENBQUNDLFVBQVU7Z0JBQ2pCLE9BQU87b0JBQ0wsSUFBSSxDQUFDSCxZQUFZO2dCQUNuQjtZQUNGOzs7WUFFQUYsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9qQixhQUFhLEVBQUVNLFNBQVM7Z0JBQzdCLElBQUksQ0FBQ2lCLFNBQVMsQ0FBQ3ZCLGVBQWVNO1lBQ2hDOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNMLFNBQVM7O2dCQUNoQixJQUFJLENBQUNrQixXQUFXLENBQUNsQixXQUFXOzJCQUFNLE1BQUtZLE1BQU07O1lBQy9DOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQTBDLG9CQUFBLElBQUksQ0FBQyxXQUFXLEVBQWxEQyxpQkFBa0Msa0JBQWxDQSxjQUFjQyxvQkFBb0Isa0JBQXBCQSxpQkFDeUIsbUJBQUEsSUFBSSxDQUFDcEMsVUFBVSxFQUF0REQsV0FBdUMsaUJBQXZDQSxVQUFVc0MsUUFBNkIsaUJBQTdCQSxPQUFPQyxPQUFzQixpQkFBdEJBLE1BQU1DLGNBQWdCLGlCQUFoQkEsYUFDWHhDLDZCQUFBQSxjQUFaSSxVQUFZSixjQUNkSCxXQUFXRyxTQUFTeUMsR0FBRyxDQUFDLFNBQUNyQyxTQUFTbUI7eUNBRWhDLG9CQUFDbkI7d0JBQVFtQixPQUFPQTs7O2dCQUl4QixPQUFRO2tDQUVOLG9CQUFDYzt3QkFBZ0JqQyxTQUFTQTt3QkFBU2tDLE9BQU9BO3dCQUFPQyxNQUFNQTt3QkFBTUMsYUFBYUE7O2tDQUMxRSxvQkFBQ0osc0JBQ0V2QztpQkFHSjtZQUNIOzs7WUFFQTZDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLGFBQWEsQ0FBQztvQkFDakI7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7aUJBQ0Q7WUFDSDs7O1dBM0ltQm5EO3FCQUFzQm9ELGFBQU87QUE2SWhELGlCQTdJbUJwRCxlQTZJWjRDLGdCQUFlQSxrQkFBWTtBQUVsQyxpQkEvSW1CNUMsZUErSVo2QyxtQkFBa0JBLG1CQUFlO0FBRXhDLGlCQWpKbUI3QyxlQWlKWnFELFdBQVU7QUFFakIsaUJBbkptQnJELGVBbUpac0QscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==