"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _accordion = _interopRequireDefault(require("./item/accordion"));
var _array = require("./utilities/array");
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
var Accordion = /*#__PURE__*/ function(Element) {
    _inherits(Accordion, Element);
    function Accordion() {
        _classCallCheck(this, Accordion);
        return _possibleConstructorReturn(this, _getPrototypeOf(Accordion).apply(this, arguments));
    }
    _createClass(Accordion, [
        {
            key: "getItems",
            value: function getItems() {
                var childElements = this.getChildElements(), items = childElements; ///
                return items;
            }
        },
        {
            key: "getAccordionItem",
            value: function getAccordionItem() {
                var _constructor = this.constructor, AccordionItem = _constructor.AccordionItem;
                return AccordionItem;
            }
        },
        {
            key: "update",
            value: function update(uri, instantly) {
                var items = this.getItems();
                items.forEach(function(item) {
                    return item.update(uri, instantly);
                });
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var items = this.getItems(), instantly = true;
                items.forEach(function(item) {
                    return item.collapse(instantly);
                });
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
            ///
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _properties = this.properties, ArticlesArray = _properties.ArticlesArray, showArticle = _properties.showArticle, AccordionItem = this.getAccordionItem(), ArticlesArrayLength = ArticlesArray.length, lastIndex = ArticlesArrayLength - 1, firstIndex = 0, items = ArticlesArray.map(function(ArticleOrArticles, index) {
                    var last = index === lastIndex, first = index === firstIndex, Articles = (0, _array).guaranteeArray(ArticleOrArticles); ///
                    return(/*#__PURE__*/ React.createElement(AccordionItem, {
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
                var context = this.getContext(), updateAccordion = this.update.bind(this), parentContext1 = Object.assign({
                }, context, {
                    updateAccordion: updateAccordion
                });
                return parentContext1;
            }
        }
    ]);
    return Accordion;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(Accordion, "AccordionItem", _accordion.default);
_defineProperty(Accordion, "tagName", "ul");
_defineProperty(Accordion, "defaultProperties", {
    className: "accordion"
});
var _default = (0, _easyWithStyle).default(Accordion)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hY2NvcmRpb24uanMiXSwibmFtZXMiOlsid2l0aFN0eWxlIiwiRWxlbWVudCIsIkFjY29yZGlvbkl0ZW0iLCJndWFyYW50ZWVBcnJheSIsIkFjY29yZGlvbiIsImdldEl0ZW1zIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJpdGVtcyIsImdldEFjY29yZGlvbkl0ZW0iLCJjb25zdHJ1Y3RvciIsInVwZGF0ZSIsInVyaSIsImluc3RhbnRseSIsImZvckVhY2giLCJpdGVtIiwiZGlkTW91bnQiLCJjb2xsYXBzZSIsIndpbGxVbm1vdW50IiwiQXJ0aWNsZXNBcnJheSIsInNob3dBcnRpY2xlIiwicHJvcGVydGllcyIsIkFydGljbGVzQXJyYXlMZW5ndGgiLCJsZW5ndGgiLCJsYXN0SW5kZXgiLCJmaXJzdEluZGV4IiwibWFwIiwiQXJ0aWNsZU9yQXJ0aWNsZXMiLCJpbmRleCIsImxhc3QiLCJmaXJzdCIsIkFydGljbGVzIiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwidXBkYXRlQWNjb3JkaW9uIiwiYmluZCIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFVSxHQUFpQixDQUFqQixjQUFpQjtBQUVmLEdBQU0sQ0FBTixLQUFNO0FBRUosR0FBa0IsQ0FBbEIsVUFBa0I7QUFFYixHQUFtQixDQUFuQixNQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQTZFZCxrQ0FJcEM7Ozs7Ozs7SUEvRU0sU0FBUyxpQkFBZixRQUFRO2NBQUYs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