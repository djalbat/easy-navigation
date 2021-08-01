"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = require("../../../index");
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
var ButtonsAccordionArticle = /*#__PURE__*/ function(AccordionArticle) {
    _inherits(ButtonsAccordionArticle, AccordionArticle);
    function ButtonsAccordionArticle() {
        _classCallCheck(this, ButtonsAccordionArticle);
        return _possibleConstructorReturn(this, _getPrototypeOf(ButtonsAccordionArticle).apply(this, arguments));
    }
    _createClass(ButtonsAccordionArticle, [
        {
            key: "childElements",
            value: function childElements() {
                return(/*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("h1", null, "Buttons")));
            }
        }
    ]);
    return ButtonsAccordionArticle;
}(_index.AccordionArticle);
_defineProperty(ButtonsAccordionArticle, "uri", _uris.buttonsURI);
_defineProperty(ButtonsAccordionArticle, "path", _paths.buttonsPath);
_defineProperty(ButtonsAccordionArticle, "title", "Buttons");
_defineProperty(ButtonsAccordionArticle, "defaultProperties", {
    className: "buttons"
});
exports.default = ButtonsAccordionArticle;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2FydGljbGUvYWNjb3JkaW9uL2J1dHRvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEFjY29yZGlvbkFydGljbGUgfSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgeyBidXR0b25zVVJJIH0gZnJvbSBcIi4uLy4uL3VyaXNcIjtcbmltcG9ydCB7IGJ1dHRvbnNQYXRoIH0gZnJvbSBcIi4uLy4uL3BhdGhzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbnNBY2NvcmRpb25BcnRpY2xlIGV4dGVuZHMgQWNjb3JkaW9uQXJ0aWNsZSB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPlxuICAgICAgICAgIEJ1dHRvbnNcbiAgICAgICAgPC9oMT5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyB1cmkgPSBidXR0b25zVVJJO1xuXG4gIHN0YXRpYyBwYXRoID0gYnV0dG9uc1BhdGg7XG5cbiAgc3RhdGljIHRpdGxlID0gXCJCdXR0b25zXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJidXR0b25zXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVxQixHQUFnQixDQUFoQixNQUFnQjtBQUV0QixHQUFZLENBQVosS0FBWTtBQUNYLEdBQWEsQ0FBYixNQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVwQix1QkFBdUI7Y0FBdkIsdUJBQXVCO2FBQXZCLHVCQUF1Qjs4QkFBdkIsdUJBQXVCO2dFQUF2Qix1QkFBdUI7O2lCQUF2Qix1QkFBdUI7O1lBQzFDLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWEsR0FBRyxDQUFDOzBEQUdaLEdBQUcsNENBQ0QsRUFBRSxVQUFDLE9BRUo7WUFJTixDQUFDOzs7V0FYa0IsdUJBQXVCO0VBTFgsTUFBZ0I7Z0JBSzVCLHVCQUF1QixHQWFuQyxHQUFHLEdBaEJlLEtBQVk7Z0JBR2xCLHVCQUF1QixHQWVuQyxJQUFJLEdBakJlLE1BQWE7Z0JBRXBCLHVCQUF1QixHQWlCbkMsS0FBSyxJQUFHLE9BQVM7Z0JBakJMLHVCQUF1QixHQW1CbkMsaUJBQWlCO0lBQ3RCLFNBQVMsR0FBRSxPQUFTOztrQkFwQkgsdUJBQXVCIn0=