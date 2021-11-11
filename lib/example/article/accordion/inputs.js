"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _accordion = _interopRequireDefault(require("../../article/accordion"));
var _uris = require("../../uris");
var _paths = require("../../paths");
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
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
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
var InputsAccordionArticle = /*#__PURE__*/ function(AccordionArticle) {
    _inherits(InputsAccordionArticle, AccordionArticle);
    var _super = _createSuper(InputsAccordionArticle);
    function InputsAccordionArticle() {
        _classCallCheck(this, InputsAccordionArticle);
        return _super.apply(this, arguments);
    }
    _createClass(InputsAccordionArticle, [
        {
            key: "childElements",
            value: function childElements() {
                return(/*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("h1", null, "Inputs")));
            }
        }
    ]);
    return InputsAccordionArticle;
}(_accordion.default);
_defineProperty(InputsAccordionArticle, "uri", _uris.inputsURI);
_defineProperty(InputsAccordionArticle, "path", _paths.inputsPath);
_defineProperty(InputsAccordionArticle, "title", "Inputs");
_defineProperty(InputsAccordionArticle, "defaultProperties", {
    className: "inputs"
});
exports.default = InputsAccordionArticle;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2FydGljbGUvYWNjb3JkaW9uL2lucHV0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEFjY29yZGlvbkFydGljbGUgZnJvbSBcIi4uLy4uL2FydGljbGUvYWNjb3JkaW9uXCI7XG5cbmltcG9ydCB7IGlucHV0c1VSSSB9IGZyb20gXCIuLi8uLi91cmlzXCI7XG5pbXBvcnQgeyBpbnB1dHNQYXRoIH0gZnJvbSBcIi4uLy4uL3BhdGhzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0c0FjY29yZGlvbkFydGljbGUgZXh0ZW5kcyBBY2NvcmRpb25BcnRpY2xlIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+XG4gICAgICAgICAgSW5wdXRzXG4gICAgICAgIDwvaDE+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgdXJpID0gaW5wdXRzVVJJO1xuXG4gIHN0YXRpYyBwYXRoID0gaW5wdXRzUGF0aDtcblxuICBzdGF0aWMgdGl0bGUgPSBcIklucHV0c1wiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiaW5wdXRzXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJJbnB1dHNBY2NvcmRpb25BcnRpY2xlIiwiY2hpbGRFbGVtZW50cyIsImRpdiIsImgxIiwidXJpIiwicGF0aCIsInRpdGxlIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRWlCLEdBQXlCLENBQXpCLFVBQXlCO0FBRTVCLEdBQVksQ0FBWixLQUFZO0FBQ1gsR0FBYSxDQUFiLE1BQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRW5CQSxzQkFBc0IsaUJBQTVCLFFBQVE7Y0FBRkEsc0JBQXNCOzhCQUF0QkEsc0JBQXNCO2FBQXRCQSxzQkFBc0I7OEJBQXRCQSxzQkFBc0I7OztpQkFBdEJBLHNCQUFzQjs7WUFDekNDLEdBQWEsRUFBYkEsQ0FBYTttQkFBYkEsUUFBUSxDQUFSQSxhQUFhLEdBQUcsQ0FBQztnQkFDZixNQUFNLG1DQUVIQyxDQUFHLDhDQUNEQyxDQUFFLFdBQUMsQ0FFSjtZQUlOLENBQUM7OztXQVhrQkgsc0JBQXNCO0VBTGQsVUFBeUI7Z0JBS2pDQSxzQkFBc0IsRUFhbENJLENBQUcsTUFoQmMsS0FBWTtnQkFHakJKLHNCQUFzQixFQWVsQ0ssQ0FBSSxPQWpCYyxNQUFhO2dCQUVuQkwsc0JBQXNCLEVBaUJsQ00sQ0FBSyxRQUFHLENBQVE7Z0JBakJKTixzQkFBc0IsRUFtQmxDTyxDQUFpQixvQkFBRyxDQUFDO0lBQzFCQyxTQUFTLEVBQUUsQ0FBUTtBQUNyQixDQUFDO2tCQXJCa0JSLHNCQUFzQiJ9