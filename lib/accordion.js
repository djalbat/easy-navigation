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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hY2NvcmRpb24uanMiXSwibmFtZXMiOlsid2l0aFN0eWxlIiwiRWxlbWVudCIsIkFjY29yZGlvbkl0ZW0iLCJndWFyYW50ZWVBcnJheSIsIkFjY29yZGlvbiIsImdldEl0ZW1zIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJpdGVtcyIsImdldEFjY29yZGlvbkl0ZW0iLCJjb25zdHJ1Y3RvciIsInVwZGF0ZSIsInVyaSIsImluc3RhbnRseSIsImZvckVhY2giLCJpdGVtIiwiZGlkTW91bnQiLCJjb2xsYXBzZSIsIndpbGxVbm1vdW50IiwiQXJ0aWNsZXNBcnJheSIsInNob3dBcnRpY2xlIiwicHJvcGVydGllcyIsIkFydGljbGVzQXJyYXlMZW5ndGgiLCJsZW5ndGgiLCJsYXN0SW5kZXgiLCJmaXJzdEluZGV4IiwibWFwIiwiQXJ0aWNsZU9yQXJ0aWNsZXMiLCJpbmRleCIsImxhc3QiLCJmaXJzdCIsIkFydGljbGVzIiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwidXBkYXRlQWNjb3JkaW9uIiwiYmluZCIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFpQixDQUFqQixjQUFpQjtBQUVmLEdBQU0sQ0FBTixLQUFNO0FBRUosR0FBa0IsQ0FBbEIsVUFBa0I7QUFFYixHQUFtQixDQUFuQixNQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQTZFZCxDQUlwQzs7Ozs7OztJQS9FTSxTQUFTLGlCQUFmLFFBQVE7Y0FBRixT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QUM7Z0JBRVAsTUFBTSxDQUFDLGNBQWE7WUFDdEIsQ0FBQzs7O1dBaEVHLFNBQVM7bUJBTlMsS0FBTTtnQkFNeEIsU0FBUyxFQWtFTixDQUFhLGdCQXRFSSxVQUFrQjtnQkFJdEMsU0FBUyxFQW9FTixDQUFPLFVBQUcsQ0FBSTtnQkFwRWpCLFNBQVMsRUFzRU4sQ0FBaUIsb0JBQUcsQ0FBQztJQUMxQixTQUFTLEVBQUUsQ0FBVztBQUN4QixDQUFDO21CQWhGbUIsY0FBaUIsVUFtRmQsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IEFjY29yZGlvbkl0ZW0gZnJvbSBcIi4vaXRlbS9hY2NvcmRpb25cIjtcblxuaW1wb3J0IHsgZ3VhcmFudGVlQXJyYXkgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY2xhc3MgQWNjb3JkaW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldEl0ZW1zKCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKSxcbiAgICAgICAgICBpdGVtcyA9IGNoaWxkRWxlbWVudHM7ICAvLy9cblxuICAgIHJldHVybiBpdGVtcztcbiAgfVxuXG4gIGdldEFjY29yZGlvbkl0ZW0oKSB7XG4gICAgY29uc3QgeyBBY2NvcmRpb25JdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIEFjY29yZGlvbkl0ZW07XG4gIH1cblxuICB1cGRhdGUodXJpLCBpbnN0YW50bHkpIHtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuZ2V0SXRlbXMoKTtcblxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0udXBkYXRlKHVyaSwgaW5zdGFudGx5KSk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuZ2V0SXRlbXMoKSxcbiAgICAgICAgICBpbnN0YW50bHkgPSB0cnVlO1xuXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jb2xsYXBzZShpbnN0YW50bHkpKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IEFydGljbGVzQXJyYXksIHNob3dBcnRpY2xlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgQWNjb3JkaW9uSXRlbSA9IHRoaXMuZ2V0QWNjb3JkaW9uSXRlbSgpLFxuICAgICAgICAgIEFydGljbGVzQXJyYXlMZW5ndGggPSBBcnRpY2xlc0FycmF5Lmxlbmd0aCxcbiAgICAgICAgICBsYXN0SW5kZXggPSBBcnRpY2xlc0FycmF5TGVuZ3RoIC0gMSxcbiAgICAgICAgICBmaXJzdEluZGV4ID0gMCxcbiAgICAgICAgICBpdGVtcyA9IEFydGljbGVzQXJyYXkubWFwKChBcnRpY2xlT3JBcnRpY2xlcywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbGFzdCA9IChpbmRleCA9PT0gbGFzdEluZGV4KSxcbiAgICAgICAgICAgICAgICAgICAgZmlyc3QgPSAoaW5kZXggPT09IGZpcnN0SW5kZXgpLFxuICAgICAgICAgICAgICAgICAgICBBcnRpY2xlcyA9IGd1YXJhbnRlZUFycmF5KEFydGljbGVPckFydGljbGVzKTsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW0gQXJ0aWNsZXM9e0FydGljbGVzfSBmaXJzdD17Zmlyc3R9IGxhc3Q9e2xhc3R9IHNob3dBcnRpY2xlPXtzaG93QXJ0aWNsZX0gLz5cblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICAuLi5pdGVtc1xuXG4gICAgXSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB1cGRhdGVBY2NvcmRpb24gPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBwYXJlbnRDb250ZXh0ID0gT2JqZWN0LmFzc2lnbih7fSwgY29udGV4dCwge1xuICAgICAgICAgICAgdXBkYXRlQWNjb3JkaW9uXG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcGFyZW50Q29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBBY2NvcmRpb25JdGVtID0gQWNjb3JkaW9uSXRlbTtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwidWxcIjsgIC8vL1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYWNjb3JkaW9uXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEFjY29yZGlvbilgXG5cbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBcbmA7XG4iXX0=