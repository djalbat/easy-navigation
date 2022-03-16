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
    "@swc/helpers - typeof";
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
        "\n\n  display: block;\n  \n  @media (min-width: 800px) {\n\n    display: grid;\n    \n    column-gap: 2rem;\n    grid-template-rows: 1fr;\n    grid-template-areas: \"accordion-navigation accordion\";\n    grid-template-columns: 20rem auto;\n\n  }\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _createSuper(View);
    function View() {
        _classCallCheck(this, View);
        return _super.apply(this, arguments);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgY29udHJvbGxlciB9IGZyb20gXCJzdWZmaWNpZW50XCI7XG5cbmltcG9ydCBBY2NvcmRpb24gZnJvbSBcIi4vYWNjb3JkaW9uXCI7XG5pbXBvcnQgQXJ0aWNsZXNBcnJheSBmcm9tIFwiLi9hcnRpY2xlc0FycmF5XCI7XG5pbXBvcnQgQWNjb3JkaW9uTmF2aWdhdGlvbiBmcm9tIFwiLi9uYXZpZ2F0aW9uL2FjY29yZGlvblwiO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIHNob3dBcnRpY2xlKHVyaSwgaW5zdGFudGx5KSB7XG4gICAgdGhpcy51cGRhdGVBY2NvcmRpb24odXJpLCBpbnN0YW50bHkpO1xuXG4gICAgdGhpcy51cGRhdGVBY2NvcmRpb25OYXZpZ2F0aW9uKHVyaSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHNob3dBcnRpY2xlID0gdGhpcy5zaG93QXJ0aWNsZS5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxBY2NvcmRpb24gQXJ0aWNsZXNBcnJheT17QXJ0aWNsZXNBcnJheX0gc2hvd0FydGljbGU9e3Nob3dBcnRpY2xlfSAvPixcbiAgICAgIDxBY2NvcmRpb25OYXZpZ2F0aW9uIEFydGljbGVzQXJyYXk9e0FydGljbGVzQXJyYXl9IHNob3dBcnRpY2xlPXtzaG93QXJ0aWNsZX0gLz5cblxuICAgIF0pO1xuXG4gICAgLy8gZnVuY3Rpb24gc2hvd0FydGljbGUodXJpLCBpbnN0YW50bHkpIHtcbiAgICAvLyAgIGNvbnRyb2xsZXIuc2hvd0FydGljbGUodXJpLCBpbnN0YW50bHkpO1xuICAgIC8vIH1cbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIFxuICAgIGNvbHVtbi1nYXA6IDJyZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJhY2NvcmRpb24tbmF2aWdhdGlvbiBhY2NvcmRpb25cIjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcmVtIGF1dG87XG5cbiAgfVxuXG5gO1xuIl0sIm5hbWVzIjpbIlZpZXciLCJzaG93QXJ0aWNsZSIsInVyaSIsImluc3RhbnRseSIsInVwZGF0ZUFjY29yZGlvbiIsInVwZGF0ZUFjY29yZGlvbk5hdmlnYXRpb24iLCJjaGlsZEVsZW1lbnRzIiwiYmluZCIsIkFjY29yZGlvbiIsIkFydGljbGVzQXJyYXkiLCJBY2NvcmRpb25OYXZpZ2F0aW9uIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZLFdBQUEsQ0FBQzs7O0VBQWI7d0JBQUE7QUFFc0IsR0FBaUIsQ0FBakIsY0FBaUI7QUFFZixHQUFNLENBQU4sS0FBTTtBQUNILEdBQVksQ0FBWixXQUFZO0FBRWpCLEdBQWEsQ0FBYixVQUFhO0FBQ1QsR0FBaUIsQ0FBakIsY0FBaUI7QUFDWCxHQUF3QixDQUF4QixXQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0ZBVHhEOzs7Ozs7OztzQ0FBQTs7Ozs7O2lDQUFBOzs7aUVBQUE7O1NBQUE7Ozs7Ozs7OERBQUE7c0NBQUE7NkRBQUE7aUVBQUE7Ozs7d0VBQUE7Z0VBQUE7Ozs7Ozs7Ozs7VUFBQTs7d0JBQUE7Ozs7Ozs7S0FBQTs7Ozs7Ozs7Ozs7OztNQUFBO3lEQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBQUE7O0tBQUE7Ozs7OzhCQUFBOzs7Ozs7Ozs7MkJBQUE7Ozs7Ozs7Ozs7OztzQ0FBQTs7Ozs7Ozs7Ozs7O1VBQUE7O0tBQUE7Ozs7Ozs7O3FGQUFBOzs7Ozs7Ozs7Ozs7bUVBQUE7O2lEQUFBOzs7Ozs7O1FBNEMrQixDQWUvQjs7OztLQTNEQTs7O0FBV0EsR0FBSyxDQUFDQSxJQUFJLGlCQUFWLFFBQVE7NEJBWFI7O2FBV01BLElBQUk7bUNBWFY7Ozs7O1lBWUVDLEdBQVcsRUFBWEEsQ0FBVzttQkFBWEEsUUFBUSxDQUFSQSxXQUFXLENBQUNDLEdBQUcsRUFBRUMsU0FBUyxFQUFFLENBQUM7Z0JBQzNCLElBQUksQ0FBQ0MsZUFBZSxDQUFDRixHQUFHLEVBQUVDLFNBQVMsQ0FBQyxDQUFDO2dCQUVyQyxJQUFJLENBQUNFLHlCQUF5QixDQUFDSCxHQUFHLENBQUMsQ0FBQztZQUN0QyxDQUFDOzs7WUFFREksR0FBYSxFQUFiQSxDQUFhO21CQUFiQSxRQUFRLENBQVJBLGFBQWEsR0FBRyxDQUFDO2dCQUNmLEdBQUssQ0FBQ0wsV0FBVyxHQUFHLElBQUksQ0FBQ0EsV0FBVyxDQUFDTSxJQUFJLENBQUMsSUFBSTtnQkFFOUMsTUFBTSxDQUFFLENBQUM7c0RBRU5DLFVBQVM7d0JBQUNDLGFBQWEsRUFBRUEsY0FBYTt3QkFBRVIsV0FBVyxFQUFFQSxXQUFXOztzREFDaEVTLFdBQW1CO3dCQUFDRCxhQUFhLEVBQUVBLGNBQWE7d0JBQUVSLFdBQVcsRUFBRUEsV0FBVzs7Z0JBRTdFLENBQUM7WUFFRCxFQUF5QyxBQUF6Qyx1Q0FBeUM7WUFDekMsRUFBNEMsQUFBNUMsMENBQTRDO1lBQzVDLEVBQUksQUFBSixFQUFJO1lBQ04sQ0FBQzs7O1lBRURVLEdBQVUsRUFBVkEsQ0FBVTttQkFBVkEsUUFBUSxDQUFSQSxVQUFVLEdBQUcsQ0FBQztnQkFDWixJQUFJLENBQUNDLGFBQWEsRUFBRSxDQUFDO1lBQ3ZCLENBQUM7O01BbkNIOzttQkFXbUJDLEtBQU87Z0JBQXBCYixJQUFJLEVBMEJEYyxDQUFPLFVBQUcsQ0FBSyxLQXJDeEI7Z0JBV01kLElBQUksRUE0QkRlLENBQWlCLG9CQUFHLENBQUM7SUFDMUJDLFNBQVMsRUFBRSxDQUFNO0FBQ25CLENBQUMsQ0F6Q0g7bUJBNENlQyxjQUFTLFVBQUNqQixJQUFJOzBCQTVDN0IifQ==