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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsid2l0aFN0eWxlIiwiRWxlbWVudCIsImNvbnRyb2xsZXIiLCJBY2NvcmRpb24iLCJBcnRpY2xlc0FycmF5IiwiQWNjb3JkaW9uTmF2aWdhdGlvbiIsIlZpZXciLCJzaG93QXJ0aWNsZSIsInVyaSIsImluc3RhbnRseSIsInVwZGF0ZUFjY29yZGlvbiIsInVwZGF0ZUFjY29yZGlvbk5hdmlnYXRpb24iLCJjaGlsZEVsZW1lbnRzIiwiYmluZCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVVLEdBQWlCLENBQWpCLGNBQWlCO0FBRWYsR0FBTSxDQUFOLEtBQU07QUFDSCxHQUFZLENBQVosV0FBWTtBQUVqQixHQUFhLENBQWIsVUFBYTtBQUNULEdBQWlCLENBQWpCLGNBQWlCO0FBQ1gsR0FBd0IsQ0FBeEIsV0FBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBbUN6Qiw4UUFpQi9COzs7Ozs7O0lBbERNLElBQUksaUJBQVYsUUFBUTtjQUFGLElBQUk7YUFBSixJQUFJOzhCQUFKLElBQUk7Z0VBQUosSUFBSTs7aUJBQUosSUFBSTs7WUFDUixHQUFXLEdBQVgsV0FBVzttQkFBWCxRQUFRLENBQVIsV0FBVyxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsU0FBUztnQkFFbkMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEdBQUc7WUFDcEMsQ0FBQzs7O1lBRUQsR0FBYSxHQUFiLGFBQWE7bUJBQWIsUUFBUSxDQUFSLGFBQWEsR0FBRyxDQUFDO2dCQUNmLEdBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSTtnQkFFOUMsTUFBTSxDQUFFLENBQUM7c0RBZFMsVUFBYTt3QkFnQmxCLGFBQWEsRUFmSixjQUFpQjt3QkFlSSxXQUFXLEVBQUUsV0FBVzs7c0RBZHZDLFdBQXdCO3dCQWU3QixhQUFhLEVBaEJkLGNBQWlCO3dCQWdCYyxXQUFXLEVBQUUsV0FBVzs7Z0JBRTdFLENBQUM7WUFFRCxFQUF5QyxBQUF6Qyx1Q0FBeUM7WUFDekMsRUFBNEMsQUFBNUMsMENBQTRDO1lBQzVDLEVBQUksQUFBSixFQUFJO1lBQ04sQ0FBQzs7O1lBRUQsR0FBVSxHQUFWLFVBQVU7bUJBQVYsUUFBUSxDQUFSLFVBQVUsR0FBRyxDQUFDO2dCQUNaLElBQUksQ0FBQyxhQUFhO1lBQ3BCLENBQUM7OztXQXhCRyxJQUFJO21CQVBjLEtBQU07Z0JBT3hCLElBQUksR0EwQkQsT0FBTyxJQUFHLEdBQUs7Z0JBMUJsQixJQUFJLEdBNEJELGlCQUFpQixHQUFHLENBQUM7SUFDMUIsU0FBUyxHQUFFLElBQU07QUFDbkIsQ0FBQzttQkF2Q21CLGNBQWlCLFVBMENkLElBQUkifQ==