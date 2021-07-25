"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _sizes = require("../../../../../Xomi/common-client/src/sizes");
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
        "\n\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  border: 1px solid black;\n  display: flex;\n  font-size: ",
        ";\n  border-top: none;\n  align-items: center;\n  padding-left: 2rem;\n  padding-right: 2rem;\n  flex-direction: row;\n  justify-content: flex-start;\n\n  .first {\n    border-top: 1px solid black;\n  }\n  \n  :disabled {\n    cursor: auto;\n    border: none;\n    font-weight: bold;\n    background-color: transparent;\n  }\n\n  :disabled:not(.last) {\n    border-bottom: 1px solid black;\n  }\n\n"
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
var _default = (0, _easyWithStyle).default(AccordionNavigationButton)(_templateObject(), _sizes.normalSize);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idXR0b24vbmF2aWdhdGlvbi9hY2NvcmRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IG5vcm1hbFNpemUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vWG9taS9jb21tb24tY2xpZW50L3NyYy9zaXplc1wiO1xuXG5jbGFzcyBBY2NvcmRpb25OYXZpZ2F0aW9uQnV0dG9uIGV4dGVuZHMgQnV0dG9uIHtcbiAgY2xpY2tIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgeyBzaG93QXJ0aWNsZSwgQXJ0aWNsZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIHVyaSA9IEFydGljbGUuZ2V0VVJJKCk7XG5cbiAgICBzaG93QXJ0aWNsZSh1cmkpO1xuICB9XG5cbiAgaXNVUklBcnRpY2xlVVJJKHVyaSkge1xuICAgIGNvbnN0IHsgQXJ0aWNsZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIHVyaUFydGljbGVVUkkgPSBBcnRpY2xlLmlzVVJJQXJ0aWNsZVVSSSh1cmkpO1xuXG4gICAgcmV0dXJuIHVyaUFydGljbGVVUkk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGZpcnN0LCBsYXN0IH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICBpZiAoZmlyc3QpIHtcbiAgICAgIHRoaXMuYWRkQ2xhc3MoXCJmaXJzdFwiKTtcbiAgICB9XG5cbiAgICBpZiAobGFzdCkge1xuICAgICAgdGhpcy5hZGRDbGFzcyhcImxhc3RcIik7XG4gICAgfVxuXG4gICAgdGhpcy5vbkNsaWNrKHRoaXMuY2xpY2tIYW5kbGVyLCB0aGlzKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmQ2xpY2sodGhpcy5jbGlja0hhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IEFydGljbGUgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICB7IHRpdGxlIH0gPSBBcnRpY2xlO1xuXG4gICAgcmV0dXJuIHRpdGxlOyAvLy9cbiAgfVxuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIkFydGljbGVcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYWNjb3JkaW9uIG5hdmlnYXRpb25cIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQWNjb3JkaW9uTmF2aWdhdGlvbkJ1dHRvbilgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAke25vcm1hbFNpemV9O1xuICBib3JkZXItdG9wOiBub25lO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblxuICAuZmlyc3Qge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbiAgfVxuICBcbiAgOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IGF1dG87XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgOmRpc2FibGVkOm5vdCgubGFzdCkge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgfVxuXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVUsR0FBaUIsQ0FBakIsY0FBaUI7QUFFaEIsR0FBTSxDQUFOLEtBQU07QUFFRixHQUE2QyxDQUE3QyxNQUE2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQW1EcEIsb0hBT3ZDO1NBQWEsOFlBdUIxQjs7Ozs7OztJQS9FTSx5QkFBeUI7Y0FBekIseUJBQXlCO2FBQXpCLHlCQUF5Qjs4QkFBekIseUJBQXlCO2dFQUF6Qix5QkFBeUI7O2lCQUF6Qix5QkFBeUI7O1lBQzdCLEdBQVksR0FBWixZQUFZOzRCQUFaLFlBQVksQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUM7Z0JBQzVCLEdBQUssQ0FBNEIsV0FBZSxRQUFWLFVBQVUsRUFBeEMsV0FBVyxHQUFjLFdBQWUsQ0FBeEMsV0FBVyxFQUFFLE9BQU8sR0FBSyxXQUFlLENBQTNCLE9BQU8sRUFDdEIsR0FBRyxHQUFHLE9BQU8sQ0FBQyxNQUFNO2dCQUUxQixXQUFXLENBQUMsR0FBRztZQUNqQixDQUFDOzs7WUFFRCxHQUFlLEdBQWYsZUFBZTs0QkFBZixlQUFlLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ3BCLEdBQUssQ0FBZSxXQUFlLFFBQVYsVUFBVSxFQUEzQixPQUFPLEdBQUssV0FBZSxDQUEzQixPQUFPLEVBQ1QsYUFBYSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsR0FBRzt1QkFFMUMsYUFBYTtZQUN0QixDQUFDOzs7WUFFRCxHQUFRLEdBQVIsUUFBUTs0QkFBUixRQUFRLEdBQUcsQ0FBQztnQkFDVixHQUFLLENBQW1CLFdBQWUsUUFBVixVQUFVLEVBQS9CLEtBQUssR0FBVyxXQUFlLENBQS9CLEtBQUssRUFBRSxJQUFJLEdBQUssV0FBZSxDQUF4QixJQUFJO2dCQUVuQixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUM7eUJBQ0wsUUFBUSxFQUFDLEtBQU87Z0JBQ3ZCLENBQUM7Z0JBRUQsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDO3lCQUNKLFFBQVEsRUFBQyxJQUFNO2dCQUN0QixDQUFDO3FCQUVJLE9BQU8sTUFBTSxZQUFZO1lBQ2hDLENBQUM7OztZQUVELEdBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVcsR0FBRyxDQUFDO3FCQUNSLFFBQVEsTUFBTSxZQUFZO1lBQ2pDLENBQUM7OztZQUVELEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWEsR0FBRyxDQUFDO2dCQUNmLEdBQUssQ0FBZSxXQUFlLFFBQVYsVUFBVSxFQUEzQixPQUFPLEdBQUssV0FBZSxDQUEzQixPQUFPLEVBQ1AsS0FBSyxHQUFLLE9BQU8sQ0FBakIsS0FBSzt1QkFFTixLQUFLLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO1lBQ25CLENBQUM7OztXQXRDRyx5QkFBeUI7RUFKUixLQUFNO2dCQUl2Qix5QkFBeUIsR0F3Q3RCLGlCQUFpQjtLQUN0QixPQUFTOztnQkF6Q1AseUJBQXlCLEdBNEN0QixpQkFBaUI7SUFDdEIsU0FBUyxHQUFFLG9CQUFzQjs7bUJBbkRmLGNBQWlCLFVBdURkLHlCQUF5QixxQkFuRHZCLE1BQTZDIn0=