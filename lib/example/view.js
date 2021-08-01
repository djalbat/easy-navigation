"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
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
        "\n\n  display: block;\n  \n  @media (min-width: 1000px) {\n\n    display: grid;\n    \n    column-gap: 2rem;\n    grid-template-rows: 1fr;\n    grid-template-areas: \"accordion-navigation accordion\";\n    grid-template-columns: 20rem auto;\n\n  }\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var View = /*#__PURE__*/ function(Element1) {
    _inherits(View, Element1);
    function View() {
        _classCallCheck(this, View);
        return _possibleConstructorReturn(this, _getPrototypeOf(View).apply(this, arguments));
    }
    _createClass(View, [
        {
            key: "showArticle",
            value: function showArticle(uri, instantly, callback) {
                this.updateAccordion(uri, instantly, callback);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gXCIuL2FjY29yZGlvblwiO1xuaW1wb3J0IEFydGljbGVzQXJyYXkgZnJvbSBcIi4vYXJ0aWNsZXNBcnJheVwiO1xuaW1wb3J0IEFjY29yZGlvbk5hdmlnYXRpb24gZnJvbSBcIi4vbmF2aWdhdGlvbi9hY2NvcmRpb25cIjtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBzaG93QXJ0aWNsZSh1cmksIGluc3RhbnRseSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLnVwZGF0ZUFjY29yZGlvbih1cmksIGluc3RhbnRseSwgY2FsbGJhY2spO1xuXG4gICAgdGhpcy51cGRhdGVBY2NvcmRpb25OYXZpZ2F0aW9uKHVyaSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHNob3dBcnRpY2xlID0gdGhpcy5zaG93QXJ0aWNsZS5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxBY2NvcmRpb24gQXJ0aWNsZXNBcnJheT17QXJ0aWNsZXNBcnJheX0gc2hvd0FydGljbGU9e3Nob3dBcnRpY2xlfSAvPixcbiAgICAgIDxBY2NvcmRpb25OYXZpZ2F0aW9uIEFydGljbGVzQXJyYXk9e0FydGljbGVzQXJyYXl9IHNob3dBcnRpY2xlPXtzaG93QXJ0aWNsZX0gLz5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgZGlzcGxheTogYmxvY2s7XG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIFxuICAgIGNvbHVtbi1nYXA6IDJyZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJhY2NvcmRpb24tbmF2aWdhdGlvbiBhY2NvcmRpb25cIjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcmVtIGF1dG87XG5cbiAgfVxuXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVUsR0FBaUIsQ0FBakIsY0FBaUI7QUFFZixHQUFNLENBQU4sS0FBTTtBQUVSLEdBQWEsQ0FBYixVQUFhO0FBQ1QsR0FBaUIsQ0FBakIsY0FBaUI7QUFDWCxHQUF3QixDQUF4QixXQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0ErQnpCLDJQQWUvQjs7Ozs7OztJQTVDTSxJQUFJO2NBQUosSUFBSTthQUFKLElBQUk7OEJBQUosSUFBSTtnRUFBSixJQUFJOztpQkFBSixJQUFJOztZQUNSLEdBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVcsQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxDQUFDO3FCQUNoQyxlQUFlLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxRQUFRO3FCQUV4Qyx5QkFBeUIsQ0FBQyxHQUFHO1lBQ3BDLENBQUM7OztZQUVELEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWEsR0FBRyxDQUFDO2dCQUNmLEdBQUssQ0FBQyxXQUFXLFFBQVEsV0FBVyxDQUFDLElBQUk7O3NEQVp2QixVQUFhO3dCQWdCbEIsYUFBYSxFQWZKLGNBQWlCO3dCQWVJLFdBQVcsRUFBRSxXQUFXOztzREFkdkMsV0FBd0I7d0JBZTdCLGFBQWEsRUFoQmQsY0FBaUI7d0JBZ0JjLFdBQVcsRUFBRSxXQUFXOzs7WUFHL0UsQ0FBQzs7O1lBRUQsR0FBVSxHQUFWLFVBQVU7NEJBQVYsVUFBVSxHQUFHLENBQUM7cUJBQ1AsYUFBYTtZQUNwQixDQUFDOzs7V0FwQkcsSUFBSTttQkFOYyxLQUFNO2dCQU14QixJQUFJLEdBc0JELE9BQU8sSUFBRyxHQUFLO2dCQXRCbEIsSUFBSSxHQXdCRCxpQkFBaUI7SUFDdEIsU0FBUyxHQUFFLElBQU07O21CQWpDQyxjQUFpQixVQXFDZCxJQUFJIn0=