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
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
function _templateObject() {
    var data = _tagged_template_literal([
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
        _class_call_check(this, AccordionButton);
        var _this;
        _this = _call_super(this, AccordionButton, arguments), _define_property(_this, "clickHandler", function(event, element) {
            var _this_properties = _this.properties, showArticle = _this_properties.showArticle, Article = _this_properties.Article, uri = Article.uri;
            showArticle(uri);
        });
        return _this;
    }
    _create_class(AccordionButton, [
        {
            key: "didMount",
            value: function didMount() {
                var _this_properties = this.properties, first = _this_properties.first, last = _this_properties.last;
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
_define_property(AccordionButton, "ignoredProperties", [
    "Article"
]);
_define_property(AccordionButton, "defaultProperties", {
    className: "accordion"
});
var _default = (0, _easywithstyle.default)(AccordionButton)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idXR0b24vYWNjb3JkaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiZWFzeVwiO1xuXG5jbGFzcyBBY2NvcmRpb25CdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xuICBjbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB7IHNob3dBcnRpY2xlLCBBcnRpY2xlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgeyB1cmkgfSA9IEFydGljbGU7XG5cbiAgICBzaG93QXJ0aWNsZSh1cmkpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBmaXJzdCwgbGFzdCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgaWYgKGZpcnN0KSB7XG4gICAgICB0aGlzLmFkZENsYXNzKFwiZmlyc3RcIik7XG4gICAgfVxuXG4gICAgaWYgKGxhc3QpIHtcbiAgICAgIHRoaXMuYWRkQ2xhc3MoXCJsYXN0XCIpO1xuICAgIH1cblxuICAgIHRoaXMub25DbGljayh0aGlzLmNsaWNrSGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9mZkNsaWNrKHRoaXMuY2xpY2tIYW5kbGVyLCB0aGlzKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBBcnRpY2xlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgeyB0aXRsZSB9ID0gQXJ0aWNsZTtcblxuICAgIHJldHVybiB0aXRsZTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgYmx1ckJ1dHRvbiA9IHRoaXMuYmx1ci5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgZW5hYmxlQnV0dG9uID0gdGhpcy5lbmFibGUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGRpc2FibGVCdXR0b24gPSB0aGlzLmRpc2FibGUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGlzQnV0dG9uRGlzcGxheWVkID0gdGhpcy5pc0Rpc3BsYXllZC5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGJsdXJCdXR0b24sXG4gICAgICBlbmFibGVCdXR0b24sXG4gICAgICBkaXNhYmxlQnV0dG9uLFxuICAgICAgaXNCdXR0b25EaXNwbGF5ZWRcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIkFydGljbGVcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYWNjb3JkaW9uXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEFjY29yZGlvbkJ1dHRvbilgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNHJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7IFxuXG4gIC5maXJzdCB7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgfVxuXG4gIDpkaXNhYmxlZCB7XG4gICAgY3Vyc29yOiBhdXRvO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuYDtcbiJdLCJuYW1lcyI6WyJBY2NvcmRpb25CdXR0b24iLCJjbGlja0hhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwic2hvd0FydGljbGUiLCJBcnRpY2xlIiwidXJpIiwiZGlkTW91bnQiLCJmaXJzdCIsImxhc3QiLCJhZGRDbGFzcyIsIm9uQ2xpY2siLCJ3aWxsVW5tb3VudCIsIm9mZkNsaWNrIiwiY2hpbGRFbGVtZW50cyIsInRpdGxlIiwicGFyZW50Q29udGV4dCIsImJsdXJCdXR0b24iLCJibHVyIiwiYmluZCIsImVuYWJsZUJ1dHRvbiIsImVuYWJsZSIsImRpc2FibGVCdXR0b24iLCJkaXNhYmxlIiwiaXNCdXR0b25EaXNwbGF5ZWQiLCJpc0Rpc3BsYXllZCIsIkJ1dHRvbiIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQThEQTs7O2VBQUE7OztvRUE1RHNCO29CQUVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkIsSUFBQSxBQUFNQSxnQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7O2dCQUFOLGtCQUFNQSw2QkFDSkMsd0JBQUFBLGdCQUFlLFNBQUNDLE9BQU9DO1lBQ3JCLElBQWlDLG1CQUFBLE1BQUtDLFVBQVUsRUFBeENDLGNBQXlCLGlCQUF6QkEsYUFBYUMsVUFBWSxpQkFBWkEsU0FDZixBQUFFQyxNQUFRRCxRQUFSQztZQUVSRixZQUFZRTtRQUNkOzs7a0JBTklQOztZQVFKUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBd0IsbUJBQUEsSUFBSSxDQUFDSixVQUFVLEVBQS9CSyxRQUFnQixpQkFBaEJBLE9BQU9DLE9BQVMsaUJBQVRBO2dCQUVmLElBQUlELE9BQU87b0JBQ1QsSUFBSSxDQUFDRSxRQUFRLENBQUM7Z0JBQ2hCO2dCQUVBLElBQUlELE1BQU07b0JBQ1IsSUFBSSxDQUFDQyxRQUFRLENBQUM7Z0JBQ2hCO2dCQUVBLElBQUksQ0FBQ0MsT0FBTyxDQUFDLElBQUksQ0FBQ1gsWUFBWSxFQUFFLElBQUk7WUFDdEM7OztZQUVBWSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxRQUFRLENBQUMsSUFBSSxDQUFDYixZQUFZLEVBQUUsSUFBSTtZQUN2Qzs7O1lBRUFjLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUVULFVBQVksSUFBSSxDQUFDRixVQUFVLENBQTNCRSxTQUNGLEFBQUVVLFFBQVVWLFFBQVZVO2dCQUVSLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYSxJQUFJLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxDQUFDLElBQUksR0FDaENDLGVBQWUsSUFBSSxDQUFDQyxNQUFNLENBQUNGLElBQUksQ0FBQyxJQUFJLEdBQ3BDRyxnQkFBZ0IsSUFBSSxDQUFDQyxPQUFPLENBQUNKLElBQUksQ0FBQyxJQUFJLEdBQ3RDSyxvQkFBb0IsSUFBSSxDQUFDQyxXQUFXLENBQUNOLElBQUksQ0FBQyxJQUFJLEdBQUksR0FBRztnQkFFM0QsT0FBUTtvQkFDTkYsWUFBQUE7b0JBQ0FHLGNBQUFBO29CQUNBRSxlQUFBQTtvQkFDQUUsbUJBQUFBO2dCQUNGO1lBQ0Y7OztXQTdDSXpCO0VBQXdCMkIsWUFBTTtBQStDbEMsaUJBL0NJM0IsaUJBK0NHNEIscUJBQW9CO0lBQ3pCO0NBQ0Q7QUFFRCxpQkFuREk1QixpQkFtREc2QixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUMvQiJ9