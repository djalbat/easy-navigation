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
var Accordion = /*#__PURE__*/ function(Element1) {
    _inherits(Accordion, Element1);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hY2NvcmRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgQWNjb3JkaW9uSXRlbSBmcm9tIFwiLi9pdGVtL2FjY29yZGlvblwiO1xuXG5pbXBvcnQgeyBndWFyYW50ZWVBcnJheSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jbGFzcyBBY2NvcmRpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0SXRlbXMoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIGl0ZW1zID0gY2hpbGRFbGVtZW50czsgIC8vL1xuXG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9XG5cbiAgZ2V0QWNjb3JkaW9uSXRlbSgpIHtcbiAgICBjb25zdCB7IEFjY29yZGlvbkl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gQWNjb3JkaW9uSXRlbTtcbiAgfVxuXG4gIHVwZGF0ZSh1cmksIGluc3RhbnRseSkge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRJdGVtcygpO1xuXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS51cGRhdGUodXJpLCBpbnN0YW50bHkpKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRJdGVtcygpLFxuICAgICAgICAgIGluc3RhbnRseSA9IHRydWU7XG5cbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNvbGxhcHNlKGluc3RhbnRseSkpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgQXJ0aWNsZXNBcnJheSwgc2hvd0FydGljbGUgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBBY2NvcmRpb25JdGVtID0gdGhpcy5nZXRBY2NvcmRpb25JdGVtKCksXG4gICAgICAgICAgQXJ0aWNsZXNBcnJheUxlbmd0aCA9IEFydGljbGVzQXJyYXkubGVuZ3RoLFxuICAgICAgICAgIGxhc3RJbmRleCA9IEFydGljbGVzQXJyYXlMZW5ndGggLSAxLFxuICAgICAgICAgIGZpcnN0SW5kZXggPSAwLFxuICAgICAgICAgIGl0ZW1zID0gQXJ0aWNsZXNBcnJheS5tYXAoKEFydGljbGVPckFydGljbGVzLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBsYXN0ID0gKGluZGV4ID09PSBsYXN0SW5kZXgpLFxuICAgICAgICAgICAgICAgICAgICBmaXJzdCA9IChpbmRleCA9PT0gZmlyc3RJbmRleCksXG4gICAgICAgICAgICAgICAgICAgIEFydGljbGVzID0gZ3VhcmFudGVlQXJyYXkoQXJ0aWNsZU9yQXJ0aWNsZXMpOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbSBBcnRpY2xlcz17QXJ0aWNsZXN9IGZpcnN0PXtmaXJzdH0gbGFzdD17bGFzdH0gc2hvd0FydGljbGU9e3Nob3dBcnRpY2xlfSAvPlxuXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIC4uLml0ZW1zXG5cbiAgICBdKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHVwZGF0ZUFjY29yZGlvbiA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHBhcmVudENvbnRleHQgPSBPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LCB7XG4gICAgICAgICAgICB1cGRhdGVBY2NvcmRpb25cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBwYXJlbnRDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIEFjY29yZGlvbkl0ZW0gPSBBY2NvcmRpb25JdGVtO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJ1bFwiOyAgLy8vXG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJhY2NvcmRpb25cIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQWNjb3JkaW9uKWBcblxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIFxuYDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVVLEdBQWlCLENBQWpCLGNBQWlCO0FBRWYsR0FBTSxDQUFOLEtBQU07QUFFSixHQUFrQixDQUFsQixVQUFrQjtBQUViLEdBQW1CLENBQW5CLE1BQW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBNkVkLGtDQUlwQzs7Ozs7OztJQS9FTSxTQUFTO2NBQVQsU0FBUzthQUFULFNBQVM7OEJBQVQsU0FBUztnRUFBVCxTQUFTOztpQkFBVCxTQUFTOztZQUNiLEdBQVEsR0FBUixRQUFROzRCQUFSLFFBQVEsR0FBRyxDQUFDO2dCQUNWLEdBQUssQ0FBQyxhQUFhLFFBQVEsZ0JBQWdCLElBQ3JDLEtBQUssR0FBRyxhQUFhLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3VCQUUxQixLQUFLO1lBQ2QsQ0FBQzs7O1lBRUQsR0FBZ0IsR0FBaEIsZ0JBQWdCOzRCQUFoQixnQkFBZ0IsR0FBRyxDQUFDO2dCQUNsQixHQUFLLENBQXFCLFlBQWdCLFFBQVgsV0FBVyxFQUFsQyxhQUFhLEdBQUssWUFBZ0IsQ0FBbEMsYUFBYTt1QkFFZCxhQUFhO1lBQ3RCLENBQUM7OztZQUVELEdBQU0sR0FBTixNQUFNOzRCQUFOLE1BQU0sQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUM7Z0JBQ3RCLEdBQUssQ0FBQyxLQUFLLFFBQVEsUUFBUTtnQkFFM0IsS0FBSyxDQUFDLE9BQU8sVUFBRSxJQUFJOzJCQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFNBQVM7O1lBQ3BELENBQUM7OztZQUVELEdBQVEsR0FBUixRQUFROzRCQUFSLFFBQVEsR0FBRyxDQUFDO2dCQUNWLEdBQUssQ0FBQyxLQUFLLFFBQVEsUUFBUSxJQUNyQixTQUFTLEdBQUcsSUFBSTtnQkFFdEIsS0FBSyxDQUFDLE9BQU8sVUFBRSxJQUFJOzJCQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUzs7WUFDakQsQ0FBQzs7O1lBRUQsR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVyxHQUFHLENBQUM7WUFDYixFQUFHLEFBQUgsQ0FBRztZQUNMLENBQUM7OztZQUVELEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWEsR0FBRyxDQUFDO2dCQUNmLEdBQUssQ0FBa0MsV0FBZSxRQUFWLFVBQVUsRUFBOUMsYUFBYSxHQUFrQixXQUFlLENBQTlDLGFBQWEsRUFBRSxXQUFXLEdBQUssV0FBZSxDQUEvQixXQUFXLEVBQzVCLGFBQWEsUUFBUSxnQkFBZ0IsSUFDckMsbUJBQW1CLEdBQUcsYUFBYSxDQUFDLE1BQU0sRUFDMUMsU0FBUyxHQUFHLG1CQUFtQixHQUFHLENBQUMsRUFDbkMsVUFBVSxHQUFHLENBQUMsRUFDZCxLQUFLLEdBQUcsYUFBYSxDQUFDLEdBQUcsVUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUssQ0FBQztvQkFDckQsR0FBSyxDQUFDLElBQUksR0FBSSxLQUFLLEtBQUssU0FBUyxFQUMzQixLQUFLLEdBQUksS0FBSyxLQUFLLFVBQVUsRUFDN0IsUUFBUSxPQTFDRyxNQUFtQixpQkEwQ0osaUJBQWlCLEVBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHOzZEQUl0RCxhQUFhO3dCQUFDLFFBQVEsRUFBRSxRQUFRO3dCQUFFLEtBQUssRUFBRSxLQUFLO3dCQUFFLElBQUksRUFBRSxJQUFJO3dCQUFFLFdBQVcsRUFBRSxXQUFXOztnQkFHekYsQ0FBQzswQ0FJRixLQUFLO1lBR1osQ0FBQzs7O1lBRUQsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsR0FBSyxDQUFDLE9BQU8sUUFBUSxVQUFVLElBQ3pCLGVBQWUsUUFBUSxNQUFNLENBQUMsSUFBSSxRQUNsQyxjQUFhLEdBQUcsTUFBTSxDQUFDLE1BQU07bUJBQUssT0FBTztvQkFDdkMsZUFBZSxFQUFmLGVBQWU7O3VCQUdoQixjQUFhO1lBQ3RCLENBQUM7OztXQWhFRyxTQUFTO21CQU5TLEtBQU07Z0JBTXhCLFNBQVMsR0FrRU4sYUFBYSxHQXRFSSxVQUFrQjtnQkFJdEMsU0FBUyxHQW9FTixPQUFPLElBQUcsRUFBSTtnQkFwRWpCLFNBQVMsR0FzRU4saUJBQWlCO0lBQ3RCLFNBQVMsR0FBRSxTQUFXOzttQkEvRUosY0FBaUIsVUFtRmQsU0FBUyJ9