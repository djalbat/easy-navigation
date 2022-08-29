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
var _easyWithStyle = /*#__PURE__*/ _interopRequireDefault(require("easy-with-style"));
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
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
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
    var _super = _createSuper(AccordionButton);
    function AccordionButton() {
        _classCallCheck(this, AccordionButton);
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "clickHandler", function(event, element) {
            var _properties = _this.properties, showArticle = _properties.showArticle, Article = _properties.Article, uri = Article.uri;
            showArticle(uri);
        });
        return _this;
    }
    _createClass(AccordionButton, [
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
                var Article = this.properties.Article, title = Article.title;
                return title;
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var blurButton = this.blur.bind(this), enableButton = this.enable.bind(this), disableButton = this.disable.bind(this), isButtonDisplayed = this.isDisplayed.bind(this); ///
                return {
                    blurButton: blurButton,
                    enableButton: enableButton,
                    disableButton: disableButton,
                    isButtonDisplayed: isButtonDisplayed
                };
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
var _default = (0, _easyWithStyle.default)(AccordionButton)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idXR0b24vYWNjb3JkaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiZWFzeVwiO1xuXG5jbGFzcyBBY2NvcmRpb25CdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xuICBjbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB7IHNob3dBcnRpY2xlLCBBcnRpY2xlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgeyB1cmkgfSA9IEFydGljbGU7XG5cbiAgICBzaG93QXJ0aWNsZSh1cmkpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBmaXJzdCwgbGFzdCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgaWYgKGZpcnN0KSB7XG4gICAgICB0aGlzLmFkZENsYXNzKFwiZmlyc3RcIik7XG4gICAgfVxuXG4gICAgaWYgKGxhc3QpIHtcbiAgICAgIHRoaXMuYWRkQ2xhc3MoXCJsYXN0XCIpO1xuICAgIH1cblxuICAgIHRoaXMub25DbGljayh0aGlzLmNsaWNrSGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9mZkNsaWNrKHRoaXMuY2xpY2tIYW5kbGVyLCB0aGlzKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBBcnRpY2xlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgeyB0aXRsZSB9ID0gQXJ0aWNsZTtcblxuICAgIHJldHVybiB0aXRsZTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgYmx1ckJ1dHRvbiA9IHRoaXMuYmx1ci5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgZW5hYmxlQnV0dG9uID0gdGhpcy5lbmFibGUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGRpc2FibGVCdXR0b24gPSB0aGlzLmRpc2FibGUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGlzQnV0dG9uRGlzcGxheWVkID0gdGhpcy5pc0Rpc3BsYXllZC5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGJsdXJCdXR0b24sXG4gICAgICBlbmFibGVCdXR0b24sXG4gICAgICBkaXNhYmxlQnV0dG9uLFxuICAgICAgaXNCdXR0b25EaXNwbGF5ZWRcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIkFydGljbGVcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYWNjb3JkaW9uXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEFjY29yZGlvbkJ1dHRvbilgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNHJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7IFxuXG4gIC5maXJzdCB7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgfVxuXG4gIDpkaXNhYmxlZCB7XG4gICAgY3Vyc29yOiBhdXRvO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuYDtcbiJdLCJuYW1lcyI6WyJBY2NvcmRpb25CdXR0b24iLCJjbGlja0hhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwic2hvd0FydGljbGUiLCJBcnRpY2xlIiwidXJpIiwiZGlkTW91bnQiLCJmaXJzdCIsImxhc3QiLCJhZGRDbGFzcyIsIm9uQ2xpY2siLCJ3aWxsVW5tb3VudCIsIm9mZkNsaWNrIiwiY2hpbGRFbGVtZW50cyIsInRpdGxlIiwicGFyZW50Q29udGV4dCIsImJsdXJCdXR0b24iLCJibHVyIiwiYmluZCIsImVuYWJsZUJ1dHRvbiIsImVuYWJsZSIsImRpc2FibGVCdXR0b24iLCJkaXNhYmxlIiwiaXNCdXR0b25EaXNwbGF5ZWQiLCJpc0Rpc3BsYXllZCIsIkJ1dHRvbiIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkE4RGIsU0FpQkU7OztlQWpCRixRQWlCRTs7O2tFQTdFb0IsaUJBQWlCO29CQUVoQixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBQSxBQUFNQSxlQUFlLGlCQXdEbEIsQUF4REg7Y0FBTUEsZUFBZTs4QkFBZkEsZUFBZTthQUFmQSxlQUFlOzhCQUFmQSxlQUFlOzs7UUFDbkJDLCtDQUFBQSxjQUFZLEVBQUcsU0FBQ0MsS0FBSyxFQUFFQyxPQUFPLEVBQUs7WUFDakMsSUFBaUMsV0FBZSxHQUFmLE1BQUtDLFVBQVUsRUFBeENDLFdBQVcsR0FBYyxXQUFlLENBQXhDQSxXQUFXLEVBQUVDLE9BQU8sR0FBSyxXQUFlLENBQTNCQSxPQUFPLEVBQ3RCLEFBQUVDLEdBQUcsR0FBS0QsT0FBTyxDQUFmQyxHQUFHLEFBQVksQUFBQztZQUV4QkYsV0FBVyxDQUFDRSxHQUFHLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUEsQ0FBQTs7O2lCQU5HUCxlQUFlOztZQVFuQlEsR0FBUSxFQUFSQSxVQUFRO21CQUFSQSxTQUFBQSxRQUFRLEdBQUc7Z0JBQ1QsSUFBd0IsV0FBZSxHQUFmLElBQUksQ0FBQ0osVUFBVSxFQUEvQkssS0FBSyxHQUFXLFdBQWUsQ0FBL0JBLEtBQUssRUFBRUMsSUFBSSxHQUFLLFdBQWUsQ0FBeEJBLElBQUksQUFBcUI7Z0JBRXhDLElBQUlELEtBQUssRUFBRTtvQkFDVCxJQUFJLENBQUNFLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFFRCxJQUFJRCxJQUFJLEVBQUU7b0JBQ1IsSUFBSSxDQUFDQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3hCLENBQUM7Z0JBRUQsSUFBSSxDQUFDQyxPQUFPLENBQUMsSUFBSSxDQUFDWCxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDeEMsQ0FBQzs7O1lBRURZLEdBQVcsRUFBWEEsYUFBVzttQkFBWEEsU0FBQUEsV0FBVyxHQUFHO2dCQUNaLElBQUksQ0FBQ0MsUUFBUSxDQUFDLElBQUksQ0FBQ2IsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3pDLENBQUM7OztZQUVEYyxHQUFhLEVBQWJBLGVBQWE7bUJBQWJBLFNBQUFBLGFBQWEsR0FBRztnQkFDZCxJQUFNLEFBQUVULE9BQU8sR0FBSyxJQUFJLENBQUNGLFVBQVUsQ0FBM0JFLE9BQU8sQUFBb0IsRUFDN0IsQUFBRVUsS0FBSyxHQUFLVixPQUFPLENBQWpCVSxLQUFLLEFBQVksQUFBQztnQkFFMUIsT0FBT0EsS0FBSyxDQUFDO1lBQ2YsQ0FBQzs7O1lBRURDLEdBQWEsRUFBYkEsZUFBYTttQkFBYkEsU0FBQUEsYUFBYSxHQUFHO2dCQUNkLElBQU1DLFVBQVUsR0FBRyxJQUFJLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUNqQ0MsWUFBWSxHQUFHLElBQUksQ0FBQ0MsTUFBTSxDQUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQ3JDRyxhQUFhLEdBQUcsSUFBSSxDQUFDQyxPQUFPLENBQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsRUFDdkNLLGlCQUFpQixHQUFHLElBQUksQ0FBQ0MsV0FBVyxDQUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLEFBQUMsRUFBRSxHQUFHO2dCQUUzRCxPQUFRO29CQUNORixVQUFVLEVBQVZBLFVBQVU7b0JBQ1ZHLFlBQVksRUFBWkEsWUFBWTtvQkFDWkUsYUFBYSxFQUFiQSxhQUFhO29CQUNiRSxpQkFBaUIsRUFBakJBLGlCQUFpQjtpQkFDbEIsQ0FBRTtZQUNMLENBQUM7OztXQTdDR3pCLGVBQWU7Q0FzRHBCLENBdEQ2QjJCLEtBQU0sT0FBQSxDQXNEbkM7QUFQQyxnQkEvQ0kzQixlQUFlLEVBK0NaNEIsbUJBQWlCLEVBQUc7SUFDekIsU0FBUztDQUNWLENBQUM7QUFFRixnQkFuREk1QixlQUFlLEVBbURaNkIsbUJBQWlCLEVBQUc7SUFDekJDLFNBQVMsRUFBRSxXQUFXO0NBQ3ZCLENBQUM7SUFHSixRQWlCRSxHQWpCYUMsSUFBQUEsY0FBUyxRQUFBLEVBQUMvQixlQUFlLENBQUMifQ==