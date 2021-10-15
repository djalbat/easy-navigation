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
        "\n\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  border: 1px solid black;\n  border-top: none;\n\n  .first {\n    border-top: 1px solid black;\n  }\n  \n  :disabled {\n    cursor: auto;\n    border: none;\n    background: none;\n    font-weight: bold;\n  }\n\n  :disabled:not(.last) {\n    border-bottom: 1px solid black;\n  }\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var AccordionNavigationButton = /*#__PURE__*/ function(Button) {
    _inherits(AccordionNavigationButton, Button);
    function AccordionNavigationButton() {
        _classCallCheck(this, AccordionNavigationButton);
        return _possibleConstructorReturn(this, _getPrototypeOf(AccordionNavigationButton).apply(this, arguments));
    }
    _createClass(AccordionNavigationButton, [
        {
            key: "clickHandler",
            value: function clickHandler(event, element) {
                var _properties = this.properties, showArticle = _properties.showArticle, Article = _properties.Article, uri = Article.getURI(), instantly = true;
                showArticle(uri, instantly);
            }
        },
        {
            key: "isURIArticleURI",
            value: function isURIArticleURI(uri) {
                var _properties = this.properties, Article = _properties.Article, uriArticleURI = Article.isURIArticleURI(uri);
                return uriArticleURI;
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
                return title; ///
            }
        }
    ]);
    return AccordionNavigationButton;
}(_easy.Button);
_defineProperty(AccordionNavigationButton, "ignoredProperties", [
    "Article"
]);
_defineProperty(AccordionNavigationButton, "defaultProperties", {
    className: "accordion navigation"
});
var _default = (0, _easyWithStyle).default(AccordionNavigationButton)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idXR0b24vbmF2aWdhdGlvbi9hY2NvcmRpb24uanMiXSwibmFtZXMiOlsid2l0aFN0eWxlIiwiQnV0dG9uIiwiQWNjb3JkaW9uTmF2aWdhdGlvbkJ1dHRvbiIsImNsaWNrSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInNob3dBcnRpY2xlIiwiQXJ0aWNsZSIsInByb3BlcnRpZXMiLCJ1cmkiLCJnZXRVUkkiLCJpbnN0YW50bHkiLCJpc1VSSUFydGljbGVVUkkiLCJ1cmlBcnRpY2xlVVJJIiwiZGlkTW91bnQiLCJmaXJzdCIsImxhc3QiLCJhZGRDbGFzcyIsIm9uQ2xpY2siLCJ3aWxsVW5tb3VudCIsIm9mZkNsaWNrIiwiY2hpbGRFbGVtZW50cyIsInRpdGxlIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFpQixDQUFqQixjQUFpQjtBQUVoQixHQUFNLENBQU4sS0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQW9EdUIsQ0F1QnBEOzs7Ozs7O0lBekVNLHlCQUF5QixpQkFBL0IsUUFBUTtjQUFGLHlCQUF5QjthQUF6Qix5QkFBeUI7OEJBQXpCLHlCQUF5QjtnRUFBekIseUJBQXlCOztpQkFBekIseUJBQXlCOztZQUM3QixHQUFZLEVBQVosQ0FBWTttQkFBWixRQUFRLENBQVIsWUFBWSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQztnQkFDNUIsR0FBSyxDQUE0QixXQUFlLEdBQWYsSUFBSSxDQUFDLFVBQVUsRUFBeEMsV0FBVyxHQUFjLFdBQWUsQ0FBeEMsV0FBVyxFQUFFLE9BQU8sR0FBSyxXQUFlLENBQTNCLE9BQU8sRUFDdEIsR0FBRyxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQ3BCLFNBQVMsR0FBRyxJQUFJO2dCQUV0QixXQUFXLENBQUMsR0FBRyxFQUFFLFNBQVM7WUFDNUIsQ0FBQzs7O1lBRUQsR0FBZSxFQUFmLENBQWU7bUJBQWYsUUFBUSxDQUFSLGVBQWUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDcEIsR0FBSyxDQUFlLFdBQWUsR0FBZixJQUFJLENBQUMsVUFBVSxFQUEzQixPQUFPLEdBQUssV0FBZSxDQUEzQixPQUFPLEVBQ1QsYUFBYSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsR0FBRztnQkFFakQsTUFBTSxDQUFDLGFBQWE7WUFDdEIsQ0FBQzs7O1lBRUQsR0FBUSxFQUFSLENBQVE7bUJBQVIsUUFBUSxDQUFSLFFBQVEsR0FBRyxDQUFDO2dCQUNWLEdBQUssQ0FBbUIsV0FBZSxHQUFmLElBQUksQ0FBQyxVQUFVLEVBQS9CLEtBQUssR0FBVyxXQUFlLENBQS9CLEtBQUssRUFBRSxJQUFJLEdBQUssV0FBZSxDQUF4QixJQUFJO2dCQUVuQixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUM7b0JBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFPO2dCQUN2QixDQUFDO2dCQUVELEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQztvQkFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQU07Z0JBQ3RCLENBQUM7Z0JBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUk7WUFDdEMsQ0FBQzs7O1lBRUQsR0FBVyxFQUFYLENBQVc7bUJBQVgsUUFBUSxDQUFSLFdBQVcsR0FBRyxDQUFDO2dCQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJO1lBQ3ZDLENBQUM7OztZQUVELEdBQWEsRUFBYixDQUFhO21CQUFiLFFBQVEsQ0FBUixhQUFhLEdBQUcsQ0FBQztnQkFDZixHQUFLLENBQWUsV0FBZSxHQUFmLElBQUksQ0FBQyxVQUFVLEVBQTNCLE9BQU8sR0FBSyxXQUFlLENBQTNCLE9BQU8sRUFDUCxLQUFLLEdBQUssT0FBTyxDQUFqQixLQUFLO2dCQUViLE1BQU0sQ0FBQyxLQUFLLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO1lBQ25CLENBQUM7OztXQXZDRyx5QkFBeUI7RUFGUixLQUFNO2dCQUV2Qix5QkFBeUIsRUF5Q3RCLENBQWlCLG9CQUFHLENBQUM7SUFDMUIsQ0FBUztBQUNYLENBQUM7Z0JBM0NHLHlCQUF5QixFQTZDdEIsQ0FBaUIsb0JBQUcsQ0FBQztJQUMxQixTQUFTLEVBQUUsQ0FBc0I7QUFDbkMsQ0FBQzttQkFuRG1CLGNBQWlCLFVBc0RkLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiZWFzeVwiO1xuXG5jbGFzcyBBY2NvcmRpb25OYXZpZ2F0aW9uQnV0dG9uIGV4dGVuZHMgQnV0dG9uIHtcbiAgY2xpY2tIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgeyBzaG93QXJ0aWNsZSwgQXJ0aWNsZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIHVyaSA9IEFydGljbGUuZ2V0VVJJKCksXG4gICAgICAgICAgaW5zdGFudGx5ID0gdHJ1ZTtcblxuICAgIHNob3dBcnRpY2xlKHVyaSwgaW5zdGFudGx5KTtcbiAgfVxuXG4gIGlzVVJJQXJ0aWNsZVVSSSh1cmkpIHtcbiAgICBjb25zdCB7IEFydGljbGUgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICB1cmlBcnRpY2xlVVJJID0gQXJ0aWNsZS5pc1VSSUFydGljbGVVUkkodXJpKTtcblxuICAgIHJldHVybiB1cmlBcnRpY2xlVVJJO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBmaXJzdCwgbGFzdCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgaWYgKGZpcnN0KSB7XG4gICAgICB0aGlzLmFkZENsYXNzKFwiZmlyc3RcIik7XG4gICAgfVxuXG4gICAgaWYgKGxhc3QpIHtcbiAgICAgIHRoaXMuYWRkQ2xhc3MoXCJsYXN0XCIpO1xuICAgIH1cblxuICAgIHRoaXMub25DbGljayh0aGlzLmNsaWNrSGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9mZkNsaWNrKHRoaXMuY2xpY2tIYW5kbGVyLCB0aGlzKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBBcnRpY2xlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgeyB0aXRsZSB9ID0gQXJ0aWNsZTtcblxuICAgIHJldHVybiB0aXRsZTsgLy8vXG4gIH1cblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJBcnRpY2xlXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImFjY29yZGlvbiBuYXZpZ2F0aW9uXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEFjY29yZGlvbk5hdmlnYXRpb25CdXR0b24pYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci10b3A6IG5vbmU7XG5cbiAgLmZpcnN0IHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XG4gIH1cbiAgXG4gIDpkaXNhYmxlZCB7XG4gICAgY3Vyc29yOiBhdXRvO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgOmRpc2FibGVkOm5vdCgubGFzdCkge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgfVxuXG5gO1xuIl19