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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  border: 1px solid black;\n  border-top: none;\n\n  .first {\n    border-top: 1px solid black;\n  }\n  \n  :disabled {\n    cursor: auto;\n    border: none;\n    background: none;\n    font-weight: bold;\n  }\n\n  :disabled:not(.last) {\n    border-bottom: 1px solid black;\n  }\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var AccordionNavigationButton = /*#__PURE__*/ function(Button) {
    _inherits(AccordionNavigationButton, Button);
    var _super = _create_super(AccordionNavigationButton);
    function AccordionNavigationButton() {
        _class_call_check(this, AccordionNavigationButton);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "clickHandler", function(event, element) {
            var _this_properties = _this.properties, showArticle = _this_properties.showArticle, Article = _this_properties.Article, uri = Article.uri, instantly = true;
            showArticle(uri, instantly);
        });
        return _this;
    }
    _create_class(AccordionNavigationButton, [
        {
            key: "isURIArticleURI",
            value: function isURIArticleURI(uri) {
                var Article = this.properties.Article, path = Article.path, uriArticleURI = path.test(uri);
                return uriArticleURI;
            }
        },
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
                return title; ///
            }
        }
    ]);
    return AccordionNavigationButton;
}(_easy.Button);
_define_property(AccordionNavigationButton, "ignoredProperties", [
    "Article"
]);
_define_property(AccordionNavigationButton, "defaultProperties", {
    className: "accordion-navigation"
});
var _default = (0, _easywithstyle.default)(AccordionNavigationButton)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idXR0b24vbmF2aWdhdGlvbi9hY2NvcmRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJlYXN5XCI7XG5cbmNsYXNzIEFjY29yZGlvbk5hdmlnYXRpb25CdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xuICBjbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB7IHNob3dBcnRpY2xlLCBBcnRpY2xlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgeyB1cmkgfSA9IEFydGljbGUsXG4gICAgICAgICAgaW5zdGFudGx5ID0gdHJ1ZTtcblxuICAgIHNob3dBcnRpY2xlKHVyaSwgaW5zdGFudGx5KTtcbiAgfVxuXG4gIGlzVVJJQXJ0aWNsZVVSSSh1cmkpIHtcbiAgICBjb25zdCB7IEFydGljbGUgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICB7IHBhdGggfSA9IEFydGljbGUsXG4gICAgICAgICAgdXJpQXJ0aWNsZVVSSSA9IHBhdGgudGVzdCh1cmkpO1xuXG4gICAgcmV0dXJuIHVyaUFydGljbGVVUkk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGZpcnN0LCBsYXN0IH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICBpZiAoZmlyc3QpIHtcbiAgICAgIHRoaXMuYWRkQ2xhc3MoXCJmaXJzdFwiKTtcbiAgICB9XG5cbiAgICBpZiAobGFzdCkge1xuICAgICAgdGhpcy5hZGRDbGFzcyhcImxhc3RcIik7XG4gICAgfVxuXG4gICAgdGhpcy5vbkNsaWNrKHRoaXMuY2xpY2tIYW5kbGVyLCB0aGlzKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmQ2xpY2sodGhpcy5jbGlja0hhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IEFydGljbGUgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICB7IHRpdGxlIH0gPSBBcnRpY2xlO1xuXG4gICAgcmV0dXJuIHRpdGxlOyAvLy9cbiAgfVxuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIkFydGljbGVcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYWNjb3JkaW9uLW5hdmlnYXRpb25cIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQWNjb3JkaW9uTmF2aWdhdGlvbkJ1dHRvbilgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXRvcDogbm9uZTtcblxuICAuZmlyc3Qge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbiAgfVxuICBcbiAgOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IGF1dG87XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICA6ZGlzYWJsZWQ6bm90KC5sYXN0KSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICB9XG5cbmA7XG4iXSwibmFtZXMiOlsiQWNjb3JkaW9uTmF2aWdhdGlvbkJ1dHRvbiIsImNsaWNrSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInByb3BlcnRpZXMiLCJzaG93QXJ0aWNsZSIsIkFydGljbGUiLCJ1cmkiLCJpbnN0YW50bHkiLCJpc1VSSUFydGljbGVVUkkiLCJwYXRoIiwidXJpQXJ0aWNsZVVSSSIsInRlc3QiLCJkaWRNb3VudCIsImZpcnN0IiwibGFzdCIsImFkZENsYXNzIiwib25DbGljayIsIndpbGxVbm1vdW50Iiwib2ZmQ2xpY2siLCJjaGlsZEVsZW1lbnRzIiwidGl0bGUiLCJCdXR0b24iLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF5REE7OztlQUFBOzs7b0VBdkRzQjtvQkFFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZCLElBQUEsQUFBTUEsMENBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7UUFDSkMsa0RBQUFBLGdCQUFlLFNBQUNDLE9BQU9DO1lBQ3JCLElBQWlDLG1CQUFBLE1BQUtDLFVBQVUsRUFBeENDLGNBQXlCLGlCQUF6QkEsYUFBYUMsVUFBWSxpQkFBWkEsU0FDZixBQUFFQyxNQUFRRCxRQUFSQyxLQUNGQyxZQUFZO1lBRWxCSCxZQUFZRSxLQUFLQztRQUNuQjs7O2tCQVBJUjs7WUFTSlMsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQkYsR0FBRztnQkFDakIsSUFBTSxBQUFFRCxVQUFZLElBQUksQ0FBQ0YsVUFBVSxDQUEzQkUsU0FDRixBQUFFSSxPQUFTSixRQUFUSSxNQUNGQyxnQkFBZ0JELEtBQUtFLElBQUksQ0FBQ0w7Z0JBRWhDLE9BQU9JO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBd0IsbUJBQUEsSUFBSSxDQUFDVCxVQUFVLEVBQS9CVSxRQUFnQixpQkFBaEJBLE9BQU9DLE9BQVMsaUJBQVRBO2dCQUVmLElBQUlELE9BQU87b0JBQ1QsSUFBSSxDQUFDRSxRQUFRLENBQUM7Z0JBQ2hCO2dCQUVBLElBQUlELE1BQU07b0JBQ1IsSUFBSSxDQUFDQyxRQUFRLENBQUM7Z0JBQ2hCO2dCQUVBLElBQUksQ0FBQ0MsT0FBTyxDQUFDLElBQUksQ0FBQ2hCLFlBQVksRUFBRSxJQUFJO1lBQ3RDOzs7WUFFQWlCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLFFBQVEsQ0FBQyxJQUFJLENBQUNsQixZQUFZLEVBQUUsSUFBSTtZQUN2Qzs7O1lBRUFtQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTSxBQUFFZCxVQUFZLElBQUksQ0FBQ0YsVUFBVSxDQUEzQkUsU0FDRixBQUFFZSxRQUFVZixRQUFWZTtnQkFFUixPQUFPQSxPQUFPLEdBQUc7WUFDbkI7OztXQXhDSXJCO0VBQWtDc0IsWUFBTTtBQTBDNUMsaUJBMUNJdEIsMkJBMENHdUIscUJBQW9CO0lBQ3pCO0NBQ0Q7QUFFRCxpQkE5Q0l2QiwyQkE4Q0d3QixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUMxQiJ9