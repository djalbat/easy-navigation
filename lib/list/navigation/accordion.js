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
var AccordionNavigationList = /*#__PURE__*/ function(Element1) {
    _inherits(AccordionNavigationList, Element1);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saXN0L25hdmlnYXRpb24vYWNjb3JkaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IEFjY29yZGlvbk5hdmlnYXRpb25JdGVtIGZyb20gXCIuLi8uLi9pdGVtL25hdmlnYXRpb24vYWNjb3JkaW9uXCI7XG5cbmltcG9ydCB7IGd1YXJhbnRlZUFycmF5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jbGFzcyBBY2NvcmRpb25OYXZpZ2F0aW9uTGlzdCBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRBY2NvcmRpb25OYXZpZ2F0aW9uSXRlbSgpIHtcbiAgICBjb25zdCB7IEFjY29yZGlvbk5hdmlnYXRpb25JdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIEFjY29yZGlvbk5hdmlnYXRpb25JdGVtO1xuICB9XG5cbiAgZ2V0QnV0dG9ucygpIHtcbiAgICBjb25zdCBidXR0b25EZXNjZW5kYW50RWxlbWVudHMgPSB0aGlzLmdldERlc2NlbmRhbnRFbGVtZW50cyhcImJ1dHRvblwiLCAyKSxcbiAgICAgICAgICBidXR0b25zID0gYnV0dG9uRGVzY2VuZGFudEVsZW1lbnRzOyAgLy8vXG5cbiAgICByZXR1cm4gYnV0dG9ucztcbiAgfVxuXG4gIHVwZGF0ZSh1cmkpIHtcbiAgICBjb25zdCBidXR0b25zID0gdGhpcy5nZXRCdXR0b25zKCk7XG5cbiAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgY29uc3QgdXJpQXJ0aWNsZVVSSSA9IGJ1dHRvbi5pc1VSSUFydGljbGVVUkkodXJpKTtcblxuICAgICAgKHVyaUFydGljbGVVUkkpID9cbiAgICAgICAgYnV0dG9uLmRpc2FibGUoKSA6XG4gICAgICAgICAgYnV0dG9uLmVuYWJsZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IEFydGljbGVzQXJyYXksIHNob3dBcnRpY2xlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgQXJ0aWNsZXNBcnJheUxlbmd0aCA9IEFydGljbGVzQXJyYXkubGVuZ3RoLFxuICAgICAgICAgIEFjY29yZGlvbk5hdmlnYXRpb25JdGVtID0gdGhpcy5nZXRBY2NvcmRpb25OYXZpZ2F0aW9uSXRlbSgpLFxuICAgICAgICAgIGZpcnN0SW5kZXggPSAwLFxuICAgICAgICAgIGxhc3RJbmRleCA9IEFydGljbGVzQXJyYXlMZW5ndGggLSAxLFxuICAgICAgICAgIGl0ZW1zID0gQXJ0aWNsZXNBcnJheS5tYXAoKEFydGljbGVPckFydGljbGVzLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFzdCA9IChpbmRleCA9PT0gbGFzdEluZGV4KSxcbiAgICAgICAgICAgICAgICAgIGZpcnN0ID0gKGluZGV4ID09PSBmaXJzdEluZGV4KSxcbiAgICAgICAgICAgICAgICAgIEFydGljbGVzID0gZ3VhcmFudGVlQXJyYXkoQXJ0aWNsZU9yQXJ0aWNsZXMpOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICA8QWNjb3JkaW9uTmF2aWdhdGlvbkl0ZW0gQXJ0aWNsZXM9e0FydGljbGVzfSBmaXJzdD17Zmlyc3R9IGxhc3Q9e2xhc3R9IHNob3dBcnRpY2xlPXtzaG93QXJ0aWNsZX0gLz5cblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICAuLi5pdGVtc1xuXG4gICAgXSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHVwZGF0ZUFjY29yZGlvbk5hdmlnYXRpb24gPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgcGFyZW50Q29udGV4dCA9IHtcbiAgICAgICAgICAgIHVwZGF0ZUFjY29yZGlvbk5hdmlnYXRpb25cbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIHBhcmVudENvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgQWNjb3JkaW9uTmF2aWdhdGlvbkl0ZW0gPSBBY2NvcmRpb25OYXZpZ2F0aW9uSXRlbTtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwidWxcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImFjY29yZGlvbiBuYXZpZ2F0aW9uXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEFjY29yZGlvbk5hdmlnYXRpb25MaXN0KWBcblxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIFxuYDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVVLEdBQWlCLENBQWpCLGNBQWlCO0FBRWYsR0FBTSxDQUFOLEtBQU07QUFFTSxHQUFpQyxDQUFqQyxVQUFpQztBQUV0QyxHQUF1QixDQUF2QixNQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQXVFSixrQ0FJbEQ7Ozs7Ozs7SUF6RU0sdUJBQXVCO2NBQXZCLHVCQUF1QjthQUF2Qix1QkFBdUI7OEJBQXZCLHVCQUF1QjtnRUFBdkIsdUJBQXVCOztpQkFBdkIsdUJBQXVCOztZQUMzQixHQUEwQixHQUExQiwwQkFBMEI7NEJBQTFCLDBCQUEwQixHQUFHLENBQUM7Z0JBQzVCLEdBQUssQ0FBK0IsWUFBZ0IsUUFBWCxXQUFXLEVBQTVDLHVCQUF1QixHQUFLLFlBQWdCLENBQTVDLHVCQUF1Qjt1QkFFeEIsdUJBQXVCO1lBQ2hDLENBQUM7OztZQUVELEdBQVUsR0FBVixVQUFVOzRCQUFWLFVBQVUsR0FBRyxDQUFDO2dCQUNaLEdBQUssQ0FBQyx3QkFBd0IsUUFBUSxxQkFBcUIsRUFBQyxNQUFRLEdBQUUsQ0FBQyxHQUNqRSxPQUFPLEdBQUcsd0JBQXdCLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3VCQUV2QyxPQUFPO1lBQ2hCLENBQUM7OztZQUVELEdBQU0sR0FBTixNQUFNOzRCQUFOLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDWCxHQUFLLENBQUMsT0FBTyxRQUFRLFVBQVU7Z0JBRS9CLE9BQU8sQ0FBQyxPQUFPLFVBQUUsTUFBTSxFQUFLLENBQUM7b0JBQzNCLEdBQUssQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFHO29CQUUvQyxhQUFhLEdBQ1osTUFBTSxDQUFDLE9BQU8sS0FDWixNQUFNLENBQUMsTUFBTTtnQkFDbkIsQ0FBQztZQUNILENBQUM7OztZQUVELEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWEsR0FBRyxDQUFDO2dCQUNmLEdBQUssQ0FBa0MsV0FBZSxRQUFWLFVBQVUsRUFBOUMsYUFBYSxHQUFrQixXQUFlLENBQTlDLGFBQWEsRUFBRSxXQUFXLEdBQUssV0FBZSxDQUEvQixXQUFXLEVBQzVCLG1CQUFtQixHQUFHLGFBQWEsQ0FBQyxNQUFNLEVBQzFDLHVCQUF1QixRQUFRLDBCQUEwQixJQUN6RCxVQUFVLEdBQUcsQ0FBQyxFQUNkLFNBQVMsR0FBRyxtQkFBbUIsR0FBRyxDQUFDLEVBQ25DLEtBQUssR0FBRyxhQUFhLENBQUMsR0FBRyxVQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBSyxDQUFDO29CQUN2RCxHQUFLLENBQUMsSUFBSSxHQUFJLEtBQUssS0FBSyxTQUFTLEVBQzNCLEtBQUssR0FBSSxLQUFLLEtBQUssVUFBVSxFQUM3QixRQUFRLE9BckNLLE1BQXVCLGlCQXFDVixpQkFBaUIsRUFBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7NkRBSXBELHVCQUF1Qjt3QkFBQyxRQUFRLEVBQUUsUUFBUTt3QkFBRSxLQUFLLEVBQUUsS0FBSzt3QkFBRSxJQUFJLEVBQUUsSUFBSTt3QkFBRSxXQUFXLEVBQUUsV0FBVzs7Z0JBR25HLENBQUM7MENBSUYsS0FBSztZQUdaLENBQUM7OztZQUVELEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWEsR0FBRyxDQUFDO2dCQUNmLEdBQUssQ0FBQyx5QkFBeUIsUUFBUSxNQUFNLENBQUMsSUFBSSxRQUM1QyxjQUFhO29CQUNYLHlCQUF5QixFQUF6Qix5QkFBeUI7O3VCQUcxQixjQUFhO1lBQ3RCLENBQUM7OztXQTFERyx1QkFBdUI7bUJBTkwsS0FBTTtnQkFNeEIsdUJBQXVCLEdBNERwQix1QkFBdUIsR0FoRUksVUFBaUM7Z0JBSS9ELHVCQUF1QixHQThEcEIsT0FBTyxJQUFHLEVBQUk7Z0JBOURqQix1QkFBdUIsR0FnRXBCLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsb0JBQXNCOzttQkF6RWYsY0FBaUIsVUE2RWQsdUJBQXVCIn0=