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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idXR0b24vYWNjb3JkaW9uLmpzIl0sIm5hbWVzIjpbIndpdGhTdHlsZSIsIkJ1dHRvbiIsIkFjY29yZGlvbkJ1dHRvbiIsImNsaWNrSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInNob3dBcnRpY2xlIiwiQXJ0aWNsZSIsInByb3BlcnRpZXMiLCJ1cmkiLCJnZXRVUkkiLCJkaWRNb3VudCIsImZpcnN0IiwibGFzdCIsImFkZENsYXNzIiwib25DbGljayIsIndpbGxVbm1vdW50Iiwib2ZmQ2xpY2siLCJjaGlsZEVsZW1lbnRzIiwidGl0bGUiLCJwYXJlbnRDb250ZXh0IiwiZW5hYmxlQnV0dG9uIiwiZW5hYmxlIiwiYmluZCIsImRpc2FibGVCdXR0b24iLCJkaXNhYmxlIiwiaXNCdXR0b25EaXNwbGF5ZWQiLCJpc0Rpc3BsYXllZCIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVUsR0FBaUIsQ0FBakIsY0FBaUI7QUFFaEIsR0FBTSxDQUFOLEtBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0F5RGEsOE5BaUIxQzs7Ozs7OztJQXhFTSxlQUFlLGlCQUFyQixRQUFRO2NBQUYsZUFBZTthQUFmLGVBQWU7OEJBQWYsZUFBZTtnRUFBZixlQUFlOztpQkFBZixlQUFlOztZQUNuQixHQUFZLEdBQVosWUFBWTttQkFBWixRQUFRLENBQVIsWUFBWSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQztnQkFDNUIsR0FBSyxDQUE0QixXQUFlLEdBQWYsSUFBSSxDQUFDLFVBQVUsRUFBeEMsV0FBVyxHQUFjLFdBQWUsQ0FBeEMsV0FBVyxFQUFFLE9BQU8sR0FBSyxXQUFlLENBQTNCLE9BQU8sRUFDdEIsR0FBRyxHQUFHLE9BQU8sQ0FBQyxNQUFNO2dCQUUxQixXQUFXLENBQUMsR0FBRztZQUNqQixDQUFDOzs7WUFFRCxHQUFRLEdBQVIsUUFBUTttQkFBUixRQUFRLENBQVIsUUFBUSxHQUFHLENBQUM7Z0JBQ1YsR0FBSyxDQUFtQixXQUFlLEdBQWYsSUFBSSxDQUFDLFVBQVUsRUFBL0IsS0FBSyxHQUFXLFdBQWUsQ0FBL0IsS0FBSyxFQUFFLElBQUksR0FBSyxXQUFlLENBQXhCLElBQUk7Z0JBRW5CLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQztvQkFDVixJQUFJLENBQUMsUUFBUSxFQUFDLEtBQU87Z0JBQ3ZCLENBQUM7Z0JBRUQsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDO29CQUNULElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBTTtnQkFDdEIsQ0FBQztnQkFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSTtZQUN0QyxDQUFDOzs7WUFFRCxHQUFXLEdBQVgsV0FBVzttQkFBWCxRQUFRLENBQVIsV0FBVyxHQUFHLENBQUM7Z0JBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUk7WUFDdkMsQ0FBQzs7O1lBRUQsR0FBYSxHQUFiLGFBQWE7bUJBQWIsUUFBUSxDQUFSLGFBQWEsR0FBRyxDQUFDO2dCQUNmLEdBQUssQ0FBZSxXQUFlLEdBQWYsSUFBSSxDQUFDLFVBQVUsRUFBM0IsT0FBTyxHQUFLLFdBQWUsQ0FBM0IsT0FBTyxFQUNQLEtBQUssR0FBSyxPQUFPLENBQWpCLEtBQUs7Z0JBRWIsTUFBTSxDQUFDLEtBQUs7WUFDZCxDQUFDOzs7WUFFRCxHQUFhLEdBQWIsYUFBYTttQkFBYixRQUFRLENBQVIsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsR0FBSyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQ3BDLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQ3RDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksR0FDOUMsY0FBYSxHQUFHLENBQUM7b0JBQ2YsWUFBWSxFQUFaLFlBQVk7b0JBQ1osYUFBYSxFQUFiLGFBQWE7b0JBQ2IsaUJBQWlCLEVBQWpCLGlCQUFpQjtnQkFDbkIsQ0FBQztnQkFFUCxNQUFNLENBQUMsY0FBYTtZQUN0QixDQUFDOzs7V0E1Q0csZUFBZTtFQUZFLEtBQU07Z0JBRXZCLGVBQWUsR0E4Q1osaUJBQWlCLEdBQUcsQ0FBQztLQUMxQixPQUFTO0FBQ1gsQ0FBQztnQkFoREcsZUFBZSxHQWtEWixpQkFBaUIsR0FBRyxDQUFDO0lBQzFCLFNBQVMsR0FBRSxTQUFXO0FBQ3hCLENBQUM7bUJBeERtQixjQUFpQixVQTJEZCxlQUFlIn0=