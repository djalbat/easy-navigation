"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _accordion = _interopRequireDefault(require("./item/accordion"));
var _array = require("./utilities/array");
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
var Accordion = /*#__PURE__*/ function(Element) {
    _inherits(Accordion, Element);
    var _super = _createSuper(Accordion);
    function Accordion() {
        _classCallCheck(this, Accordion);
        return _super.apply(this, arguments);
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
                var _$AccordionItem = this.constructor.AccordionItem;
                return _$AccordionItem;
            }
        },
        {
            key: "update",
            value: function update(uri, instantly) {
                var items = this.getItems(), article1 = items.reduce(function(article, item) {
                    var itemArticle = item.update(uri, instantly);
                    if (itemArticle !== null) {
                        article = itemArticle; ///
                    }
                    return article;
                }, null);
                return article1;
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
                var _properties = this.properties, ArticlesArray = _properties.ArticlesArray, showArticle = _properties.showArticle, _$AccordionItem = this.getAccordionItem(), ArticlesArrayLength = ArticlesArray.length, lastIndex = ArticlesArrayLength - 1, firstIndex = 0, items = ArticlesArray.map(function(ArticleOrArticles, index) {
                    var last = index === lastIndex, first = index === firstIndex, Articles = (0, _array).guaranteeArray(ArticleOrArticles); ///
                    return /*#__PURE__*/ React.createElement(_$AccordionItem, {
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
                var context = this.getContext(), updateAccordion = this.update.bind(this), parentContext1 = Object.assign({}, context, {
                    updateAccordion: updateAccordion
                });
                return parentContext1;
            }
        }
    ]);
    return Accordion;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(Accordion, "AccordionItem", _accordion.default);
_defineProperty(Accordion, "tagName", "ul") ///
;
_defineProperty(Accordion, "defaultProperties", {
    className: "accordion"
});
var _default = (0, _easyWithStyle).default(Accordion)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hY2NvcmRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgQWNjb3JkaW9uSXRlbSBmcm9tIFwiLi9pdGVtL2FjY29yZGlvblwiO1xuXG5pbXBvcnQgeyBndWFyYW50ZWVBcnJheSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jbGFzcyBBY2NvcmRpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0SXRlbXMoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIGl0ZW1zID0gY2hpbGRFbGVtZW50czsgIC8vL1xuXG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9XG5cbiAgZ2V0QWNjb3JkaW9uSXRlbSgpIHtcbiAgICBjb25zdCB7IEFjY29yZGlvbkl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gQWNjb3JkaW9uSXRlbTtcbiAgfVxuXG4gIHVwZGF0ZSh1cmksIGluc3RhbnRseSkge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRJdGVtcygpLFxuICAgICAgICAgIGFydGljbGUgPSBpdGVtcy5yZWR1Y2UoKGFydGljbGUsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1BcnRpY2xlID0gaXRlbS51cGRhdGUodXJpLCBpbnN0YW50bHkpO1xuXG4gICAgICAgICAgICBpZiAoaXRlbUFydGljbGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgYXJ0aWNsZSA9IGl0ZW1BcnRpY2xlOyAgLy8vXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBhcnRpY2xlO1xuICAgICAgICAgIH0sIG51bGwpO1xuXG4gICAgcmV0dXJuIGFydGljbGU7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuZ2V0SXRlbXMoKSxcbiAgICAgICAgICBpbnN0YW50bHkgPSB0cnVlO1xuXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jb2xsYXBzZShpbnN0YW50bHkpKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IEFydGljbGVzQXJyYXksIHNob3dBcnRpY2xlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgQWNjb3JkaW9uSXRlbSA9IHRoaXMuZ2V0QWNjb3JkaW9uSXRlbSgpLFxuICAgICAgICAgIEFydGljbGVzQXJyYXlMZW5ndGggPSBBcnRpY2xlc0FycmF5Lmxlbmd0aCxcbiAgICAgICAgICBsYXN0SW5kZXggPSBBcnRpY2xlc0FycmF5TGVuZ3RoIC0gMSxcbiAgICAgICAgICBmaXJzdEluZGV4ID0gMCxcbiAgICAgICAgICBpdGVtcyA9IEFydGljbGVzQXJyYXkubWFwKChBcnRpY2xlT3JBcnRpY2xlcywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbGFzdCA9IChpbmRleCA9PT0gbGFzdEluZGV4KSxcbiAgICAgICAgICAgICAgICAgICAgZmlyc3QgPSAoaW5kZXggPT09IGZpcnN0SW5kZXgpLFxuICAgICAgICAgICAgICAgICAgICBBcnRpY2xlcyA9IGd1YXJhbnRlZUFycmF5KEFydGljbGVPckFydGljbGVzKTsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW0gQXJ0aWNsZXM9e0FydGljbGVzfSBmaXJzdD17Zmlyc3R9IGxhc3Q9e2xhc3R9IHNob3dBcnRpY2xlPXtzaG93QXJ0aWNsZX0gLz5cblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICAuLi5pdGVtc1xuXG4gICAgXSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB1cGRhdGVBY2NvcmRpb24gPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBwYXJlbnRDb250ZXh0ID0gT2JqZWN0LmFzc2lnbih7fSwgY29udGV4dCwge1xuICAgICAgICAgICAgdXBkYXRlQWNjb3JkaW9uXG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcGFyZW50Q29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBBY2NvcmRpb25JdGVtID0gQWNjb3JkaW9uSXRlbTtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwidWxcIjsgIC8vL1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYWNjb3JkaW9uXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEFjY29yZGlvbilgXG5cbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiQWNjb3JkaW9uIiwiZ2V0SXRlbXMiLCJjaGlsZEVsZW1lbnRzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsIml0ZW1zIiwiZ2V0QWNjb3JkaW9uSXRlbSIsIkFjY29yZGlvbkl0ZW0iLCJjb25zdHJ1Y3RvciIsInVwZGF0ZSIsInVyaSIsImluc3RhbnRseSIsImFydGljbGUiLCJyZWR1Y2UiLCJpdGVtIiwiaXRlbUFydGljbGUiLCJkaWRNb3VudCIsImZvckVhY2giLCJjb2xsYXBzZSIsIndpbGxVbm1vdW50IiwicHJvcGVydGllcyIsIkFydGljbGVzQXJyYXkiLCJzaG93QXJ0aWNsZSIsIkFydGljbGVzQXJyYXlMZW5ndGgiLCJsZW5ndGgiLCJsYXN0SW5kZXgiLCJmaXJzdEluZGV4IiwibWFwIiwiQXJ0aWNsZU9yQXJ0aWNsZXMiLCJpbmRleCIsImxhc3QiLCJmaXJzdCIsIkFydGljbGVzIiwiZ3VhcmFudGVlQXJyYXkiLCJwYXJlbnRDb250ZXh0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJ1cGRhdGVBY2NvcmRpb24iLCJiaW5kIiwiT2JqZWN0IiwiYXNzaWduIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVTLElBQUEsY0FBaUIsa0NBQWpCLGlCQUFpQixFQUFBO0FBRWYsSUFBQSxLQUFNLFdBQU4sTUFBTSxDQUFBO0FBRUosSUFBQSxVQUFrQixrQ0FBbEIsa0JBQWtCLEVBQUE7QUFFYixJQUFBLE1BQW1CLFdBQW5CLG1CQUFtQixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxELElBQUEsQUFBTUEsU0FBUyxpQkFvRlosQUFwRkg7OzthQUFNQSxTQUFTOzs7Ozs7WUFDYkMsR0FBUSxFQUFSQSxVQUFRO21CQUFSQSxTQUFBQSxRQUFRLEdBQUc7Z0JBQ1QsSUFBTUMsYUFBYSxHQUFHLElBQUksQ0FBQ0MsZ0JBQWdCLEVBQUUsRUFDdkNDLEtBQUssR0FBR0YsYUFBYSxBQUFDLEVBQUUsR0FBRztnQkFFakMsT0FBT0UsS0FBSyxDQUFDO2FBQ2Q7OztZQUVEQyxHQUFnQixFQUFoQkEsa0JBQWdCO21CQUFoQkEsU0FBQUEsZ0JBQWdCLEdBQUc7Z0JBQ2pCLElBQU0sQUFBRUMsZUFBYSxHQUFLLElBQUksQ0FBQ0MsV0FBVyxDQUFsQ0QsYUFBYSxBQUFxQixBQUFDO2dCQUUzQyxPQUFPQSxlQUFhLENBQUM7YUFDdEI7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