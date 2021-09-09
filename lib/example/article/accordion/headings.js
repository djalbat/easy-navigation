"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _accordion = _interopRequireDefault(require("../../article/accordion"));
var _uris = require("../../uris");
var _paths = require("../../paths");
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
var HeadingsAccordionArticle = /*#__PURE__*/ function(AccordionArticle) {
    _inherits(HeadingsAccordionArticle, AccordionArticle);
    function HeadingsAccordionArticle() {
        _classCallCheck(this, HeadingsAccordionArticle);
        return _possibleConstructorReturn(this, _getPrototypeOf(HeadingsAccordionArticle).apply(this, arguments));
    }
    _createClass(HeadingsAccordionArticle, [
        {
            key: "childElements",
            value: function childElements() {
                return(/*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("h1", null, "Headings")));
            }
        }
    ]);
    return HeadingsAccordionArticle;
}(_accordion.default);
_defineProperty(HeadingsAccordionArticle, "uri", _uris.headingsURI);
_defineProperty(HeadingsAccordionArticle, "path", _paths.headingsPath);
_defineProperty(HeadingsAccordionArticle, "title", "Headings");
_defineProperty(HeadingsAccordionArticle, "defaultProperties", {
    className: "headings"
});
exports.default = HeadingsAccordionArticle;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2FydGljbGUvYWNjb3JkaW9uL2hlYWRpbmdzLmpzIl0sIm5hbWVzIjpbIkFjY29yZGlvbkFydGljbGUiLCJoZWFkaW5nc1VSSSIsImhlYWRpbmdzUGF0aCIsIkhlYWRpbmdzQWNjb3JkaW9uQXJ0aWNsZSIsImNoaWxkRWxlbWVudHMiLCJkaXYiLCJoMSIsInVyaSIsInBhdGgiLCJ0aXRsZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVpQixHQUF5QixDQUF6QixVQUF5QjtBQUUxQixHQUFZLENBQVosS0FBWTtBQUNYLEdBQWEsQ0FBYixNQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXJCLHdCQUF3QixpQkFBOUIsUUFBUTtjQUFGLHdCQUF3QjthQUF4Qix3QkFBd0I7OEJBQXhCLHdCQUF3QjtnRUFBeEIsd0JBQXdCOztpQkFBeEIsd0JBQXdCOztZQUMzQyxHQUFhLEdBQWIsYUFBYTttQkFBYixRQUFRLENBQVIsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsTUFBTSxvQ0FFSCxHQUFHLDRDQUNELEVBQUUsVUFBQyxRQUVKO1lBSU4sQ0FBQzs7O1dBWGtCLHdCQUF3QjtFQUxoQixVQUF5QjtnQkFLakMsd0JBQXdCLEdBYXBDLEdBQUcsR0FoQmdCLEtBQVk7Z0JBR25CLHdCQUF3QixHQWVwQyxJQUFJLEdBakJnQixNQUFhO2dCQUVyQix3QkFBd0IsR0FpQnBDLEtBQUssSUFBRyxRQUFVO2dCQWpCTix3QkFBd0IsR0FtQnBDLGlCQUFpQixHQUFHLENBQUM7SUFDMUIsU0FBUyxHQUFFLFFBQVU7QUFDdkIsQ0FBQztrQkFyQmtCLHdCQUF3QiJ9