"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
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
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  width: 100%;\n  cursor: pointer;\n  border-bottom: 1px solid black; \n\n  .last {\n    border-bottom: none;\n  }\n\n  :disabled {\n    cursor: auto;\n    background: none;\n    font-weight: bold;\n    border-bottom: none;\n  }\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var AccordionButton = /*#__PURE__*/ function(Button) {
    _inherits(AccordionButton, Button);
    function AccordionButton() {
        _classCallCheck(this, AccordionButton);
        return _possibleConstructorReturn(this, _getPrototypeOf(AccordionButton).apply(this, arguments));
    }
    _createClass(AccordionButton, [
        {
            key: "clickHandler",
            value: function clickHandler(event, element) {
                var _properties = this.properties, showArticle = _properties.showArticle, Article = _properties.Article, uri = Article.getURI();
                showArticle(uri);
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var _properties = this.properties, last = _properties.last;
                if (last) {
                    this.addClass("last");
                }
                this.onClick(this.clickHandler, this);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.offClick(this.clickHandler, this);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _properties = this.properties, Article = _properties.Article, title = Article.title;
                return title;
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var enableButton = this.enable.bind(this), disableButton = this.disable.bind(this), isButtonDisplayed = this.isDisplayed.bind(this), parentContext1 = {
                    enableButton: enableButton,
                    disableButton: disableButton,
                    isButtonDisplayed: isButtonDisplayed
                };
                return parentContext1;
            }
        }
    ]);
    return AccordionButton;
}(_easy.Button);
_defineProperty(AccordionButton, "ignoredProperties", [
    "Article"
]);
_defineProperty(AccordionButton, "defaultProperties", {
    className: "accordion"
});
var _default = (0, _easyWithStyle).default(AccordionButton)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idXR0b24vYWNjb3JkaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiZWFzeVwiO1xuXG5jbGFzcyBBY2NvcmRpb25CdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xuICBjbGlja0hhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCB7IHNob3dBcnRpY2xlLCBBcnRpY2xlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgdXJpID0gQXJ0aWNsZS5nZXRVUkkoKTtcblxuICAgIHNob3dBcnRpY2xlKHVyaSk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGxhc3QgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIGlmIChsYXN0KSB7XG4gICAgICB0aGlzLmFkZENsYXNzKFwibGFzdFwiKTtcbiAgICB9XG5cbiAgICB0aGlzLm9uQ2xpY2sodGhpcy5jbGlja0hhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZDbGljayh0aGlzLmNsaWNrSGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgQXJ0aWNsZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIHsgdGl0bGUgfSA9IEFydGljbGU7XG5cbiAgICByZXR1cm4gdGl0bGU7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGVuYWJsZUJ1dHRvbiA9IHRoaXMuZW5hYmxlLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBkaXNhYmxlQnV0dG9uID0gdGhpcy5kaXNhYmxlLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBpc0J1dHRvbkRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHBhcmVudENvbnRleHQgPSB7XG4gICAgICAgICAgICBlbmFibGVCdXR0b24sXG4gICAgICAgICAgICBkaXNhYmxlQnV0dG9uLFxuICAgICAgICAgICAgaXNCdXR0b25EaXNwbGF5ZWRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIHBhcmVudENvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJBcnRpY2xlXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImFjY29yZGlvblwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShBY2NvcmRpb25CdXR0b24pYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjazsgXG5cbiAgLmxhc3Qge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIH1cblxuICA6ZGlzYWJsZWQge1xuICAgIGN1cnNvcjogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIH1cblxuYDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVVLEdBQWlCLENBQWpCLGNBQWlCO0FBRWhCLEdBQU0sQ0FBTixLQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBcURhLDRPQWlCMUM7Ozs7Ozs7SUFwRU0sZUFBZTtjQUFmLGVBQWU7YUFBZixlQUFlOzhCQUFmLGVBQWU7Z0VBQWYsZUFBZTs7aUJBQWYsZUFBZTs7WUFDbkIsR0FBWSxHQUFaLFlBQVk7NEJBQVosWUFBWSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQztnQkFDNUIsR0FBSyxDQUE0QixXQUFlLFFBQVYsVUFBVSxFQUF4QyxXQUFXLEdBQWMsV0FBZSxDQUF4QyxXQUFXLEVBQUUsT0FBTyxHQUFLLFdBQWUsQ0FBM0IsT0FBTyxFQUN0QixHQUFHLEdBQUcsT0FBTyxDQUFDLE1BQU07Z0JBRTFCLFdBQVcsQ0FBQyxHQUFHO1lBQ2pCLENBQUM7OztZQUVELEdBQVEsR0FBUixRQUFROzRCQUFSLFFBQVEsR0FBRyxDQUFDO2dCQUNWLEdBQUssQ0FBWSxXQUFlLFFBQVYsVUFBVSxFQUF4QixJQUFJLEdBQUssV0FBZSxDQUF4QixJQUFJO2dCQUVaLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQzt5QkFDSixRQUFRLEVBQUMsSUFBTTtnQkFDdEIsQ0FBQztxQkFFSSxPQUFPLE1BQU0sWUFBWTtZQUNoQyxDQUFDOzs7WUFFRCxHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXLEdBQUcsQ0FBQztxQkFDUixRQUFRLE1BQU0sWUFBWTtZQUNqQyxDQUFDOzs7WUFFRCxHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhLEdBQUcsQ0FBQztnQkFDZixHQUFLLENBQWUsV0FBZSxRQUFWLFVBQVUsRUFBM0IsT0FBTyxHQUFLLFdBQWUsQ0FBM0IsT0FBTyxFQUNQLEtBQUssR0FBSyxPQUFPLENBQWpCLEtBQUs7dUJBRU4sS0FBSztZQUNkLENBQUM7OztZQUVELEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWEsR0FBRyxDQUFDO2dCQUNmLEdBQUssQ0FBQyxZQUFZLFFBQVEsTUFBTSxDQUFDLElBQUksUUFDL0IsYUFBYSxRQUFRLE9BQU8sQ0FBQyxJQUFJLFFBQ2pDLGlCQUFpQixRQUFRLFdBQVcsQ0FBQyxJQUFJLFFBQ3pDLGNBQWE7b0JBQ1gsWUFBWSxFQUFaLFlBQVk7b0JBQ1osYUFBYSxFQUFiLGFBQWE7b0JBQ2IsaUJBQWlCLEVBQWpCLGlCQUFpQjs7dUJBR2xCLGNBQWE7WUFDdEIsQ0FBQzs7O1dBeENHLGVBQWU7RUFGRSxLQUFNO2dCQUV2QixlQUFlLEdBMENaLGlCQUFpQjtLQUN0QixPQUFTOztnQkEzQ1AsZUFBZSxHQThDWixpQkFBaUI7SUFDdEIsU0FBUyxHQUFFLFNBQVc7O21CQW5ESixjQUFpQixVQXVEZCxlQUFlIn0=