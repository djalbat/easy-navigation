"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easyWithStyle = /*#__PURE__*/ _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _accordion = /*#__PURE__*/ _interopRequireDefault(require("../../button/navigation/accordion"));
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
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
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
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
        "\n\n  height: 4rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var AccordionNavigationItem = /*#__PURE__*/ function(Element) {
    _inherits(AccordionNavigationItem, Element);
    var _super = _createSuper(AccordionNavigationItem);
    function AccordionNavigationItem() {
        _classCallCheck(this, AccordionNavigationItem);
        return _super.apply(this, arguments);
    }
    _createClass(AccordionNavigationItem, [
        {
            key: "childElements",
            value: function childElements() {
                var _properties = this.properties, Articles = _properties.Articles, first = _properties.first, last = _properties.last, showArticle = _properties.showArticle, _$AccordionNavigationButton = this.constructor.AccordionNavigationButton, _Articles = _slicedToArray(Articles, 1), Article = _Articles[0];
                return /*#__PURE__*/ React.createElement(_$AccordionNavigationButton, {
                    Article: Article,
                    first: first,
                    last: last,
                    showArticle: showArticle
                });
            }
        }
    ]);
    return AccordionNavigationItem;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(AccordionNavigationItem, "AccordionNavigationButton", _accordion.default);
_defineProperty(AccordionNavigationItem, "tagName", "li");
_defineProperty(AccordionNavigationItem, "defaultProperties", {
    className: "accordion-navigation"
});
var _default = (0, _easyWithStyle.default)(AccordionNavigationItem)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL25hdmlnYXRpb24vYWNjb3JkaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IEFjY29yZGlvbk5hdmlnYXRpb25CdXR0b24gZnJvbSBcIi4uLy4uL2J1dHRvbi9uYXZpZ2F0aW9uL2FjY29yZGlvblwiO1xuXG5jbGFzcyBBY2NvcmRpb25OYXZpZ2F0aW9uSXRlbSBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgQXJ0aWNsZXMsIGZpcnN0LCBsYXN0LCBzaG93QXJ0aWNsZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIHsgQWNjb3JkaW9uTmF2aWdhdGlvbkJ1dHRvbiB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBbIEFydGljbGUgXSA9IEFydGljbGVzO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPEFjY29yZGlvbk5hdmlnYXRpb25CdXR0b24gQXJ0aWNsZT17QXJ0aWNsZX0gZmlyc3Q9e2ZpcnN0fSBsYXN0PXtsYXN0fSBzaG93QXJ0aWNsZT17c2hvd0FydGljbGV9IC8+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIEFjY29yZGlvbk5hdmlnYXRpb25CdXR0b24gPSBBY2NvcmRpb25OYXZpZ2F0aW9uQnV0dG9uO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJsaVwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYWNjb3JkaW9uLW5hdmlnYXRpb25cIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQWNjb3JkaW9uTmF2aWdhdGlvbkl0ZW0pYFxuXG4gIGhlaWdodDogNHJlbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIkFjY29yZGlvbk5hdmlnYXRpb25JdGVtIiwiY2hpbGRFbGVtZW50cyIsInByb3BlcnRpZXMiLCJBcnRpY2xlcyIsImZpcnN0IiwibGFzdCIsInNob3dBcnRpY2xlIiwiQWNjb3JkaW9uTmF2aWdhdGlvbkJ1dHRvbiIsImNvbnN0cnVjdG9yIiwiQXJ0aWNsZSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkE4QmIsU0FJRTs7O2VBSkYsUUFJRTs7O2tFQWhDb0IsaUJBQWlCO29CQUVmLE1BQU07OERBRVEsbUNBQW1DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpFLElBQUEsQUFBTUEsdUJBQXVCLGlCQXNCMUIsQUF0Qkg7OzthQUFNQSx1QkFBdUI7Ozs7OztZQUMzQkMsR0FBYSxFQUFiQSxlQUFhO21CQUFiQSxTQUFBQSxhQUFhLEdBQUc7Z0JBQ2QsSUFBK0MsV0FBZSxHQUFmLElBQUksQ0FBQ0MsVUFBVSxFQUF0REMsUUFBUSxHQUErQixXQUFlLENBQXREQSxRQUFRLEVBQUVDLEtBQUssR0FBd0IsV0FBZSxDQUE1Q0EsS0FBSyxFQUFFQyxJQUFJLEdBQWtCLFdBQWUsQ0FBckNBLElBQUksRUFBRUMsV0FBVyxHQUFLLFdBQWUsQ0FBL0JBLFdBQVcsRUFDcEMsQUFBRUMsMkJBQXlCLEdBQUssSUFBSSxDQUFDQyxXQUFXLENBQTlDRCx5QkFBeUIsQUFBcUIsRUFDbENKLFNBQVEsa0JBQVJBLFFBQVEsSUFBQSxFQUFwQk0sT0FBTyxHQUFLTixTQUFRLEdBQWIsQUFBYztnQkFFN0IscUJBRUUsb0JBQUNJLDJCQUF5QjtvQkFBQ0UsT0FBTyxFQUFFQSxPQUFPO29CQUFFTCxLQUFLLEVBQUVBLEtBQUs7b0JBQUVDLElBQUksRUFBRUEsSUFBSTtvQkFBRUMsV0FBVyxFQUFFQSxXQUFXO2tCQUFJLENBRW5HO2FBQ0g7Ozs7Q0FTRixrQkFwQnFDSSxLQUFPLFFBQUEsRUFvQjVDO0FBUEMsZ0JBYklWLHVCQUF1QixFQWFwQk8sMkJBQXlCLEVBQUdBLFVBQXlCLFFBQUEsQ0FBQztBQUU3RCxnQkFmSVAsdUJBQXVCLEVBZXBCVyxTQUFPLEVBQUcsSUFBSSxDQUFDO0FBRXRCLGdCQWpCSVgsdUJBQXVCLEVBaUJwQlksbUJBQWlCLEVBQUc7SUFDekJDLFNBQVMsRUFBRSxzQkFBc0I7Q0FDbEMsQ0FBQztJQUdKLFFBSUUsR0FKYUMsSUFBQUEsY0FBUyxRQUFBLEVBQUNkLHVCQUF1QixDQUFDIn0=