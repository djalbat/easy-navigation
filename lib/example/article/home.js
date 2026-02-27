"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return HomeArticle;
    }
});
const _article = /*#__PURE__*/ _interop_require_default(require("../article"));
const _link = /*#__PURE__*/ _interop_require_default(require("../button/link"));
const _paths = require("../paths");
const _uris = require("../uris");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class HomeArticle extends _article.default {
    childElements() {
        return /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("h1", null, "Home"), /*#__PURE__*/ React.createElement("ul", null, /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement(_link.default, {
            onClick: (event, element)=>controller.showArticle(_uris.linksURI)
        }, "Links")), /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement(_link.default, {
            onClick: (event, element)=>controller.showArticle(_uris.buttonsURI)
        }, "Buttons")), /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement(_link.default, {
            onClick: (event, element)=>controller.showArticle(_uris.headingsURI)
        }, "Headings"))));
    }
    static uri = _uris.homeURI;
    static path = _paths.homePath;
    static title = "Home";
    static defaultProperties = {
        className: "home"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2FydGljbGUvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEFydGljbGUgZnJvbSBcIi4uL2FydGljbGVcIjtcblxuaW1wb3J0IExpbmtCdXR0b24gZnJvbSBcIi4uL2J1dHRvbi9saW5rXCI7XG5cbmltcG9ydCB7IGhvbWVQYXRoIH0gZnJvbSBcIi4uL3BhdGhzXCI7XG5pbXBvcnQgeyBob21lVVJJLCBsaW5rc1VSSSwgYnV0dG9uc1VSSSwgaGVhZGluZ3NVUkkgfSBmcm9tIFwiLi4vdXJpc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lQXJ0aWNsZSBleHRlbmRzIEFydGljbGUge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5cbiAgICAgICAgICBIb21lXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGlua0J1dHRvbiBvbkNsaWNrPXsoZXZlbnQsIGVsZW1lbnQpID0+IGNvbnRyb2xsZXIuc2hvd0FydGljbGUobGlua3NVUkkpfT5cbiAgICAgICAgICAgICAgTGlua3NcbiAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rQnV0dG9uIG9uQ2xpY2s9eyhldmVudCwgZWxlbWVudCkgPT4gY29udHJvbGxlci5zaG93QXJ0aWNsZShidXR0b25zVVJJKX0+XG4gICAgICAgICAgICAgIEJ1dHRvbnNcbiAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rQnV0dG9uIG9uQ2xpY2s9eyhldmVudCwgZWxlbWVudCkgPT4gY29udHJvbGxlci5zaG93QXJ0aWNsZShoZWFkaW5nc1VSSSl9PlxuICAgICAgICAgICAgICBIZWFkaW5nc1xuICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgdXJpID0gaG9tZVVSSTtcblxuICBzdGF0aWMgcGF0aCA9IGhvbWVQYXRoO1xuXG4gIHN0YXRpYyB0aXRsZSA9IFwiSG9tZVwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiaG9tZVwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiSG9tZUFydGljbGUiLCJBcnRpY2xlIiwiY2hpbGRFbGVtZW50cyIsImRpdiIsImgxIiwidWwiLCJsaSIsIkxpbmtCdXR0b24iLCJvbkNsaWNrIiwiZXZlbnQiLCJlbGVtZW50IiwiY29udHJvbGxlciIsInNob3dBcnRpY2xlIiwibGlua3NVUkkiLCJidXR0b25zVVJJIiwiaGVhZGluZ3NVUkkiLCJ1cmkiLCJob21lVVJJIiwicGF0aCIsImhvbWVQYXRoIiwidGl0bGUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFxQkE7OztnRUFQRDs2REFFRzt1QkFFRTtzQkFDa0M7Ozs7OztBQUU1QyxNQUFNQSxvQkFBb0JDLGdCQUFPO0lBQzlDQyxnQkFBZ0I7UUFDZCxxQkFFRSxvQkFBQ0MsMkJBQ0Msb0JBQUNDLFlBQUcsdUJBR0osb0JBQUNDLDBCQUNDLG9CQUFDQywwQkFDQyxvQkFBQ0MsYUFBVTtZQUFDQyxTQUFTLENBQUNDLE9BQU9DLFVBQVlDLFdBQVdDLFdBQVcsQ0FBQ0MsY0FBUTtXQUFHLHlCQUk3RSxvQkFBQ1AsMEJBQ0Msb0JBQUNDLGFBQVU7WUFBQ0MsU0FBUyxDQUFDQyxPQUFPQyxVQUFZQyxXQUFXQyxXQUFXLENBQUNFLGdCQUFVO1dBQUcsMkJBSS9FLG9CQUFDUiwwQkFDQyxvQkFBQ0MsYUFBVTtZQUFDQyxTQUFTLENBQUNDLE9BQU9DLFVBQVlDLFdBQVdDLFdBQVcsQ0FBQ0csaUJBQVc7V0FBRztJQVF4RjtJQUVBLE9BQU9DLE1BQU1DLGFBQU8sQ0FBQztJQUVyQixPQUFPQyxPQUFPQyxlQUFRLENBQUM7SUFFdkIsT0FBT0MsUUFBUSxPQUFPO0lBRXRCLE9BQU9DLG9CQUFvQjtRQUN6QkMsV0FBVztJQUNiLEVBQUU7QUFDSiJ9