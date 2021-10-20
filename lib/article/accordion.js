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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcnRpY2xlL2FjY29yZGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY29yZGlvbkFydGljbGUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgc3RhdGljIGdldFVSSSgpIHtcbiAgICByZXR1cm4gdGhpcy51cmk7XG4gIH1cblxuICBzdGF0aWMgZ2V0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoO1xuICB9XG5cbiAgc3RhdGljIGdldFRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICB9XG5cbiAgc3RhdGljIGlzVVJJQXJ0aWNsZVVSSSh1cmkpIHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCksXG4gICAgICAgICAgdXJpQXJ0aWNsZVVSSSA9IHBhdGgudGVzdCh1cmkpOyAgLy8vXG5cbiAgICByZXR1cm4gdXJpQXJ0aWNsZVVSSTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJhcnRpY2xlXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJhY2NvcmRpb25cIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkFjY29yZGlvbkFydGljbGUiLCJnZXRVUkkiLCJ1cmkiLCJnZXRQYXRoIiwicGF0aCIsImdldFRpdGxlIiwidGl0bGUiLCJpc1VSSUFydGljbGVVUkkiLCJ1cmlBcnRpY2xlVVJJIiwidGVzdCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFWSxHQUFNLENBQU4sS0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVRBLGdCQUFnQixpQkFBdEIsUUFBUTtjQUFGQSxnQkFBZ0I7YUFBaEJBLGdCQUFnQjs4QkFBaEJBLGdCQUFnQjtnRUFBaEJBLGdCQUFnQjs7aUJBQWhCQSxnQkFBZ0I7O1lBQzVCQyxHQUFNLEVBQU5BLENBQU07bUJBQWIsUUFBUSxDQUFEQSxNQUFNLEdBQUcsQ0FBQztnQkFDZixNQUFNLENBQUMsSUFBSSxDQUFDQyxHQUFHO1lBQ2pCLENBQUM7OztZQUVNQyxHQUFPLEVBQVBBLENBQU87bUJBQWQsUUFBUSxDQUFEQSxPQUFPLEdBQUcsQ0FBQztnQkFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQ0MsSUFBSTtZQUNsQixDQUFDOzs7WUFFTUMsR0FBUSxFQUFSQSxDQUFRO21CQUFmLFFBQVEsQ0FBREEsUUFBUSxHQUFHLENBQUM7Z0JBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUNDLEtBQUs7WUFDbkIsQ0FBQzs7O1lBRU1DLEdBQWUsRUFBZkEsQ0FBZTttQkFBdEIsUUFBUSxDQUFEQSxlQUFlLENBQUNMLEdBQUcsRUFBRSxDQUFDO2dCQUMzQixHQUFLLENBQUNFLElBQUksR0FBRyxJQUFJLENBQUNELE9BQU8sSUFDbkJLLGFBQWEsR0FBR0osSUFBSSxDQUFDSyxJQUFJLENBQUNQLEdBQUcsRUFBSSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRTFDLE1BQU0sQ0FBQ00sYUFBYTtZQUN0QixDQUFDOzs7V0FsQmtCUixnQkFBZ0I7bUJBRmIsS0FBTTtnQkFFVEEsZ0JBQWdCLEVBb0I1QlUsQ0FBTyxVQUFHLENBQVM7Z0JBcEJQVixnQkFBZ0IsRUFzQjVCVyxDQUFpQixvQkFBRyxDQUFDO0lBQzFCQyxTQUFTLEVBQUUsQ0FBVztBQUN4QixDQUFDO2tCQXhCa0JaLGdCQUFnQiJ9