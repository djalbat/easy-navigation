"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _sufficient = require("sufficient");
var _accordion = _interopRequireDefault(require("./accordion"));
var _articlesArray = _interopRequireDefault(require("./articlesArray"));
var _accordion1 = _interopRequireDefault(require("./navigation/accordion"));
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
        "\n\n  padding: 4rem;\n\n  display: block;\n  \n  @media (min-width: 800px) {\n\n    display: grid;\n    \n    column-gap: 2rem;\n    grid-template-rows: 1fr;\n    grid-template-areas: \"accordion-navigation accordion\";\n    grid-template-columns: 20rem auto;\n\n  }\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    function View() {
        _classCallCheck(this, View);
        return _possibleConstructorReturn(this, _getPrototypeOf(View).apply(this, arguments));
    }
    _createClass(View, [
        {
            key: "showArticle",
            value: function showArticle(uri, instantly) {
                this.updateAccordion(uri, instantly);
                this.updateAccordionNavigation(uri);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var showArticle = this.showArticle.bind(this);
                return [
                    /*#__PURE__*/ React.createElement(_accordion.default, {
                        ArticlesArray: _articlesArray.default,
                        showArticle: showArticle
                    }),
                    /*#__PURE__*/ React.createElement(_accordion1.default, {
                        ArticlesArray: _articlesArray.default,
                        showArticle: showArticle
                    })
                ];
            // function showArticle(uri, instantly) {
            //   controller.showArticle(uri, instantly);
            // }
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
            }
        }
    ]);
    return View;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(View, "tagName", "div");
_defineProperty(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easyWithStyle).default(View)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsid2l0aFN0eWxlIiwiRWxlbWVudCIsImNvbnRyb2xsZXIiLCJBY2NvcmRpb24iLCJBcnRpY2xlc0FycmF5IiwiQWNjb3JkaW9uTmF2aWdhdGlvbiIsIlZpZXciLCJzaG93QXJ0aWNsZSIsInVyaSIsImluc3RhbnRseSIsInVwZGF0ZUFjY29yZGlvbiIsInVwZGF0ZUFjY29yZGlvbk5hdmlnYXRpb24iLCJjaGlsZEVsZW1lbnRzIiwiYmluZCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVVLEdBQWlCLENBQWpCLGNBQWlCO0FBRWYsR0FBTSxDQUFOLEtBQU07QUFDSCxHQUFZLENBQVosV0FBWTtBQUVqQixHQUFhLENBQWIsVUFBYTtBQUNULEdBQWlCLENBQWpCLGNBQWlCO0FBQ1gsR0FBd0IsQ0FBeEIsV0FBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBbUN6QixDQWlCL0I7Ozs7Ozs7SUFsRE0sSUFBSSxpQkFBVixRQUFRO2NBQUYsSUFBSTthQUFKLElBQUk7OEJBQUosSUFBSTtnRUFBSixJQUFJOztpQkFBSixJQUFJOztZQUNSLEdBQVcsRUFBWCxDQUFXO21CQUFYLFFBQVEsQ0FBUixXQUFXLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDO2dCQUMzQixJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxTQUFTO2dCQUVuQyxJQUFJLENBQUMseUJBQXlCLENBQUMsR0FBRztZQUNwQyxDQUFDOzs7WUFFRCxHQUFhLEVBQWIsQ0FBYTttQkFBYixRQUFRLENBQVIsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsR0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJO2dCQUU5QyxNQUFNLENBQUUsQ0FBQztzREFkUyxVQUFhO3dCQWdCbEIsYUFBYSxFQWZKLGNBQWlCO3dCQWVJLFdBQVcsRUFBRSxXQUFXOztzREFkdkMsV0FBd0I7d0JBZTdCLGFBQWEsRUFoQmQsY0FBaUI7d0JBZ0JjLFdBQVcsRUFBRSxXQUFXOztnQkFFN0UsQ0FBQztZQUVELEVBQXlDLEFBQXpDLHVDQUF5QztZQUN6QyxFQUE0QyxBQUE1QywwQ0FBNEM7WUFDNUMsRUFBSSxBQUFKLEVBQUk7WUFDTixDQUFDOzs7WUFFRCxHQUFVLEVBQVYsQ0FBVTttQkFBVixRQUFRLENBQVIsVUFBVSxHQUFHLENBQUM7Z0JBQ1osSUFBSSxDQUFDLGFBQWE7WUFDcEIsQ0FBQzs7O1dBeEJHLElBQUk7bUJBUGMsS0FBTTtnQkFPeEIsSUFBSSxFQTBCRCxDQUFPLFVBQUcsQ0FBSztnQkExQmxCLElBQUksRUE0QkQsQ0FBaUIsb0JBQUcsQ0FBQztJQUMxQixTQUFTLEVBQUUsQ0FBTTtBQUNuQixDQUFDO21CQXZDbUIsY0FBaUIsVUEwQ2QsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IGNvbnRyb2xsZXIgfSBmcm9tIFwic3VmZmljaWVudFwiO1xuXG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gXCIuL2FjY29yZGlvblwiO1xuaW1wb3J0IEFydGljbGVzQXJyYXkgZnJvbSBcIi4vYXJ0aWNsZXNBcnJheVwiO1xuaW1wb3J0IEFjY29yZGlvbk5hdmlnYXRpb24gZnJvbSBcIi4vbmF2aWdhdGlvbi9hY2NvcmRpb25cIjtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBzaG93QXJ0aWNsZSh1cmksIGluc3RhbnRseSkge1xuICAgIHRoaXMudXBkYXRlQWNjb3JkaW9uKHVyaSwgaW5zdGFudGx5KTtcblxuICAgIHRoaXMudXBkYXRlQWNjb3JkaW9uTmF2aWdhdGlvbih1cmkpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBzaG93QXJ0aWNsZSA9IHRoaXMuc2hvd0FydGljbGUuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8QWNjb3JkaW9uIEFydGljbGVzQXJyYXk9e0FydGljbGVzQXJyYXl9IHNob3dBcnRpY2xlPXtzaG93QXJ0aWNsZX0gLz4sXG4gICAgICA8QWNjb3JkaW9uTmF2aWdhdGlvbiBBcnRpY2xlc0FycmF5PXtBcnRpY2xlc0FycmF5fSBzaG93QXJ0aWNsZT17c2hvd0FydGljbGV9IC8+XG5cbiAgICBdKTtcblxuICAgIC8vIGZ1bmN0aW9uIHNob3dBcnRpY2xlKHVyaSwgaW5zdGFudGx5KSB7XG4gICAgLy8gICBjb250cm9sbGVyLnNob3dBcnRpY2xlKHVyaSwgaW5zdGFudGx5KTtcbiAgICAvLyB9XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiA0cmVtO1xuXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIFxuICAgIGNvbHVtbi1nYXA6IDJyZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJhY2NvcmRpb24tbmF2aWdhdGlvbiBhY2NvcmRpb25cIjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcmVtIGF1dG87XG5cbiAgfVxuXG5gO1xuIl19