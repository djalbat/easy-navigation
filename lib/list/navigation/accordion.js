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
            key: "getAccordionNavigationItem",
            value: function getAccordionNavigationItem() {
                var AccordionNavigationItem = this.constructor.AccordionNavigationItem;
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
    className: "accordion-navigation"
});
var _default = (0, _easyWithStyle).default(AccordionNavigationList)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saXN0L25hdmlnYXRpb24vYWNjb3JkaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IEFjY29yZGlvbk5hdmlnYXRpb25JdGVtIGZyb20gXCIuLi8uLi9pdGVtL25hdmlnYXRpb24vYWNjb3JkaW9uXCI7XG5cbmltcG9ydCB7IGd1YXJhbnRlZUFycmF5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jbGFzcyBBY2NvcmRpb25OYXZpZ2F0aW9uTGlzdCBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRBY2NvcmRpb25OYXZpZ2F0aW9uSXRlbSgpIHtcbiAgICBjb25zdCB7IEFjY29yZGlvbk5hdmlnYXRpb25JdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIEFjY29yZGlvbk5hdmlnYXRpb25JdGVtO1xuICB9XG5cbiAgZ2V0QnV0dG9ucygpIHtcbiAgICBjb25zdCBtYXhpbXVtRGVwdGggPSAyLFxuICAgICAgICAgIGJ1dHRvbkRlc2NlbmRhbnRFbGVtZW50cyA9IHRoaXMuZ2V0RGVzY2VuZGFudEVsZW1lbnRzKFwiYnV0dG9uXCIsIG1heGltdW1EZXB0aCksXG4gICAgICAgICAgYnV0dG9ucyA9IGJ1dHRvbkRlc2NlbmRhbnRFbGVtZW50czsgIC8vL1xuXG4gICAgcmV0dXJuIGJ1dHRvbnM7XG4gIH1cblxuICB1cGRhdGUodXJpKSB7XG4gICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuZ2V0QnV0dG9ucygpO1xuXG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGNvbnN0IHVyaUFydGljbGVVUkkgPSBidXR0b24uaXNVUklBcnRpY2xlVVJJKHVyaSk7XG5cbiAgICAgICh1cmlBcnRpY2xlVVJJKSA/XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlKCkgOlxuICAgICAgICAgIGJ1dHRvbi5lbmFibGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBBcnRpY2xlc0FycmF5LCBzaG93QXJ0aWNsZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIEFydGljbGVzQXJyYXlMZW5ndGggPSBBcnRpY2xlc0FycmF5Lmxlbmd0aCxcbiAgICAgICAgICBBY2NvcmRpb25OYXZpZ2F0aW9uSXRlbSA9IHRoaXMuZ2V0QWNjb3JkaW9uTmF2aWdhdGlvbkl0ZW0oKSxcbiAgICAgICAgICBmaXJzdEluZGV4ID0gMCxcbiAgICAgICAgICBsYXN0SW5kZXggPSBBcnRpY2xlc0FycmF5TGVuZ3RoIC0gMSxcbiAgICAgICAgICBpdGVtcyA9IEFydGljbGVzQXJyYXkubWFwKChBcnRpY2xlT3JBcnRpY2xlcywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3QgPSAoaW5kZXggPT09IGxhc3RJbmRleCksXG4gICAgICAgICAgICAgICAgICBmaXJzdCA9IChpbmRleCA9PT0gZmlyc3RJbmRleCksXG4gICAgICAgICAgICAgICAgICBBcnRpY2xlcyA9IGd1YXJhbnRlZUFycmF5KEFydGljbGVPckFydGljbGVzKTsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgPEFjY29yZGlvbk5hdmlnYXRpb25JdGVtIEFydGljbGVzPXtBcnRpY2xlc30gZmlyc3Q9e2ZpcnN0fSBsYXN0PXtsYXN0fSBzaG93QXJ0aWNsZT17c2hvd0FydGljbGV9IC8+XG5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgLi4uaXRlbXNcblxuICAgIF0pO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCB1cGRhdGVBY2NvcmRpb25OYXZpZ2F0aW9uID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHBhcmVudENvbnRleHQgPSB7XG4gICAgICAgICAgICB1cGRhdGVBY2NvcmRpb25OYXZpZ2F0aW9uXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBwYXJlbnRDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIEFjY29yZGlvbk5hdmlnYXRpb25JdGVtID0gQWNjb3JkaW9uTmF2aWdhdGlvbkl0ZW07XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInVsXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJhY2NvcmRpb24tbmF2aWdhdGlvblwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShBY2NvcmRpb25OYXZpZ2F0aW9uTGlzdClgXG5cbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiQWNjb3JkaW9uTmF2aWdhdGlvbkxpc3QiLCJnZXRBY2NvcmRpb25OYXZpZ2F0aW9uSXRlbSIsIkFjY29yZGlvbk5hdmlnYXRpb25JdGVtIiwiY29uc3RydWN0b3IiLCJnZXRCdXR0b25zIiwibWF4aW11bURlcHRoIiwiYnV0dG9uRGVzY2VuZGFudEVsZW1lbnRzIiwiZ2V0RGVzY2VuZGFudEVsZW1lbnRzIiwiYnV0dG9ucyIsInVwZGF0ZSIsInVyaSIsImZvckVhY2giLCJidXR0b24iLCJ1cmlBcnRpY2xlVVJJIiwiaXNVUklBcnRpY2xlVVJJIiwiZGlzYWJsZSIsImVuYWJsZSIsImNoaWxkRWxlbWVudHMiLCJwcm9wZXJ0aWVzIiwiQXJ0aWNsZXNBcnJheSIsInNob3dBcnRpY2xlIiwiQXJ0aWNsZXNBcnJheUxlbmd0aCIsImxlbmd0aCIsImZpcnN0SW5kZXgiLCJsYXN0SW5kZXgiLCJpdGVtcyIsIm1hcCIsIkFydGljbGVPckFydGljbGVzIiwiaW5kZXgiLCJsYXN0IiwiZmlyc3QiLCJBcnRpY2xlcyIsImd1YXJhbnRlZUFycmF5IiwicGFyZW50Q29udGV4dCIsInVwZGF0ZUFjY29yZGlvbk5hdmlnYXRpb24iLCJiaW5kIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFpQixDQUFqQixjQUFpQjtBQUVmLEdBQU0sQ0FBTixLQUFNO0FBRU0sR0FBaUMsQ0FBakMsVUFBaUM7QUFFdEMsR0FBdUIsQ0FBdkIsTUFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQXdFSixDQUlsRDs7Ozs7OztJQTFFTUEsdUJBQXVCLGlCQUE3QixRQUFROzs7YUFBRkEsdUJBQXVCOzs7Ozs7WUFDM0JDLEdBQTBCLEVBQTFCQSxDQUEwQjttQkFBMUJBLFFBQVEsQ0FBUkEsMEJBQTBCLEdBQUcsQ0FBQztnQkFDNUIsR0FBSyxDQUFHQyx1QkFBdUIsR0FBSyxJQUFJLENBQUNDLFdBQVcsQ0FBNUNELHVCQUF1QjtnQkFFL0IsTUFBTSxDQUFDQSx1QkFBdUI7WUFDaEMsQ0FBQzs7O1lBRURFLEdBQVUsRUFBVkEsQ0FBVTttQkFBVkEsUUFBUSxDQUFSQSxVQUFVLEdBQUcsQ0FBQztnQkFDWixHQUFLLENBQUNDLFlBQVksR0FBRyxDQUFDLEVBQ2hCQyx3QkFBd0IsR0FBRyxJQUFJLENBQUNDLHFCQUFxQixDQUFDLENBQVEsU0FBRUYsWUFBWSxHQUM1RUcsT0FBTyxHQUFHRix3QkFBd0IsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRTlDLE1BQU0sQ0FBQ0UsT0FBTztZQUNoQixDQUFDOzs7WUFFREMsR0FBTSxFQUFOQSxDQUFNO21CQUFOQSxRQUFRLENBQVJBLE1BQU0sQ0FBQ0MsR0FBRyxFQUFFLENBQUM7Z0JBQ1gsR0FBSyxDQUFDRixPQUFPLEdBQUcsSUFBSSxDQUFDSixVQUFVO2dCQUUvQkksT0FBTyxDQUFDRyxPQUFPLENBQUMsUUFBUSxDQUFQQyxNQUFNLEVBQUssQ0FBQztvQkFDM0IsR0FBSyxDQUFDQyxhQUFhLEdBQUdELE1BQU0sQ0FBQ0UsZUFBZSxDQUFDSixHQUFHO29CQUUvQ0csYUFBYSxHQUNaRCxNQUFNLENBQUNHLE9BQU8sS0FDWkgsTUFBTSxDQUFDSSxNQUFNO2dCQUNuQixDQUFDO1lBQ0gsQ0FBQzs7O1lBRURDLEdBQWEsRUFBYkEsQ0FBYTttQkFBYkEsUUFBUSxDQUFSQSxhQUFhLEdBQUcsQ0FBQztnQkFDZixHQUFLLENBQWtDLFdBQWUsR0FBZixJQUFJLENBQUNDLFVBQVUsRUFBOUNDLGFBQWEsR0FBa0IsV0FBZSxDQUE5Q0EsYUFBYSxFQUFFQyxXQUFXLEdBQUssV0FBZSxDQUEvQkEsV0FBVyxFQUM1QkMsbUJBQW1CLEdBQUdGLGFBQWEsQ0FBQ0csTUFBTSxFQUMxQ3BCLHVCQUF1QixHQUFHLElBQUksQ0FBQ0QsMEJBQTBCLElBQ3pEc0IsVUFBVSxHQUFHLENBQUMsRUFDZEMsU0FBUyxHQUFHSCxtQkFBbUIsR0FBRyxDQUFDLEVBQ25DSSxLQUFLLEdBQUdOLGFBQWEsQ0FBQ08sR0FBRyxDQUFDLFFBQVEsQ0FBUEMsaUJBQWlCLEVBQUVDLEtBQUssRUFBSyxDQUFDO29CQUN2RCxHQUFLLENBQUNDLElBQUksR0FBSUQsS0FBSyxLQUFLSixTQUFTLEVBQzNCTSxLQUFLLEdBQUlGLEtBQUssS0FBS0wsVUFBVSxFQUM3QlEsUUFBUSxPQUFHQyxNQUFjLGlCQUFDTCxpQkFBaUIsRUFBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7b0JBRXZELE1BQU0sbUNBRUh6Qix1QkFBdUI7d0JBQUM2QixRQUFRLEVBQUVBLFFBQVE7d0JBQUVELEtBQUssRUFBRUEsS0FBSzt3QkFBRUQsSUFBSSxFQUFFQSxJQUFJO3dCQUFFVCxXQUFXLEVBQUVBLFdBQVc7O2dCQUduRyxDQUFDO2dCQUVQLE1BQU0sb0JBRURLLEtBQUs7WUFHWixDQUFDOzs7WUFFRFEsR0FBYSxFQUFiQSxDQUFhO21CQUFiQSxRQUFRLENBQVJBLGFBQWEsR0FBRyxDQUFDO2dCQUNmLEdBQUssQ0FBQ0MseUJBQXlCLEdBQUcsSUFBSSxDQUFDekIsTUFBTSxDQUFDMEIsSUFBSSxDQUFDLElBQUksR0FDakRGLGNBQWEsR0FBRyxDQUFDO29CQUNmQyx5QkFBeUIsRUFBekJBLHlCQUF5QjtnQkFDM0IsQ0FBQztnQkFFUCxNQUFNLENBQUNELGNBQWE7WUFDdEIsQ0FBQzs7OzttQkEzRG1DRyxLQUFPO2dCQUF2Q3BDLHVCQUF1QixFQTZEcEJFLENBQXVCLDBCQUFHQSxVQUF1QjtnQkE3RHBERix1QkFBdUIsRUErRHBCcUMsQ0FBTyxVQUFHLENBQUk7Z0JBL0RqQnJDLHVCQUF1QixFQWlFcEJzQyxDQUFpQixvQkFBRyxDQUFDO0lBQzFCQyxTQUFTLEVBQUUsQ0FBc0I7QUFDbkMsQ0FBQzttQkFHWUMsY0FBUyxVQUFDeEMsdUJBQXVCIn0=