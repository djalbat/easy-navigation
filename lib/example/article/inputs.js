"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return InputsArticle;
    }
});
const _article = /*#__PURE__*/ _interop_require_default(require("../article"));
const _uris = require("../uris");
const _paths = require("../paths");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class InputsArticle extends _article.default {
    childElements() {
        return /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("h1", null, "Inputs"));
    }
    static uri = _uris.inputsURI;
    static path = _paths.inputsPath;
    static title = "Inputs";
    static defaultProperties = {
        className: "inputs"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2FydGljbGUvaW5wdXRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXJ0aWNsZSBmcm9tIFwiLi4vYXJ0aWNsZVwiO1xuXG5pbXBvcnQgeyBpbnB1dHNVUkkgfSBmcm9tIFwiLi4vdXJpc1wiO1xuaW1wb3J0IHsgaW5wdXRzUGF0aCB9IGZyb20gXCIuLi9wYXRoc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dHNBcnRpY2xlIGV4dGVuZHMgQXJ0aWNsZSB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPlxuICAgICAgICAgIElucHV0c1xuICAgICAgICA8L2gxPlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIHVyaSA9IGlucHV0c1VSSTtcblxuICBzdGF0aWMgcGF0aCA9IGlucHV0c1BhdGg7XG5cbiAgc3RhdGljIHRpdGxlID0gXCJJbnB1dHNcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImlucHV0c1wiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiSW5wdXRzQXJ0aWNsZSIsIkFydGljbGUiLCJjaGlsZEVsZW1lbnRzIiwiZGl2IiwiaDEiLCJ1cmkiLCJpbnB1dHNVUkkiLCJwYXRoIiwiaW5wdXRzUGF0aCIsInRpdGxlIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBcUJBOzs7Z0VBTEQ7c0JBRU07dUJBQ0M7Ozs7OztBQUVaLE1BQU1BLHNCQUFzQkMsZ0JBQU87SUFDaERDLGdCQUFnQjtRQUNkLHFCQUVFLG9CQUFDQywyQkFDQyxvQkFBQ0MsWUFBRztJQU1WO0lBRUEsT0FBT0MsTUFBTUMsZUFBUyxDQUFDO0lBRXZCLE9BQU9DLE9BQU9DLGlCQUFVLENBQUM7SUFFekIsT0FBT0MsUUFBUSxTQUFTO0lBRXhCLE9BQU9DLG9CQUFvQjtRQUN6QkMsV0FBVztJQUNiLEVBQUU7QUFDSiJ9