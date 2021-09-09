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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2FydGljbGUvYWNjb3JkaW9uL2hvbWUuanMiXSwibmFtZXMiOlsiQWNjb3JkaW9uQXJ0aWNsZSIsIkxpbmtCdXR0b24iLCJob21lUGF0aCIsImhvbWVVUkkiLCJsaW5rc1VSSSIsImJ1dHRvbnNVUkkiLCJoZWFkaW5nc1VSSSIsIkhvbWVBY2NvcmRpb25BcnRpY2xlIiwiY2hpbGRFbGVtZW50cyIsImRpdiIsImgxIiwidWwiLCJsaSIsIm9uQ2xpY2siLCJldmVudCIsImVsZW1lbnQiLCJjb250cm9sbGVyIiwic2hvd0FydGljbGUiLCJ1cmkiLCJwYXRoIiwidGl0bGUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFaUIsR0FBeUIsQ0FBekIsVUFBeUI7QUFFL0IsR0FBbUIsQ0FBbkIsS0FBbUI7QUFFakIsR0FBYSxDQUFiLE1BQWE7QUFDcUIsR0FBWSxDQUFaLEtBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFbEQsb0JBQW9CLGlCQUExQixRQUFRO2NBQUYsb0JBQW9CO2FBQXBCLG9CQUFvQjs4QkFBcEIsb0JBQW9CO2dFQUFwQixvQkFBb0I7O2lCQUFwQixvQkFBb0I7O1lBQ3ZDLEdBQWEsR0FBYixhQUFhO21CQUFiLFFBQVEsQ0FBUixhQUFhLEdBQUcsQ0FBQztnQkFDZixNQUFNLG9DQUVILEdBQUcsNENBQ0QsRUFBRSxVQUFDLElBRUosdUNBQ0MsRUFBRSw0Q0FDQSxFQUFFLDJDQWRVLEtBQW1CO29CQWVsQixPQUFPLEVBQUUsUUFBUSxDQUFQLEtBQUssRUFBRSxPQUFPO3dCQUFLLE1BQU0sQ0FBTixVQUFVLENBQUMsV0FBVyxDQVpoQixLQUFZOztvQkFZZ0IsS0FFM0Usd0NBRUQsRUFBRSwyQ0FuQlUsS0FBbUI7b0JBb0JsQixPQUFPLEVBQUUsUUFBUSxDQUFQLEtBQUssRUFBRSxPQUFPO3dCQUFLLE1BQU0sQ0FBTixVQUFVLENBQUMsV0FBVyxDQWpCaEIsS0FBWTs7b0JBaUJrQixPQUU3RSx3Q0FFRCxFQUFFLDJDQXhCVSxLQUFtQjtvQkF5QmxCLE9BQU8sRUFBRSxRQUFRLENBQVAsS0FBSyxFQUFFLE9BQU87d0JBQUssTUFBTSxDQUFOLFVBQVUsQ0FBQyxXQUFXLENBdEJoQixLQUFZOztvQkFzQm1CLFFBRTlFO1lBTVYsQ0FBQzs7O1dBNUJrQixvQkFBb0I7RUFQWixVQUF5QjtnQkFPakMsb0JBQW9CLEdBOEJoQyxHQUFHLEdBaEMrQyxLQUFZO2dCQUVsRCxvQkFBb0IsR0FnQ2hDLElBQUksR0FuQ1ksTUFBYTtnQkFHakIsb0JBQW9CLEdBa0NoQyxLQUFLLElBQUcsSUFBTTtnQkFsQ0Ysb0JBQW9CLEdBb0NoQyxpQkFBaUIsR0FBRyxDQUFDO0lBQzFCLFNBQVMsR0FBRSxJQUFNO0FBQ25CLENBQUM7a0JBdENrQixvQkFBb0IifQ==