"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SectionsArticle;
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
class SectionsArticle extends _article.default {
    childElements() {
        return /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("h1", null, "Sections"));
    }
    static uri = _uris.sectionsURI;
    static path = _paths.sectionsPath;
    static title = "Sections";
    static defaultProperties = {
        className: "sections"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2FydGljbGUvc2VjdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBcnRpY2xlIGZyb20gXCIuLi9hcnRpY2xlXCI7XG5cbmltcG9ydCB7IHNlY3Rpb25zVVJJIH0gZnJvbSBcIi4uL3VyaXNcIjtcbmltcG9ydCB7IHNlY3Rpb25zUGF0aCB9IGZyb20gXCIuLi9wYXRoc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uc0FydGljbGUgZXh0ZW5kcyBBcnRpY2xlIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+XG4gICAgICAgICAgU2VjdGlvbnNcbiAgICAgICAgPC9oMT5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyB1cmkgPSBzZWN0aW9uc1VSSTtcblxuICBzdGF0aWMgcGF0aCA9IHNlY3Rpb25zUGF0aDtcblxuICBzdGF0aWMgdGl0bGUgPSBcIlNlY3Rpb25zXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJzZWN0aW9uc1wiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiU2VjdGlvbnNBcnRpY2xlIiwiQXJ0aWNsZSIsImNoaWxkRWxlbWVudHMiLCJkaXYiLCJoMSIsInVyaSIsInNlY3Rpb25zVVJJIiwicGF0aCIsInNlY3Rpb25zUGF0aCIsInRpdGxlIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBcUJBOzs7Z0VBTEQ7c0JBRVE7dUJBQ0M7Ozs7OztBQUVkLE1BQU1BLHdCQUF3QkMsZ0JBQU87SUFDbERDLGdCQUFnQjtRQUNkLHFCQUVFLG9CQUFDQywyQkFDQyxvQkFBQ0MsWUFBRztJQU1WO0lBRUEsT0FBT0MsTUFBTUMsaUJBQVcsQ0FBQztJQUV6QixPQUFPQyxPQUFPQyxtQkFBWSxDQUFDO0lBRTNCLE9BQU9DLFFBQVEsV0FBVztJQUUxQixPQUFPQyxvQkFBb0I7UUFDekJDLFdBQVc7SUFDYixFQUFFO0FBQ0oifQ==