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
const _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
const _easy = require("easy");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class LinkButton extends _easy.Button {
    static defaultProperties = {
        className: "link"
    };
}
const _default = (0, _easywithstyle.default)(LinkButton)`

  color: blue;
  cursor: pointer;
  border: none;
  display: inline;
  padding: 0;
  background: transparent;
  
  :hover {
    text-decoration: underline;
  }
  
  :disabled {
    cursor: auto;
  }
  
  :disabled:hover {
    text-decoration: none;
  }
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2J1dHRvbi9saW5rLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiZWFzeVwiO1xuXG5jbGFzcyBMaW5rQnV0dG9uIGV4dGVuZHMgQnV0dG9uIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJsaW5rXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKExpbmtCdXR0b24pYFxuXG4gIGNvbG9yOiBibHVlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgXG4gIDpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbiAgXG4gIDpkaXNhYmxlZCB7XG4gICAgY3Vyc29yOiBhdXRvO1xuICB9XG4gIFxuICA6ZGlzYWJsZWQ6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBcbmA7XG4iXSwibmFtZXMiOlsiTGlua0J1dHRvbiIsIkJ1dHRvbiIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7OztzRUFWc0I7c0JBRUM7Ozs7OztBQUV2QixNQUFNQSxtQkFBbUJDLFlBQU07SUFDN0IsT0FBT0Msb0JBQW9CO1FBQ3pCQyxXQUFXO0lBQ2IsRUFBRTtBQUNKO01BRUEsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ0osV0FBVyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQnJDLENBQUMifQ==