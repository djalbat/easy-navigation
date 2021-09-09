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
var InputsAccordionArticle = /*#__PURE__*/ function(AccordionArticle) {
    _inherits(InputsAccordionArticle, AccordionArticle);
    function InputsAccordionArticle() {
        _classCallCheck(this, InputsAccordionArticle);
        return _possibleConstructorReturn(this, _getPrototypeOf(InputsAccordionArticle).apply(this, arguments));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2FydGljbGUvYWNjb3JkaW9uL2lucHV0cy5qcyJdLCJuYW1lcyI6WyJBY2NvcmRpb25BcnRpY2xlIiwiaW5wdXRzVVJJIiwiaW5wdXRzUGF0aCIsIklucHV0c0FjY29yZGlvbkFydGljbGUiLCJjaGlsZEVsZW1lbnRzIiwiZGl2IiwiaDEiLCJ1cmkiLCJwYXRoIiwidGl0bGUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFaUIsR0FBeUIsQ0FBekIsVUFBeUI7QUFFNUIsR0FBWSxDQUFaLEtBQVk7QUFDWCxHQUFhLENBQWIsTUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVuQixzQkFBc0IsaUJBQTVCLFFBQVE7Y0FBRixzQkFBc0I7YUFBdEIsc0JBQXNCOzhCQUF0QixzQkFBc0I7Z0VBQXRCLHNCQUFzQjs7aUJBQXRCLHNCQUFzQjs7WUFDekMsR0FBYSxHQUFiLGFBQWE7bUJBQWIsUUFBUSxDQUFSLGFBQWEsR0FBRyxDQUFDO2dCQUNmLE1BQU0sb0NBRUgsR0FBRyw0Q0FDRCxFQUFFLFVBQUMsTUFFSjtZQUlOLENBQUM7OztXQVhrQixzQkFBc0I7RUFMZCxVQUF5QjtnQkFLakMsc0JBQXNCLEdBYWxDLEdBQUcsR0FoQmMsS0FBWTtnQkFHakIsc0JBQXNCLEdBZWxDLElBQUksR0FqQmMsTUFBYTtnQkFFbkIsc0JBQXNCLEdBaUJsQyxLQUFLLElBQUcsTUFBUTtnQkFqQkosc0JBQXNCLEdBbUJsQyxpQkFBaUIsR0FBRyxDQUFDO0lBQzFCLFNBQVMsR0FBRSxNQUFRO0FBQ3JCLENBQUM7a0JBckJrQixzQkFBc0IifQ==