"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _accordion = _interopRequireDefault(require("../../item/navigation/accordion"));
var _array = require("../../utilities/array");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
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
function _construct(Parent1, args1, Class1) {
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
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
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
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
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
function _wrapNativeSuper(Class2) {
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
    return _wrapNativeSuper(Class2);
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
    var _super = _createSuper(AccordionNavigationList);
    function AccordionNavigationList() {
        _classCallCheck(this, AccordionNavigationList);
        return _super.apply(this, arguments);
    }
    _createClass(AccordionNavigationList, [
        {
            key: "getButtons",
            value: function getButtons() {
                var maximumDepth = 2, buttonDescendantElements = this.getDescendantElements("button", maximumDepth), buttons = buttonDescendantElements; ///
                return buttons;
            }
        },
        {
            key: "update",
            value: function update(uri) {
                var buttons = this.getButtons();
                buttons.forEach(function(button) {
                    var uriArticleURI = button.isURIArticleURI(uri);
                    if (uriArticleURI) {
                        button.disable();
                        button.blur();
                    } else {
                        button.enable();
                    }
                });
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _$AccordionNavigationItem = this.constructor.AccordionNavigationItem, _properties = this.properties, ArticlesArray = _properties.ArticlesArray, showArticle = _properties.showArticle, ArticlesArrayLength = ArticlesArray.length, firstIndex = 0, lastIndex = ArticlesArrayLength - 1, items = ArticlesArray.map(function(ArticleOrArticles, index) {
                    var last = index === lastIndex, first = index === firstIndex, Articles = (0, _array).guaranteeArray(ArticleOrArticles); ///
                    return /*#__PURE__*/ React.createElement(_$AccordionNavigationItem, {
                        Articles: Articles,
                        first: first,
                        last: last,
                        showArticle: showArticle
                    });
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
    className: "accordion-navigation"
});
var _default = (0, _easyWithStyle).default(AccordionNavigationList)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saXN0L25hdmlnYXRpb24vYWNjb3JkaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IEFjY29yZGlvbk5hdmlnYXRpb25JdGVtIGZyb20gXCIuLi8uLi9pdGVtL25hdmlnYXRpb24vYWNjb3JkaW9uXCI7XG5cbmltcG9ydCB7IGd1YXJhbnRlZUFycmF5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jbGFzcyBBY2NvcmRpb25OYXZpZ2F0aW9uTGlzdCBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRCdXR0b25zKCkge1xuICAgIGNvbnN0IG1heGltdW1EZXB0aCA9IDIsXG4gICAgICAgICAgYnV0dG9uRGVzY2VuZGFudEVsZW1lbnRzID0gdGhpcy5nZXREZXNjZW5kYW50RWxlbWVudHMoXCJidXR0b25cIiwgbWF4aW11bURlcHRoKSxcbiAgICAgICAgICBidXR0b25zID0gYnV0dG9uRGVzY2VuZGFudEVsZW1lbnRzOyAgLy8vXG5cbiAgICByZXR1cm4gYnV0dG9ucztcbiAgfVxuXG4gIHVwZGF0ZSh1cmkpIHtcbiAgICBjb25zdCBidXR0b25zID0gdGhpcy5nZXRCdXR0b25zKCk7XG5cbiAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgY29uc3QgdXJpQXJ0aWNsZVVSSSA9IGJ1dHRvbi5pc1VSSUFydGljbGVVUkkodXJpKTtcblxuICAgICAgaWYgKHVyaUFydGljbGVVUkkpIHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGUoKTtcbiAgICAgICAgYnV0dG9uLmJsdXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvbi5lbmFibGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBBY2NvcmRpb25OYXZpZ2F0aW9uSXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICB7IEFydGljbGVzQXJyYXksIHNob3dBcnRpY2xlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgQXJ0aWNsZXNBcnJheUxlbmd0aCA9IEFydGljbGVzQXJyYXkubGVuZ3RoLFxuICAgICAgICAgIGZpcnN0SW5kZXggPSAwLFxuICAgICAgICAgIGxhc3RJbmRleCA9IEFydGljbGVzQXJyYXlMZW5ndGggLSAxLFxuICAgICAgICAgIGl0ZW1zID0gQXJ0aWNsZXNBcnJheS5tYXAoKEFydGljbGVPckFydGljbGVzLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFzdCA9IChpbmRleCA9PT0gbGFzdEluZGV4KSxcbiAgICAgICAgICAgICAgICAgIGZpcnN0ID0gKGluZGV4ID09PSBmaXJzdEluZGV4KSxcbiAgICAgICAgICAgICAgICAgIEFydGljbGVzID0gZ3VhcmFudGVlQXJyYXkoQXJ0aWNsZU9yQXJ0aWNsZXMpOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICA8QWNjb3JkaW9uTmF2aWdhdGlvbkl0ZW0gQXJ0aWNsZXM9e0FydGljbGVzfSBmaXJzdD17Zmlyc3R9IGxhc3Q9e2xhc3R9IHNob3dBcnRpY2xlPXtzaG93QXJ0aWNsZX0gLz5cblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICAuLi5pdGVtc1xuXG4gICAgXSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHVwZGF0ZUFjY29yZGlvbk5hdmlnYXRpb24gPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgcGFyZW50Q29udGV4dCA9IHtcbiAgICAgICAgICAgIHVwZGF0ZUFjY29yZGlvbk5hdmlnYXRpb25cbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIHBhcmVudENvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgQWNjb3JkaW9uTmF2aWdhdGlvbkl0ZW0gPSBBY2NvcmRpb25OYXZpZ2F0aW9uSXRlbTtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwidWxcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImFjY29yZGlvbi1uYXZpZ2F0aW9uXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEFjY29yZGlvbk5hdmlnYXRpb25MaXN0KWBcblxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJBY2NvcmRpb25OYXZpZ2F0aW9uTGlzdCIsImdldEJ1dHRvbnMiLCJtYXhpbXVtRGVwdGgiLCJidXR0b25EZXNjZW5kYW50RWxlbWVudHMiLCJnZXREZXNjZW5kYW50RWxlbWVudHMiLCJidXR0b25zIiwidXBkYXRlIiwidXJpIiwiZm9yRWFjaCIsImJ1dHRvbiIsInVyaUFydGljbGVVUkkiLCJpc1VSSUFydGljbGVVUkkiLCJkaXNhYmxlIiwiYmx1ciIsImVuYWJsZSIsImNoaWxkRWxlbWVudHMiLCJBY2NvcmRpb25OYXZpZ2F0aW9uSXRlbSIsImNvbnN0cnVjdG9yIiwicHJvcGVydGllcyIsIkFydGljbGVzQXJyYXkiLCJzaG93QXJ0aWNsZSIsIkFydGljbGVzQXJyYXlMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdEluZGV4IiwibGFzdEluZGV4IiwiaXRlbXMiLCJtYXAiLCJBcnRpY2xlT3JBcnRpY2xlcyIsImluZGV4IiwibGFzdCIsImZpcnN0IiwiQXJ0aWNsZXMiLCJndWFyYW50ZWVBcnJheSIsInBhcmVudENvbnRleHQiLCJ1cGRhdGVBY2NvcmRpb25OYXZpZ2F0aW9uIiwiYmluZCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJB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