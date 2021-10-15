"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easy = require("easy");
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
var AccordionArticle = /*#__PURE__*/ function(Element) {
    _inherits(AccordionArticle, Element);
    function AccordionArticle() {
        _classCallCheck(this, AccordionArticle);
        return _possibleConstructorReturn(this, _getPrototypeOf(AccordionArticle).apply(this, arguments));
    }
    _createClass(AccordionArticle, null, [
        {
            key: "getURI",
            value: function getURI() {
                return this.uri;
            }
        },
        {
            key: "getPath",
            value: function getPath() {
                return this.path;
            }
        },
        {
            key: "getTitle",
            value: function getTitle() {
                return this.title;
            }
        },
        {
            key: "isURIArticleURI",
            value: function isURIArticleURI(uri) {
                var path = this.getPath(), uriArticleURI = path.test(uri); ///
                return uriArticleURI;
            }
        }
    ]);
    return AccordionArticle;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(AccordionArticle, "tagName", "article");
_defineProperty(AccordionArticle, "defaultProperties", {
    className: "accordion"
});
exports.default = AccordionArticle;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcnRpY2xlL2FjY29yZGlvbi5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwiQWNjb3JkaW9uQXJ0aWNsZSIsImdldFVSSSIsInVyaSIsImdldFBhdGgiLCJwYXRoIiwiZ2V0VGl0bGUiLCJ0aXRsZSIsImlzVVJJQXJ0aWNsZVVSSSIsInVyaUFydGljbGVVUkkiLCJ0ZXN0IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVZLEdBQU0sQ0FBTixLQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFVCxnQkFBZ0IsaUJBQXRCLFFBQVE7Y0FBRixnQkFBZ0I7YUFBaEIsZ0JBQWdCOzhCQUFoQixnQkFBZ0I7Z0VBQWhCLGdCQUFnQjs7aUJBQWhCLGdCQUFnQjs7WUFDNUIsR0FBTSxFQUFOLENBQU07bUJBQWIsUUFBUSxDQUFELE1BQU0sR0FBRyxDQUFDO2dCQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRztZQUNqQixDQUFDOzs7WUFFTSxHQUFPLEVBQVAsQ0FBTzttQkFBZCxRQUFRLENBQUQsT0FBTyxHQUFHLENBQUM7Z0JBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNsQixDQUFDOzs7WUFFTSxHQUFRLEVBQVIsQ0FBUTttQkFBZixRQUFRLENBQUQsUUFBUSxHQUFHLENBQUM7Z0JBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSztZQUNuQixDQUFDOzs7WUFFTSxHQUFlLEVBQWYsQ0FBZTttQkFBdEIsUUFBUSxDQUFELGVBQWUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDM0IsR0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxJQUNuQixhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUksQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUUxQyxNQUFNLENBQUMsYUFBYTtZQUN0QixDQUFDOzs7V0FsQmtCLGdCQUFnQjttQkFGYixLQUFNO2dCQUVULGdCQUFnQixFQW9CNUIsQ0FBTyxVQUFHLENBQVM7Z0JBcEJQLGdCQUFnQixFQXNCNUIsQ0FBaUIsb0JBQUcsQ0FBQztJQUMxQixTQUFTLEVBQUUsQ0FBVztBQUN4QixDQUFDO2tCQXhCa0IsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvcmRpb25BcnRpY2xlIGV4dGVuZHMgRWxlbWVudCB7XG4gIHN0YXRpYyBnZXRVUkkoKSB7XG4gICAgcmV0dXJuIHRoaXMudXJpO1xuICB9XG5cbiAgc3RhdGljIGdldFBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aDtcbiAgfVxuXG4gIHN0YXRpYyBnZXRUaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgfVxuXG4gIHN0YXRpYyBpc1VSSUFydGljbGVVUkkodXJpKSB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpLFxuICAgICAgICAgIHVyaUFydGljbGVVUkkgPSBwYXRoLnRlc3QodXJpKTsgIC8vL1xuXG4gICAgcmV0dXJuIHVyaUFydGljbGVVUkk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiYXJ0aWNsZVwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYWNjb3JkaW9uXCJcbiAgfTtcbn1cbiJdfQ==