"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _accordion = _interopRequireDefault(require("../../item/navigation/accordion"));
var _array = require("../../utilities/array");
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
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
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
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
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
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
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  list-style-type: none;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var AccordionNavigationList = /*#__PURE__*/ function(Element) {
    _inherits(AccordionNavigationList, Element);
    function AccordionNavigationList() {
        _classCallCheck(this, AccordionNavigationList);
        return _possibleConstructorReturn(this, _getPrototypeOf(AccordionNavigationList).apply(this, arguments));
    }
    _createClass(AccordionNavigationList, [
        {
            key: "getAccordionNavigationItem",
            value: function getAccordionNavigationItem() {
                var _constructor = this.constructor, AccordionNavigationItem = _constructor.AccordionNavigationItem;
                return AccordionNavigationItem;
            }
        },
        {
            key: "getButtons",
            value: function getButtons() {
                var buttonDescendantElements = this.getDescendantElements("button", 2), buttons = buttonDescendantElements; ///
                return buttons;
            }
        },
        {
            key: "update",
            value: function update(uri) {
                var buttons = this.getButtons();
                buttons.forEach(function(button) {
                    var uriArticleURI = button.isURIArticleURI(uri);
                    uriArticleURI ? button.disable() : button.enable();
                });
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _properties = this.properties, ArticlesArray = _properties.ArticlesArray, showArticle = _properties.showArticle, ArticlesArrayLength = ArticlesArray.length, AccordionNavigationItem = this.getAccordionNavigationItem(), firstIndex = 0, lastIndex = ArticlesArrayLength - 1, items = ArticlesArray.map(function(ArticleOrArticles, index) {
                    var last = index === lastIndex, first = index === firstIndex, Articles = (0, _array).guaranteeArray(ArticleOrArticles); ///
                    return(/*#__PURE__*/ React.createElement(AccordionNavigationItem, {
                        Articles: Articles,
                        first: first,
                        last: last,
                        showArticle: showArticle
                    }));
                });
                return _toConsumableArray(items);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var updateAccordionNavigation = this.update.bind(this), parentContext1 = {
                    updateAccordionNavigation: updateAccordionNavigation
                };
                return parentContext1;
            }
        }
    ]);
    return AccordionNavigationList;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(AccordionNavigationList, "AccordionNavigationItem", _accordion.default);
_defineProperty(AccordionNavigationList, "tagName", "ul");
_defineProperty(AccordionNavigationList, "defaultProperties", {
    className: "accordion navigation"
});
var _default = (0, _easyWithStyle).default(AccordionNavigationList)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saXN0L25hdmlnYXRpb24vYWNjb3JkaW9uLmpzIl0sIm5hbWVzIjpbIndpdGhTdHlsZSIsIkVsZW1lbnQiLCJBY2NvcmRpb25OYXZpZ2F0aW9uSXRlbSIsImd1YXJhbnRlZUFycmF5IiwiQWNjb3JkaW9uTmF2aWdhdGlvbkxpc3QiLCJnZXRBY2NvcmRpb25OYXZpZ2F0aW9uSXRlbSIsImNvbnN0cnVjdG9yIiwiZ2V0QnV0dG9ucyIsImJ1dHRvbkRlc2NlbmRhbnRFbGVtZW50cyIsImdldERlc2NlbmRhbnRFbGVtZW50cyIsImJ1dHRvbnMiLCJ1cGRhdGUiLCJ1cmkiLCJmb3JFYWNoIiwiYnV0dG9uIiwidXJpQXJ0aWNsZVVSSSIsImlzVVJJQXJ0aWNsZVVSSSIsImRpc2FibGUiLCJlbmFibGUiLCJjaGlsZEVsZW1lbnRzIiwiQXJ0aWNsZXNBcnJheSIsInNob3dBcnRpY2xlIiwicHJvcGVydGllcyIsIkFydGljbGVzQXJyYXlMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdEluZGV4IiwibGFzdEluZGV4IiwiaXRlbXMiLCJtYXAiLCJBcnRpY2xlT3JBcnRpY2xlcyIsImluZGV4IiwibGFzdCIsImZpcnN0IiwiQXJ0aWNsZXMiLCJwYXJlbnRDb250ZXh0IiwidXBkYXRlQWNjb3JkaW9uTmF2aWdhdGlvbiIsImJpbmQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVUsR0FBaUIsQ0FBakIsY0FBaUI7QUFFZixHQUFNLENBQU4sS0FBTTtBQUVNLEdBQWlDLENBQWpDLFVBQWlDO0FBRXRDLEdBQXVCLENBQXZCLE1BQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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