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
var _accordion = /*#__PURE__*/ _interop_require_default(require("../../item/navigation/accordion"));
var _array = require("../../utilities/array");
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
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
        "\n\n  list-style-type: none;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var AccordionNavigationList = /*#__PURE__*/ function(Element) {
    _inherits(AccordionNavigationList, Element);
    function AccordionNavigationList() {
        _class_call_check(this, AccordionNavigationList);
        return _call_super(this, AccordionNavigationList, arguments);
    }
    _create_class(AccordionNavigationList, [
        {
            key: "getButtons",
            value: function getButtons() {
                var maximumDepth = 2, buttonDescendantElements = this.getDescendantElements("button", maximumDepth), buttons = buttonDescendantElements; ///
                return buttons;
            }
        },
        {
            key: "update",
            value: function update(uri) {
                var buttons = this.getButtons();
                buttons.forEach(function(button) {
                    var uriArticleURI = button.isURIArticleURI(uri);
                    if (uriArticleURI) {
                        button.disable();
                        button.blur();
                    } else {
                        button.enable();
                    }
                });
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _$AccordionNavigationItem = this.constructor.AccordionNavigationItem, _this_properties = this.properties, ArticlesArray = _this_properties.ArticlesArray, showArticle = _this_properties.showArticle, ArticlesArrayLength = ArticlesArray.length, firstIndex = 0, lastIndex = ArticlesArrayLength - 1, items = ArticlesArray.map(function(ArticleOrArticles, index) {
                    var last = index === lastIndex, first = index === firstIndex, Articles = (0, _array.guaranteeArray)(ArticleOrArticles); ///
                    return /*#__PURE__*/ React.createElement(_$AccordionNavigationItem, {
                        Articles: Articles,
                        first: first,
                        last: last,
                        showArticle: showArticle
                    });
                }), childElements = items; ///
                return childElements;
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var updateAccordionNavigation = this.update.bind(this); ///
                return {
                    updateAccordionNavigation: updateAccordionNavigation
                };
            }
        }
    ]);
    return AccordionNavigationList;
}(_wrap_native_super(_easy.Element));
_define_property(AccordionNavigationList, "AccordionNavigationItem", _accordion.default);
_define_property(AccordionNavigationList, "tagName", "ul");
_define_property(AccordionNavigationList, "defaultProperties", {
    className: "accordion-navigation"
});
var _default = (0, _easywithstyle.default)(AccordionNavigationList)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saXN0L25hdmlnYXRpb24vYWNjb3JkaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IEFjY29yZGlvbk5hdmlnYXRpb25JdGVtIGZyb20gXCIuLi8uLi9pdGVtL25hdmlnYXRpb24vYWNjb3JkaW9uXCI7XG5cbmltcG9ydCB7IGd1YXJhbnRlZUFycmF5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jbGFzcyBBY2NvcmRpb25OYXZpZ2F0aW9uTGlzdCBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRCdXR0b25zKCkge1xuICAgIGNvbnN0IG1heGltdW1EZXB0aCA9IDIsXG4gICAgICAgICAgYnV0dG9uRGVzY2VuZGFudEVsZW1lbnRzID0gdGhpcy5nZXREZXNjZW5kYW50RWxlbWVudHMoXCJidXR0b25cIiwgbWF4aW11bURlcHRoKSxcbiAgICAgICAgICBidXR0b25zID0gYnV0dG9uRGVzY2VuZGFudEVsZW1lbnRzOyAgLy8vXG5cbiAgICByZXR1cm4gYnV0dG9ucztcbiAgfVxuXG4gIHVwZGF0ZSh1cmkpIHtcbiAgICBjb25zdCBidXR0b25zID0gdGhpcy5nZXRCdXR0b25zKCk7XG5cbiAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgY29uc3QgdXJpQXJ0aWNsZVVSSSA9IGJ1dHRvbi5pc1VSSUFydGljbGVVUkkodXJpKTtcblxuICAgICAgaWYgKHVyaUFydGljbGVVUkkpIHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGUoKTtcbiAgICAgICAgYnV0dG9uLmJsdXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvbi5lbmFibGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBBY2NvcmRpb25OYXZpZ2F0aW9uSXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICB7IEFydGljbGVzQXJyYXksIHNob3dBcnRpY2xlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgQXJ0aWNsZXNBcnJheUxlbmd0aCA9IEFydGljbGVzQXJyYXkubGVuZ3RoLFxuICAgICAgICAgIGZpcnN0SW5kZXggPSAwLFxuICAgICAgICAgIGxhc3RJbmRleCA9IEFydGljbGVzQXJyYXlMZW5ndGggLSAxLFxuICAgICAgICAgIGl0ZW1zID0gQXJ0aWNsZXNBcnJheS5tYXAoKEFydGljbGVPckFydGljbGVzLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFzdCA9IChpbmRleCA9PT0gbGFzdEluZGV4KSxcbiAgICAgICAgICAgICAgICAgIGZpcnN0ID0gKGluZGV4ID09PSBmaXJzdEluZGV4KSxcbiAgICAgICAgICAgICAgICAgIEFydGljbGVzID0gZ3VhcmFudGVlQXJyYXkoQXJ0aWNsZU9yQXJ0aWNsZXMpOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICA8QWNjb3JkaW9uTmF2aWdhdGlvbkl0ZW0gQXJ0aWNsZXM9e0FydGljbGVzfSBmaXJzdD17Zmlyc3R9IGxhc3Q9e2xhc3R9IHNob3dBcnRpY2xlPXtzaG93QXJ0aWNsZX0gLz5cblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gaXRlbXM7ICAvLy9cblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCB1cGRhdGVBY2NvcmRpb25OYXZpZ2F0aW9uID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICB1cGRhdGVBY2NvcmRpb25OYXZpZ2F0aW9uXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgQWNjb3JkaW9uTmF2aWdhdGlvbkl0ZW0gPSBBY2NvcmRpb25OYXZpZ2F0aW9uSXRlbTtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwidWxcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImFjY29yZGlvbi1uYXZpZ2F0aW9uXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEFjY29yZGlvbk5hdmlnYXRpb25MaXN0KWBcblxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJBY2NvcmRpb25OYXZpZ2F0aW9uTGlzdCIsImdldEJ1dHRvbnMiLCJtYXhpbXVtRGVwdGgiLCJidXR0b25EZXNjZW5kYW50RWxlbWVudHMiLCJnZXREZXNjZW5kYW50RWxlbWVudHMiLCJidXR0b25zIiwidXBkYXRlIiwidXJpIiwiZm9yRWFjaCIsImJ1dHRvbiIsInVyaUFydGljbGVVUkkiLCJpc1VSSUFydGljbGVVUkkiLCJkaXNhYmxlIiwiYmx1ciIsImVuYWJsZSIsImNoaWxkRWxlbWVudHMiLCJBY2NvcmRpb25OYXZpZ2F0aW9uSXRlbSIsImNvbnN0cnVjdG9yIiwicHJvcGVydGllcyIsIkFydGljbGVzQXJyYXkiLCJzaG93QXJ0aWNsZSIsIkFydGljbGVzQXJyYXlMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdEluZGV4IiwibGFzdEluZGV4IiwiaXRlbXMiLCJtYXAiLCJBcnRpY2xlT3JBcnRpY2xlcyIsImluZGV4IiwibGFzdCIsImZpcnN0IiwiQXJ0aWNsZXMiLCJndWFyYW50ZWVBcnJheSIsInBhcmVudENvbnRleHQiLCJ1cGRhdGVBY2NvcmRpb25OYXZpZ2F0aW9uIiwiYmluZCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXlFQTs7O2VBQUE7OztvRUF2RXNCO29CQUVFO2dFQUVZO3FCQUVMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLElBQUEsQUFBTUEsd0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZUFBZSxHQUNmQywyQkFBMkIsSUFBSSxDQUFDQyxxQkFBcUIsQ0FBQyxVQUFVRixlQUNoRUcsVUFBVUYsMEJBQTJCLEdBQUc7Z0JBRTlDLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsR0FBRztnQkFDUixJQUFNRixVQUFVLElBQUksQ0FBQ0osVUFBVTtnQkFFL0JJLFFBQVFHLE9BQU8sQ0FBQyxTQUFDQztvQkFDZixJQUFNQyxnQkFBZ0JELE9BQU9FLGVBQWUsQ0FBQ0o7b0JBRTdDLElBQUlHLGVBQWU7d0JBQ2pCRCxPQUFPRyxPQUFPO3dCQUNkSCxPQUFPSSxJQUFJO29CQUNiLE9BQU87d0JBQ0xKLE9BQU9LLE1BQU07b0JBQ2Y7Z0JBQ0Y7WUFDRjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUVDLDRCQUE0QixJQUFJLENBQUNDLFdBQVcsQ0FBNUNELHlCQUMrQixtQkFBQSxJQUFJLENBQUNFLFVBQVUsRUFBOUNDLGdCQUErQixpQkFBL0JBLGVBQWVDLGNBQWdCLGlCQUFoQkEsYUFDakJDLHNCQUFzQkYsY0FBY0csTUFBTSxFQUMxQ0MsYUFBYSxHQUNiQyxZQUFZSCxzQkFBc0IsR0FDbENJLFFBQVFOLGNBQWNPLEdBQUcsQ0FBQyxTQUFDQyxtQkFBbUJDO29CQUM1QyxJQUFNQyxPQUFRRCxVQUFVSixXQUNsQk0sUUFBU0YsVUFBVUwsWUFDbkJRLFdBQVdDLElBQUFBLHFCQUFjLEVBQUNMLG9CQUFvQixHQUFHO29CQUV2RCxxQkFFRSxvQkFBQ1g7d0JBQXdCZSxVQUFVQTt3QkFBVUQsT0FBT0E7d0JBQU9ELE1BQU1BO3dCQUFNVCxhQUFhQTs7Z0JBR3hGLElBQ0FMLGdCQUFnQlUsT0FBUSxHQUFHO2dCQUVqQyxPQUFPVjtZQUNUOzs7WUFFQWtCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyw0QkFBNEIsSUFBSSxDQUFDNUIsTUFBTSxDQUFDNkIsSUFBSSxDQUFDLElBQUksR0FBSSxHQUFHO2dCQUU5RCxPQUFRO29CQUNORCwyQkFBQUE7Z0JBQ0Y7WUFDRjs7O1dBcERJbEM7cUJBQWdDb0MsYUFBTztBQXNEM0MsaUJBdERJcEMseUJBc0RHZ0IsMkJBQTBCQSxrQkFBdUI7QUFFeEQsaUJBeERJaEIseUJBd0RHcUMsV0FBVTtBQUVqQixpQkExRElyQyx5QkEwREdzQyxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUN4QyJ9