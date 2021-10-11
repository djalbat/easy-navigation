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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saXN0L25hdmlnYXRpb24vYWNjb3JkaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IEFjY29yZGlvbk5hdmlnYXRpb25JdGVtIGZyb20gXCIuLi8uLi9pdGVtL25hdmlnYXRpb24vYWNjb3JkaW9uXCI7XG5cbmltcG9ydCB7IGd1YXJhbnRlZUFycmF5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jbGFzcyBBY2NvcmRpb25OYXZpZ2F0aW9uTGlzdCBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRBY2NvcmRpb25OYXZpZ2F0aW9uSXRlbSgpIHtcbiAgICBjb25zdCB7IEFjY29yZGlvbk5hdmlnYXRpb25JdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIEFjY29yZGlvbk5hdmlnYXRpb25JdGVtO1xuICB9XG5cbiAgZ2V0QnV0dG9ucygpIHtcbiAgICBjb25zdCBtYXhpbXVtRGVwdGggPSAyLFxuICAgICAgICAgIGJ1dHRvbkRlc2NlbmRhbnRFbGVtZW50cyA9IHRoaXMuZ2V0RGVzY2VuZGFudEVsZW1lbnRzKFwiYnV0dG9uXCIsIG1heGltdW1EZXB0aCksXG4gICAgICAgICAgYnV0dG9ucyA9IGJ1dHRvbkRlc2NlbmRhbnRFbGVtZW50czsgIC8vL1xuXG4gICAgcmV0dXJuIGJ1dHRvbnM7XG4gIH1cblxuICB1cGRhdGUodXJpKSB7XG4gICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuZ2V0QnV0dG9ucygpO1xuXG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGNvbnN0IHVyaUFydGljbGVVUkkgPSBidXR0b24uaXNVUklBcnRpY2xlVVJJKHVyaSk7XG5cbiAgICAgICh1cmlBcnRpY2xlVVJJKSA/XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlKCkgOlxuICAgICAgICAgIGJ1dHRvbi5lbmFibGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBBcnRpY2xlc0FycmF5LCBzaG93QXJ0aWNsZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIEFydGljbGVzQXJyYXlMZW5ndGggPSBBcnRpY2xlc0FycmF5Lmxlbmd0aCxcbiAgICAgICAgICBBY2NvcmRpb25OYXZpZ2F0aW9uSXRlbSA9IHRoaXMuZ2V0QWNjb3JkaW9uTmF2aWdhdGlvbkl0ZW0oKSxcbiAgICAgICAgICBmaXJzdEluZGV4ID0gMCxcbiAgICAgICAgICBsYXN0SW5kZXggPSBBcnRpY2xlc0FycmF5TGVuZ3RoIC0gMSxcbiAgICAgICAgICBpdGVtcyA9IEFydGljbGVzQXJyYXkubWFwKChBcnRpY2xlT3JBcnRpY2xlcywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3QgPSAoaW5kZXggPT09IGxhc3RJbmRleCksXG4gICAgICAgICAgICAgICAgICBmaXJzdCA9IChpbmRleCA9PT0gZmlyc3RJbmRleCksXG4gICAgICAgICAgICAgICAgICBBcnRpY2xlcyA9IGd1YXJhbnRlZUFycmF5KEFydGljbGVPckFydGljbGVzKTsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgPEFjY29yZGlvbk5hdmlnYXRpb25JdGVtIEFydGljbGVzPXtBcnRpY2xlc30gZmlyc3Q9e2ZpcnN0fSBsYXN0PXtsYXN0fSBzaG93QXJ0aWNsZT17c2hvd0FydGljbGV9IC8+XG5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgLi4uaXRlbXNcblxuICAgIF0pO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCB1cGRhdGVBY2NvcmRpb25OYXZpZ2F0aW9uID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHBhcmVudENvbnRleHQgPSB7XG4gICAgICAgICAgICB1cGRhdGVBY2NvcmRpb25OYXZpZ2F0aW9uXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBwYXJlbnRDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIEFjY29yZGlvbk5hdmlnYXRpb25JdGVtID0gQWNjb3JkaW9uTmF2aWdhdGlvbkl0ZW07XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInVsXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJhY2NvcmRpb24gbmF2aWdhdGlvblwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShBY2NvcmRpb25OYXZpZ2F0aW9uTGlzdClgXG5cbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBcbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFVSxHQUFpQixDQUFqQixjQUFpQjtBQUVmLEdBQU0sQ0FBTixLQUFNO0FBRU0sR0FBaUMsQ0FBakMsVUFBaUM7QUFFdEMsR0FBdUIsQ0FBdkIsTUFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0F3RUosa0NBSWxEOzs7Ozs7O0lBMUVNLHVCQUF1QjtjQUF2Qix1QkFBdUI7YUFBdkIsdUJBQXVCOzhCQUF2Qix1QkFBdUI7Z0VBQXZCLHVCQUF1Qjs7aUJBQXZCLHVCQUF1Qjs7WUFDM0IsR0FBMEIsR0FBMUIsMEJBQTBCOzRCQUExQiwwQkFBMEIsR0FBRyxDQUFDO2dCQUM1QixHQUFLLENBQStCLFlBQWdCLFFBQVgsV0FBVyxFQUE1Qyx1QkFBdUIsR0FBSyxZQUFnQixDQUE1Qyx1QkFBdUI7dUJBRXhCLHVCQUF1QjtZQUNoQyxDQUFDOzs7WUFFRCxHQUFVLEdBQVYsVUFBVTs0QkFBVixVQUFVLEdBQUcsQ0FBQztnQkFDWixHQUFLLENBQUMsWUFBWSxHQUFHLENBQUMsRUFDaEIsd0JBQXdCLFFBQVEscUJBQXFCLEVBQUMsTUFBUSxHQUFFLFlBQVksR0FDNUUsT0FBTyxHQUFHLHdCQUF3QixDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzt1QkFFdkMsT0FBTztZQUNoQixDQUFDOzs7WUFFRCxHQUFNLEdBQU4sTUFBTTs0QkFBTixNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ1gsR0FBSyxDQUFDLE9BQU8sUUFBUSxVQUFVO2dCQUUvQixPQUFPLENBQUMsT0FBTyxVQUFFLE1BQU0sRUFBSyxDQUFDO29CQUMzQixHQUFLLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBRztvQkFFL0MsYUFBYSxHQUNaLE1BQU0sQ0FBQyxPQUFPLEtBQ1osTUFBTSxDQUFDLE1BQU07Z0JBQ25CLENBQUM7WUFDSCxDQUFDOzs7WUFFRCxHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhLEdBQUcsQ0FBQztnQkFDZixHQUFLLENBQWtDLFdBQWUsUUFBVixVQUFVLEVBQTlDLGFBQWEsR0FBa0IsV0FBZSxDQUE5QyxhQUFhLEVBQUUsV0FBVyxHQUFLLFdBQWUsQ0FBL0IsV0FBVyxFQUM1QixtQkFBbUIsR0FBRyxhQUFhLENBQUMsTUFBTSxFQUMxQyx1QkFBdUIsUUFBUSwwQkFBMEIsSUFDekQsVUFBVSxHQUFHLENBQUMsRUFDZCxTQUFTLEdBQUcsbUJBQW1CLEdBQUcsQ0FBQyxFQUNuQyxLQUFLLEdBQUcsYUFBYSxDQUFDLEdBQUcsVUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUssQ0FBQztvQkFDdkQsR0FBSyxDQUFDLElBQUksR0FBSSxLQUFLLEtBQUssU0FBUyxFQUMzQixLQUFLLEdBQUksS0FBSyxLQUFLLFVBQVUsRUFDN0IsUUFBUSxPQXRDSyxNQUF1QixpQkFzQ1YsaUJBQWlCLEVBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHOzZEQUlwRCx1QkFBdUI7d0JBQUMsUUFBUSxFQUFFLFFBQVE7d0JBQUUsS0FBSyxFQUFFLEtBQUs7d0JBQUUsSUFBSSxFQUFFLElBQUk7d0JBQUUsV0FBVyxFQUFFLFdBQVc7O2dCQUduRyxDQUFDOzBDQUlGLEtBQUs7WUFHWixDQUFDOzs7WUFFRCxHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhLEdBQUcsQ0FBQztnQkFDZixHQUFLLENBQUMseUJBQXlCLFFBQVEsTUFBTSxDQUFDLElBQUksUUFDNUMsY0FBYTtvQkFDWCx5QkFBeUIsRUFBekIseUJBQXlCOzt1QkFHMUIsY0FBYTtZQUN0QixDQUFDOzs7V0EzREcsdUJBQXVCO21CQU5MLEtBQU07Z0JBTXhCLHVCQUF1QixHQTZEcEIsdUJBQXVCLEdBakVJLFVBQWlDO2dCQUkvRCx1QkFBdUIsR0ErRHBCLE9BQU8sSUFBRyxFQUFJO2dCQS9EakIsdUJBQXVCLEdBaUVwQixpQkFBaUI7SUFDdEIsU0FBUyxHQUFFLG9CQUFzQjs7bUJBMUVmLGNBQWlCLFVBOEVkLHVCQUF1QiJ9