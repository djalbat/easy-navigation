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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2FydGljbGUvYWNjb3JkaW9uL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBY2NvcmRpb25BcnRpY2xlIGZyb20gXCIuLi8uLi9hcnRpY2xlL2FjY29yZGlvblwiO1xuXG5pbXBvcnQgTGlua0J1dHRvbiBmcm9tIFwiLi4vLi4vYnV0dG9uL2xpbmtcIjtcblxuaW1wb3J0IHsgaG9tZVBhdGggfSBmcm9tIFwiLi4vLi4vcGF0aHNcIjtcbmltcG9ydCB7IGhvbWVVUkksIGxpbmtzVVJJLCBidXR0b25zVVJJLCBoZWFkaW5nc1VSSSB9IGZyb20gXCIuLi8uLi91cmlzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWVBY2NvcmRpb25BcnRpY2xlIGV4dGVuZHMgQWNjb3JkaW9uQXJ0aWNsZSB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPlxuICAgICAgICAgIEhvbWVcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rQnV0dG9uIG9uQ2xpY2s9eyhldmVudCwgZWxlbWVudCkgPT4gY29udHJvbGxlci5zaG93QXJ0aWNsZShsaW5rc1VSSSl9PlxuICAgICAgICAgICAgICBMaW5rc1xuICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmtCdXR0b24gb25DbGljaz17KGV2ZW50LCBlbGVtZW50KSA9PiBjb250cm9sbGVyLnNob3dBcnRpY2xlKGJ1dHRvbnNVUkkpfT5cbiAgICAgICAgICAgICAgQnV0dG9uc1xuICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmtCdXR0b24gb25DbGljaz17KGV2ZW50LCBlbGVtZW50KSA9PiBjb250cm9sbGVyLnNob3dBcnRpY2xlKGhlYWRpbmdzVVJJKX0+XG4gICAgICAgICAgICAgIEhlYWRpbmdzXG4gICAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyB1cmkgPSBob21lVVJJO1xuXG4gIHN0YXRpYyBwYXRoID0gaG9tZVBhdGg7XG5cbiAgc3RhdGljIHRpdGxlID0gXCJIb21lXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJob21lXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJIb21lQWNjb3JkaW9uQXJ0aWNsZSIsImNoaWxkRWxlbWVudHMiLCJkaXYiLCJoMSIsInVsIiwibGkiLCJvbkNsaWNrIiwiZWxlbWVudCIsImV2ZW50IiwiY29udHJvbGxlciIsInNob3dBcnRpY2xlIiwidXJpIiwicGF0aCIsInRpdGxlIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRWlCLEdBQXlCLENBQXpCLFVBQXlCO0FBRS9CLEdBQW1CLENBQW5CLEtBQW1CO0FBRWpCLEdBQWEsQ0FBYixNQUFhO0FBQ3FCLEdBQVksQ0FBWixLQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWxEQSxvQkFBb0IsaUJBQTFCLFFBQVE7Y0FBRkEsb0JBQW9CO2FBQXBCQSxvQkFBb0I7OEJBQXBCQSxvQkFBb0I7Z0VBQXBCQSxvQkFBb0I7O2lCQUFwQkEsb0JBQW9COztZQUN2Q0MsR0FBYSxFQUFiQSxDQUFhO21CQUFiQSxRQUFRLENBQVJBLGFBQWEsR0FBRyxDQUFDO2dCQUNmLE1BQU0sbUNBRUhDLENBQUcsOENBQ0RDLENBQUUsV0FBQyxDQUVKLDBDQUNDQyxDQUFFLDZDQUNBQyxDQUFFLDZDQWRVLEtBQW1CO29CQWVsQkMsT0FBTyxFQUFFLFFBQVFDLENBQVBDLEtBQUssRUFBRUQsT0FBTzt3QkFBS0UsTUFBTSxDQUFOQSxVQUFVLENBQUNDLFdBQVcsQ0FaaEIsS0FBWTs7bUJBWWdCLENBRTNFLDRDQUVETCxDQUFFLDZDQW5CVSxLQUFtQjtvQkFvQmxCQyxPQUFPLEVBQUUsUUFBUUMsQ0FBUEMsS0FBSyxFQUFFRCxPQUFPO3dCQUFLRSxNQUFNLENBQU5BLFVBQVUsQ0FBQ0MsV0FBVyxDQWpCaEIsS0FBWTs7bUJBaUJrQixDQUU3RSw4Q0FFREwsQ0FBRSw2Q0F4QlUsS0FBbUI7b0JBeUJsQkMsT0FBTyxFQUFFLFFBQVFDLENBQVBDLEtBQUssRUFBRUQsT0FBTzt3QkFBS0UsTUFBTSxDQUFOQSxVQUFVLENBQUNDLFdBQVcsQ0F0QmhCLEtBQVk7O21CQXNCbUIsQ0FFOUU7WUFNVixDQUFDOzs7V0E1QmtCVixvQkFBb0I7RUFQWixVQUF5QjtnQkFPakNBLG9CQUFvQixFQThCaENXLENBQUcsTUFoQytDLEtBQVk7Z0JBRWxEWCxvQkFBb0IsRUFnQ2hDWSxDQUFJLE9BbkNZLE1BQWE7Z0JBR2pCWixvQkFBb0IsRUFrQ2hDYSxDQUFLLFFBQUcsQ0FBTTtnQkFsQ0ZiLG9CQUFvQixFQW9DaENjLENBQWlCLG9CQUFHLENBQUM7SUFDMUJDLFNBQVMsRUFBRSxDQUFNO0FBQ25CLENBQUM7a0JBdENrQmYsb0JBQW9CIn0=