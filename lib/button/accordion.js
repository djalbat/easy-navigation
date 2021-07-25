"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
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
        "\n\n  width: 100%;\n  height: 5rem;\n  cursor: pointer;\n  align-items: center;\n  padding-left: 2rem;\n  padding-right: 2rem;\n  border-bottom: 1px solid black; \n  flex-direction: row;\n  justify-content: center;\n\n  display: flex;\n\n  @media (min-width: ",
        ") {\n  \n    display: none;\n  \n  }\n  \n  .last {\n    border-bottom: none;\n  }\n\n  :disabled {\n    cursor: auto;\n    background: none;\n    font-weight: bold;\n    border-bottom: none;\n  }\n    \n"
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
var _default = (0, _easyWithStyle).default(AccordionButton)(_templateObject(), _breakpoints.desktop);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idXR0b24vYWNjb3JkaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBkZXNrdG9wIH0gZnJvbSBcIi4uL2JyZWFrcG9pbnRzXCI7XG5cbmNsYXNzIEFjY29yZGlvbkJ1dHRvbiBleHRlbmRzIEJ1dHRvbiB7XG4gIGNsaWNrSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHsgc2hvd0FydGljbGUsIEFydGljbGUgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICB1cmkgPSBBcnRpY2xlLmdldFVSSSgpO1xuXG4gICAgc2hvd0FydGljbGUodXJpKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgbGFzdCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgaWYgKGxhc3QpIHtcbiAgICAgIHRoaXMuYWRkQ2xhc3MoXCJsYXN0XCIpO1xuICAgIH1cblxuICAgIHRoaXMub25DbGljayh0aGlzLmNsaWNrSGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9mZkNsaWNrKHRoaXMuY2xpY2tIYW5kbGVyLCB0aGlzKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBBcnRpY2xlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgeyB0aXRsZSB9ID0gQXJ0aWNsZTtcblxuICAgIHJldHVybiB0aXRsZTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZW5hYmxlQnV0dG9uID0gdGhpcy5lbmFibGUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGRpc2FibGVCdXR0b24gPSB0aGlzLmRpc2FibGUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGlzQnV0dG9uRGlzcGxheWVkID0gdGhpcy5pc0Rpc3BsYXllZC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgcGFyZW50Q29udGV4dCA9IHtcbiAgICAgICAgICAgIGVuYWJsZUJ1dHRvbixcbiAgICAgICAgICAgIGRpc2FibGVCdXR0b24sXG4gICAgICAgICAgICBpc0J1dHRvbkRpc3BsYXllZFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4gcGFyZW50Q29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIkFydGljbGVcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYWNjb3JkaW9uXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEFjY29yZGlvbkJ1dHRvbilgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjazsgXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7ZGVza3RvcH0pIHtcbiAgXG4gICAgZGlzcGxheTogbm9uZTtcbiAgXG4gIH1cbiAgXG4gIC5sYXN0IHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICB9XG5cbiAgOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IGF1dG87XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICB9XG4gICAgXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVUsR0FBaUIsQ0FBakIsY0FBaUI7QUFFaEIsR0FBTSxDQUFOLEtBQU07QUFFTCxHQUFnQixDQUFoQixZQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQXFERSxtUUFjckI7U0FBVSw0TUFpQi9COzs7Ozs7O0lBbEZNLGVBQWU7Y0FBZixlQUFlO2FBQWYsZUFBZTs4QkFBZixlQUFlO2dFQUFmLGVBQWU7O2lCQUFmLGVBQWU7O1lBQ25CLEdBQVksR0FBWixZQUFZOzRCQUFaLFlBQVksQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUM7Z0JBQzVCLEdBQUssQ0FBNEIsV0FBZSxRQUFWLFVBQVUsRUFBeEMsV0FBVyxHQUFjLFdBQWUsQ0FBeEMsV0FBVyxFQUFFLE9BQU8sR0FBSyxXQUFlLENBQTNCLE9BQU8sRUFDdEIsR0FBRyxHQUFHLE9BQU8sQ0FBQyxNQUFNO2dCQUUxQixXQUFXLENBQUMsR0FBRztZQUNqQixDQUFDOzs7WUFFRCxHQUFRLEdBQVIsUUFBUTs0QkFBUixRQUFRLEdBQUcsQ0FBQztnQkFDVixHQUFLLENBQVksV0FBZSxRQUFWLFVBQVUsRUFBeEIsSUFBSSxHQUFLLFdBQWUsQ0FBeEIsSUFBSTtnQkFFWixFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUM7eUJBQ0osUUFBUSxFQUFDLElBQU07Z0JBQ3RCLENBQUM7cUJBRUksT0FBTyxNQUFNLFlBQVk7WUFDaEMsQ0FBQzs7O1lBRUQsR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVyxHQUFHLENBQUM7cUJBQ1IsUUFBUSxNQUFNLFlBQVk7WUFDakMsQ0FBQzs7O1lBRUQsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsR0FBSyxDQUFlLFdBQWUsUUFBVixVQUFVLEVBQTNCLE9BQU8sR0FBSyxXQUFlLENBQTNCLE9BQU8sRUFDUCxLQUFLLEdBQUssT0FBTyxDQUFqQixLQUFLO3VCQUVOLEtBQUs7WUFDZCxDQUFDOzs7WUFFRCxHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhLEdBQUcsQ0FBQztnQkFDZixHQUFLLENBQUMsWUFBWSxRQUFRLE1BQU0sQ0FBQyxJQUFJLFFBQy9CLGFBQWEsUUFBUSxPQUFPLENBQUMsSUFBSSxRQUNqQyxpQkFBaUIsUUFBUSxXQUFXLENBQUMsSUFBSSxRQUN6QyxjQUFhO29CQUNYLFlBQVksRUFBWixZQUFZO29CQUNaLGFBQWEsRUFBYixhQUFhO29CQUNiLGlCQUFpQixFQUFqQixpQkFBaUI7O3VCQUdsQixjQUFhO1lBQ3RCLENBQUM7OztXQXhDRyxlQUFlO0VBSkUsS0FBTTtnQkFJdkIsZUFBZSxHQTBDWixpQkFBaUI7S0FDdEIsT0FBUzs7Z0JBM0NQLGVBQWUsR0E4Q1osaUJBQWlCO0lBQ3RCLFNBQVMsR0FBRSxTQUFXOzttQkFyREosY0FBaUIsVUF5RGQsZUFBZSxxQkFyRGhCLFlBQWdCIn0=