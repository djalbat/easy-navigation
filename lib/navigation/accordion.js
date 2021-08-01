"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easy = require("easy");
var _accordion = _interopRequireDefault(require("../list/navigation/accordion"));
var _breakpoints = require("../breakpoints");
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
var AccordionNavigation = /*#__PURE__*/ function(Element1) {
    _inherits(AccordionNavigation, Element1);
    function AccordionNavigation() {
        _classCallCheck(this, AccordionNavigation);
        return _possibleConstructorReturn(this, _getPrototypeOf(AccordionNavigation).apply(this, arguments));
    }
    _createClass(AccordionNavigation, [
        {
            key: "getAccordionNavigationList",
            value: function getAccordionNavigationList() {
                var _constructor = this.constructor, AccordionNavigationList = _constructor.AccordionNavigationList;
                return AccordionNavigationList;
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _properties = this.properties, ArticlesArray = _properties.ArticlesArray, showArticle = _properties.showArticle, AccordionNavigationList = this.getAccordionNavigationList();
                return(/*#__PURE__*/ React.createElement(AccordionNavigationList, {
                    ArticlesArray: ArticlesArray,
                    showArticle: showArticle
                }));
            }
        }
    ]);
    return AccordionNavigation;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(AccordionNavigation, "AccordionNavigationList", _accordion.default);
_defineProperty(AccordionNavigation, "tagName", "nav");
_defineProperty(AccordionNavigation, "defaultProperties", {
    className: "accordion"
});
exports.default = AccordionNavigation;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9uYXZpZ2F0aW9uL2FjY29yZGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBBY2NvcmRpb25OYXZpZ2F0aW9uTGlzdCBmcm9tIFwiLi4vbGlzdC9uYXZpZ2F0aW9uL2FjY29yZGlvblwiO1xuXG5pbXBvcnQgeyBkZXNrdG9wIH0gZnJvbSBcIi4uL2JyZWFrcG9pbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY29yZGlvbk5hdmlnYXRpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0QWNjb3JkaW9uTmF2aWdhdGlvbkxpc3QoKSB7XG4gICAgY29uc3QgeyBBY2NvcmRpb25OYXZpZ2F0aW9uTGlzdCB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBBY2NvcmRpb25OYXZpZ2F0aW9uTGlzdDtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBBcnRpY2xlc0FycmF5LCBzaG93QXJ0aWNsZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIEFjY29yZGlvbk5hdmlnYXRpb25MaXN0ID0gdGhpcy5nZXRBY2NvcmRpb25OYXZpZ2F0aW9uTGlzdCgpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPEFjY29yZGlvbk5hdmlnYXRpb25MaXN0IEFydGljbGVzQXJyYXk9e0FydGljbGVzQXJyYXl9IHNob3dBcnRpY2xlPXtzaG93QXJ0aWNsZX0gLz5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgQWNjb3JkaW9uTmF2aWdhdGlvbkxpc3QgPSBBY2NvcmRpb25OYXZpZ2F0aW9uTGlzdDtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwibmF2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJhY2NvcmRpb25cIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVksR0FBTSxDQUFOLEtBQU07QUFFTSxHQUE4QixDQUE5QixVQUE4QjtBQUUxQyxHQUFnQixDQUFoQixZQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFbkIsbUJBQW1CO2NBQW5CLG1CQUFtQjthQUFuQixtQkFBbUI7OEJBQW5CLG1CQUFtQjtnRUFBbkIsbUJBQW1COztpQkFBbkIsbUJBQW1COztZQUN0QyxHQUEwQixHQUExQiwwQkFBMEI7NEJBQTFCLDBCQUEwQixHQUFHLENBQUM7Z0JBQzVCLEdBQUssQ0FBK0IsWUFBZ0IsUUFBWCxXQUFXLEVBQTVDLHVCQUF1QixHQUFLLFlBQWdCLENBQTVDLHVCQUF1Qjt1QkFFeEIsdUJBQXVCO1lBQ2hDLENBQUM7OztZQUVELEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWEsR0FBRyxDQUFDO2dCQUNmLEdBQUssQ0FBa0MsV0FBZSxRQUFWLFVBQVUsRUFBOUMsYUFBYSxHQUFrQixXQUFlLENBQTlDLGFBQWEsRUFBRSxXQUFXLEdBQUssV0FBZSxDQUEvQixXQUFXLEVBQzVCLHVCQUF1QixRQUFRLDBCQUEwQjt5REFJNUQsdUJBQXVCO29CQUFDLGFBQWEsRUFBRSxhQUFhO29CQUFFLFdBQVcsRUFBRSxXQUFXOztZQUduRixDQUFDOzs7V0FoQmtCLG1CQUFtQjttQkFOaEIsS0FBTTtnQkFNVCxtQkFBbUIsR0FrQi9CLHVCQUF1QixHQXRCSSxVQUE4QjtnQkFJN0MsbUJBQW1CLEdBb0IvQixPQUFPLElBQUcsR0FBSztnQkFwQkgsbUJBQW1CLEdBc0IvQixpQkFBaUI7SUFDdEIsU0FBUyxHQUFFLFNBQVc7O2tCQXZCTCxtQkFBbUIifQ==