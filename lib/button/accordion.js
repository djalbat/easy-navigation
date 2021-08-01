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
        "\n\n  width: 100%;\n  height: 5rem;\n  cursor: pointer;\n  align-items: center;\n  padding-left: 2rem;\n  padding-right: 2rem;\n  border-bottom: 1px solid black; \n  flex-direction: row;\n  justify-content: center;\n\n  display: flex;\n\n  .last {\n    border-bottom: none;\n  }\n\n  :disabled {\n    cursor: auto;\n    background: none;\n    font-weight: bold;\n    border-bottom: none;\n  }\n    \n"
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idXR0b24vYWNjb3JkaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiZWFzeVwiO1xuXG5jbGFzcyBBY2NvcmRpb25CdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xuICBjbGlja0hhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCB7IHNob3dBcnRpY2xlLCBBcnRpY2xlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgdXJpID0gQXJ0aWNsZS5nZXRVUkkoKTtcblxuICAgIHNob3dBcnRpY2xlKHVyaSk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGxhc3QgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIGlmIChsYXN0KSB7XG4gICAgICB0aGlzLmFkZENsYXNzKFwibGFzdFwiKTtcbiAgICB9XG5cbiAgICB0aGlzLm9uQ2xpY2sodGhpcy5jbGlja0hhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZDbGljayh0aGlzLmNsaWNrSGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgQXJ0aWNsZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIHsgdGl0bGUgfSA9IEFydGljbGU7XG5cbiAgICByZXR1cm4gdGl0bGU7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGVuYWJsZUJ1dHRvbiA9IHRoaXMuZW5hYmxlLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBkaXNhYmxlQnV0dG9uID0gdGhpcy5kaXNhYmxlLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBpc0J1dHRvbkRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHBhcmVudENvbnRleHQgPSB7XG4gICAgICAgICAgICBlbmFibGVCdXR0b24sXG4gICAgICAgICAgICBkaXNhYmxlQnV0dG9uLFxuICAgICAgICAgICAgaXNCdXR0b25EaXNwbGF5ZWRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIHBhcmVudENvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJBcnRpY2xlXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImFjY29yZGlvblwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShBY2NvcmRpb25CdXR0b24pYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7IFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBkaXNwbGF5OiBmbGV4O1xuXG4gIC5sYXN0IHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICB9XG5cbiAgOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IGF1dG87XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICB9XG4gICAgXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVUsR0FBaUIsQ0FBakIsY0FBaUI7QUFFaEIsR0FBTSxDQUFOLEtBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FxRGEsZ1pBeUIxQzs7Ozs7OztJQTVFTSxlQUFlO2NBQWYsZUFBZTthQUFmLGVBQWU7OEJBQWYsZUFBZTtnRUFBZixlQUFlOztpQkFBZixlQUFlOztZQUNuQixHQUFZLEdBQVosWUFBWTs0QkFBWixZQUFZLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDO2dCQUM1QixHQUFLLENBQTRCLFdBQWUsUUFBVixVQUFVLEVBQXhDLFdBQVcsR0FBYyxXQUFlLENBQXhDLFdBQVcsRUFBRSxPQUFPLEdBQUssV0FBZSxDQUEzQixPQUFPLEVBQ3RCLEdBQUcsR0FBRyxPQUFPLENBQUMsTUFBTTtnQkFFMUIsV0FBVyxDQUFDLEdBQUc7WUFDakIsQ0FBQzs7O1lBRUQsR0FBUSxHQUFSLFFBQVE7NEJBQVIsUUFBUSxHQUFHLENBQUM7Z0JBQ1YsR0FBSyxDQUFZLFdBQWUsUUFBVixVQUFVLEVBQXhCLElBQUksR0FBSyxXQUFlLENBQXhCLElBQUk7Z0JBRVosRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDO3lCQUNKLFFBQVEsRUFBQyxJQUFNO2dCQUN0QixDQUFDO3FCQUVJLE9BQU8sTUFBTSxZQUFZO1lBQ2hDLENBQUM7OztZQUVELEdBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVcsR0FBRyxDQUFDO3FCQUNSLFFBQVEsTUFBTSxZQUFZO1lBQ2pDLENBQUM7OztZQUVELEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWEsR0FBRyxDQUFDO2dCQUNmLEdBQUssQ0FBZSxXQUFlLFFBQVYsVUFBVSxFQUEzQixPQUFPLEdBQUssV0FBZSxDQUEzQixPQUFPLEVBQ1AsS0FBSyxHQUFLLE9BQU8sQ0FBakIsS0FBSzt1QkFFTixLQUFLO1lBQ2QsQ0FBQzs7O1lBRUQsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsR0FBSyxDQUFDLFlBQVksUUFBUSxNQUFNLENBQUMsSUFBSSxRQUMvQixhQUFhLFFBQVEsT0FBTyxDQUFDLElBQUksUUFDakMsaUJBQWlCLFFBQVEsV0FBVyxDQUFDLElBQUksUUFDekMsY0FBYTtvQkFDWCxZQUFZLEVBQVosWUFBWTtvQkFDWixhQUFhLEVBQWIsYUFBYTtvQkFDYixpQkFBaUIsRUFBakIsaUJBQWlCOzt1QkFHbEIsY0FBYTtZQUN0QixDQUFDOzs7V0F4Q0csZUFBZTtFQUZFLEtBQU07Z0JBRXZCLGVBQWUsR0EwQ1osaUJBQWlCO0tBQ3RCLE9BQVM7O2dCQTNDUCxlQUFlLEdBOENaLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsU0FBVzs7bUJBbkRKLGNBQWlCLFVBdURkLGVBQWUifQ==