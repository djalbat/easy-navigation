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
        "\n\n  width: 100%;\n  height: 4rem;\n  cursor: pointer;\n  border: 1px solid black;\n  border-top: none;\n\n  .first {\n    border-top: 1px solid black;\n  }\n  \n  :disabled {\n    cursor: auto;\n    border: none;\n    background: none;\n    font-weight: bold;\n  }\n\n  :disabled:not(.last) {\n    border-bottom: 1px solid black;\n  }\n\n"
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
                var _properties = this.properties, showArticle = _properties.showArticle, Article = _properties.Article, uri = Article.getURI();
                showArticle(uri);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idXR0b24vbmF2aWdhdGlvbi9hY2NvcmRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJlYXN5XCI7XG5cbmNsYXNzIEFjY29yZGlvbk5hdmlnYXRpb25CdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xuICBjbGlja0hhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCB7IHNob3dBcnRpY2xlLCBBcnRpY2xlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgdXJpID0gQXJ0aWNsZS5nZXRVUkkoKTtcblxuICAgIHNob3dBcnRpY2xlKHVyaSk7XG4gIH1cblxuICBpc1VSSUFydGljbGVVUkkodXJpKSB7XG4gICAgY29uc3QgeyBBcnRpY2xlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgdXJpQXJ0aWNsZVVSSSA9IEFydGljbGUuaXNVUklBcnRpY2xlVVJJKHVyaSk7XG5cbiAgICByZXR1cm4gdXJpQXJ0aWNsZVVSSTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZmlyc3QsIGxhc3QgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIGlmIChmaXJzdCkge1xuICAgICAgdGhpcy5hZGRDbGFzcyhcImZpcnN0XCIpO1xuICAgIH1cblxuICAgIGlmIChsYXN0KSB7XG4gICAgICB0aGlzLmFkZENsYXNzKFwibGFzdFwiKTtcbiAgICB9XG5cbiAgICB0aGlzLm9uQ2xpY2sodGhpcy5jbGlja0hhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZDbGljayh0aGlzLmNsaWNrSGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgQXJ0aWNsZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIHsgdGl0bGUgfSA9IEFydGljbGU7XG5cbiAgICByZXR1cm4gdGl0bGU7IC8vL1xuICB9XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwiQXJ0aWNsZVwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJhY2NvcmRpb24gbmF2aWdhdGlvblwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShBY2NvcmRpb25OYXZpZ2F0aW9uQnV0dG9uKWBcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItdG9wOiBub25lO1xuXG4gIC5maXJzdCB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xuICB9XG4gIFxuICA6ZGlzYWJsZWQge1xuICAgIGN1cnNvcjogYXV0bztcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIDpkaXNhYmxlZDpub3QoLmxhc3QpIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIH1cblxuYDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVVLEdBQWlCLENBQWpCLGNBQWlCO0FBRWhCLEdBQU0sQ0FBTixLQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBbUR1QixvVkF1QnBEOzs7Ozs7O0lBeEVNLHlCQUF5QjtjQUF6Qix5QkFBeUI7YUFBekIseUJBQXlCOzhCQUF6Qix5QkFBeUI7Z0VBQXpCLHlCQUF5Qjs7aUJBQXpCLHlCQUF5Qjs7WUFDN0IsR0FBWSxHQUFaLFlBQVk7NEJBQVosWUFBWSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQztnQkFDNUIsR0FBSyxDQUE0QixXQUFlLFFBQVYsVUFBVSxFQUF4QyxXQUFXLEdBQWMsV0FBZSxDQUF4QyxXQUFXLEVBQUUsT0FBTyxHQUFLLFdBQWUsQ0FBM0IsT0FBTyxFQUN0QixHQUFHLEdBQUcsT0FBTyxDQUFDLE1BQU07Z0JBRTFCLFdBQVcsQ0FBQyxHQUFHO1lBQ2pCLENBQUM7OztZQUVELEdBQWUsR0FBZixlQUFlOzRCQUFmLGVBQWUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDcEIsR0FBSyxDQUFlLFdBQWUsUUFBVixVQUFVLEVBQTNCLE9BQU8sR0FBSyxXQUFlLENBQTNCLE9BQU8sRUFDVCxhQUFhLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxHQUFHO3VCQUUxQyxhQUFhO1lBQ3RCLENBQUM7OztZQUVELEdBQVEsR0FBUixRQUFROzRCQUFSLFFBQVEsR0FBRyxDQUFDO2dCQUNWLEdBQUssQ0FBbUIsV0FBZSxRQUFWLFVBQVUsRUFBL0IsS0FBSyxHQUFXLFdBQWUsQ0FBL0IsS0FBSyxFQUFFLElBQUksR0FBSyxXQUFlLENBQXhCLElBQUk7Z0JBRW5CLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQzt5QkFDTCxRQUFRLEVBQUMsS0FBTztnQkFDdkIsQ0FBQztnQkFFRCxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUM7eUJBQ0osUUFBUSxFQUFDLElBQU07Z0JBQ3RCLENBQUM7cUJBRUksT0FBTyxNQUFNLFlBQVk7WUFDaEMsQ0FBQzs7O1lBRUQsR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVyxHQUFHLENBQUM7cUJBQ1IsUUFBUSxNQUFNLFlBQVk7WUFDakMsQ0FBQzs7O1lBRUQsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsR0FBSyxDQUFlLFdBQWUsUUFBVixVQUFVLEVBQTNCLE9BQU8sR0FBSyxXQUFlLENBQTNCLE9BQU8sRUFDUCxLQUFLLEdBQUssT0FBTyxDQUFqQixLQUFLO3VCQUVOLEtBQUssQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7WUFDbkIsQ0FBQzs7O1dBdENHLHlCQUF5QjtFQUZSLEtBQU07Z0JBRXZCLHlCQUF5QixHQXdDdEIsaUJBQWlCO0tBQ3RCLE9BQVM7O2dCQXpDUCx5QkFBeUIsR0E0Q3RCLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsb0JBQXNCOzttQkFqRGYsY0FBaUIsVUFxRGQseUJBQXlCIn0=