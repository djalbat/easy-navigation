"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _accordion = _interopRequireDefault(require("../../article/accordion"));
var _link = _interopRequireDefault(require("../../button/link"));
var _paths = require("../../paths");
var _uris = require("../../uris");
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
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var HomeAccordionArticle = /*#__PURE__*/ function(AccordionArticle) {
    _inherits(HomeAccordionArticle, AccordionArticle);
    function HomeAccordionArticle() {
        _classCallCheck(this, HomeAccordionArticle);
        return _possibleConstructorReturn(this, _getPrototypeOf(HomeAccordionArticle).apply(this, arguments));
    }
    _createClass(HomeAccordionArticle, [
        {
            key: "childElements",
            value: function childElements() {
                return(/*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("h1", null, "Home"), /*#__PURE__*/ React.createElement("ul", null, /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement(_link.default, {
                    onClick: function(event, element) {
                        return controller.showArticle(_uris.linksURI);
                    }
                }, "Links")), /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement(_link.default, {
                    onClick: function(event, element) {
                        return controller.showArticle(_uris.buttonsURI);
                    }
                }, "Buttons")), /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement(_link.default, {
                    onClick: function(event, element) {
                        return controller.showArticle(_uris.headingsURI);
                    }
                }, "Headings")))));
            }
        }
    ]);
    return HomeAccordionArticle;
}(_accordion.default);
_defineProperty(HomeAccordionArticle, "uri", _uris.homeURI);
_defineProperty(HomeAccordionArticle, "path", _paths.homePath);
_defineProperty(HomeAccordionArticle, "title", "Home");
_defineProperty(HomeAccordionArticle, "defaultProperties", {
    className: "home"
});
exports.default = HomeAccordionArticle;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2FydGljbGUvYWNjb3JkaW9uL2hvbWUuanMiXSwibmFtZXMiOlsiQWNjb3JkaW9uQXJ0aWNsZSIsIkxpbmtCdXR0b24iLCJob21lUGF0aCIsImhvbWVVUkkiLCJsaW5rc1VSSSIsImJ1dHRvbnNVUkkiLCJoZWFkaW5nc1VSSSIsIkhvbWVBY2NvcmRpb25BcnRpY2xlIiwiY2hpbGRFbGVtZW50cyIsImRpdiIsImgxIiwidWwiLCJsaSIsIm9uQ2xpY2siLCJldmVudCIsImVsZW1lbnQiLCJjb250cm9sbGVyIiwic2hvd0FydGljbGUiLCJ1cmkiLCJwYXRoIiwidGl0bGUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFaUIsR0FBeUIsQ0FBekIsVUFBeUI7QUFFL0IsR0FBbUIsQ0FBbkIsS0FBbUI7QUFFakIsR0FBYSxDQUFiLE1BQWE7QUFDcUIsR0FBWSxDQUFaLEtBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFbEQsb0JBQW9CLGlCQUExQixRQUFRO2NBQUYsb0JBQW9CO2FBQXBCLG9CQUFvQjs4QkFBcEIsb0JBQW9CO2dFQUFwQixvQkFBb0I7O2lCQUFwQixvQkFBb0I7O1lBQ3ZDLEdBQWEsRUFBYixDQUFhO21CQUFiLFFBQVEsQ0FBUixhQUFhLEdBQUcsQ0FBQztnQkFDZixNQUFNLG1DQUVILENBQUcsOENBQ0QsQ0FBRSxXQUFDLENBRUosMENBQ0MsQ0FBRSw2Q0FDQSxDQUFFLDZDQWRVLEtBQW1CO29CQWVsQixPQUFPLEVBQUUsUUFBUSxDQUFQLEtBQUssRUFBRSxPQUFPO3dCQUFLLE1BQU0sQ0FBTixVQUFVLENBQUMsV0FBVyxDQVpoQixLQUFZOzttQkFZZ0IsQ0FFM0UsNENBRUQsQ0FBRSw2Q0FuQlUsS0FBbUI7b0JBb0JsQixPQUFPLEVBQUUsUUFBUSxDQUFQLEtBQUssRUFBRSxPQUFPO3dCQUFLLE1BQU0sQ0FBTixVQUFVLENBQUMsV0FBVyxDQWpCaEIsS0FBWTs7bUJBaUJrQixDQUU3RSw4Q0FFRCxDQUFFLDZDQXhCVSxLQUFtQjtvQkF5QmxCLE9BQU8sRUFBRSxRQUFRLENBQVAsS0FBSyxFQUFFLE9BQU87d0JBQUssTUFBTSxDQUFOLFVBQVUsQ0FBQyxXQUFXLENBdEJoQixLQUFZOzttQkFzQm1CLENBRTlFO1lBTVYsQ0FBQzs7O1dBNUJrQixvQkFBb0I7RUFQWixVQUF5QjtnQkFPakMsb0JBQW9CLEVBOEJoQyxDQUFHLE1BaEMrQyxLQUFZO2dCQUVsRCxvQkFBb0IsRUFnQ2hDLENBQUksT0FuQ1ksTUFBYTtnQkFHakIsb0JBQW9CLEVBa0NoQyxDQUFLLFFBQUcsQ0FBTTtnQkFsQ0Ysb0JBQW9CLEVBb0NoQyxDQUFpQixvQkFBRyxDQUFDO0lBQzFCLFNBQVMsRUFBRSxDQUFNO0FBQ25CLENBQUM7a0JBdENrQixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEFjY29yZGlvbkFydGljbGUgZnJvbSBcIi4uLy4uL2FydGljbGUvYWNjb3JkaW9uXCI7XG5cbmltcG9ydCBMaW5rQnV0dG9uIGZyb20gXCIuLi8uLi9idXR0b24vbGlua1wiO1xuXG5pbXBvcnQgeyBob21lUGF0aCB9IGZyb20gXCIuLi8uLi9wYXRoc1wiO1xuaW1wb3J0IHsgaG9tZVVSSSwgbGlua3NVUkksIGJ1dHRvbnNVUkksIGhlYWRpbmdzVVJJIH0gZnJvbSBcIi4uLy4uL3VyaXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZUFjY29yZGlvbkFydGljbGUgZXh0ZW5kcyBBY2NvcmRpb25BcnRpY2xlIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+XG4gICAgICAgICAgSG9tZVxuICAgICAgICA8L2gxPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmtCdXR0b24gb25DbGljaz17KGV2ZW50LCBlbGVtZW50KSA9PiBjb250cm9sbGVyLnNob3dBcnRpY2xlKGxpbmtzVVJJKX0+XG4gICAgICAgICAgICAgIExpbmtzXG4gICAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGlua0J1dHRvbiBvbkNsaWNrPXsoZXZlbnQsIGVsZW1lbnQpID0+IGNvbnRyb2xsZXIuc2hvd0FydGljbGUoYnV0dG9uc1VSSSl9PlxuICAgICAgICAgICAgICBCdXR0b25zXG4gICAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGlua0J1dHRvbiBvbkNsaWNrPXsoZXZlbnQsIGVsZW1lbnQpID0+IGNvbnRyb2xsZXIuc2hvd0FydGljbGUoaGVhZGluZ3NVUkkpfT5cbiAgICAgICAgICAgICAgSGVhZGluZ3NcbiAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIHVyaSA9IGhvbWVVUkk7XG5cbiAgc3RhdGljIHBhdGggPSBob21lUGF0aDtcblxuICBzdGF0aWMgdGl0bGUgPSBcIkhvbWVcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImhvbWVcIlxuICB9O1xufVxuIl19