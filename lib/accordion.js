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
            value: function update(uri, instantly, callback) {
                var items = this.getItems();
                items.forEach(function(item) {
                    return item.update(uri, instantly, callback);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hY2NvcmRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgQWNjb3JkaW9uSXRlbSBmcm9tIFwiLi9pdGVtL2FjY29yZGlvblwiO1xuXG5pbXBvcnQgeyBndWFyYW50ZWVBcnJheSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jbGFzcyBBY2NvcmRpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0SXRlbXMoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIGl0ZW1zID0gY2hpbGRFbGVtZW50czsgIC8vL1xuXG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9XG5cbiAgZ2V0QWNjb3JkaW9uSXRlbSgpIHtcbiAgICBjb25zdCB7IEFjY29yZGlvbkl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gQWNjb3JkaW9uSXRlbTtcbiAgfVxuXG4gIHVwZGF0ZSh1cmksIGluc3RhbnRseSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuZ2V0SXRlbXMoKTtcblxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0udXBkYXRlKHVyaSwgaW5zdGFudGx5LCBjYWxsYmFjaykpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLmdldEl0ZW1zKCksXG4gICAgICAgICAgaW5zdGFudGx5ID0gdHJ1ZTtcblxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY29sbGFwc2UoaW5zdGFudGx5KSk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBBcnRpY2xlc0FycmF5LCBzaG93QXJ0aWNsZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIEFjY29yZGlvbkl0ZW0gPSB0aGlzLmdldEFjY29yZGlvbkl0ZW0oKSxcbiAgICAgICAgICBBcnRpY2xlc0FycmF5TGVuZ3RoID0gQXJ0aWNsZXNBcnJheS5sZW5ndGgsXG4gICAgICAgICAgbGFzdEluZGV4ID0gQXJ0aWNsZXNBcnJheUxlbmd0aCAtIDEsXG4gICAgICAgICAgZmlyc3RJbmRleCA9IDAsXG4gICAgICAgICAgaXRlbXMgPSBBcnRpY2xlc0FycmF5Lm1hcCgoQXJ0aWNsZU9yQXJ0aWNsZXMsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYXN0ID0gKGluZGV4ID09PSBsYXN0SW5kZXgpLFxuICAgICAgICAgICAgICAgICAgZmlyc3QgPSAoaW5kZXggPT09IGZpcnN0SW5kZXgpLFxuICAgICAgICAgICAgICAgICAgQXJ0aWNsZXMgPSBndWFyYW50ZWVBcnJheShBcnRpY2xlT3JBcnRpY2xlcyk7IC8vL1xuXG4gICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbSBBcnRpY2xlcz17QXJ0aWNsZXN9IGZpcnN0PXtmaXJzdH0gbGFzdD17bGFzdH0gc2hvd0FydGljbGU9e3Nob3dBcnRpY2xlfSAvPlxuXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgLi4uaXRlbXNcblxuICAgIF0pO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdXBkYXRlQWNjb3JkaW9uID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgcGFyZW50Q29udGV4dCA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnRleHQsIHtcbiAgICAgICAgICAgIHVwZGF0ZUFjY29yZGlvblxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhcmVudENvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgQWNjb3JkaW9uSXRlbSA9IEFjY29yZGlvbkl0ZW07XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInVsXCI7ICAvLy9cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImFjY29yZGlvblwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShBY2NvcmRpb24pYFxuXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVUsR0FBaUIsQ0FBakIsY0FBaUI7QUFFZixHQUFNLENBQU4sS0FBTTtBQUVKLEdBQWtCLENBQWxCLFVBQWtCO0FBRWIsR0FBbUIsQ0FBbkIsTUFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0E2RWQsa0NBSXBDOzs7Ozs7O0lBL0VNLFNBQVM7Y0FBVCxTQUFTO2FBQVQsU0FBUzs4QkFBVCxTQUFTO2dFQUFULFNBQVM7O2lCQUFULFNBQVM7O1lBQ2IsR0FBUSxHQUFSLFFBQVE7NEJBQVIsUUFBUSxHQUFHLENBQUM7Z0JBQ1YsR0FBSyxDQUFDLGFBQWEsUUFBUSxnQkFBZ0IsSUFDckMsS0FBSyxHQUFHLGFBQWEsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7dUJBRTFCLEtBQUs7WUFDZCxDQUFDOzs7WUFFRCxHQUFnQixHQUFoQixnQkFBZ0I7NEJBQWhCLGdCQUFnQixHQUFHLENBQUM7Z0JBQ2xCLEdBQUssQ0FBcUIsWUFBZ0IsUUFBWCxXQUFXLEVBQWxDLGFBQWEsR0FBSyxZQUFnQixDQUFsQyxhQUFhO3VCQUVkLGFBQWE7WUFDdEIsQ0FBQzs7O1lBRUQsR0FBTSxHQUFOLE1BQU07NEJBQU4sTUFBTSxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLENBQUM7Z0JBQ2hDLEdBQUssQ0FBQyxLQUFLLFFBQVEsUUFBUTtnQkFFM0IsS0FBSyxDQUFDLE9BQU8sVUFBRSxJQUFJOzJCQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxRQUFROztZQUM5RCxDQUFDOzs7WUFFRCxHQUFRLEdBQVIsUUFBUTs0QkFBUixRQUFRLEdBQUcsQ0FBQztnQkFDVixHQUFLLENBQUMsS0FBSyxRQUFRLFFBQVEsSUFDckIsU0FBUyxHQUFHLElBQUk7Z0JBRXRCLEtBQUssQ0FBQyxPQUFPLFVBQUUsSUFBSTsyQkFBSyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVM7O1lBQ2pELENBQUM7OztZQUVELEdBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVcsR0FBRyxDQUFDO1lBQ2IsRUFBRyxBQUFILENBQUc7WUFDTCxDQUFDOzs7WUFFRCxHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhLEdBQUcsQ0FBQztnQkFDZixHQUFLLENBQWtDLFdBQWUsUUFBVixVQUFVLEVBQTlDLGFBQWEsR0FBa0IsV0FBZSxDQUE5QyxhQUFhLEVBQUUsV0FBVyxHQUFLLFdBQWUsQ0FBL0IsV0FBVyxFQUM1QixhQUFhLFFBQVEsZ0JBQWdCLElBQ3JDLG1CQUFtQixHQUFHLGFBQWEsQ0FBQyxNQUFNLEVBQzFDLFNBQVMsR0FBRyxtQkFBbUIsR0FBRyxDQUFDLEVBQ25DLFVBQVUsR0FBRyxDQUFDLEVBQ2QsS0FBSyxHQUFHLGFBQWEsQ0FBQyxHQUFHLFVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFLLENBQUM7b0JBQ3ZELEdBQUssQ0FBQyxJQUFJLEdBQUksS0FBSyxLQUFLLFNBQVMsRUFDM0IsS0FBSyxHQUFJLEtBQUssS0FBSyxVQUFVLEVBQzdCLFFBQVEsT0ExQ0ssTUFBbUIsaUJBMENOLGlCQUFpQixFQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzs2REFJcEQsYUFBYTt3QkFBQyxRQUFRLEVBQUUsUUFBUTt3QkFBRSxLQUFLLEVBQUUsS0FBSzt3QkFBRSxJQUFJLEVBQUUsSUFBSTt3QkFBRSxXQUFXLEVBQUUsV0FBVzs7Z0JBRzNGLENBQUM7MENBSUEsS0FBSztZQUdaLENBQUM7OztZQUVELEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWEsR0FBRyxDQUFDO2dCQUNmLEdBQUssQ0FBQyxPQUFPLFFBQVEsVUFBVSxJQUN6QixlQUFlLFFBQVEsTUFBTSxDQUFDLElBQUksUUFDbEMsY0FBYSxHQUFHLE1BQU0sQ0FBQyxNQUFNO21CQUFLLE9BQU87b0JBQ3ZDLGVBQWUsRUFBZixlQUFlOzt1QkFHaEIsY0FBYTtZQUN0QixDQUFDOzs7V0FoRUcsU0FBUzttQkFOUyxLQUFNO2dCQU14QixTQUFTLEdBa0VOLGFBQWEsR0F0RUksVUFBa0I7Z0JBSXRDLFNBQVMsR0FvRU4sT0FBTyxJQUFHLEVBQUk7Z0JBcEVqQixTQUFTLEdBc0VOLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsU0FBVzs7bUJBL0VKLGNBQWlCLFVBbUZkLFNBQVMifQ==