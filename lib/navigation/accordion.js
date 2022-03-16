"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easy = require("easy");
var _accordion = _interopRequireDefault(require("../list/navigation/accordion"));
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
var AccordionNavigation = /*#__PURE__*/ function(Element) {
    _inherits(AccordionNavigation, Element);
    var _super = _createSuper(AccordionNavigation);
    function AccordionNavigation() {
        _classCallCheck(this, AccordionNavigation);
        return _super.apply(this, arguments);
    }
    _createClass(AccordionNavigation, [
        {
            key: "getAccordionNavigationList",
            value: function getAccordionNavigationList() {
                var _$AccordionNavigationList = this.constructor.AccordionNavigationList;
                return _$AccordionNavigationList;
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _properties = this.properties, ArticlesArray = _properties.ArticlesArray, showArticle = _properties.showArticle, _$AccordionNavigationList = this.getAccordionNavigationList();
                return /*#__PURE__*/ React.createElement(_$AccordionNavigationList, {
                    ArticlesArray: ArticlesArray,
                    showArticle: showArticle
                });
            }
        }
    ]);
    return AccordionNavigation;
}(_wrapNativeSuper(_easy.Element));
exports.default = AccordionNavigation;
_defineProperty(AccordionNavigation, "AccordionNavigationList", _accordion.default);
_defineProperty(AccordionNavigation, "tagName", "nav");
_defineProperty(AccordionNavigation, "defaultProperties", {
    className: "accordion"
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9uYXZpZ2F0aW9uL2FjY29yZGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBBY2NvcmRpb25OYXZpZ2F0aW9uTGlzdCBmcm9tIFwiLi4vbGlzdC9uYXZpZ2F0aW9uL2FjY29yZGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvcmRpb25OYXZpZ2F0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldEFjY29yZGlvbk5hdmlnYXRpb25MaXN0KCkge1xuICAgIGNvbnN0IHsgQWNjb3JkaW9uTmF2aWdhdGlvbkxpc3QgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gQWNjb3JkaW9uTmF2aWdhdGlvbkxpc3Q7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgQXJ0aWNsZXNBcnJheSwgc2hvd0FydGljbGUgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBBY2NvcmRpb25OYXZpZ2F0aW9uTGlzdCA9IHRoaXMuZ2V0QWNjb3JkaW9uTmF2aWdhdGlvbkxpc3QoKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxBY2NvcmRpb25OYXZpZ2F0aW9uTGlzdCBBcnRpY2xlc0FycmF5PXtBcnRpY2xlc0FycmF5fSBzaG93QXJ0aWNsZT17c2hvd0FydGljbGV9IC8+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIEFjY29yZGlvbk5hdmlnYXRpb25MaXN0ID0gQWNjb3JkaW9uTmF2aWdhdGlvbkxpc3Q7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcIm5hdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYWNjb3JkaW9uXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJBY2NvcmRpb25OYXZpZ2F0aW9uIiwiZ2V0QWNjb3JkaW9uTmF2aWdhdGlvbkxpc3QiLCJBY2NvcmRpb25OYXZpZ2F0aW9uTGlzdCIsImNvbnN0cnVjdG9yIiwiY2hpbGRFbGVtZW50cyIsInByb3BlcnRpZXMiLCJBcnRpY2xlc0FycmF5Iiwic2hvd0FydGljbGUiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZLFdBQUEsQ0FBQzs7O0VBQWI7d0JBQUE7QUFFd0IsR0FBTSxDQUFOLEtBQU07QUFFTSxHQUE4QixDQUE5QixVQUE4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0ZBSmxFOzs7Ozs7OztzQ0FBQTs7Ozs7O2lDQUFBOzs7aUVBQUE7O1NBQUE7Ozs7Ozs7OERBQUE7c0NBQUE7NkRBQUE7aUVBQUE7Ozs7d0VBQUE7Z0VBQUE7Ozs7Ozs7Ozs7VUFBQTs7d0JBQUE7Ozs7Ozs7S0FBQTs7Ozs7Ozs7Ozs7OztNQUFBO3lEQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBQUE7O0tBQUE7Ozs7MkJBQUE7Ozs7Ozs7Ozs7OztzQ0FBQTs7Ozs7Ozs7Ozs7O1VBQUE7O0tBQUE7Ozs7Ozs7O3FGQUFBOzs7Ozs7Ozs7Ozs7bUVBQUE7O2lEQUFBOzs7OztBQU1lLEdBQUssQ0FBQ0EsbUJBQW1CLGlCQUF6QixRQUFROzJDQU52Qjs7YUFNcUJBLG1CQUFtQjtrREFOeEM7Ozs7O1lBT0VDLEdBQTBCLEVBQTFCQSxDQUEwQjttQkFBMUJBLFFBQVEsQ0FBUkEsMEJBQTBCLEdBQUcsQ0FBQztnQkFDNUIsR0FBSyxDQUFHQyx5QkFBdUIsR0FBSyxJQUFJLENBQUNDLFdBQVcsQ0FBNUNELHVCQUF1QjtnQkFFL0IsTUFBTSxDQUFDQSx5QkFBdUI7WUFDaEMsQ0FBQzs7O1lBRURFLEdBQWEsRUFBYkEsQ0FBYTttQkFBYkEsUUFBUSxDQUFSQSxhQUFhLEdBQUcsQ0FBQztnQkFDZixHQUFLLENBQWtDLFdBQWUsR0FBZixJQUFJLENBQUNDLFVBQVUsRUFBOUNDLGFBQWEsR0FBa0IsV0FBZSxDQUE5Q0EsYUFBYSxFQUFFQyxXQUFXLEdBQUssV0FBZSxDQUEvQkEsV0FBVyxFQUM1QkwseUJBQXVCLEdBQUcsSUFBSSxDQUFDRCwwQkFBMEI7Z0JBRS9ELE1BQU0sbUNBRUhDLHlCQUF1QjtvQkFBQ0ksYUFBYSxFQUFFQSxhQUFhO29CQUFFQyxXQUFXLEVBQUVBLFdBQVc7O1lBR25GLENBQUM7O01BdEJIOzttQkFNaURDLEtBQU87a0JBQW5DUixtQkFBbUIsQUFOeEM7Z0JBTXFCQSxtQkFBbUIsRUFrQi9CRSxDQUF1QiwwQkFBR0EsVUFBdUIsU0F4QjFEO2dCQU1xQkYsbUJBQW1CLEVBb0IvQlMsQ0FBTyxVQUFHLENBQUssS0ExQnhCO2dCQU1xQlQsbUJBQW1CLEVBc0IvQlUsQ0FBaUIsb0JBQUcsQ0FBQztJQUMxQkMsU0FBUyxFQUFFLENBQVc7QUFDeEIsQ0FBQyxDQTlCSCJ9