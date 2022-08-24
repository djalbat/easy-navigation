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
                var blurButton = this.blur.bind(this), enableButton = this.enable.bind(this), disableButton = this.disable.bind(this), isButtonDisplayed = this.isDisplayed.bind(this), parentContext1 = {
                    blurButton: blurButton,
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
var _default = (0, _easyWithStyle.default)(AccordionButton)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idXR0b24vYWNjb3JkaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiZWFzeVwiO1xuXG5jbGFzcyBBY2NvcmRpb25CdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xuICBjbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB7IHNob3dBcnRpY2xlLCBBcnRpY2xlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgeyB1cmkgfSA9IEFydGljbGU7XG5cbiAgICBzaG93QXJ0aWNsZSh1cmkpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBmaXJzdCwgbGFzdCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgaWYgKGZpcnN0KSB7XG4gICAgICB0aGlzLmFkZENsYXNzKFwiZmlyc3RcIik7XG4gICAgfVxuXG4gICAgaWYgKGxhc3QpIHtcbiAgICAgIHRoaXMuYWRkQ2xhc3MoXCJsYXN0XCIpO1xuICAgIH1cblxuICAgIHRoaXMub25DbGljayh0aGlzLmNsaWNrSGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9mZkNsaWNrKHRoaXMuY2xpY2tIYW5kbGVyLCB0aGlzKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBBcnRpY2xlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgeyB0aXRsZSB9ID0gQXJ0aWNsZTtcblxuICAgIHJldHVybiB0aXRsZTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgYmx1ckJ1dHRvbiA9IHRoaXMuYmx1ci5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgZW5hYmxlQnV0dG9uID0gdGhpcy5lbmFibGUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGRpc2FibGVCdXR0b24gPSB0aGlzLmRpc2FibGUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGlzQnV0dG9uRGlzcGxheWVkID0gdGhpcy5pc0Rpc3BsYXllZC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgcGFyZW50Q29udGV4dCA9IHtcbiAgICAgICAgICAgIGJsdXJCdXR0b24sXG4gICAgICAgICAgICBlbmFibGVCdXR0b24sXG4gICAgICAgICAgICBkaXNhYmxlQnV0dG9uLFxuICAgICAgICAgICAgaXNCdXR0b25EaXNwbGF5ZWRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIHBhcmVudENvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJBcnRpY2xlXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImFjY29yZGlvblwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShBY2NvcmRpb25CdXR0b24pYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDRyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrOyBcblxuICAuZmlyc3Qge1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gIH1cblxuICA6ZGlzYWJsZWQge1xuICAgIGN1cnNvcjogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbmA7XG4iXSwibmFtZXMiOlsiQWNjb3JkaW9uQnV0dG9uIiwiY2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwicHJvcGVydGllcyIsInNob3dBcnRpY2xlIiwiQXJ0aWNsZSIsInVyaSIsImRpZE1vdW50IiwiZmlyc3QiLCJsYXN0IiwiYWRkQ2xhc3MiLCJvbkNsaWNrIiwid2lsbFVubW91bnQiLCJvZmZDbGljayIsImNoaWxkRWxlbWVudHMiLCJ0aXRsZSIsInBhcmVudENvbnRleHQiLCJibHVyQnV0dG9uIiwiYmx1ciIsImJpbmQiLCJlbmFibGVCdXR0b24iLCJlbmFibGUiLCJkaXNhYmxlQnV0dG9uIiwiZGlzYWJsZSIsImlzQnV0dG9uRGlzcGxheWVkIiwiaXNEaXNwbGF5ZWQiLCJCdXR0b24iLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBK0RiLFNBaUJFOzs7ZUFqQkYsUUFpQkU7OztrRUE5RW9CLGlCQUFpQjtvQkFFaEIsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQUEsQUFBTUEsZUFBZSxpQkF5RGxCLEFBekRIO2NBQU1BLGVBQWU7OEJBQWZBLGVBQWU7YUFBZkEsZUFBZTs4QkFBZkEsZUFBZTs7O1FBQ25CQywrQ0FBQUEsY0FBWSxFQUFHLFNBQUNDLEtBQUssRUFBRUMsT0FBTyxFQUFLO1lBQ2pDLElBQWlDLFdBQWUsR0FBZixNQUFLQyxVQUFVLEVBQXhDQyxXQUFXLEdBQWMsV0FBZSxDQUF4Q0EsV0FBVyxFQUFFQyxPQUFPLEdBQUssV0FBZSxDQUEzQkEsT0FBTyxFQUN0QixBQUFFQyxHQUFHLEdBQUtELE9BQU8sQ0FBZkMsR0FBRyxBQUFZLEFBQUM7WUFFeEJGLFdBQVcsQ0FBQ0UsR0FBRyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFBLENBQUE7OztpQkFOR1AsZUFBZTs7WUFRbkJRLEdBQVEsRUFBUkEsVUFBUTttQkFBUkEsU0FBQUEsUUFBUSxHQUFHO2dCQUNULElBQXdCLFdBQWUsR0FBZixJQUFJLENBQUNKLFVBQVUsRUFBL0JLLEtBQUssR0FBVyxXQUFlLENBQS9CQSxLQUFLLEVBQUVDLElBQUksR0FBSyxXQUFlLENBQXhCQSxJQUFJLEFBQXFCO2dCQUV4QyxJQUFJRCxLQUFLLEVBQUU7b0JBQ1QsSUFBSSxDQUFDRSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7Z0JBRUQsSUFBSUQsSUFBSSxFQUFFO29CQUNSLElBQUksQ0FBQ0MsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN4QixDQUFDO2dCQUVELElBQUksQ0FBQ0MsT0FBTyxDQUFDLElBQUksQ0FBQ1gsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3hDLENBQUM7OztZQUVEWSxHQUFXLEVBQVhBLGFBQVc7bUJBQVhBLFNBQUFBLFdBQVcsR0FBRztnQkFDWixJQUFJLENBQUNDLFFBQVEsQ0FBQyxJQUFJLENBQUNiLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN6QyxDQUFDOzs7WUFFRGMsR0FBYSxFQUFiQSxlQUFhO21CQUFiQSxTQUFBQSxhQUFhLEdBQUc7Z0JBQ2QsSUFBTSxBQUFFVCxPQUFPLEdBQUssSUFBSSxDQUFDRixVQUFVLENBQTNCRSxPQUFPLEFBQW9CLEVBQzdCLEFBQUVVLEtBQUssR0FBS1YsT0FBTyxDQUFqQlUsS0FBSyxBQUFZLEFBQUM7Z0JBRTFCLE9BQU9BLEtBQUssQ0FBQztZQUNmLENBQUM7OztZQUVEQyxHQUFhLEVBQWJBLGVBQWE7bUJBQWJBLFNBQUFBLGFBQWEsR0FBRztnQkFDZCxJQUFNQyxVQUFVLEdBQUcsSUFBSSxDQUFDQyxJQUFJLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFDakNDLFlBQVksR0FBRyxJQUFJLENBQUNDLE1BQU0sQ0FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUNyQ0csYUFBYSxHQUFHLElBQUksQ0FBQ0MsT0FBTyxDQUFDSixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQ3ZDSyxpQkFBaUIsR0FBRyxJQUFJLENBQUNDLFdBQVcsQ0FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUMvQ0gsY0FBYSxHQUFHO29CQUNkQyxVQUFVLEVBQVZBLFVBQVU7b0JBQ1ZHLFlBQVksRUFBWkEsWUFBWTtvQkFDWkUsYUFBYSxFQUFiQSxhQUFhO29CQUNiRSxpQkFBaUIsRUFBakJBLGlCQUFpQjtpQkFDbEIsQUFBQztnQkFFUixPQUFPUixjQUFhLENBQUM7WUFDdkIsQ0FBQzs7O1dBOUNHakIsZUFBZTtDQXVEcEIsQ0F2RDZCMkIsS0FBTSxPQUFBLENBdURuQztBQVBDLGdCQWhESTNCLGVBQWUsRUFnRFo0QixtQkFBaUIsRUFBRztJQUN6QixTQUFTO0NBQ1YsQ0FBQztBQUVGLGdCQXBESTVCLGVBQWUsRUFvRFo2QixtQkFBaUIsRUFBRztJQUN6QkMsU0FBUyxFQUFFLFdBQVc7Q0FDdkIsQ0FBQztJQUdKLFFBaUJFLEdBakJhQyxJQUFBQSxjQUFTLFFBQUEsRUFBQy9CLGVBQWUsQ0FBQyJ9