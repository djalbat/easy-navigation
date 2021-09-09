"use strict";
require("./example/preamble");
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _sufficient = require("sufficient");
var _view = _interopRequireDefault(require("./example/view"));
var _createMethods = _interopRequireDefault(require("./example/createMethods"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var renderStyles = _easyWithStyle.default.renderStyles;
var body = new _easy.Body(), view = /*#__PURE__*/ React.createElement(_view.default, null), model = null, scheduler = null;
_sufficient.controller.assignMethods(_createMethods.default, scheduler, model, view);
window.onpopstate = popStateHandler;
renderStyles();
body.mount(view);
popStateHandler();
function popStateHandler(event) {
    var location = document.location, pathname = location.pathname, uri = pathname, instantly = true, updateHistory = false;
    _sufficient.controller.showArticle(uri, instantly, updateHistory);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sIm5hbWVzIjpbIndpdGhTdHlsZSIsIkJvZHkiLCJjb250cm9sbGVyIiwiVmlldyIsImNyZWF0ZU1ldGhvZHMiLCJyZW5kZXJTdHlsZXMiLCJib2R5IiwidmlldyIsIm1vZGVsIiwic2NoZWR1bGVyIiwiYXNzaWduTWV0aG9kcyIsIndpbmRvdyIsIm9ucG9wc3RhdGUiLCJwb3BTdGF0ZUhhbmRsZXIiLCJtb3VudCIsImV2ZW50IiwibG9jYXRpb24iLCJkb2N1bWVudCIsInBhdGhuYW1lIiwidXJpIiwiaW5zdGFudGx5IiwidXBkYXRlSGlzdG9yeSIsInNob3dBcnRpY2xlIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOztBQUlVLEdBQWlCLENBQWpCLGNBQWlCO0FBRWxCLEdBQU0sQ0FBTixLQUFNO0FBQ0EsR0FBWSxDQUFaLFdBQVk7QUFFdEIsR0FBZ0IsQ0FBaEIsS0FBZ0I7QUFDUCxHQUF5QixDQUF6QixjQUF5Qjs7Ozs7O0FBRW5ELEdBQUssQ0FBRyxZQUFZLEdBUkUsY0FBaUIsU0FRL0IsWUFBWTtBQUVwQixHQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FSSyxLQUFNLFNBU3JCLElBQUkscUNBTk8sS0FBZ0IsaUJBVzNCLEtBQUssR0FBRyxJQUFJLEVBQ1osU0FBUyxHQUFHLElBQUk7QUFkSyxXQUFZLFlBZ0I1QixhQUFhLENBYkUsY0FBeUIsVUFhWCxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUk7QUFFOUQsTUFBTSxDQUFDLFVBQVUsR0FBRyxlQUFlO0FBRW5DLFlBQVk7QUFFWixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7QUFFZixlQUFlO1NBRU4sZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQy9CLEdBQUssQ0FBRyxRQUFRLEdBQUssUUFBUSxDQUFyQixRQUFRLEVBQ1IsUUFBUSxHQUFLLFFBQVEsQ0FBckIsUUFBUSxFQUNWLEdBQUcsR0FBRyxRQUFRLEVBQ2QsU0FBUyxHQUFHLElBQUksRUFDaEIsYUFBYSxHQUFHLEtBQUs7SUEvQkYsV0FBWSxZQWlDMUIsV0FBVyxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsYUFBYTtBQUN0RCxDQUFDIn0=