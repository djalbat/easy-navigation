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
        "\n\n  width: 100%;\n  height: 4rem;\n  cursor: pointer;\n  border-top: 1px solid black; \n\n  .first {\n    border-top: none;\n  }\n\n  :disabled {\n    cursor: auto;\n    background: none;\n    font-weight: bold;\n  }\n\n"
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
                var _properties = this.properties, first = _properties.first, last = _properties.last;
                if (first) {
                    this.addClass("first");
                }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idXR0b24vYWNjb3JkaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiZWFzeVwiO1xuXG5jbGFzcyBBY2NvcmRpb25CdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xuICBjbGlja0hhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCB7IHNob3dBcnRpY2xlLCBBcnRpY2xlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgdXJpID0gQXJ0aWNsZS5nZXRVUkkoKTtcblxuICAgIHNob3dBcnRpY2xlKHVyaSk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGZpcnN0LCBsYXN0IH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICBpZiAoZmlyc3QpIHtcbiAgICAgIHRoaXMuYWRkQ2xhc3MoXCJmaXJzdFwiKTtcbiAgICB9XG5cbiAgICBpZiAobGFzdCkge1xuICAgICAgdGhpcy5hZGRDbGFzcyhcImxhc3RcIik7XG4gICAgfVxuXG4gICAgdGhpcy5vbkNsaWNrKHRoaXMuY2xpY2tIYW5kbGVyLCB0aGlzKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmQ2xpY2sodGhpcy5jbGlja0hhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IEFydGljbGUgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICB7IHRpdGxlIH0gPSBBcnRpY2xlO1xuXG4gICAgcmV0dXJuIHRpdGxlO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBlbmFibGVCdXR0b24gPSB0aGlzLmVuYWJsZS5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgZGlzYWJsZUJ1dHRvbiA9IHRoaXMuZGlzYWJsZS5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgaXNCdXR0b25EaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBwYXJlbnRDb250ZXh0ID0ge1xuICAgICAgICAgICAgZW5hYmxlQnV0dG9uLFxuICAgICAgICAgICAgZGlzYWJsZUJ1dHRvbixcbiAgICAgICAgICAgIGlzQnV0dG9uRGlzcGxheWVkXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBwYXJlbnRDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwiQXJ0aWNsZVwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJhY2NvcmRpb25cIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQWNjb3JkaW9uQnV0dG9uKWBcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjazsgXG5cbiAgLmZpcnN0IHtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICB9XG5cbiAgOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IGF1dG87XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG5gO1xuIl0sIm5hbWVzIjpbIkFjY29yZGlvbkJ1dHRvbiIsImNsaWNrSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInByb3BlcnRpZXMiLCJzaG93QXJ0aWNsZSIsIkFydGljbGUiLCJ1cmkiLCJnZXRVUkkiLCJkaWRNb3VudCIsImZpcnN0IiwibGFzdCIsImFkZENsYXNzIiwib25DbGljayIsIndpbGxVbm1vdW50Iiwib2ZmQ2xpY2siLCJjaGlsZEVsZW1lbnRzIiwidGl0bGUiLCJwYXJlbnRDb250ZXh0IiwiZW5hYmxlQnV0dG9uIiwiZW5hYmxlIiwiYmluZCIsImRpc2FibGVCdXR0b24iLCJkaXNhYmxlIiwiaXNCdXR0b25EaXNwbGF5ZWQiLCJpc0Rpc3BsYXllZCIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBaUIsQ0FBakIsY0FBaUI7QUFFaEIsR0FBTSxDQUFOLEtBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUF5RGEsQ0FpQjFDOzs7Ozs7O0lBeEVNQSxlQUFlLGlCQUFyQixRQUFRO2NBQUZBLGVBQWU7YUFBZkEsZUFBZTs4QkFBZkEsZUFBZTtnRUFBZkEsZUFBZTs7aUJBQWZBLGVBQWU7O1lBQ25CQyxHQUFZLEVBQVpBLENBQVk7bUJBQVpBLFFBQVEsQ0FBUkEsWUFBWSxDQUFDQyxLQUFLLEVBQUVDLE9BQU8sRUFBRSxDQUFDO2dCQUM1QixHQUFLLENBQTRCLFdBQWUsR0FBZixJQUFJLENBQUNDLFVBQVUsRUFBeENDLFdBQVcsR0FBYyxXQUFlLENBQXhDQSxXQUFXLEVBQUVDLE9BQU8sR0FBSyxXQUFlLENBQTNCQSxPQUFPLEVBQ3RCQyxHQUFHLEdBQUdELE9BQU8sQ0FBQ0UsTUFBTTtnQkFFMUJILFdBQVcsQ0FBQ0UsR0FBRztZQUNqQixDQUFDOzs7WUFFREUsR0FBUSxFQUFSQSxDQUFRO21CQUFSQSxRQUFRLENBQVJBLFFBQVEsR0FBRyxDQUFDO2dCQUNWLEdBQUssQ0FBbUIsV0FBZSxHQUFmLElBQUksQ0FBQ0wsVUFBVSxFQUEvQk0sS0FBSyxHQUFXLFdBQWUsQ0FBL0JBLEtBQUssRUFBRUMsSUFBSSxHQUFLLFdBQWUsQ0FBeEJBLElBQUk7Z0JBRW5CLEVBQUUsRUFBRUQsS0FBSyxFQUFFLENBQUM7b0JBQ1YsSUFBSSxDQUFDRSxRQUFRLENBQUMsQ0FBTztnQkFDdkIsQ0FBQztnQkFFRCxFQUFFLEVBQUVELElBQUksRUFBRSxDQUFDO29CQUNULElBQUksQ0FBQ0MsUUFBUSxDQUFDLENBQU07Z0JBQ3RCLENBQUM7Z0JBRUQsSUFBSSxDQUFDQyxPQUFPLENBQUMsSUFBSSxDQUFDWixZQUFZLEVBQUUsSUFBSTtZQUN0QyxDQUFDOzs7WUFFRGEsR0FBVyxFQUFYQSxDQUFXO21CQUFYQSxRQUFRLENBQVJBLFdBQVcsR0FBRyxDQUFDO2dCQUNiLElBQUksQ0FBQ0MsUUFBUSxDQUFDLElBQUksQ0FBQ2QsWUFBWSxFQUFFLElBQUk7WUFDdkMsQ0FBQzs7O1lBRURlLEdBQWEsRUFBYkEsQ0FBYTttQkFBYkEsUUFBUSxDQUFSQSxhQUFhLEdBQUcsQ0FBQztnQkFDZixHQUFLLENBQWUsV0FBZSxHQUFmLElBQUksQ0FBQ1osVUFBVSxFQUEzQkUsT0FBTyxHQUFLLFdBQWUsQ0FBM0JBLE9BQU8sRUFDUFcsS0FBSyxHQUFLWCxPQUFPLENBQWpCVyxLQUFLO2dCQUViLE1BQU0sQ0FBQ0EsS0FBSztZQUNkLENBQUM7OztZQUVEQyxHQUFhLEVBQWJBLENBQWE7bUJBQWJBLFFBQVEsQ0FBUkEsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsR0FBSyxDQUFDQyxZQUFZLEdBQUcsSUFBSSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQyxJQUFJLEdBQ3BDQyxhQUFhLEdBQUcsSUFBSSxDQUFDQyxPQUFPLENBQUNGLElBQUksQ0FBQyxJQUFJLEdBQ3RDRyxpQkFBaUIsR0FBRyxJQUFJLENBQUNDLFdBQVcsQ0FBQ0osSUFBSSxDQUFDLElBQUksR0FDOUNILGNBQWEsR0FBRyxDQUFDO29CQUNmQyxZQUFZLEVBQVpBLFlBQVk7b0JBQ1pHLGFBQWEsRUFBYkEsYUFBYTtvQkFDYkUsaUJBQWlCLEVBQWpCQSxpQkFBaUI7Z0JBQ25CLENBQUM7Z0JBRVAsTUFBTSxDQUFDTixjQUFhO1lBQ3RCLENBQUM7OztXQTVDR2xCLGVBQWU7RUFGRSxLQUFNO2dCQUV2QkEsZUFBZSxFQThDWjBCLENBQWlCLG9CQUFHLENBQUM7SUFDMUIsQ0FBUztBQUNYLENBQUM7Z0JBaERHMUIsZUFBZSxFQWtEWjJCLENBQWlCLG9CQUFHLENBQUM7SUFDMUJDLFNBQVMsRUFBRSxDQUFXO0FBQ3hCLENBQUM7bUJBeERtQixjQUFpQixVQTJEZDVCLGVBQWUifQ==